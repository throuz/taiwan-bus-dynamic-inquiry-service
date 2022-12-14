import { createStore } from 'vuex';
import tdxAjax from '../services/tdx-service';
import mapAjax from '../services/map-service';

export default createStore({
  state: {
    search: '',
    searchCity: '',
    routeInfo: {},
    busRoutes: { status: 'idle', data: [] },
    busRouteStops: { status: 'idle', data: {} },
    stationInfo: {},
    nearbyStations: { status: 'idle', data: [] },
    nearbyStationRoutes: { status: 'idle', data: [] }
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
    busRouteStops(state) {
      return state.busRouteStops;
    },
    stationInfo(state) {
      return state.stationInfo;
    },
    nearbyStations(state) {
      return state.nearbyStations;
    },
    nearbyStationRoutes(state) {
      return state.nearbyStationRoutes;
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
    updateBusRouteStops(state, payload) {
      state.busRouteStops = payload;
    },
    updateStationInfo(state, payload) {
      state.stationInfo = payload;
    },
    updateNearbyStations(state, payload) {
      state.nearbyStations = payload;
    },
    updateNearbyStationRoutes(state, payload) {
      state.nearbyStationRoutes = payload;
    },
    clearAllState(state) {
      state.search = '';
      state.searchCity = '';
      state.routeInfo = {};
      state.busRoutes = { status: 'idle', data: [] };
      state.busRouteStops = { status: 'idle', data: {} };
      state.stationInfo = {};
      state.nearbyStations = { status: 'idle', data: [] };
      state.nearbyStationRoutes = { status: 'idle', data: [] };
    }
  },
  actions: {
    asyncUpdateSearchCity({ commit }, { lat, lon }) {
      commit('updateSearchCity', '');
      mapAjax
        .get('geocode/json', {
          params: {
            latlng: `${lat},${lon}`,
            result_type: 'administrative_area_level_1'
          }
        })
        .then((response) => {
          const cityName = response.data.results[0].address_components[0].short_name.split(' ')[0];
          commit('updateSearchCity', cityName);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    asyncUpdateBusRoutes({ commit, state: { searchCity } }) {
      commit('updateBusRoutes', { status: 'pending', data: [] });
      tdxAjax
        .get(`Route/City/${searchCity}`, {
          params: {
            $select: 'RouteID,RouteName,DepartureStopNameZh,DestinationStopNameZh',
            $format: 'JSON'
          }
        })
        .then((response) => {
          const routes = response.data.map(({ RouteID, RouteName: { Zh_tw }, DepartureStopNameZh, DestinationStopNameZh }) => ({ id: RouteID, name: Zh_tw, departure: DepartureStopNameZh, destination: DestinationStopNameZh }));
          commit('updateBusRoutes', { status: 'success', data: routes });
        })
        .catch((error) => {
          console.log(error);
          commit('updateBusRoutes', { status: 'error', data: [] });
        });
    },
    asyncUpdateBusRouteStops({ commit, state: { searchCity, routeInfo: { id, name } } }) {
      commit('updateBusRouteStops', { status: 'pending', data: {} });

      const getStopOfRoute = () => {
        const cityFilter = ['Taipei', 'Tainan', 'NewTaipei', 'Taoyuan', 'Taichung'];
        const partialURL = cityFilter.includes(searchCity) ? 'Display' : '';
        return tdxAjax.get(`${partialURL}StopOfRoute/City/${searchCity}/${name}`, {
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
        return tdxAjax.get(`EstimatedTimeOfArrival${partialURL}/City/${searchCity}/${name}`, {
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
        return tdxAjax.get(`RealTimeNearStop${partialURL}/City/${searchCity}/${name}`, {
          params: {
            $select: 'PlateNumb,StopName',
            $filter: `RouteID eq '${id}'`,
            $format: 'JSON'
          }
        });
      }

      const getVehicle = () => {
        return tdxAjax.get(`Vehicle/City/${searchCity}`, {
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
            comeStops[index].state = A2EventType ? '?????????' : '?????????';
          }
          for (const { PlateNumb, StopName: { Zh_tw }, A2EventType } of backRealTimeData) {
            const index = backStops.findIndex(stop => stop.name === Zh_tw);
            backStops[index].plateNumber = PlateNumb;
            backStops[index].state = A2EventType ? '?????????' : '?????????';
          }

          // accessible
          for (const { PlateNumb } of accessibleBuses) {
            const comeIndex = comeStops.map(stop => stop.plateNumber).indexOf(PlateNumb);
            comeIndex !== -1 && (comeStops[comeIndex].accessible = true);
            const backIndex = backStops.map(stop => stop.plateNumber).indexOf(PlateNumb);
            backIndex !== -1 && (backStops[backIndex].accessible = true);
          }

          commit('updateBusRouteStops', { status: 'success', data: { comeStops, backStops } });
        })
        .catch((error) => {
          console.log(error);
          commit('updateBusRouteStops', { status: 'error', data: {} });
        });
    },
    asyncUpdateNearbyStations({ commit }, { lat, lon }) {
      commit('updateNearbyStations', { status: 'pending', data: [] });
      tdxAjax
        .get('Station/NearBy', {
          params: {
            $spatialFilter: `nearby(${lat}, ${lon}, 1000)`,
            $format: 'JSON'
          }
        })
        .then((response) => {
          const stops = response.data.map(({ StationID, StationName: { Zh_tw }, Stops }) => {
            const routes = Stops.map(({ RouteName: { Zh_tw } }) => Zh_tw).join(', ');
            return { id: StationID, name: Zh_tw, routes };
          });
          commit('updateNearbyStations', { status: 'success', data: stops });
        })
        .catch((error) => {
          console.log(error);
          commit('updateNearbyStations', { status: 'error', data: [] });
        });
    },
    asyncUpdateNearbyStationRoutes({ commit, state: { searchCity, stationInfo: { id } } }) {
      commit('updateNearbyStationRoutes', { status: 'pending', data: [] });
      tdxAjax
        .get(`Route/City/${searchCity}/PassThrough/Station/${id}`, {
          params: {
            $select: 'RouteID,RouteName,DepartureStopNameZh,DestinationStopNameZh',
            $format: 'JSON'
          }
        })
        .then((response) => {
          const routes = response.data.map(({ RouteID, RouteName: { Zh_tw }, DepartureStopNameZh, DestinationStopNameZh }) => ({ id: RouteID, name: Zh_tw, departure: DepartureStopNameZh, destination: DestinationStopNameZh }));
          commit('updateNearbyStationRoutes', { status: 'success', data: routes });
        })
        .catch((error) => {
          console.log(error);
          commit('updateNearbyStationRoutes', { status: 'error', data: [] });
        });
    }
  },
  modules: {},
});
