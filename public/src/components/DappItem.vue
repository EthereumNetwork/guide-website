<template>
  <v-col xs12="xs12" sm6="sm6" md6="md6" lg4>
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
            <p>{{dapp.shortDescription}}</p>
          </div>
        </v-card-row>
      </v-card-text>
      <v-card-row actions>
        <a v-bind:href="dapp.contact.website" v-if="dapp.contact.website" class="contact-link"> <i class="fa fa-link fa-2x dapp-link"> </a>
        <a v-bind:href="dapp.contact.github" v-if="dapp.contact.github" class="contact-link"> <i class="fa fa-github fa-2x dapp-link"> </i></a>
        <a v-bind:href="dapp.contact.twitter" v-if="dapp.contact.twitter" class="contact-link"> <i class="fa fa-twitter fa-2x dapp-link"> </a>
        <a v-bind:href="dapp.contact.facebook" v-if="dapp.contact.facebook" class="contact-link"> <i class="fa fa-facebook fa-2x dapp-link"> </a>
        <a v-bind:href="dapp.contact.slack" v-if="dapp.contact.slack" class="contact-link"> <i class="fa fa-slack fa-2x dapp-link"> </a>
        <a v-bind:href="dapp.contact.reddit" v-if="dapp.contact.reddit" class="contact-link"> <i class="fa fa-reddit fa-2x dapp-link"></a>
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
.dapp-image {
  height: 60px;
  margin-right: 10px;
}
.contact-link {
    color: black;
    text-shadow: 1px 1px 1px #ccc;
    font-size: 1em;
    margin-right: 0.2em;
}
</style>
