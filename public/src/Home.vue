<template>
  <v-row>
    <v-col xs12 sm12 md12 lg6>
      <p>I'm in the progress of building out the website, that's why everything is still ugly and empty. <br> This landing page will a not have much, mainly a search to look up addresses, transactions, contracts, but also projects and articles. Additionally we might show the news of the day as well as some featured projects. Until that's all finished, with the provided links you can check out how the different parts come to fruition, as well as already read the important Ethereum news in our twitter feed.</p>
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
