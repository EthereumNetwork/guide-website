<template>
  <div>
    <p>{{ transactionList }}</p>
    <!-- <table>
      <thead>
        <tr>
          <th></th>
          <th v-for="header in headers" v-text="header"></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in items">
          <tr>
            <td v-for="data in item" v-text="data"></td>
            <td>
              <v-btn icon="icon">
                <v-icon>edit</v-icon>
              </v-btn>
            </td>
          </tr>
        </template>
      </tbody>
    </table> -->
  </div>
</template>

<script>
export default {
  name: 'block',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer is in the works...',
      transactionList: 0
    }
  },

  beforeCreate () {
    if (this.$route.query.address) {
      console.log('address')
      fetch('/api/txs/' + this.$route.query.address)
      .then((response) => { return response.json() })
      .then((transactionList) => {
        this.transactionList = transactionList
      })
    } else {
      console.log('block or pending')
      let blockId = this.$route.query.block || 'pending'
      fetch('/api/block/' + blockId)
      .then((response) => { return response.json() })
      .then((blockData) => {
        this.transactionList = blockData.transactions
      })
    }
  }
}
</script>
