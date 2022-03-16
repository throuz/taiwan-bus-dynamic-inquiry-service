import { createStore } from "vuex";
import axios from "../axios";
import TWtoEN from "../tools/county-tw-to-en";

export default createStore({
  state: {
    search: '',
    searchCounty: '',
    searchRoute: '',
    busRoutes: { status: 'idle', data: [] },
    routeStops: { status: 'idle', data: {} },
    lastStop: { status: 'idle', data: {} }
  },
  getters: {
    search(state) {
      return state.search;
    },
    searchCounty(state) {
      return state.searchCounty;
    },
    searchRoute(state) {
      return state.searchRoute;
    },
    busRoutes(state) {
      return state.busRoutes;
    },
    routeStops(state) {
      return state.routeStops;
    },
    lastStop(state) {
      return state.lastStop;
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
    updateSearchRoute(state, payload) {
      state.searchRoute = payload;
    },
    updateBusRoutes(state, payload) {
      state.busRoutes = payload;
    },
    updateRouteStops(state, payload) {
      state.routeStops = payload;
    },
    updateLastStop(state, payload) {
      state.lastStop = payload;
    },
  },
  actions: {
    asyncUpdateBusRoutes({ commit, state }) {
      commit("updateBusRoutes", { status: 'pending', data: [] });
      axios
        .get(`Route/City/${TWtoEN(state.searchCounty)}?$format=JSON`)
        .then((response) => {
          const routes = [];
          for (const routeData of response.data) {
            const { RouteName: { Zh_tw }, DepartureStopNameZh, DestinationStopNameZh } = routeData;
            routes.push({ name: Zh_tw, departure: DepartureStopNameZh, destination: DestinationStopNameZh })
          }
          commit("updateBusRoutes", { status: 'success', data: routes });
        })
        .catch((error) => {
          console.log(error);
          commit("updateBusRoutes", { status: 'error', data: [] });
        });
    },
    asyncUpdateRouteStops({ commit, state: { searchCounty, searchRoute } }) {
      commit("updateRouteStops", { status: 'pending', data: {} });
      commit("updateLastStop", { status: 'pending', data: {} });

      const getDisplayStopOfRoute = () => {
        return axios.get(`DisplayStopOfRoute/City/${TWtoEN(searchCounty)}/${searchRoute}`, {
          params: {
            $select: 'Stops',
            $filter: `RouteName/Zh_tw eq '${searchRoute}'`,
            $format: 'JSON'
          }
        });
      }

      const getEstimatedTimeOfArrival = () => {
        return axios.get(`EstimatedTimeOfArrival/City/${TWtoEN(searchCounty)}/${searchRoute}`, {
          params: {
            $select: 'StopName',
            $filter: `RouteName/Zh_tw eq '${searchRoute}'`,
            $format: 'JSON'
          }
        });
      }

      const getRealTimeNearStop = () => {
        return axios.get(`RealTimeNearStop/City/${TWtoEN(searchCounty)}/${searchRoute}`, {
          params: {
            $select: 'PlateNumb,StopName',
            $filter: `RouteName/Zh_tw eq '${searchRoute}'`,
            $format: 'JSON'
          }
        });
      }

      const getVehicle = () => {
        return axios.get(`Vehicle/City/${TWtoEN(searchCounty)}`, {
          params: {
            $filter: `VehicleType eq '1'`,
            $format: 'JSON'
          }
        });
      }

      Promise.all([getDisplayStopOfRoute(), getEstimatedTimeOfArrival(), getRealTimeNearStop(), getVehicle()])
        .then((results) => {
          const displayStopOfRoute = results[0].data;
          const estimatedTimeOfArrival = results[1].data;
          const realTimeNearStop = results[2].data;
          const accessibleBuses = results[3].data;

          const comeStopsData = displayStopOfRoute.find(item => item.Direction === 0)?.Stops ?? [];
          const backStopsData = displayStopOfRoute.find(item => item.Direction === 1)?.Stops ?? [];
          const comeEstimateData = estimatedTimeOfArrival.filter(item => item.Direction === 0);
          const backEstimateData = estimatedTimeOfArrival.filter(item => item.Direction === 1);
          const comeRealTimeData = realTimeNearStop.filter(item => item.Direction === 0);
          const backRealTimeData = realTimeNearStop.filter(item => item.Direction === 1);

          const stopDataStructure = {
            estimate: null,
            name: '',
            accessible: false,
            plateNumber: ''
          };

          const comeStops = new Array(comeStopsData.length).fill().map(() => ({ ...stopDataStructure }));
          const backStops = new Array(backStopsData.length).fill().map(() => ({ ...stopDataStructure }));

          // name
          for (let i = 0; i < comeStopsData.length; i++) {
            comeStops[i].name = comeStopsData[i].StopName.Zh_tw;
          }
          for (let i = 0; i < backStopsData.length; i++) {
            backStops[i].name = backStopsData[i].StopName.Zh_tw;
          }

          // estimate
          for (const { EstimateTime, StopName: { Zh_tw } } of comeEstimateData) {
            const index = comeStops.map(stop => stop.name).indexOf(Zh_tw);
            EstimateTime && (comeStops[index].estimate = EstimateTime - 30);
          }
          for (const { EstimateTime, StopName: { Zh_tw } } of backEstimateData) {
            const index = backStops.map(stop => stop.name).indexOf(Zh_tw);
            EstimateTime && (backStops[index].estimate = EstimateTime - 30);
          }

          // plateNumber
          for (const { PlateNumb, StopName: { Zh_tw } } of comeRealTimeData) {
            const index = comeStops.map(stop => stop.name).indexOf(Zh_tw);
            comeStops[index].plateNumber = PlateNumb;
          }
          for (const { PlateNumb, StopName: { Zh_tw } } of backRealTimeData) {
            const index = backStops.map(stop => stop.name).indexOf(Zh_tw);
            backStops[index].plateNumber = PlateNumb;
          }

          // accessible
          for (const { PlateNumb } of accessibleBuses) {
            const comeIndex = comeStops.map(stop => stop.plateNumber).indexOf(PlateNumb);
            comeIndex !== -1 && (comeStops[comeIndex].accessible = true);
            const backIndex = backStops.map(stop => stop.plateNumber).indexOf(PlateNumb);
            backIndex !== -1 && (backStops[backIndex].accessible = true);
          }

          commit("updateRouteStops", { status: 'success', data: { comeStops, backStops } });

          // Last stop
          const comeLastStop = comeStopsData.pop().StopName.Zh_tw;
          const backLastStop = backStopsData.pop().StopName.Zh_tw;
          commit("updateLastStop", { status: 'success', data: { come: comeLastStop, back: backLastStop } });
        })
        .catch((error) => {
          console.log(error);
          commit("updateRouteStops", { status: 'error', data: {} });
          commit("updateLastStop", { status: 'error', data: {} });
        });
    }
  },
  modules: {},
});
