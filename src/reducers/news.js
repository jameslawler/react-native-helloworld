import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const newsItems = createReducer([], {
  [types.FETCH_NEWS](state, action) {
    return [
      { id: 1,
        headline: 'First news item',
        story: 'This is the much longer story so that it fills in more space than the headline.',
        image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/16F07/production/_99495939_d2326f47-9711-43fd-b375-cbfc6c0a8c2d.jpg'},
      { id: 2,
        headline: 'Second news item',
        story: 'This is the much longer story so that it fills in more space than the headline.',
        image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/16F07/production/_99495939_d2326f47-9711-43fd-b375-cbfc6c0a8c2d.jpg'},
      { id: 3,
        headline: 'Third news item',
        story: 'This is the much longer story so that it fills in more space than the headline.',
        image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/16F07/production/_99495939_d2326f47-9711-43fd-b375-cbfc6c0a8c2d.jpg'},
      { id: 4,
        headline: 'Fourth news item',
        story: 'This is the much longer story so that it fills in more space than the headline.',
        image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/16F07/production/_99495939_d2326f47-9711-43fd-b375-cbfc6c0a8c2d.jpg'},
    ];
  },
  [types.CLEAR_NEWS](state, action) {
    return [];
  }
});