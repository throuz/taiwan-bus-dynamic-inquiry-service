import { createStore } from "vuex";

export default createStore({
  state: {
    search: ''
  },
  getters: {
    search(state) {
      return state.search;
    }
  },
  mutations: {
    updateSearch(state, search) {
      state.search = search
    },
    addSearch(state, value) {
      state.search += value
    },
    deleteSearch(state) {
      state.search = state.search.slice(0, -1)
    },
    clearSearch(state) {
      state.search = ''
    }
  },
  actions: {},
  modules: {},
});
