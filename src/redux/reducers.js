import cookie from 'js-cookie';

import { SHOW_LOGIN, HIDE_LOGIN, USER_LOGIN, USER_LOGINOUT } from './actionType';

// 控制登录注册弹窗
export const visible = (state=false, action) => {
  switch( action.type ) {
    case SHOW_LOGIN:
      return true;
    case HIDE_LOGIN:
      return false;
    default: 
      return state
  };
};

//用户信息
export const userInfo = (state={}, action) => {
  switch( action.type ) {
    case USER_LOGIN:
      return {...action.data, isLogin: cookie.get('X-TOKEN')};
    case USER_LOGINOUT: 
      cookie.remove('X-TOKEN');
      return {};
    default: 
      return {...state, isLogin: cookie.get('X-TOKEN')};
  };
};
