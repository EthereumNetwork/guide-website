<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div id="app2">
  <h1>Hello App moin moin!</h1>
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <ul id="navPBT">
    <li><router-link to="/">Home</router-link></li>
    <li><router-link to="/learn">Learn</router-link></li>
    <li><router-link to="/dapps">Dapps</router-link></li>
    <li><router-link to="/explorer">Network Explorer</router-link></li>
    <li><a href="https://blog.ethereum.network">Blog</a></li>
  </ul>
  <router-view></router-view>
</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
