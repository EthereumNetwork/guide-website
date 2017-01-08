<template>
<v-list-item>
    <v-list-item-avatar class="dapp-listitem-color" large>description</v-list-item-avatar>
    <v-list-item-title>
      <span>{{dapp.title}}</span>
      <v-list-item-sub-title>{{dapp.description}}</v-list-item-sub-title>
      <v-card v-if="dapp.IsShowContact">
        <v-card-text>
         <a v-bind:href="dapp.website" v-if="dapp.website!=''"><img src="../components/website.png" /></a>
         <a v-bind:href="dapp.github" v-if="dapp.github!=''"><img src="../components/github.png" /></a>
         <a v-bind:href="dapp.slack" v-if="dapp.slack!=''"><img src="../components/slack.png" /></a>
         <a v-bind:href="dapp.reddit" v-if="dapp.reddit!=''"><img src="../components/reddit.png" /></a>
         <a v-bind:href="dapp.twitter" v-if="dapp.twitter!=''"><img src="../components/twitter.png" /></a>
        </v-card-text>
      </v-card>


    </v-list-item-title>




</v-list-item>


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
