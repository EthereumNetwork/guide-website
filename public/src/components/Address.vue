<template>
  <v-container fluid grid-list>
    <v-layout row wrap>

      <v-flex md4 xs12>
      <v-card>
        <v-card-title class="subheading">Address Information</v-card-title>
      <v-data-table
          v-bind:headers = "infoHeaders"
          v-bind:items = "addressInformation"
          class="elevation-1"
          hide-headers
          hide-actions
        >
          <template slot="items" slot-scope="props">
            <td>{{props.item.name}}</td>
            <td>{{props.item.description}}</td>
          </template>
        </v-data-table>
      </v-card>
    </v-flex>
    <v-flex md4 offset-md1>
    <v-card>
      <v-card-title class="subheading">Token Information</v-card-title>
    <v-data-table
      v-bind:headers = "tokenHeaders"
      v-bind:items = "tokenData"
      class="elevation-1"
      hide-actions
      hide-headers
    >
    <template slot="items" slot-scope="props">
      <td>{{props.item.name}}</td>
      <td>{{props.item.description}}</td>
    </template>
  </v-data-table>
</v-card>
</v-flex>
<v-flex md1 offset-md1>
  <v-card-media>
    <VueQrcode class="qrcode" id="tdsfgdsfgs" :text="this.$route.params.id" :size="128"></VueQrcode>
  </v-card-media>
</v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-btn block color="info" @click='toggleTransactions()'>Toggle transactions</v-btn>
  </v-layout>
  <v-layout row wrap>
    <v-alert type="error" v-model="fetchAlert" dismissible>Unable to fetch data from remote server, please try later or contact webmaster</v-alert>
  </v-layout>

    <v-layout row wrap v-if="loadTransactions">
      <v-data-table
          v-bind:headers = "transactionHeaders"
          v-bind:items = "transactionList"
          class="elevation-1"
        >
          <template slot="items" slot-scope="props">
            <td><router-link :to="'/address/' + props.item.from">{{props.item.from.slice(0,30)}}...</router-link></td>
            <td><router-link :to="'/address/' + props.item.to">{{props.item.to.slice(0,30)}}...</router-link></td>
            <td>{{props.item.value.toPrecision(6)}} Ether (${{Math.round(props.item.value/1e16*price.USD)/100}})</td>
            <td><router-link :to="'/tx/' + props.item.hash"><v-icon medium color="blue">info</v-icon></router-link></td>
          </template>
        </v-data-table>
    </v-layout>

    <div class="comments">
      <VueDisqus shortname="ethereumnetwork" :identifier="$route.path" :url="'https://ethereum.network' + $route.path"></VueDisqus>
    </div>
  </v-container>
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
      totalPrice: 0,
      infoHeaders: [
        {text: 'Position', value: 'name', sortable: false, align: 'left'},
        {text: 'Value', value: 'description', sortable: false, align: 'left'},
      ],
      transactionHeaders: [
        {text: 'From', value: 'from', sortable: false, align: 'left'},
        {text: 'To', value: 'to', sortable: false, align: 'left'},
        {text: 'Value', value: 'value', sortable: true, align: 'left'},
        {text: 'Info', value: 'info', sortable: false, align: 'left'},
      ],
      transactionList: [],
      addressInformation: [],
      tokenHeaders: [
        {text: 'Name', value: 'name', sortable: false, align: 'left'},
        {text: 'Value', value: 'description', sortable: false, align: 'left'}
      ],
      tokenData: [],
      loadTransactions: false,
      fetchAlert: false
    }
  },
  methods: {
    getTransactionData: function() {
      return new Promise ((resolve,reject) => {
        fetch('https://api.ethplorer.io/getAddressTransactions/'+ this.$route.params.id +'?apiKey=freekey&limit=20')
        .then((response) => {
            return response.json() })
        .then((transactionList) => {
          this.transactionList = transactionList;
          if (Array.isArray(transactionList)) {
            resolve(true);
          } else {
            resolve(false);
          }
         })
      });
    },

    toggleTransactions: function() {
      if (this.loadTransactions===false){
        this.getTransactionData()
          .then((success) => {
            if (success){
              this.loadTransactions = true;
            } else {
              this.loadTransactions = false;
              this.fetchAlert = true;
              console.log('Unable fo tetch transactions from remote server');
            }
          })

      } else {
        this.loadTransactions = false;
      }
    }
  },

  beforeCreate () {
    fetch('/api/balance/' + this.$route.params.id)
    .then((response) => { return response.json() })
    .then((balance) => {
      this.balance = balance
    })
    .then(() => {
      fetch('https://api.ethplorer.io/getAddressInfo/'+ this.$route.params.id +'?apiKey=freekey')
      .then((response) => {
        return response.json() })
      .then((data) => {
        this.addressInformation = [
          {name: 'Address', description: data['address']},
          {name: 'Balance', description: data['ETH']['balance']+ ' Ether ' + ' $' + Math.round(this.balance/1e16*this.price.USD)/100},
          {name: 'Total in', description: data['ETH']['totalIn']},
          {name: 'Total out', description: data['ETH']['totalOut']},
        ];
        if (Array.isArray(data['tokens']) && data['tokens'].length >=1) {
          console.log('tokens is an Array, and length is >=1');
          data['tokens'].forEach((element) => {
            let pos = {name: element.tokenInfo.name, description: element.balance}
            this.tokenData.push(pos);
          });
        }
       })
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
