
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null,
    projectToEdit: {
      _id: null,
      title: '',
      shortDescription: '',
      longDescription: '',
      tags: '',
      creator: '',
      owner: '',
      likes: [],
      logoUrl: '',
      license: '',
      contractAddrMain: '',
      contractAddrTest: '',
      github: '',
      website: '',
      twitter: '',
      linkedin: '',
      facebook: '',
      slack: '',
      reddit: '',
      wechat: '',
      email: '',
      blog: '',
      etherianLink: ''
    },
    projectList: [],
    price: {},
    dsClient: {},
    latestTransactions: 'test'
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload.token
    },
    setProjectList (state, payload) {
      state.projectList = payload.projectList
    },
    setProjectToEdit (state, payload) {
      state.projectToEdit = payload.projectToEdit
    },
    setPrice (state, payload) {
      state.price = payload.price
    },
    setDsClient (state, payload) {
      state.dsClient = payload.dsClient
    },
    setLatestTransactions (state, payload) {
      state.latestTransactions = payload.latestTransactions
    }
  }
})

export default store
