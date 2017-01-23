<template>
  <v-col xs12, sm12, md6, lg4, xl4 ma-1>
    <v-card>
      <v-card-row class="indigo dappcard-title">
        <v-card-title>
          <span>{{dapp.title}}</span>

          <v-spacer></v-spacer>
          <!-- <div>
            <v-btn icon="icon" v-bind:v-dropdown="dapp.title" class="white--text">
              <i class="fa fa-ellipsis-v"></i>
            </v-btn>
            <v-dropdown v-bind:id="dapp.title" top right origin="top right">
              <v-dropdown-item v-bind:item="{ href: 'javascript:;', text: 'Never show rewards' }"></v-dropdown-item>
              <v-dropdown-item v-bind:item="{ href: 'javascript:;', text: 'Remove Card' }"></v-dropdown-item>
              <v-dropdown-item v-bind:item="{ href: 'javascript:;', text: 'Send Feedback' }"></v-dropdown-item>
            </v-dropdown>
          </div> -->
        </v-card-title>
      </v-card-row>
      <v-card-text>
        <v-card-row>
          <img v-bind:src="dapp.logoUrl || './src/assets/NA.png'" class="dapp-image">
          <div>
            <p>{{dapp.description}}</p>
          </div>
        </v-card-row>
      </v-card-text>
      <v-card-row actions>
        <a v-bind:href="dapp.contact.website" v-if="dapp.contact.website"><i class="fa fa-link fa-2x dapp-link"></a>
        <a v-bind:href="dapp.contact.github" v-if="dapp.contact.github"><i class="fa fa-github fa-2x dapp-link"></i></a>
        <a v-bind:href="dapp.contact.twitter" v-if="dapp.contact.twitter"><i class="fa fa-twitter fa-2x dapp-link"></a>
        <a v-bind:href="dapp.contact.facebook" v-if="dapp.contact.facebook"><i class="fa fa-facebook fa-2x dapp-link"></a>
        <a v-bind:href="dapp.contact.slack" v-if="dapp.contact.slack"><i class="fa fa-slack fa-2x dapp-link"></a>
        <a v-bind:href="dapp.contact.reddit" v-if="dapp.contact.reddit"><i class="fa fa-reddit fa-2x dapp-link"></a>
      </v-card-row>
    </v-card>
  </v-col>
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

<style>
.dappcard-title {
}
.dapp-image {
  height: 60px;
  margin-right: 10px;
}
</style>
