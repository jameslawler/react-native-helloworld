import { combineReducers } from 'redux';
import * as newsReducer from './news';
import * as navigationReducer from './navigation';

export default combineReducers(Object.assign(
  newsReducer,
  navigationReducer,
))