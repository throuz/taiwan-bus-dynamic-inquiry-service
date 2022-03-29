import axios from "axios";

const service = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/",
  timeout: 5000
});

service.interceptors.request.use(
  (config) => {
    config.params.key = 'AIzaSyDGk7avnAZ4WixJi8zQhq07_vpEgz42N2Q';
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;