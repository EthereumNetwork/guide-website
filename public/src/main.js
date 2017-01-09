import Vue from 'vue'

import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

Vue.use(VueRouter)
Vue.use(Vuetify)

import App from './App.vue'
import Learn from './Learn.vue';
import DappList from './DappList.vue';
import Explorer from './Explorer.vue';
import DappsForm from './Form.vue';
import Twitter from './Twitter.vue';

const routes = [
  { path: '/learn', component: Learn },
  { path: '/explorer', component: Explorer },
  { path: '/dapps', component: DappList },
  { path: '/form', component: DappsForm },
  { path: '/Twitter', component: Twitter }
]

const router = new VueRouter({
  routes: routes,
   mode: 'history'
})


new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
