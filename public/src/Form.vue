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
        <v-text-input label="Owner" id="Owner" name="Owner" v-model="Owner" ></v-text-input>
        <v-text-input label="Latest News" id="LatestNews" name="LatestNews" v-model="LatestNews"></v-text-input>
        <v-text-input label="Description" id="description" name="description" v-model="description"></v-text-input>
        <v-text-input label="Logo Url" id="logoUrl" name="logoUrl" v-model="logoUrl"></v-text-input>
        <v-text-input label="Github" id="Github" name="Github" v-model="Github"></v-text-input>
        <v-text-input label="Website" id="Website" name="Website" v-model="Website"></v-text-input>
        <v-text-input label="Twitter" id="Twitter" name="Twitter" v-model="Twitter"></v-text-input>
        <v-text-input label="Facebook" id="Facebook" name="Facebook" v-model="Facebook"></v-text-input>
        <v-text-input label="Slack" id="Slack" name="Slack" v-model="Slack"></v-text-input>
        <v-text-input label="Reddit" id="Reddit" name="Reddit" v-model="Reddit"></v-text-input>
      </v-row>
        <p>For now everyone can add projects, but authentication is in the works</p>
        <v-btn success v-on:click.native="filterClick()" v-if="!IsProgress">Save Dapp</v-btn>
        <v-btn v-if="IsProgress"><v-progress-circular class="green--text" indeterminate></v-progress-circular>Progressing..</v-btn>

        <v-btn>
        <router-link to="/Dapps">
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
        title:'',
        Owner:'',
        LatestNews:'',
        logoUrl: '',
        Github:'',
        Website:'',
        Twitter:'',
        Facebook:'',
        Slack:'',
        UserName:'',
        description:'',
        Like:false,
        Reddit:'',
        IsProgress:false,
        activeColor:'Red',
        msg:"Dapps Form",
        alert: false,
        error: false
      }
    },
    methods: {
      filterClick: function () {
        var that = this;
        var datato = {
          title:this.title,
          Owner:this.Owner,
          LatestNews:this.LatestNews,
          logoUrl: this.logoUrl,
          Github:this.Github,
          Website:this.Website,
          Twitter:this.Twitter,
          Slack:this.Slack,
          UserName:this.UserName,
          Like:this.Like,
          Facebook: this.Facebook,
          Reddit:this.Reddit,
          Description:this.description
        };

        fetch((serverUrl + '/api/savedapps'), {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(datato)
        })
        .then((response) => { return response.json(); })
        .then((data) => {
          data.result ? this.alert = true : this.error = true;
          this.IsProgress=false;
         });
      }
    },
  }

</script>
<style>
</style>
