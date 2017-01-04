<template>
<v-list-item>
    <v-list-item-avatar class="dapp-listitem-color" large>description</v-list-item-avatar>
    <v-list-item-title>
      <span>{{dapp.title}}</span>
      <v-list-item-sub-title>{{dapp.description}}</v-list-item-sub-title>
      <v-list-item-sub-title ><i><b>{{dapp.owner}}</b></i></v-list-item-sub-title>
      <v-list-item-sub-title>
      <v-card class="dapp-listbox-color" v-if="dapp.IsShowContact">
        <v-card-row>
          <v-card-title>
          <a v-bind:href="dapp.website" v-if="dapp.website!=''"><img src="./website.png" /></a>
          &nbsp;
          <a v-bind:href="dapp.twitter" v-if="dapp.twitter!=''"><img src="./twitter.png" /></a>
          &nbsp;
          <a v-bind:href="dapp.github" v-if="dapp.github!=''"><img src="./github.png" /></a>
          &nbsp;
          <a v-bind:href="dapp.reddit" v-if="dapp.reddit!=''"><img src="./reddit.png" /></a>
          &nbsp;
          <a v-bind:href="dapp.slack" v-if="dapp.slack!=''"><img src="./slack.png" /></a>
          &nbsp;
          </v-card-title>



        </v-card-row>
      </v-card>
      </v-list-item-sub-title>
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
