<template>
  <div>
    <v-layout>
      <v-flex xs3>
          Height:<br>
          TimeStamp:<br>
          Hash:<br>
          Parent Hash:<br>
          Sha3Uncles:<br>
          Mined By:<br>
          Difficulty:<br>
          Total Difficulty:<br>
          Size:<br>
          Gas Limit:<br>
          Gas Used:<br>
          Nonce:<br>
          Extra Data:<br>
    </v-flex>
    <v-flex xs9>
      {{$route.params.id}}<br>
      {{ new Date(blockData.timestamp*1000).toString() }}<br>
      {{ blockData.hash }}<br>
      {{ blockData.parentHash }}<br>
      {{ blockData.sha3Uncles }}<br>
      {{ blockData.miner }}<br>
      {{ blockData.difficulty }}<br>
      {{ blockData.totalDifficulty }}<br>
      {{ blockData.size }} bytes<br>
      {{ blockData.gasLimit }}<br>
      {{ blockData.gasUsed }}<br>
      {{ blockData.nonce }}<br>
      {{ blockData.extraData }}<br>
    </v-flex>
  </v-layout>
    <p>Transactions:</p>
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" v-text="header"></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="tx in blockData.transactions">
          <tr>
            <td><router-link :to="'/address/' + tx.from">{{tx.from.slice(0,10)}}...</router-link></td>
            <td><router-link :to="'/address/' + tx.to">{{tx.to.slice(0,10)}}...</router-link></td>
            <td><router-link :to="'/tx/' + tx.hash">{{Math.round(tx.value/1e10)/1e8}} Ether</router-link> (${{Math.round(tx.value/1e16*price.USD)/100}})</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'block',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer is in the works...',
      blockData: {},
      headers: ['from', 'to', 'value']
    }
  },
  beforeCreate () {
    fetch('/api/block/' + this.$route.params.id)
    .then((response) => { return response.json() })
    .then((blockData) => {
      this.blockData = blockData
    })
  },
  computed: {
    price: function () {
      return this.$store.state.price
    }
  }
}
</script>
