import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Users: []
  },
  mutations: {
    userDataMutations(state, payload) {

      state.Users = payload
    }
  },
  actions: {
    fetchUserDetails({ commit }) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => (commit('userDataMutations', res.data)));
    }
  },
  modules: {
  }
})
