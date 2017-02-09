
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    projectToEdit: {
      title: '',
      shortDescription: '',
      longDescriptionText: 'long description with **markdown**',
      latestNews: '',
      logoUrl: '',
      github: '',
      website: '',
      twitter: '',
      facebook: '',
      slack: '',
      email: '',
      blog: '',
      UserName: '',
      Like: false,
      reddit: ''
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload.token
    }
  }
})
