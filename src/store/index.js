import { createStore } from 'vuex';
import axios from '../axios';

export default createStore({
  state: {
    search: '',
    searchCity: '',
    routeInfo: {},
    busRoutes: { status: 'idle', data: [] },
    routeStops: { status: 'idle', data: {} },
  },
  getters: {
    search(state) {
      return state.search;
    },
    searchCity(state) {
      return state.searchCity;
    },
    routeInfo(state) {
      return state.routeInfo;
    },
    busRoutes(state) {
      return state.busRoutes;
    },
    routeStops(state) {
      return state.routeStops;
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
    updateSearchCity(state, payload) {
      state.searchCity = payload;
    },
    updateRouteInfo(state, payload) {
      state.routeInfo = payload;
    },
    updateBusRoutes(state, payload) {
      state.busRoutes = payload;
    },
    updateRouteStops(state, payload) {
      state.routeStops = payload;
    }
  },
  actions: {
    asyncUpdateBusRoutes({ commit, state: { searchCity } }) {
      commit('updateBusRoutes', { status: 'pending', data: [] });
      axios
        .get(`Route/City/${searchCity}`, {
          params: {
            $select: 'RouteID,RouteName,DepartureStopNameZh,DestinationStopNameZh',
            $format: 'JSON'
          }
        })
        .then((response) => {
          const routes = [];
          for (const routeData of response.data) {
            const { RouteID, RouteName: { Zh_tw }, DepartureStopNameZh, DestinationStopNameZh } = routeData;
            routes.push({ id: RouteID, name: Zh_tw, departure: DepartureStopNameZh, destination: DestinationStopNameZh })
          }
          commit('updateBusRoutes', { status: 'success', data: routes });
        })
        .catch((error) => {
          console.log(error);
          commit('updateBusRoutes', { status: 'error', data: [] });
        });
    },
    asyncUpdateRouteStops({ commit, state: { searchCity, routeInfo: { id, name } } }) {
      commit('updateRouteStops', { status: 'pending', data: {} });

      const getStopOfRoute = () => {
        const cityFilter = ['Taipei', 'Tainan', 'NewTaipei', 'Taoyuan', 'Taichung'];
        const partialURL = cityFilter.includes(searchCity) ? 'Display' : '';
        return axios.get(`${partialURL}StopOfRoute/City/${searchCity}/${name}`, {
          params: {
            $select: 'Stops',
            $filter: `RouteID eq '${id}'`,
            $format: 'JSON'
          }
        });
      }

      const getEstimatedTimeOfArrival = () => {
        const cityFilter = ['Hsinchu', 'HsinchuCounty', 'MiaoliCounty', 'ChanghuaCounty', 'NantouCounty', 'YunlinCounty', 'ChiayiCounty', 'Chiayi', 'PingtungCounty', 'YilanCounty', 'HualienCounty', 'TaitungCounty', 'PenghuCounty', 'Keelung'];
        const partialURL = cityFilter.includes(searchCity) ? '/Streaming' : '';
        return axios.get(`EstimatedTimeOfArrival${partialURL}/City/${searchCity}/${name}`, {
          params: {
            $select: 'StopName',
            $filter: `RouteID eq '${id}'`,
            $format: 'JSON'
          }
        });
      }

      const getRealTimeNearStop = () => {
        const cityFilter = ['Hsinchu', 'HsinchuCounty', 'MiaoliCounty', 'ChanghuaCounty', 'NantouCounty', 'YunlinCounty', 'ChiayiCounty', 'Chiayi', 'PingtungCounty', 'YilanCounty', 'HualienCounty', 'TaitungCounty', 'PenghuCounty', 'Keelung'];
        const partialURL = cityFilter.includes(searchCity) ? '/Streaming' : '';
        return axios.get(`RealTimeNearStop${partialURL}/City/${searchCity}/${name}`, {
          params: {
            $select: 'PlateNumb,StopName',
            $filter: `RouteID eq '${id}'`,
            $format: 'JSON'
          }
        });
      }

      const getVehicle = () => {
        return axios.get(`Vehicle/City/${searchCity}`, {
          params: {
            $filter: `VehicleType eq '1'`,
            $format: 'JSON'
          }
        });
      }

      Promise.all([getStopOfRoute(), getEstimatedTimeOfArrival(), getRealTimeNearStop(), getVehicle()])
        .then((results) => {
          const stopOfRoute = results[0].data;
          const estimatedTimeOfArrival = results[1].data;
          const realTimeNearStop = results[2].data;
          const accessibleBuses = results[3].data;

          const comeStopsData = stopOfRoute.find(item => item.Direction === 0)?.Stops ?? [];
          const backStopsData = stopOfRoute.find(item => item.Direction === 1)?.Stops ?? [];
          const comeEstimateData = estimatedTimeOfArrival.filter(item => item.Direction === 0);
          const backEstimateData = estimatedTimeOfArrival.filter(item => item.Direction === 1);
          const comeRealTimeData = realTimeNearStop.filter(item => item.Direction === 0);
          const backRealTimeData = realTimeNearStop.filter(item => item.Direction === 1);

          const stopDataStructure = {
            state: null,
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

          // state(EstimateTime)
          for (const { EstimateTime, StopName: { Zh_tw } } of comeEstimateData) {
            const index = comeStops.findIndex(stop => stop.name === Zh_tw);
            EstimateTime && (comeStops[index].state = EstimateTime);
          }
          for (const { EstimateTime, StopName: { Zh_tw } } of backEstimateData) {
            const index = backStops.findIndex(stop => stop.name === Zh_tw);
            EstimateTime && (backStops[index].state = EstimateTime);
          }

          // plateNumber & state(A2EventType)
          for (const { PlateNumb, StopName: { Zh_tw }, A2EventType } of comeRealTimeData) {
            const index = comeStops.findIndex(stop => stop.name === Zh_tw);
            comeStops[index].plateNumber = PlateNumb;
            comeStops[index].state = A2EventType ? '進站中' : '離站中';
          }
          for (const { PlateNumb, StopName: { Zh_tw }, A2EventType } of backRealTimeData) {
            const index = backStops.findIndex(stop => stop.name === Zh_tw);
            backStops[index].plateNumber = PlateNumb;
            backStops[index].state = A2EventType ? '進站中' : '離站中';
          }

          // accessible
          for (const { PlateNumb } of accessibleBuses) {
            const comeIndex = comeStops.map(stop => stop.plateNumber).indexOf(PlateNumb);
            comeIndex !== -1 && (comeStops[comeIndex].accessible = true);
            const backIndex = backStops.map(stop => stop.plateNumber).indexOf(PlateNumb);
            backIndex !== -1 && (backStops[backIndex].accessible = true);
          }

          commit('updateRouteStops', { status: 'success', data: { comeStops, backStops } });
        })
        .catch((error) => {
          console.log(error);
          commit('updateRouteStops', { status: 'error', data: {} });
        });
    }
  },
  modules: {},
});
