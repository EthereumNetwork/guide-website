<template>
  <div>
    <p>{{ msg }}</p>
    <p>then you will be able to use the search bar to look up addresses, txIDs and other smart contract properties</p>
    <p>the current block number is <router-link :to="'/block/' + blockData.number">{{blockData.number}}</router-link> and the latest transactions are: </p>
    <ul>
      <li v-for="tx in blockData.transactions">
        txHash: <router-link :to="'/tx/' + tx">{{tx}}</router-link>
      </li>
    </ul>
    {{blockData}}
  </div>
</template>

<script>
export default {
  name: 'explorer',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer is in the works...',
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
  }
}
</script>
