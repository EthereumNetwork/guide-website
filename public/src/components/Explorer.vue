<template>
  <div>
    <p>{{ msg }}</p>
    <p>then you will be able to use the search bar to look up addresses, txIDs and other smart contract properties</p>
    <p>the current block number is <router-link :to="'/block/' + blockData.number">{{blockData.number}}</router-link> and the latest transactions are: </p>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" v-text="header"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="tx in blockData.transactions">
          <tr @click="goToTransaction(tx.hash)" class="tableItem">
            <td>{{tx.from}}</td>
            <td>{{tx.to}}</td>
            <td>{{tx.value}}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
// <!-- <router-link :to="'/tx/' + tx.hash">{{tx}}</router-link> -->
export default {
  name: 'explorer',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer is in the works...',
      headers: ['from', 'to', 'value'],
      blockData: {}
    }
  },
  //
  // beforeCreate () {
  //   fetch('/api/block/pending')
  //   .then((response) => { return response.json() })
  //   .then((blockData) => {
  //     this.blockData = blockData
  //   })
  // },
  computed: {
    transactions: function () {
      return this.transactions.concat(this.blockData.transactions) || []
    }
  },
  socket: {
    events: {
      latestTransactions (blockData) {
        console.log('socket triggered')
        this.blockData = blockData
      }
    }
  },
  methods: {
    goToTransaction: function (hash) {
      this.$router.push('/tx/' + hash)
    }
  }
}
</script>

<style>
.tableItem {
  cursor: pointer;
  cursor: hand;
}
</style>
