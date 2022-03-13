import { createStore } from "vuex";

export default createStore({
  state: {
    search: '',
    searchCounty: '選擇縣市'
  },
  getters: {
    search(state) {
      return state.search;
    },
    searchCounty(state) {
      return state.searchCounty;
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
    },
    updateSearchCounty(state, county) {
      state.searchCounty = county
    }
  },
  actions: {},
  modules: {},
});
