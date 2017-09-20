<template>
  <v-app id="app" toolbar>
    <v-navigation-drawer clipped persistent v-model="drawer" enable-resize-watcher dark>
      <v-container fluid>
        <v-layout>
          <v-flex>
            <v-list>
              <v-list-tile v-for="i in items" :to="{path: i.path}" :key="i.title" exact>
                <v-list-tile-content>
                  <v-list-tile-title>{{i.title}}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile href="https://blog.ethereum.network/latest">
                <v-list-tile-title>Blog</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-flex>
        </v-layout>
      </v-container>
    </v-navigation-drawer>
    <v-toolbar dark fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Ethereum Network</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu>
        <v-btn dark icon slot="activator">
          <i class="icon-language"></i>
        </v-btn>
        <v-list>
          <v-list-tile @click.native="setNewLanguage('en')">
            <v-list-tile-title>EN</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-on:click.native="setNewLanguage('cn')">
            <v-list-tile-title>中文</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <main>
      <v-container fluid>
        <router-view> </router-view>
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import 'wenk'
  import { events } from 'vue-i18n-manager'
  var dsClient = deepstream('wss://api.ethereum.network').login()

  export default {
    name: 'app',
    data () {
      return {
        drawer: true,
        items: [
          {title: 'Projects', path: '/'},
          {title: 'Learn', path: '/learn'},
          {title: 'Explorer', path: '/explorer'},
          {title: 'About', path: '/about'},
          {title: 'Social', path: '/social'}
        ]
      }
    },
    beforeCreate () {
      this.$store.commit('setDsClient', { dsClient: dsClient })
    },
    mounted () {
      this.$store.commit('setToken', { token: this.$cookie.get('token') })

      this.fetchProjects()

      fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR')
      .then((response) => { return response.json() })
      .then((price) => { this.$store.commit('setPrice', { price: price }) })
    },

    methods: {
      fetchProjects () {
        fetch('/api/' + this.$store.state['vue-i18n-manager'].currentLanguage.translationKey + '/projects')
        .then((response) => { return response.json() })
        .then((data) => { this.$store.commit('setProjectList', { projectList: data }) })
      },
      setNewLanguage (lang) {
        this.$store.dispatch(events.ADD_LANGUAGE, {
          code: lang,
          urlPrefix: lang,
          translationKey: lang
        })
        this.$store.dispatch(events.SET_LANGUAGE, lang)
        console.log('changed to', this.$store.state['vue-i18n-manager'].currentLanguage.translationKey)
        this.fetchProjects()
      }
    }
  }
</script>

<style>
  h1 {
    font-size: 1.8em;
  }
  h2 {
    font-size: 1.4em;
  }
  h3 {
    font-size: 1.2em;
  }
  .contact-link {
      color: black;
      text-shadow: 1px 1px 1px #ccc;
      font-size: 1.4em;
      margin-left: 0.1em;
  }
  .dialogactivator {
    cursor: pointer;
    cursor: hand;
    text-decoration: underline;
  }
</style>
