import Vue from 'vue'
import Vuetify from 'vuetify'
import store from './store.js'
import router from './router.js'
import { config, proxy } from './i18n.js'
import VueI18nManager from 'vue-i18n-manager'
import VueCookie from 'vue-cookie'

import App from './components/App.vue'

Vue.use(Vuetify)
Vue.use(VueI18nManager, { store, config, proxy })
Vue.use(VueCookie)

const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

Vue.initI18nManager()
