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
        <v-text-input label="Title" id="Title" name="Title" v-model="Title"  ></v-text-input>
        <v-text-input label="Owner" id="Owner" name="Owner" v-model="Owner" ></v-text-input>
        <v-text-input label="Latest News" id="LatestNews" name="LatestNews" v-model="LatestNews"></v-text-input>
        <v-text-input label="Description" id="description" name="description" v-model="description"></v-text-input>
        <v-text-input label="User Name" id="UserName" name="UserName" v-model="UserName"></v-text-input>
        <v-text-input label="Github" id="Github" name="Github" v-model="Github"></v-text-input>
        <v-text-input label="Website" id="Website" name="Website" v-model="Website"></v-text-input>
        <v-text-input label="Slack" id="Slack" name="Slack" v-model="Slack"></v-text-input>
        <v-text-input label="Twitter" id="Twitter" name="Twitter" v-model="Twitter"></v-text-input>
        <v-text-input label="Reddit" id="Reddit" name="Reddit" v-model="Reddit"></v-text-input>
        <v-btn success v-on:click.native="filterClick()" v-if="!IsProgress">Save Dapp</v-btn>
        <v-btn v-if="IsProgress"><v-progress-circular class="green--text" indeterminate></v-progress-circular>Progressing..</v-btn>

        <!--<router-link to="/DappList">Back To Dapp List</router-link>-->
      </v-row>
    </v-container>
  </div>
</template>

<script>

  export default {
    name: 'dappForm',
    data () {
      return {
        Title:'',
        Owner:'',
        LatestNews:'',
        Github:'',
        Website:'',
        Twitter:'',
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
          Title:this.Title,
          Owner:this.Owner,
          LatestNews:this.LatestNews,
          Github:this.Github,
          Website:this.Website,
          Twitter:this.Twitter,
          Slack:this.Slack,
          UserName:this.UserName,
          Like:this.Like,
          Reddit:this.Reddit,
          Description:this.description
        };
        $.ajax({
          url: serverUrl+'/api/savedapps',
          type: 'Post',
          data:JSON.stringify(datato),
          contentType: "application/json",
          dataType:'json',
          beforeSend: function (request) {
            this.IsProgress=true;
          },
          success: function(data) {
            if(data.result==1) {
              that.alert = true;
            } else {
              that.error = true;
            }
            this.IsProgress=false;
          }
        });
      }
    },
  }

</script>
<style>
</style>
