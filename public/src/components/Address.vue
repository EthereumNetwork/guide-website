<template>
  <div>
    <h2>{{this.$route.params.id}}</h2>
    <VueQrcode class="qrcode" id="tdsfgdsfgs" :text="this.$route.params.id" :size="128"></VueQrcode>
    <p>I'm still building up an address-transaction database including the pending transactions. Until then, old transactions are coming from <a href="https://etherscan.io/">Etherscan</a> (They are awesome), but new transactions should show up here in realtime...</p>
    <p>ETH balance: {{balance/1e18}} Ether (${{Math.round(balance/1e16*price.USD)/100}})</p>
    <v-data-table
      v-bind:headers = "headers"
      v-bind:items = "transactionList"
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td><router-link :to="'/address/' + props.item.from">{{props.item.from.slice(0,10)}}...</router-link></td>
      <td><router-link :to="'/address/' + props.item.to">{{props.item.to.slice(0,10)}}...</router-link></td>
      <td><router-link :to="'/tx/' + props.item.hash">{{Math.round(props.item.value/1e10)/1e8}} Ether</router-link> (${{Math.round(props.item.value/1e16*price.USD)/100}})</td>
    </template>
    </v-data-table>
    <div class="comments">
      <VueDisqus shortname="ethereumnetwork" :identifier="$route.path" :url="'https://ethereum.network' + $route.path"></VueDisqus>
    </div>
  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode-component'
import VueDisqus from 'vue-disqus/VueDisqus.vue'
export default {
  name: 'block',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer is in the works...',
      balance: -0,
      headers: [
        {text: 'From', value: 'from', sortable: false, align: 'left'},
        {text: 'To', value: 'to', sortable: false, align: 'left'},
        {text: 'Value', value: 'value', sortable: true, align: 'left'},
      ],
      transactionList: []
    }
  },
  beforeCreate () {
    fetch('/api/balance/' + this.$route.params.id)
    .then((response) => { return response.json() })
    .then((balance) => {
      this.balance = balance
    })
    fetch('https://api.etherscan.io/api?module=account&action=txlist&sort=desc&address=' + this.$route.params.id)
    .then((response) => { return response.json() })
    .then((transactionList) => {
      this.transactionList = transactionList.result
    })
  },
  mounted () {
    this.$store.state.dsClient.event.subscribe('pending/' + this.$route.params.id, (txData) => {
      this.transactionList.unshift(txData)
      this.transactionList = this.transactionList.slice(0, 50)

    })
  },
  components: {
    VueQrcode,
    VueDisqus
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
