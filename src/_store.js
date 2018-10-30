import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    app: {
      hasAuth: false,
      user: {}
    }
  },
  mutations: {
    SET_AUTH (state, payload) {
      state.app.hasAuth = payload
    },
    SET_USERDATA (state, payload) {
      state.app.user = payload
    }
  },
  actions: {
    SET_AUTH_STORE: ({ commit }, obj) => {
      commit('SET_AUTH', obj)
    },
    SET_USERDATA_STORE: ({ commit }, obj) => {
      commit('SET_USERDATA', obj)
    }
  },
  getters: {
    GET_USERDATA_STORE: state => state.app.user,
    HAS_AUTH_STORE: state => state.app.hasAuth,
  }
})
