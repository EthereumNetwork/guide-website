<template>
  <div id="app">
    <ul>
      <li><router-link class="NavBarLink" to="/">Home</router-link></li>
      <li><router-link class="NavBarLink" to="/learn">Learn</router-link></li>
      <li><router-link class="NavBarLink" to="/dapps">Dapps</router-link></li>
      <li><router-link class="NavBarLink" to="/explorer">Network Explorer</router-link></li>
      <li><a class="NavBarLink" href="https://blog.ethereum.network">Blog</a></li>
    </ul>
    <input type="text" v-model="searchField" placeholder="filter dapps, txIDs, adresses" />
    <br><br><br>
    <router-view v-bind:search-field="searchField"> </router-view>
    <div class="footer">
      <p>My main goal is to offer both normal users ands developers the resources they need to interact successfully with the Ethereum network.</p>
      <p>I'm in the progress of building out the website, that's why everything is still ugly and empty :(</p>
      <p>Hit me up on <a href="https://twitter.com/EthereumPress">Twitter</a> or <a href="https://github.com/EthereumNetwork">Github</a> if you want to help me building this guide</p>
    </div>

    <v-app top-navbar footer>
  <header>
    <v-navbar>
      <h1>Portfolio</h1>
    </v-navbar>
  </header>
  <main>
    <v-content>
      <v-container>
        <v-btn success>...</v-btn>
        <router-view></router-view>
      </v-container>
    </v-content>
  </main>
  <v-footer>2016</v-footer>
</v-app>
  </div>
</template>

<script>


export default {
  name: 'app',
  data () {
    return {
      searchField: ""
    }
  },
  mounted () {
    this.$vuetify.init()
  }
}
</script>

<style>

input {
  float:right;
}
</style>
