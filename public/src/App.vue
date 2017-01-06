<template>
  <div id="app">
    <v-app top-navbar footer>
      <header>
        <v-navbar class="grey darken-3">
          <!-- <v-btn v-dropdown:dropdown class="hidden-sm-and-up grey darken-2">X</v-btn>
          <v-dropdown id="dropdown" router v-bind:items="items"></v-dropdown> -->
          <!-- <v-navbar-items v-bind:items="items" class="hidden-sm-and-down"></v-navbar-items> -->
          <!-- <v-navbar-side-icon>
            <v-navbar-item router :item="{ href: '/', text: 'Home'}" class="hidden-sm-and-down"/>
            <v-navbar-item router :item="{ href: '/learn', text: 'Learn'}" class="hidden-sm-and-down"/>
            <v-navbar-item router :item="{ href: '/dapps', text: 'Dapps'}" class="hidden-sm-and-down"/>
            <v-navbar-item router :item="{ href: '/explorer', text: 'Explorer'}" class="hidden-sm-and-down"/>
          </v-navbar-side-icon> -->
          <v-navbar-items>
            <v-navbar-item router v-bind:item="{ href: '', text: 'more_vert', icon: true }" v-dropdown:dropdown class="hidden-sm-and-up"></v-navbar-item>
            <v-navbar-item router :item="{ href: '/', text: 'Home'}" class="hidden-sm-and-down"/>
            <v-navbar-item router :item="{ href: '/learn', text: 'Learn'}" class="hidden-sm-and-down"/>
            <v-navbar-item router :item="{ href: '/dapps', text: 'Dapps'}" class="hidden-sm-and-down"/>
            <v-navbar-item router :item="{ href: '/explorer', text: 'Explorer'}" class="hidden-sm-and-down"/>
            <v-navbar-item router :item="{ href: '/Form', text: 'Dapps Form'}" class="hidden-sm-and-down"/>
            <v-navbar-item router :item="{ href: '/Twitter', text: 'Twitter'}" class="hidden-sm-and-down"/>
            <v-navbar-item :item="{ href: 'https://blog.ethereum.network', text: 'Blog'}" class="hidden-sm-and-down"/>
         </v-navbar-items>
         <v-spacer></v-spacer>
         <div class="right">
           <v-text-input placeholder="filter dapps, txIDs, adresses" id="terms" name="terms" v-model="searchField" class="right">dsadsa</v-text-input>
         </div>
         <v-dropdown router v-bind:items="items" id="dropdown" left></v-dropdown>
        </v-navbar>
      </header>
      <main>
        <v-content>
          <v-container>
            <router-view v-bind:search-field="searchField"> </router-view>
          </v-container>
          <v-container>
            <p>My main goal is to offer both normal users ands developers the resources they need to interact successfully with the Ethereum network.</p>
            <p>I'm in the progress of building out the website, that's why everything is still ugly and empty :(</p>
            <p>Hit me up onif you want to help me building this guide</p>
         </v-container>
        </v-content>
      </main>
      <v-footer  class="grey darken-4">
        <div class="text-xs-right">
          <a href="https://twitter.com/EthereumPress">Twitter</a> | <a href="https://github.com/EthereumNetwork">Github</a>
       </div>
      </v-footer>
    </v-app>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      searchField: "",
      // need to turn href links into router links to prevent page reloading e.g. <router-link class="NavBarLink" to="/dapps">Dapps</router-link>
      items: [
        { text: 'Home', href: '/' },
        { text: 'Learn', href: '/learn' },
        { text: 'Dapps', href: '/dapps' },
        { text: 'Explorer', href: '/explorer' },
        { text: 'Dapp Form', href: '/Form' },
        { text: 'Twitter', href: '/Twitter' },
        { text: 'Blog', href: 'https://blog.ethereum.network' },
      ]
    }
  },
  mounted () {
    this.$vuetify.init()
  }
}
</script>

<style>

.right {
  float:right;
  padding-right: 1%
}
</style>
