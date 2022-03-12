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
    }
  },
  actions: {},
  modules: {},
});
