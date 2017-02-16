<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col xs12>
          <v-text-input label="Title" id="title" name="title" v-model="project.title"  ></v-text-input>
        </v-col>
        <v-col xs12>
          <v-text-input label="Short description" id="shortDescription" name="shortDescription" v-model="project.shortDescription"></v-text-input>
        </v-col>
        <v-col xs12>
          <textarea :value="project.longDescription" @input="update"></textarea>
          <div v-html="compiledMarkdown"></div>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Logo Url" id="logoUrl" name="logoUrl" v-model="project.logoUrl"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Latest News" id="latestNews" name="latestNews" v-model="project.latestNews"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Github" id="github" name="github" v-model="project.contact.github"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Website" id="website" name="website" v-model="project.contact.website"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Twitter" id="twitter" name="twitter" v-model="project.contact.twitter"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Facebook" id="facebook" name="facebook" v-model="project.contact.facebook"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Reddit" id="reddit" name="reddit" v-model="project.contact.reddit"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Slack" id="slack" name="slack" v-model="project.contact.slack"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Email" id="email" name="email" v-model="project.contact.email"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Blog" id="blog" name="blog" v-model="project.contact.blog"></v-text-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs3>
          <v-btn success v-on:click.native="submit()" v-if="!IsProgress">Save</v-btn>
        </v-col>
        <v-col xs9>
          <v-alert v-if="alert" hide-icon success dismissible v-model="alert">
            Project saved successfully!
          </v-alert>
          <v-alert v-if="error" hide-icon error dismissible v-model="error">
            Error saving project! Are you logged in?
          </v-alert>
          <div v-if="token">You are logged in and can update projects.</div>
          <div v-else>You need to be logged in to submit projects.</div>
          <div v-if="project._id">editing: {{project.title}}, {{project._id}}, last edited by {{project.creator}}</div>
          <v-btn small v-if="IsProgress"><v-progress-circular class="green--text" indeterminate></v-progress-circular>Progressing..</v-btn>
        </v-col>
      </v-row>
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
        return marked(this.project.longDescription || '', { sanitize: true })
      }
    },
    methods: {

      submit: function () {
        let token = this.$store.state.token
        fetch(('/api/saveprojects'), {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': ('JWT ' + token)
          },
          body: JSON.stringify(this.project)
        })
        .then((response) => { return response.json() })
        .then((data) => {
          data.result ? this.alert = true : this.error = true
          this.IsProgress = false
        })
        .catch((error) => {
          if (error) { this.error = true }
        })
      },

      update: function (e) {
        this.project.longDescription = e.target.value
      }

    }
  }

</script>
<style>
  textarea {
      display:inline-block;
      border: solid 1px #000;
      min-height:100px;
      width: 99%;
  }
  img[alt=projectImage] { width: 250px; }
</style>
