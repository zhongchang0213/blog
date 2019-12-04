import axios from 'axios';

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
    return data;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios
