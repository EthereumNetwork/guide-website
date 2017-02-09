
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    projectToEdit: {
      title: '',
      shortDescription: '',
      longDescription: '# project name\nlong description with **markdown**',
      latestNews: '',
      creator: '',
      likes: [],
      logoUrl: '',
      contact: {
        github: '',
        website: '',
        twitter: '',
        facebook: '',
        slack: '',
        reddit: '',
        email: '',
        blog: ''
      }
    }
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload.token
    },
    setProjectToEdit (state, payload) {
      state.projectToEdit = payload.projectToEdit
    }
  }
})
