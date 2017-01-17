<template>
  <v-row>
    <v-col lg12>
          <dapp-item v-for="dapp in filteredDapps" v-bind:dapp="dapp" class="dapp-listitem"></dapp-item>
    </v-col>
  </v-row>
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
      fetch(serverUrl+'/api/dapps')
      .then((response) => { return response.json(); })
      .then((data) => { this.dappList = data; });
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
.dapp-listitem {
  margin-bottom: 10px;
  margin-right: 10px;
}
</style>
