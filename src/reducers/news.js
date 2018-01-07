import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const newsItems = createReducer([], {
  [types.FETCH_NEWS](state, action) {
    return [
      { id: 1, title: 'First news item'},
      { id: 2, title: 'Second news item'},
      { id: 3, title: 'Third news item'},
      { id: 4, title: 'Fourth news item'},
    ];
  }
});