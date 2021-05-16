import axios from 'axios';
import store from '../store';


const baseURL = process.env.VUE_APP_BASE_URL;

const instance = axios.create({
    baseURL
})

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = store.state.auth.user.token;
    config.headers['Authorization'] = token;
    return config;
  });


export default instance