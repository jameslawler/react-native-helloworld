import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const newsItems = createReducer([], {
  [types.CLEAR_NEWS](state, action) {
    return [];
  },
  [types.SET_NEWS](state, action) {
    let newState = [];
    let itemCount = 0;
    state.news.forEach(item => {
      newState.push({
        id: ++itemCount,
        headline: item.title,
        story: item.description,
        image: item.thumbnail
      })
    });
    return newState;
  }
});