<template>
  <v-row>
    <v-col xs12 sm12 md12 lg6>
      <p>My main goal is to offer resources for both normal users and developers to interact successfully with the Ethereum network.</p>
      <p>I'm in the progress of building out the website, that's why everything is still ugly and empty. <br> In the meantime, you can read about the important news in our twitter feed and let me know which other heloful things you would like to see here.</p>
    </v-col>
    <v-col xs12 sm8 md6 lg4>
    <a href="https://twitter.com/EthereumPress" class="twitter-follow-button" data-show-count="false">Follow @EthereumPress</a>
    <a class="twitter-timeline" href="https://twitter.com/EthereumPress">Tweets by EthereumPress</a>
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
