<template>
  <v-row>
    <dapp-item v-for="dapp in filteredDapps" v-bind:dapp="dapp"></dapp-item>
  </v-row>
</template>

<script>
  import DappItem from './components/DappItem.vue'
  export default {
    name: 'dappList',
    props: ['searchField'],
    data () {
      return {
        dappList: [{
          title: 'No dapp data found',
          description: 'please refresh the page to get the newest dapp data',
          contact: {}
        }]
      }
    },

    beforeCreate () {
      fetch('/api/dapps')
      .then((response) => { return response.json() })
      .then((data) => { this.dappList = data })
    },

    computed: {
      filteredDapps: function () {
        let dappListArray = this.dappList
        let searchField = this.searchField

        if (!searchField) {
          return dappListArray
        }

        searchField = searchField.trim().toLowerCase()
        dappListArray = dappListArray.filter(function (item) {
          if (item.longDescription.toLowerCase().indexOf(searchField) !== -1) {
            return item
          }
        })

        return dappListArray
      }
    },

    components: {
      DappItem
    }
  }
</script>

<style>
</style>
