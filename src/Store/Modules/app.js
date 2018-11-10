const state = {
  app: {}
}

const mutations = {
  // SET_AUTH (state, payload) {
  //   state.app.hasAuth = payload
  // },
  SET_APPDATA (state, payload) {
    state.app = payload
  }
}

const actions = {
  // SET_AUTH_STORE: ({ commit }, obj) => {
  //   commit('SET_AUTH', obj)
  // },
  SET_APP_STORE: ({ commit }, obj) => {
    commit('SET_APPDATA', obj)
  }
}

const getters = {
  GET_USERDATA_STORE: state => state.app.user
  // HAS_AUTH_STORE: state => state.app.hasAuth,
}

export default {
  state,
  getters,
  mutations,
  actions
}
