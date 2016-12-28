<template>
  <div id="app">
    <ul id="navPBT">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/learn">Learn</router-link></li>
      <li><router-link to="/dapps">Dapps</router-link></li>
      <li><router-link to="/explorer">Network Explorer</router-link></li>
      <li><a href="https://blog.ethereum.network">Blog</a></li>
    </ul>
    <input type="text" v-model="searchField" placeholder="filter dapps, txIDs, adresses" />
    <router-view v-bind:search-field="searchField"> </router-view>
    <div class="footer">
      <p>I'm in the progress of building out the website, that's why everything is still ugly and empty</p>
      <p>Hit me up on <a href="https://twitter.com/EthereumPress">Twitter</a> or <a href="https://github.com/EthereumNetwork/websiteBuilding">Github</a> if you want to be part of it</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      searchField: ""
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
