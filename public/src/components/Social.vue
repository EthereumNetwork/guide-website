<template>
  <v-layout wrap pa-2>
    <v-flex xs12>
      <h1>Ethereum Network News Feeds</h1>
      <p>For the 24 most important Ethereum news of the day, follow us on your favorite social media:</p>
      <a href="https://twitter.com/EthereumNetw" target="_blank"><i class="icon-twitter-squared contact-link">Twitter</i></a><br>
      <a href="https://www.facebook.com/EthereumNetwork/" target="_blank"><i class="icon-facebook-official contact-link">Facebook</i></a><br>
      <a href="https://www.linkedin.com/company/ethereum-network" target="_blank"><i class="icon-linkedin-squared contact-link">LinkedIn</i></a>
    </v-flex>
    <v-flex xs12 class="mt-5">
        <h1>Ethereum Network Chat Groups</h1>
        <p>To receive daily Ethereum news summaries, get help for problems, or discuss any Ethereum topic in different languages, join our chat groups here:</p>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <h2>English:</h2>
      <p>
        <a href="https://t.me/EthereumNetwork" target="_blank" class=""> <i class="icon-telegram contact-link">Telegram</i></a>
        <a href="https://facebook.com/groups/112915296053162" target="_blank" class=""> <i class="icon-facebook-official contact-link">Facebook</i></a>
      </p>
    </v-flex>
      <v-flex xs12 sm6 md4>
      <h2>Spanish:</h2>
      <p>
        <a href="https://t.me/ReddeEthereum" target="_blank" class=""> <i class="icon-telegram contact-link">Telegram</i></a>
        <a href="https://www.facebook.com/groups/113343209354983" target="_blank" class=""> <i class="icon-facebook-official contact-link">Facebook</i></a>
      </p>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <h2>Chinese:</h2>
      <v-dialog v-model="dialog">
       <i class="icon-wechat contact-link" slot="activator"><span class="dialogactivator">WeChat</span></i></a>
        <v-card>
            <img src="/WechatQR.png" class="wechat-image">
          <v-card-actions>
            <v-btn flat v-on:click.native="dialog = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-flex>
    <v-flex xs12 class="mt-5">
      <h1>Ethereum Network Development</h1>
      <p>For the latest Ethereum news and updates, follow our social news feeds:</p>
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
