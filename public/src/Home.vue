<template>
  <v-row>
    <v-col xs12 sm12 md12 lg6>
      <p>I'm in the progress of building out the website, that's why everything is still ugly and empty. <br> In the meantime, you can read some Ethereum news in our twitter feed:</p>
    </v-col>
    <v-col xs12 sm8 md6 lg4>
    <a class="twitter-timeline" data-show-count="true" data-show-screen-name="false" href="https://twitter.com/EthereumPress">Tweets by EthereumPress</a>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'home',
  props: ['searchField'],
  data () {
    return {
      msg: 'the network explorer will come later...'
    }
  }
}
</script>
