import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import store from './store'
import VueCookie from 'vue-cookie'

import App from './components/App.vue'
import Home from './components/Home.vue'
import Learn from './components/Learn.vue'
import ProjectList from './components/ProjectList.vue'
import Explorer from './components/Explorer.vue'
import ProjectsForm from './components/Form.vue'
import LoginForm from './components/Login.vue'
import About from './components/About.vue'

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
