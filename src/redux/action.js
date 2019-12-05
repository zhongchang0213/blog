import cookie from 'js-cookie';

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
    let res = await login(data);
    if (res.status === '1') {
      cookie.set('X-TOKEN', '12121212', { expires: 7 });
      dispatch(hideLogin());
      dispatch(user(res));
    };
    return res;
  };
};
