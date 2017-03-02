
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    projectToEdit: {
      _id: null,
      title: '',
      shortDescription: '',
      longDescription: 'long description with **markdown**\nyou can add images with\n\n[![projectImage](https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black.png)](https://www.ethereum.org/images/logos/ETHEREUM-ICON_Black.png)\n\nto allow scaling ',
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
      blog: ''
    },
    projectList: [],
    price: {}
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
    }
  }
})
