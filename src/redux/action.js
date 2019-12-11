import cookie from 'js-cookie';

import { SHOW_LOGIN, HIDE_LOGIN, USER_LOGIN, USER_LOGINOUT } from './actionType';
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
export const userLogin = (data) => ({
  type: USER_LOGIN,
  data
});

export const userLoginOut = () => ({
  type: USER_LOGINOUT
});

export const loginAsync = (data) => {
  return async dispatch => {
    let res = await login(data);
    if (res.status === '1') {
      cookie.set('X-TOKEN', res.data._id, { expires: 7 });
      dispatch(hideLogin());
      dispatch(userLogin(res.data));
    };
    return res;
  };
};
