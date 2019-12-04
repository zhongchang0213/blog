import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { visible, userInfo } from './reducers';

const store = createStore(
  combineReducers({
    visible,
    userInfo
  }),
  applyMiddleware(thunk)
);

export default store;
