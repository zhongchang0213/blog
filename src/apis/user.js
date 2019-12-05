import axios from './server';

export const register = (data) => {
  return axios.post('/user/register', data);
};

export const login = (data) => {
  return axios.post('/user/login', data);
};
