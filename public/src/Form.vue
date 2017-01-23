<template>
  <div>
    <v-alert hide-icon success dismissible v-model="alert">
      Dapp saved successfully!
    </v-alert>
    <v-alert hide-icon error dismissible v-model="error">
      Error saving dapp!
    </v-alert>
    <v-container fluid>
      <v-row>
        <v-text-input label="Title" id="title" name="title" v-model="title"  ></v-text-input>
        <v-text-input label="Owner" id="owner" name="owner" v-model="owner" ></v-text-input>
        <v-text-input label="Latest News" id="latestNews" name="latestNews" v-model="latestNews"></v-text-input>
        <v-text-input label="Description" id="description" name="description" v-model="description"></v-text-input>
        <v-text-input label="Logo Url" id="logoUrl" name="logoUrl" v-model="logoUrl"></v-text-input>
        <v-text-input label="Github" id="github" name="github" v-model="github"></v-text-input>
        <v-text-input label="Website" id="website" name="website" v-model="website"></v-text-input>
        <v-text-input label="Twitter" id="twitter" name="twitter" v-model="twitter"></v-text-input>
        <v-text-input label="Facebook" id="facebook" name="facebook" v-model="facebook"></v-text-input>
        <v-text-input label="Slack" id="slack" name="slack" v-model="slack"></v-text-input>
        <v-text-input label="Reddit" id="reddit" name="reddit" v-model="reddit"></v-text-input>
      </v-row>
        <p>For now everyone can add projects, but authentication is in the works</p>
        <v-btn success v-on:click.native="filterClick()" v-if="!IsProgress">Save Dapp</v-btn>
        <v-btn v-if="IsProgress"><v-progress-circular class="green--text" indeterminate></v-progress-circular>Progressing..</v-btn>

        <v-btn>
        <router-link to="/dapps">
        Back to dapp list
        </router-link>
        </v-btn>



    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'dappForm',
    data () {
      return {
        title: '',
        owner: '',
        description: '',
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
    methods: {
      filterClick: function () {
        var datato = {
          title: this.title,
          owner: this.owner,
          description: this.description,
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
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(datato)
        })
        .then((response) => { return response.json() })
        .then((data) => {
          data.result ? this.alert = true : this.error = true
          this.IsProgress = false
        })
      }
    }
  }

</script>
<style>
</style>
