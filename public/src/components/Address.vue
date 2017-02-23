<template>
  <div>
    <VueQrcode class="qrcode" id="tdsfgdsfgs" :text="this.$route.params.id"></VueQrcode>
    <p>This page doesn't show old transactions yet, as I'm still building up an address-transaction database, but new transactions to or from this address should show up as they come in.</p>
    <p>{{ blockData }}</p>
  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode-component'
export default {
  name: 'block',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer is in the works...',
      blockData: 0
    }
  },

  beforeCreate () {
    fetch('/api/block/' + this.$route.params.id)
    .then((response) => { return response.json() })
    .then((blockData) => {
      this.blockData = blockData
    })
    // this.$socket.on(this.$route.params.id, (transaction) => {
    //   this.blockNumber = blockData.number
    //   this.transactionList = blockData.transactions.concat(this.transactionList).slice(0, 200)
    // })
  },
  components: {
    VueQrcode: VueQrcode
  }
}
</script>
