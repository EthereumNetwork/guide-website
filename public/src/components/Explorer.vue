<template>
  <div>
    <p>{{ msg }}</p>
    <p>then you will be able to use the search bar to look up addresses, txIDs and other smart contract properties</p>
    <p>the current block number is <router-link :to="'/block/' + blockData.number">{{blockData.number}}</router-link> and the latest transactions are: </p>
    <ul>
      <li v-for="tx in blockData.transactions">
        <router-link :to="'/tx/' + tx.hash">{{tx.hash}}</router-link>
      </li>
    </ul>
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

  beforeCreate () {
    fetch('/api/block/pending')
    .then((response) => { return response.json() })
    .then((blockData) => {
      this.blockData = blockData
    })
  }
}
</script>
