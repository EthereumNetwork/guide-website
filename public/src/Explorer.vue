<template>
  <div>
    <p>{{ msg }}</p>
    <p>then you can use the search bar to look up addresses, txIDs and other smart contract properties</p>
    <p>{{ searchField }}</p><br>
  </div>
</template>

<script>
import web3 from './web3.js'
console.log(web3.eth)

export default {
  name: 'explorer',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer will come later...'
    }
  }
}
</script>
