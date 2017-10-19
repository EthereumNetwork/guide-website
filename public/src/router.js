import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Learn from './components/Learn.vue'
import ProjectList from './components/ProjectList.vue'
import SuggestionList from './components/SuggestionList.vue'
import Explorer from './components/Explorer.vue'
import ProjectsForm from './components/Form.vue'
import LoginForm from './components/Login.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Social from './components/Social.vue'
import Block from './components/Block.vue'
import Address from './components/Address.vue'
import Transaction from './components/Transaction.vue'
import TransactionList from './components/TransactionList.vue'
import TranslationsCN from './components/TranslationsCN.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: ProjectList },
  { path: '/learn', component: Learn },
  { path: '/explorer', component: Explorer },
  { path: '/projects',redirect: '/' },
  { path: '/suggestions', component: SuggestionList },
  { path: '/form', component: ProjectsForm },
  { path: '/login', component: LoginForm },
  { path: '/about', component: About },
  { path: '/social', component: Social },
  { path: '/project/:title', component: Project },
  { path: '/block/:id', component: Block },
  { path: '/address/:id', component: Address },
  { path: '/tx/:id', component: Transaction },
  { path: '/txs', component: TransactionList },
  { path: '/project', redirect: '/' },
  { path: '/translationsCN', component: TranslationsCN }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  saveScrollPosition: true
})

export default router
