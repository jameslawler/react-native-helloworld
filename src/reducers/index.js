import { combineReducers } from 'redux';
import * as datesReducer from './dates';

export default combineReducers(Object.assign(
  datesReducer,
))