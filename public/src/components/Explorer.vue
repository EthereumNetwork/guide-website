<template>
  <div>
    <p>{{ msg }} as I'm building out the core functionalities.</p>
    <p>Once it's finished, you will be able to use the search bar to look up addresses, txIDs and other smart contract properties. In the meantime, watch transactions showing up as they get confirmed.</p>
    <p>Currently, the ether price is ${{price.USD}}, the current block number is <router-link :to="'/block/' + blockNumber">{{blockNumber}}</router-link> and the latest transactions are: </p>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" v-text="header"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="tx in transactionList">
          <tr>
            <td><router-link :to="'/address/' + tx.from">{{tx.from}}</router-link></td>
            <td><router-link :to="'/address/' + tx.to">{{tx.to}}</router-link></td>
            <td><router-link :to="'/tx/' + tx.hash">{{tx.value/1e18}} Ether</router-link> (${{Math.round(tx.value/1e16*price.USD)/100}})</td>
            <td></td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
// import * as ethUtil from 'ethereumjs-util'
export default {
  name: 'explorer',
  props: ['searchField'],
  data () {
    return {
      msg: 'The network explorer is still not fully impplemented,',
      headers: ['from', 'to', 'value'],
      blockNumber: 0,
      transactionList: []
    }
  },
  beforeCreate () {
    fetch('/api/block/pending')
    .then((response) => { return response.json() })
    .then((blockData) => {
      this.blockNumber = blockData.number
      // for (var i = 0; i < blockData.transactions.length; i++) {
      //   blockData.transactions[i].from = ethUtil.toChecksumAddress(blockData.transactions[i].from)
      //   blockData.transactions[i].to = ethUtil.toChecksumAddress(blockData.transactions[i].to)
      // }
      this.transactionList = blockData.transactions
    })
  },
  computed: {
    price: function () {
      return this.$store.state.price
    }
  },
  socket: {
    events: {
      latestTransactions (blockData) {
        this.blockNumber = blockData.number
        // for (var i = 0; i < blockData.transactions.length; i++) {
        //   blockData.transactions[i].from = ethUtil.toChecksumAddress(blockData.transactions[i].from)
        //   blockData.transactions[i].to = ethUtil.toChecksumAddress(blockData.transactions[i].to)
        // }
        this.transactionList = blockData.transactions.concat(this.transactionList).slice(0, 200)
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
