import axios from "axios";

const BASE_URL = "https://study-padi-api-113537a2b48f.herokuapp.com/api/v1";

const client = axios.create({ baseURL: BASE_URL });

client.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Handle request errors
    return Promise.reject(error);
  }
);

export default client;
