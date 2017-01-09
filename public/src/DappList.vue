<template>
<v-container fluid>
<!--<div>
      <p>until now the dapp list is just an array on the client side, I want to connect a MongoDB sever-side and fill it up...</p>
      <p>use the search bar to filter dapps</p>
    </div>-->

<v-row>
    <v-col lg12>
        <v-list>
          <dapp-item v-for="dapp in filteredDapps" v-bind:dapp="dapp"></dapp-item>
        </v-list>
    </v-col>
    <router-link to="/Form">Add new Dapp</router-link>
</v-row>
</v-container>
</template>



<script>

import DappItem from './components/DappItem.vue'
function demo()
{
var dappList=[];//[{ title: 'Title 1', description: 'Golem is great' },{ title: 'Augur', description: 'Augur is a prediction market'  },{ title: 'Whatever else Ethereum can do', description: 'Ethereum is the new kid on the block'  }];

$.ajax({
        url: serverUrl+'/api/dapps',
        type: 'Get',

        beforeSend: function (request) {
        },
        success: function(data) {
        var i=0;
        for(i=0;i<data.length;i++)
        {
          var d=data[i];
          var isShowContact=true;
          if(d.contact.github=='' && d.contact.website=='' && d.contact.slack==''&& d.contact.reddit=='' && d.contact.twitter=='')
          {
          isShowContact=false;

          }else{
            isShowContact=true;
          }
          dappList.push({title:d.title,description:d.description,github:d.contact.github,website:d.contact.website,slack:d.contact.slack,reddit:d.contact.reddit,twitter:d.contact.twitter,IsShowContact:isShowContact});
        }
        if(i==0)
        {
          dappList.push({title:'No dapp data found',description:'description part not implemented yet'});
        }

        }
      });


return dappList;
}

export default {
  name: 'app',
  props: ['searchField'],
  data () {
    return {

      dappList: demo()
    }
  },
  computed: {
    // A computed property that holds only those articles that match the searchField.
    filteredDapps: function () {
        var dappList_array = this.dappList,
            searchField = this.searchField;

        if(!searchField){
            return dappList_array;
        }

        searchField = searchField.trim().toLowerCase();

        dappList_array = dappList_array.filter(function(item){
            if(item.description.toLowerCase().indexOf(searchField) !== -1){
                return item;
            }
        })

        // Return an array with the filtered data.
        return dappList_array;;
    }
  },
  components: {
    DappItem
  }
}
</script>

<style>
.dapp-listitem-color
{
    background-color: #b59f9f!important;
    border-color: #b59f9f!important;
}
</style>
