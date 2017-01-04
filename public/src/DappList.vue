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
          console.log(d);
          var IsShowContact=true;
          if(d.contact.github=='' && d.contact.slack=='' && d.contact.website=='' && d.contact.twitter=='' && d.contact.reddit=='')
          {
              IsShowContact=false;
          }
          dappList.push({title:d.title,description:d.description,owner:d.owner,github:d.contact.github,website:d.contact.website,slack:d.contact.slack,twitter:d.contact.twitter,reddit:d.contact.reddit,IsShowContact:IsShowContact});
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
.dapp-listbox-color
{
background-color: white!important;
border-color: white!important;
}

</style>
