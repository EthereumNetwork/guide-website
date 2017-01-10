<template>
  <v-container fluid>
    <v-row>
      <v-col lg12>
          <v-list>
            <dapp-item v-for="dapp in filteredDapps" v-bind:dapp="dapp"></dapp-item>
          </v-list>
      </v-col>
    </v-row>

    <v-btn>
    <router-link to="/Form">
    Add new Dapp
    </router-link>
    </v-btn>


  </v-container>
</template>

<script>
  import DappItem from './components/DappItem.vue'
  export default {
    name: 'app',
    props: ['searchField'],
    data () {
      return {
        dappList: [{
          title:'No dapp data found',
          description:'please refresh the page to get the newest dapp data',
          contact: {}
        }]
      }
    },
    beforeCreate () {
      var that = this;
      $.ajax({
        url: serverUrl+'/api/dapps',
        type: 'Get',
        success: function(data) {
          if (data) {
            console.log('data received: ', data);
            that.dappList = data;
          }
        }
      });
    },
    computed: {
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
  .dapp-listitem-color {
    background-color: #b59f9f!important;
    border-color: #b59f9f!important;
  }
</style>
