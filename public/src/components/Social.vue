<template>
  <v-layout wrap pa-2>
    <v-flex xs12>
      <h1>News Feeds</h1>
      <p>For the 24 most important Ethereum news of the day, follow us on your favorite social media:</p>
      <a href="https://twitter.com/EthereumNetw" target="_blank"><i class="icon-twitter-squared contact-link">Twitter</i></a><br>
      <a href="https://www.facebook.com/EthereumNetwork/" target="_blank"><i class="icon-facebook-official contact-link">Facebook</i></a><br>
      <a href="https://www.linkedin.com/company/ethereum-network" target="_blank"><i class="icon-linkedin-squared contact-link">LinkedIn</i></a>
    </v-flex>
    <v-flex xs12 class="mt-5">
        <h1>Discussion Groups</h1>
        <p>For interesting, controversial and thought-provoking discussions about Ethereum and related topics.</p>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <h2>General and more focused discussions:</h2>
      <p>
        <a href="https://www.reddit.com/r/ethereum/" target="_blank" class=""> <i class="icon-reddit contact-link">Reddit</i></a>
        <a href="https://t.me/EthereumNetwork" target="_blank" class=""> <i class="icon-telegram contact-link">Telegram</i></a>
        <a href="https://facebook.com/groups/EthereumNetwork" target="_blank" class=""> <i class="icon-facebook-official contact-link">Facebook</i></a>
      </p>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <h2>Price talks, memes and everything else:</h2>
      <p>
        <a href="https://www.reddit.com/r/ethtrader/" target="_blank" class=""> <i class="icon-reddit contact-link">Reddit</i></a>
        <a href="https://t.me/EthTrader" target="_blank" class=""> <i class="icon-telegram contact-link">Telegram</i></a>
        <a href="https://facebook.com/groups/Ethereum" target="_blank" class=""> <i class="icon-facebook-official contact-link">Facebook</i></a>
        <a href="https://matrix.to/#/#ethereum:matrix.org" target="_blank" class=""> <i class="icon-star-empty contact-link">Matrix</i></a>
      </p>
    </v-flex>
    <v-flex xs12 class="mt-5">
      <h1>Ethereum Network Development</h1>
      <p>If you want to help foster the Ethereum community as well, your help is very appreciated, either with coding / finding bugs, adding projects or any other way:</p>
      <a href="https://github.com/EthereumNetwork/guide-website" target="_blank"><i class="icon-github-squared contact-link">Github</i></a>
      <router-link to="/form"><i class="icon-ok contact-link">Add project</i></router-link>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'ChatGroups',
    data () {
      return {
        dialog: false
      }
    },
    methods: {
    }
  }

</script>
<style>
.wechat-image {
  max-width: 290px;
}
</style>
