import axios from 'axios';

import store from '../redux/store';
import { userLoginOut } from '../redux/action'

axios.defaults.baseURL = '/blog';

// 请求前拦截
axios.interceptors.request.use(
  config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 返回后拦截
axios.interceptors.response.use(
  data => {
    let res = data.data;
    if (res.status === '4') {
      store.dispatch(userLoginOut())
    }
    return res;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios
