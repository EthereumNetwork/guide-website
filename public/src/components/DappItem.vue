<template>
  <v-card >
    <v-card-row>
      <v-list-item-avatar class="dapp-listitem-color" large>description</v-list-item-avatar>
      <v-card-text>
        <v-list-item-title>
          {{dapp.title}}
        </v-list-item-title>
        <p>{{dapp.description}}</p>
        <a v-bind:href="dapp.contact.website" v-if="dapp.contact.website"><i class="fa fa-link fa-2x dapp-link"></a>
        <a v-bind:href="dapp.contact.github" v-if="dapp.contact.github"><i class="fa fa-github fa-2x dapp-link"></i></a>
        <a v-bind:href="dapp.contact.twitter" v-if="dapp.contact.twitter"><i class="fa fa-twitter fa-2x dapp-link"></a>
        <a v-bind:href="dapp.contact.facebook" v-if="dapp.contact.facebook"><i class="fa fa-facebook fa-2x dapp-link"></a>
        <a v-bind:href="dapp.contact.slack" v-if="dapp.contact.slack"><i class="fa fa-slack fa-2x dapp-link"></a>
        <a v-bind:href="dapp.contact.reddit" v-if="dapp.contact.reddit"><i class="fa fa-reddit fa-2x dapp-link"></a>
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
