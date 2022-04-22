import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: []
  },
  mutations: {
    setImages (state, images) {
      state.images.push(...images)
    },
    clearImages (state) {
      state.images = []
    }
  },
  actions: {
    async fetchImages ({ commit }, params) {
      const { data: response } = await axios.get(
        params.query ? 'search/photos' : 'photos',
        { params }
      )
      commit('setImages', params.query ? response.results : response)
    }
  },
  getters: {
    images (state) {
      return state.images
    }
  }
})
