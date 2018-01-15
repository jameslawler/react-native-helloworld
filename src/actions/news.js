import * as types from './types';

var DOMParser = require('xmldom').DOMParser;

export function clearNews() {
  return {
    type: types.CLEAR_NEWS
  }
}

export function fetchNews() {
  return (dispatch, getState) => {
    return fetch('http://www.nasa.gov/rss/dyn/breaking_news.rss')
    .then((response) => response.text())
    .then((responseData) => extractData(responseData))
    .then((rss) => {
      dispatch(setNews( {news: rss }));
    });
  }
}

export function setNews( { news }) {
  return {
    type: types.SET_NEWS,
    news
  }
}

function extractData(text) {
  var doc = new DOMParser().parseFromString(text, 'text/xml');
  var items_array = [];
  var items = doc.getElementsByTagName('item');

  for (var i=0; i < items.length; i++) {
    items_array.push({
      title: items[i].getElementsByTagName('title')[0].lastChild.data,
      description: items[i].getElementsByTagName('description')[0].lastChild.data,
      thumbnail: items[i].getElementsByTagName('enclosure')[0].getAttribute('url'),
      link: items[i].getElementsByTagName('link')[0].textContent,
      date: items[i].getElementsByTagName('pubDate')[0].textContent,
    })
  }

  return items_array;
}