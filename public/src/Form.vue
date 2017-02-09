<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-text-input label="Title" id="title" name="title" v-model="project.title"  ></v-text-input>
        <v-text-input label="Short description" id="shortDescription" name="shortDescription" v-model="project.shortDescription"></v-text-input>
        <v-col sm12>
          <textarea :value="project.longDescriptionText" @input="update"></textarea>
          <div v-html="compiledMarkdown"></div>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Logo Url" id="logoUrl" name="logoUrl" v-model="project.logoUrl"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Latest News" id="latestNews" name="latestNews" v-model="project.latestNews"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Github" id="github" name="github" v-model="project.github"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Website" id="website" name="website" v-model="project.website"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Twitter" id="twitter" name="twitter" v-model="project.twitter"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Facebook" id="facebook" name="facebook" v-model="project.facebook"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Reddit" id="reddit" name="reddit" v-model="project.reddit"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Slack" id="slack" name="slack" v-model="project.slack"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Email" id="email" name="email" v-model="project.email"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Blog" id="blog" name="blog" v-model="project.blog"></v-text-input>
        </v-col>
      </v-row>
        <p>You need to be logged in to submit projects. You are <v-chip v-if="!token">not</v-chip> logged in.</p>
        <v-btn success v-on:click.native="submit()" v-if="!IsProgress">Save Project</v-btn>
        <v-btn v-if="IsProgress"><v-progress-circular class="green--text" indeterminate></v-progress-circular>Progressing..</v-btn>
        <v-alert hide-icon success dismissible v-model="alert">
          Project saved successfully!
        </v-alert>
        <v-alert hide-icon error dismissible v-model="error">
          Error saving project! Are you logged in?
        </v-alert>



    </v-container>
  </div>
</template>

<script>
  var marked = require('marked')
  export default {
    name: 'projectForm',
    data () {
      return {
        project: this.$store.state.projectToEdit,
        IsProgress: false,
        activeColor: 'Red',
        msg: 'Projects Form',
        alert: false,
        error: false
      }
    },
    beforeCreate () {
      this.$store.state.token = this.$cookie.get('token')
    },
    computed: {
      token () {
        return this.$store.state.token
      },
      compiledMarkdown: function () {
        return marked(this.project.longDescriptionText, { sanitize: true })
      }
    },
    methods: {
      submit: function () {
        let token = this.$store.state.token
        let dataToSend = {
          title: this.project.title,
          shortDescription: this.project.shortDescription,
          longDescription: this.project.longDescriptionText,
          latestNews: this.project.latestNews,
          logoUrl: this.project.logoUrl,
          github: this.project.github,
          website: this.project.website,
          twitter: this.project.twitter,
          slack: this.project.slack,
          blog: this.project.blog,
          email: this.project.email,
          UserName: this.project.UserName,
          Like: this.project.Like,
          facebook: this.project.facebook,
          reddit: this.project.reddit
        }
        fetch(('/api/saveprojects'), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ('JWT ' + token)
          },
          body: JSON.stringify(dataToSend)
        })
        .then((response) => { return response.json() })
        .then((data) => {
          data.result ? this.alert = true : this.error = true
          this.IsProgress = false
        })
        .catch((error) => {
          this.error = true
        })
      },
      update: function (e) {
        this.project.longDescriptionText = e.target.value
      }
    }
  }

</script>
<style>
  textarea {
      display:inline-block;
      border: solid 1px #000;
      min-height:10px;
      width: 99%;
  }
</style>
