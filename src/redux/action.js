import { message } from 'antd';

import { SHOW_LOGIN, HIDE_LOGIN, USER_LOGIN } from './actionType';
import { login } from '../apis/user'

// 登录注册弹窗
export const showLogin = () => ({
  type: SHOW_LOGIN,
  data: true
});

export const hideLogin = () => ({
  type: HIDE_LOGIN,
  data: false
});

// 用户相关
export const user = (data) => ({
  type: USER_LOGIN,
  data
});

export const loginAsync = (data) => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(user({
        name: 'zc'
      }))
    },3000)
    // let res = await login(data);
    // console.log(res)
    // if (res) {
    //   dispatch(user(res));
    // } else {
    //   message.error(res);
    // }
  };
};
