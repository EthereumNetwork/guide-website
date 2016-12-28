<template>
  <div>
    <div>
      <p>until now the dapp list is just an array on the client side, I want to connect a MongoDB sever-side and fill it up...</p>
      <p>use the search bar to filter dapps</p>
    </div>
    <ul>
      <dapp-item v-for="dapp in filteredDapps" v-bind:dapp="dapp"></dapp-item>
    </ul>
  </div>
</template>



<script>

import DappItem from './components/DappItem.vue'

export default {
  name: 'app',
  props: ['searchField'],
  data () {
    return {
      dappList: [
        // static array for testing, get dapp list from server: https://www.npmjs.com/package/vue-async-computed
        { title: 'Golem', description: 'Golem is great' },
        { title: 'Augur', description: 'Augur is a prediction market'  },
        { title: 'Whatever else Ethereum can do', description: 'Ethereum is the new kid on the block'  }
      ]
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
