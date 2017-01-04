<template>
<div>
  <v-container fluid>
  <v-row>
  <v-col lg6 >
    <v-card class="left_card">
      <v-card-row  height="3px">
          <v-card-title><h4>{{msg}}</h4></v-card-title>
      </v-card-row>
      <v-card-text>

        <v-col lg12 >
        <v-text-input label="Title" id="Title" name="Title" v-model="Title"  ></v-text-input>
        </v-col>

        <v-col lg12 >
          <v-text-input label="Owner" id="Owner" name="Owner" v-model="Owner" ></v-text-input>
        </v-col>

        <v-col lg12 >
          <v-text-input label="Latest News" id="LatestNews" name="LatestNews" v-model="LatestNews"></v-text-input>
        </v-col>
        <v-col lg12 >
          <v-text-input label="Description" id="description" name="description" v-model="description"></v-text-input>
        </v-col>

        <v-col lg12 >
        <v-row>
            <v-col lg0 >
              <v-checkbox name="like" id="like" v-model="Like">
            </v-col>
            <v-col lg3 >
              Like Us
            </v-col>
        </v-row>
        </v-col>



      </v-card-text>
      <v-card-row actions>
          <v-btn success v-on:click.native="filterClick()" v-if="!IsProgress">Save Dapp</v-btn>
          <v-btn v-if="IsProgress"><v-progress-circular class="green--text" indeterminate></v-progress-circular>Progressing..</v-btn>
      </v-checkbox>

    </v-card-row>
  </v-card>
</v-col>




  <v-col lg6 >
      <v-card>
        <v-card-row  height="3px">
            <v-card-title>Contact</v-card-title>
        </v-card-row>
        <v-card-text>
        <v-row>
          <v-col lg12>
          <v-text-input label="User Name" id="UserName" name="UserName" v-model="UserName"></v-text-input>
          </v-col>
          <v-col lg12>
          <v-text-input label="Github" id="Github" name="Github" v-model="Github"></v-text-input>
          </v-col>
          <v-col lg12>
          <v-text-input label="Website" id="Website" name="Website" v-model="Website"></v-text-input>
          </v-col>
          <v-col lg12>
          <v-text-input label="Slack" id="Slack" name="Slack" v-model="Slack"></v-text-input>
          </v-col>
          <v-col lg12>
          <v-text-input label="Twitter" id="Twitter" name="Twitter" v-model="Twitter"></v-text-input>
          </v-col>
          <v-col lg12>
          <v-text-input label="Reddit" id="Reddit" name="Reddit" v-model="Reddit"></v-text-input>
          </v-col>

        </v-row>
        </v-card-text>

      </v-card-row>
    </v-card>
  </v-col>
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
    msg:"Dapps Form"
    }
  },
  methods: {
    filterClick: function () {
    var datato={Title:this.Title,Owner:this.Owner,LatestNews:this.LatestNews,
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

              if(data.result==1)
              {
              $('input[type="text"]').val('');
              $('input[type="checkbox"]').prop('checked',false);
              var notification = alertify.notify('Dapp Information Saved Successfully', 'success', 5, function(){  console.log('dismissed'); });
              }
              else{

              var notification = alertify.notify(data.message, 'success', 10, function(){  });
              }
              this.IsProgress=false;
              }
            });

    }
  },
}

</script>
<style>
.left_card
{
height: 420px!important;
}
.ajs-visible
{
color:white;
border-radius:5px;
}
</style>
