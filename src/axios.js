import axios from "axios";
import jsSHA from "jssha";

const GetAuthorizationHeader = () => {
  const AppID = '0ae7653304de47e2a9382198040b89d7';
  const AppKey = '7Ni5N5lqgUzkbfhhGEYt2ozGVRU';

  const GMTString = new Date().toGMTString();
  const ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  const HMAC = ShaObj.getHMAC('B64');
  const Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

  return { 'Authorization': Authorization, 'X-Date': GMTString };
}

const service = axios.create({
  baseURL: "https://ptx.transportdata.tw/MOTC/v2/Bus/",
  timeout: 5000,
  headers: GetAuthorizationHeader()
});

service.interceptors.request.use(
  (config) => {
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