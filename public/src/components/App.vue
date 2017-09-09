<template>
  <v-app top-toolbar footer class="app">
    <header>
      <v-toolbar class="grey darken-3">
        <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="sidebar = !sidebar" />
        <v-toolbar-items class="hidden-sm-and-down" v-for="item in items">
          <v-toolbar-item :href="item.href" router>{{item.title}}</v-toolbar-item>
        </v-toolbar-items>
        <v-toolbar-items>
          <v-toolbar-item class="hidden-sm-and-down" href="https://blog.ethereum.network/latest">Blog</v-toolbar-item>
        </v-toolbar-items>
        <v-spacer></v-spacer>
          <v-menu>
            <v-btn dark icon slot="activator">
              <i class="icon-language"></i>
            </v-btn>
            <v-list>
              <v-list-item>
                <v-list-tile v-on:click.native="setNewLanguage('en')">
                  <v-list-tile-title>EN</v-list-tile-title>
                </v-list-tile>
                <v-list-tile v-on:click.native="setNewLanguage('cn')">
                  <v-list-tile-title>CN</v-list-tile-title>
                </v-list-tile>
                <v-divider></v-divider>
                <v-list-tile href="/about" router>
                  <v-list-tile-title>info</v-list-tile-title>
                </v-list-tile>
              </v-list-item>
            </v-list>
          </v-menu>
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
            <v-list-tile href="https://blog.ethereum.network/latest">
              <v-list-tile-title>Blog</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-sidebar>
      <v-content>
        <v-container fluid class="px-2">
          <router-view> </router-view>
        </v-container>
      </v-content>
    </main>
    <v-footer class="grey darken-4">
      <div class="text-xs-right">
        <a href="https://www.linkedin.com/company/ethereum-network" target="_blank">LinkedIn</a> | <a href="https://twitter.com/EthereumNetw" target="_blank">Twitter</a> | <a href="https://github.com/EthereumNetwork/guide-website" target="_blank">Github</a> | <a href="https://www.facebook.com/EthereumNetwork/" target="_blank">Facebook</a>
     </div>
    </v-footer>
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
        sidebar: false,
        searchField: '',
        items: [
          {title: 'Projects', href: '/'},
          {title: 'Learn', href: '/learn'},
          {title: 'Explorer', href: '/explorer'},
          {title: 'About', href: '/about'}
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
      setNewLanguage (lang) {
        this.$store.dispatch(events.ADD_LANGUAGE, {
          code: lang,
          urlPrefix: lang,
          translationKey: lang
        })
        this.$store.dispatch(events.SET_LANGUAGE, lang)
        console.log(this.$store.state['vue-i18n-manager'].currentLanguage.translationKey)
        this.fetchProjects()
      },
      fetchProjects () {
        fetch('/api/' + this.$store.state['vue-i18n-manager'].currentLanguage.translationKey + '/projects')
        .then((response) => { return response.json() })
        .then((data) => {
          this.$store.commit('setProjectList', { projectList: data })
          console.log('new projects fetched:', data)
        })
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
  .app  {
    font-family: Arial, Helvetica, sans-serif;
  }
  .menu {
    color: grey;
    font-size: 1em;
  }
</style>
