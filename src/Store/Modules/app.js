const state = {
  app: {
    // hasAuth: false,
    user: {}
  }
}

const mutations = {
  // SET_AUTH (state, payload) {
  //   state.app.hasAuth = payload
  // },
  SET_USERDATA (state, payload) {
    state.app.user = payload
  }
}

const actions = {
  // SET_AUTH_STORE: ({ commit }, obj) => {
  //   commit('SET_AUTH', obj)
  // },
  SET_USERDATA_STORE: ({ commit }, obj) => {
    commit('SET_USERDATA', obj)
  }
}

const getters = {
  GET_USERDATA_STORE: state => state.app.user,
  // HAS_AUTH_STORE: state => state.app.hasAuth,
}

export default {
  state,
  getters,
  mutations,
  actions
}
