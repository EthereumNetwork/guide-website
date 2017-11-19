<template>
  <div>
    <h2>Transaction: {{this.$route.params.id}}</h2>
    <VueQrcode class="qrcode" id="tdsfgdsfgs" :text="this.$route.params.id" :size="128"></VueQrcode>
    <p>I'm still building up an address-transaction database inlcluding the pending transactions. Until then, old transactions are coming from <a href="https://etherscan.io/">Etherscan</a> (They are awesome), but new transactions should show up here in realtime...</p>
    
    <v-data-table
      v-bind:headers = "headers"
      v-bind:items = "blockData"
      hide-actions
      hide-headers
    >
      <template slot="items" slot-scope="props">
        <td>{{props.item.name}}</td>
        <td>{{props.item.description}}</td>
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
      headers: [
        {text: 'Position', value: 'name', sortable: false, align: 'left'},
        {text: 'Value', value: 'descritpion', sortable: false, align: 'left'}
      ],
      blockData: []         
      
    }
  },

  beforeCreate () {
    console.log('starting fetch');
    fetch('/api/tx/' + this.$route.params.id)
    .then((response) => { console.log(response); return response.json() })
    .then((data) => {
      console.log(data);
      Object.entries(data).forEach( (value, index, array) => {
	      let element = {
		      name: value[0],
		      description: value[1]
	      };
	    this.blockData.push.push(element);
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
