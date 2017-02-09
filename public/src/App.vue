<template>
    <v-app top-navbar footer class="app">
      <v-navbar class="grey darken-3">
        <v-btn class="hidden-sm-and-up menu" flat v-sidebar:sidebar>
          <i class="fa fa-align-justify fa-2x">
        </v-btn>
        <v-sidebar id="sidebar" class="grey darken-3" drawer v-bind:items="items">
        </v-sidebar>
        <v-navbar-items class="hidden-sm-and-down" v-bind:items="items"></v-navbar-items>
       <v-spacer></v-spacer>
       <div class="searchbar">
         <v-text-input placeholder="filter projects, txIDs, adresses" v-model="searchField"></v-text-input>
       </div>
      </v-navbar>
      <main>
        <v-content>
          <v-container fluid class="content">
              <router-view v-bind:search-field="searchField"> </router-view>
          </v-container>
        </v-content>
      </main>
      <v-footer  class="grey darken-4">
        <div class="text-xs-right">
          <a href="https://twitter.com/EthereumPress">Twitter</a> | <a href="https://github.com/EthereumNetwork/guide-website">Github</a>
       </div>
      </v-footer>
    </v-app>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        searchField: '',
        items: [
          {text: 'Home', title: 'Home', href: '/', router: true},
          {text: 'Learn', title: 'Learn', href: '/learn', router: true},
          {text: 'Projects', title: 'Projects', href: '/projects', router: true},
          {text: 'Explorer', title: 'Explorer', href: '/explorer', router: true},
          {text: 'Blog', title: 'Blog', href: 'https://blog.ethereum.network'},
          {text: 'About', title: 'About', href: '/about', router: true}
        ]
      }
    },

    mounted () {
      this.$vuetify.init()
    }
  }
</script>

<style>

h1 {
  font-size: 6vh;
}
h2 {
  font-size: 4vh;
}
.searchbar {
  float:right;
  padding-right: 1%;
  color: white;
}
.app  {
  font-family: Arial, Helvetica, sans-serif;
}
.menu {
  color: grey;
  font-size: 1em;
}
</style>
