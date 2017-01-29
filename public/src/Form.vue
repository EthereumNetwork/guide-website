<template>
  <div>
    <v-alert hide-icon success dismissible v-model="alert">
      Dapp saved successfully!
    </v-alert>
    <v-alert hide-icon error dismissible v-model="error">
      Error saving dapp! Are you logged in?
    </v-alert>
    <v-container fluid>
      <v-row>
        <v-text-input label="Title" id="title" name="title" v-model="title"  ></v-text-input>
        <v-text-input label="Short description" id="shortDescription" name="shortDescription" v-model="shortDescription"></v-text-input>
        <v-text-input label="Long description" id="longDescription" name="longDescription" v-model="longDescription"></v-text-input>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Logo Url" id="logoUrl" name="logoUrl" v-model="logoUrl"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Latest News" id="latestNews" name="latestNews" v-model="latestNews"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Github" id="github" name="github" v-model="github"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Website" id="website" name="website" v-model="website"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Twitter" id="twitter" name="twitter" v-model="twitter"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Facebook" id="facebook" name="facebook" v-model="facebook"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Reddit" id="reddit" name="reddit" v-model="reddit"></v-text-input>
        </v-col>
        <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
          <v-text-input label="Slack" id="slack" name="slack" v-model="slack"></v-text-input>
        </v-col>
      </v-row>
        <p>You need to be logged in to submit projects. You are <v-chip v-if="!token">not</v-chip> logged in.</p>
        <v-btn success v-on:click.native="submit()" v-if="!IsProgress">Save Dapp</v-btn>
        <v-btn v-if="IsProgress"><v-progress-circular class="green--text" indeterminate></v-progress-circular>Progressing..</v-btn>



    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'dappForm',
    data () {
      return {
        title: '',
        shortDescription: '',
        longDescription: '',
        latestNews: '',
        logoUrl: '',
        github: '',
        website: '',
        twitter: '',
        facebook: '',
        slack: '',
        UserName: '',
        Like: false,
        reddit: '',
        IsProgress: false,
        activeColor: 'Red',
        msg: 'Dapps Form',
        alert: false,
        error: false
      }
    },
    computed: {
      token () {
        return this.$store.state.token
      }
    },
    methods: {
      submit: function () {
        let token = this.$store.state.token
        let dataToSend = {
          title: this.title,
          shortDescription: this.shortDescription,
          longDescription: this.longDescription,
          latestNews: this.latestNews,
          logoUrl: this.logoUrl,
          github: this.github,
          website: this.website,
          twitter: this.twitter,
          slack: this.slack,
          UserName: this.UserName,
          Like: this.Like,
          facebook: this.facebook,
          reddit: this.reddit
        }
        fetch(('/api/savedapps'), {
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
      }
    }
  }

</script>
<style>
</style>
