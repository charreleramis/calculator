import axios from "axios";
import { getAPIBaseUrl } from "../config/env";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Axios Instance
const Api = axios.create({
  baseURL: getAPIBaseUrl(),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

Api.interceptors.request.use(
  async (config) => {
    const userAuth = await AsyncStorage.getItem('userAuth');
    if (userAuth) {
      config.headers['x-auth-token'] = userAuth;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error)
  }
);

export default Api;