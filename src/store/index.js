import { createStore } from "vuex";
import axios from "../axios";
import TWtoEN from "../tools/county-tw-to-en";

export default createStore({
  state: {
    search: '',
    searchCounty: '',
    busRoutes: []
  },
  getters: {
    search(state) {
      return state.search;
    },
    searchCounty(state) {
      return state.searchCounty;
    },
    busRoutes(state) {
      return state.busRoutes;
    }
  },
  mutations: {
    updateSearch(state, payload) {
      state.search = payload;
    },
    addSearch(state, payload) {
      state.search += payload;
    },
    deleteSearch(state) {
      state.search = state.search.slice(0, -1);
    },
    clearSearch(state) {
      state.search = '';
    },
    updateSearchCounty(state, payload) {
      state.searchCounty = payload;
    },
    updateBusRoutes(state, payload) {
      state.busRoutes = payload;
    },
  },
  actions: {
    asyncUpdateBusRoutes({ commit, state }) {
      axios
        .get(`Route/City/${TWtoEN(state.searchCounty)}?$format=JSON`)
        .then((response) => {
          const routes = [];
          for (const routeData of response.data) {
            const { RouteName: { Zh_tw }, DepartureStopNameZh, DestinationStopNameZh } = routeData;
            routes.push({ name: Zh_tw, departure: DepartureStopNameZh, destination: DestinationStopNameZh })
          }
          commit("updateBusRoutes", routes);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  modules: {},
});
