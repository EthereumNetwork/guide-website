import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import store from './store'
import VueCookie from 'vue-cookie'

import App from './App.vue'
import Home from './Home.vue'
import Learn from './Learn.vue'
import ProjectList from './ProjectList.vue'
import Explorer from './Explorer.vue'
import ProjectsForm from './Form.vue'
import LoginForm from './Login.vue'
import About from './About.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueCookie)

const routes = [
  { path: '/', component: Home },
  { path: '/learn', component: Learn },
  { path: '/explorer', component: Explorer },
  { path: '/projects', component: ProjectList },
  { path: '/form', component: ProjectsForm },
  { path: '/login', component: LoginForm },
  { path: '/about', component: About }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  saveScrollPosition: true
})

const app = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
