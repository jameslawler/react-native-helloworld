import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const dateTime = createReducer('', {
  [types.GET_DATETIME](state, action) {
    return new Date().toString();
  }
});