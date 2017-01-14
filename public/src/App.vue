<template>
    <v-app top-navbar footer class="app">
      <v-navbar class="grey darken-3">
        <v-btn class="hidden-md-and-up" flat v-sidebar:sidebar>
          <v-icon class="grey--text text--darken-2">menu</v-icon>
        </v-btn>
        <v-dropdown id="menu" v-bind:items="menuItems" router></v-dropdown>
        <v-sidebar id="sidebar" class="grey darken-3" height="100vh" drawer>
          <v-sidebar-items v-bind:items="menuItems"></v-sidebar-items>
        </v-sidebar>
        <v-navbar-items class="hidden-md-and-down" v-bind:items="menuItems"></v-navbar-items>
       <v-spacer></v-spacer>
       <div class="searchbar">
         <v-text-input placeholder="filter dapps, txIDs, adresses" v-model="searchField"></v-text-input>
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
          <a href="https://twitter.com/EthereumPress">Twitter</a> | <a href="https://github.com/EthereumNetwork">Github</a>
       </div>
      </v-footer>
    </v-app>
</template>

<script>


export default {
  name: 'app',
  data () {
  return {
    searchField: "",
    menuItems: [
      { text: 'Home', href: '/', router: true},
      { text: 'Learn', href: '/learn', router: true},
      { text: 'Dapps', href: '/dapps', router: true},
      { text: 'Explorer', href: '/explorer', router: true},
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
  font-size: 2vh;
}
.dropdown__item {
  font-size: 2vh
}



</style>
