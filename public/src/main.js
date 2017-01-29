import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import store from './store'

import App from './App.vue'
import Home from './Home.vue'
import Learn from './Learn.vue'
import DappList from './DappList.vue'
import Explorer from './Explorer.vue'
import DappsForm from './Form.vue'
import LoginForm from './Login.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [
  { path: '/', component: Home },
  { path: '/learn', component: Learn },
  { path: '/explorer', component: Explorer },
  { path: '/dapps', component: DappList },
  { path: '/form', component: DappsForm },
  { path: '/login', component: LoginForm }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  saveScrollPosition: true
})

const app = new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
app.$mount('#app')
