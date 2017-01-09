<script src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
<template>
<v-container fluid>
  <v-row>

    <v-col xs12 sm6 md4 lg12>
    <a href="https://twitter.com/EthereumPress" class="twitter-follow-button" data-show-count="false">Follow @EthereumPress</a>
    <a class="twitter-timeline" href="https://twitter.com/EthereumPress">Tweets by EthereumPress</a>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  export default {
    name: 'twitter',
    beforeCreate () {
    //Load twitter script
      $.getScript('//platform.twitter.com/widgets.js');
    }
  }
</script>
