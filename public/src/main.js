import Vue from 'vue'
import Vuetify from 'vuetify'
import store from './store.js'
import router from './router.js'
import VueCookie from 'vue-cookie'
import VueWebsocket from 'vue-websocket'

import App from './components/App.vue'

Vue.use(Vuetify)
Vue.use(VueCookie)
Vue.use(VueWebsocket, '/', {'path': '/socket/socket.io'})

const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
