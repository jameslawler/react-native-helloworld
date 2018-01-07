import * as types from './types';

export function clearNews() {
  return {
    type: types.CLEAR_NEWS
  }
}

export function fetchNews() {
  return {
    type: types.FETCH_NEWS
  }
}