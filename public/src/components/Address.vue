<template>
  <div>
    <h2>{{this.$route.params.id}}</h2>
    <VueQrcode class="qrcode" id="tdsfgdsfgs" :text="this.$route.params.id" :size="128"></VueQrcode>
    <p>This page doesn't show old transactions yet, as I'm still building up an address-transaction database, but new transactions to or from this address should show up as they come in.</p>
    <p>ETH balance: {{balance/1e18}} Ether (${{Math.round(balance/1e16*price.USD)/100}})</p>
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
            <td>{{tx.value}}</td>
          </tr>
        </template>
      </tbody>
    </table>
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
      balance: -0,
      headers: ['from', 'to', 'value'],
      transactionList: []
    }
  },
  beforeCreate () {
    fetch('/api/balance/' + this.$route.params.id)
    .then((response) => { return response.json() })
    .then((balance) => {
      this.balance = balance
    })
    this.$socket.on(this.$route.params.id, (transaction) => {
      console.log('got that: ', this.transactionList, transaction)
      this.transactionList.unshift(transaction)
    })
  },
  components: {
    VueQrcode: VueQrcode
  },
  computed: {
    price: function () {
      return this.$store.state.price
    }
  }
}
</script>

<style>
  .qrcode {
    float:right;
    padding: 1%;
    color: white;
  }
</style>
