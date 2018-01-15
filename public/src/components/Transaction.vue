<template>
  <v-container fluid grid-list>
    <h2>Transaction: {{this.$route.params.id}}</h2>
    <VueQrcode class="qrcode" id="tdsfgdsfgs" :text="this.$route.params.id" :size="128"></VueQrcode>
    <p>I'm still building up an address-transaction database inlcluding the pending transactions. Until then, old transactions are coming from <a href="https://etherscan.io/">Etherscan</a> (They are awesome), but new transactions should show up here in realtime...</p>

    <v-data-table
      v-bind:headers = "headers"
      v-bind:items = "blockData"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{props.item.name}}</td>
        <td>{{props.item.description}}</td>
      </template>

    </v-data-table>
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
      headers: [
        {text: 'Position', value: 'name', sortable: false, align: 'left'},
        {text: 'Value', value: 'descritpion', sortable: false, align: 'left'}
      ],
      blockData: []

    }
  },
  beforeCreate () {
    fetch('https://api.ethplorer.io/getTxInfo/' + this.$route.params.id+'?apiKey=freekey')
    .then((response) => { return response.json() })
    .then((data) => {
      Object.entries(data).forEach( (value, index, array) => {
        switch (value[0]) {
            case 'timestamp':
            var date = new Date(value[1]*1000);
            value[1] = date.toDateString();
            break;
            case 'value':
            value[1] = value[1] + ' ETHER';
            break;
        }

        let formatedField = value[0][0].toUpperCase() + value[0].slice(1);

        let element = {
		      name: formatedField,
		      description: value[1]
	      };
	    this.blockData.push(element);
      });
    })
  },

  components: {
    VueQrcode,
    VueDisqus
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
