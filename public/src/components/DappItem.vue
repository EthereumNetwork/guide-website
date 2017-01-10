<template>
  <v-card >
    <v-card-row>
      <v-list-item-avatar class="dapp-listitem-color" large>description</v-list-item-avatar>
      <v-card-text>
        <v-list-item-title>
          {{dapp.title}}
        </v-list-item-title>
        <p>{{dapp.description}}</p>
        <a v-bind:href="dapp.contact.website" v-if="dapp.contact.website"><img src="../components/website.png" /></a>
        <a v-bind:href="dapp.contact.github" v-if="dapp.contact.github"><img src="../components/github.png" /></a>
        <a v-bind:href="dapp.contact.slack" v-if="dapp.contact.slack"><img src="../components/slack.png" /></a>
        <a v-bind:href="dapp.contact.reddit" v-if="dapp.contact.reddit"><img src="../components/reddit.png" /></a>
        <a v-bind:href="dapp.contact.twitter" v-if="dapp.contact.twitter"><img src="../components/twitter.png" /></a>
      </v-card-text>
    </v-card-row>
  </v-card>
</template>

<script>

export default {
  name: 'dapp-item',
  props: ['dapp'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
