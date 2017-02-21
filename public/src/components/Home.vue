<template>
  <v-row>
    <v-col xs12 sm12 md12 lg6>
      <p>I'm in the progress of building out the website, that's why everything is still ugly (I'm not very good with styling), empty (still getting all the content ready) and slow (running on tiny test servers). If you have time and ideas, <a href="https://github.com/EthereumNetwork/guide-website/issues">any help or found bugs</a> will be greatly appriciated.<br> The plan for this landing page is a search bar to look up addresses, transactions, contracts, but also projects and articles. And to show some featured projects and the news of the day. Until that's all finished, you can already check out how the different parts come to fruition with the links above.</p>
    </v-col>
    <v-col xs12 sm8 md6 lg4>
    <a class="twitter-timeline" data-show-count="true" data-show-screen-name="false" href="https://twitter.com/EthereumPress"></a>
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
