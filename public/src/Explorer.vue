<template>
  <div>
    <p>{{ msg }}</p>
    <p>then you can use the search bar to look up addresses, txIDs and other smart contract properties</p>
    <p>the current block number is {{blockNumber}}</p>
  </div>
</template>

<script>
export default {
  name: 'explorer',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer is in the works...',
      blockNumber: 0
    }
  },

  beforeCreate () {
    fetch('/api/blocknumber')
    .then((response) => { return response.json() })
    .then((data) => { this.blockNumber = data })
  },
}
</script>
