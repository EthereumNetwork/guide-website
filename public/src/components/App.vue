<template>
    <v-app top-toolbar footer class="app">
      <header>
        <v-toolbar class="grey darken-3">
          <v-toolbar-items class="hidden-sm-and-down" v-for="item in items">
            <v-toolbar-item :href="item.href" router>{{item.title}}</v-toolbar-item>
          </v-toolbar-items>
          <v-toolbar-item class="hidden-sm-and-down" href="https://blog.ethereum.network">Blog</v-toolbar-item>
         <v-spacer class="hidden-sm-and-down"></v-spacer>
         <div class="searchbar">
           <v-text-input placeholder="filter projects, txIDs, adresses" v-model="searchField"></v-text-input>
         </div>
         <v-spacer class="hidden-sm-and-up"></v-spacer>
         <v-toolbar-side-icon class="hidden-sm-and-up" @click.native.stop="sidebar = !sidebar" />
       </v-toolbar>
      </header>
      <main>
        <v-sidebar drawer v-model="sidebar">
          <v-list>
            <v-list-item v-for="item in items">
              <v-list-tile :href="item.href" router>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
            <v-list-item>
              <v-list-tile href="https://blog.ethereum.network">
                <v-list-tile-title>Blog</v-list-tile-title>
              </v-list-tile>
            </v-list-item>
          </v-list>
        </v-sidebar>
        <v-content>
          <v-container fluid class="content">
              <router-view v-bind:search-field="searchField"> </router-view>
          </v-container>
        </v-content>
      </main>
      <v-footer class="grey darken-4">
        <div class="text-xs-right">
          <a href="https://www.linkedin.com/company/ethereum-network" target="_blank">LinkedIn</a> | <a href="https://twitter.com/EthereumPress" target="_blank">Twitter</a> | <a href="https://github.com/EthereumNetwork/guide-website" target="_blank">Github</a>
       </div>
      </v-footer>
    </v-app>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        sidebar: false,
        searchField: '',
        items: [
          {title: 'Home', href: '/'},
          {title: 'Learn', href: '/learn'},
          {title: 'Projects', href: '/projects'},
          {title: 'Explorer', href: '/explorer'},
          {title: 'About', href: '/about'}
        ]
      }
    },
    mounted () {
      fetch('/api/projects')
      .then((response) => { return response.json() })
      .then((data) => { this.$store.commit('setProjectList', { projectList: data }) })
      this.$store.commit('setToken', { token: this.$cookie.get('token') })
      console.log('done', this.$store.state)
    }
  }
</script>

<style>

h1 {
  font-size: 5vmin;
}
h2 {
  font-size: 4vmin;
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
