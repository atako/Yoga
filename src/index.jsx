import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import initList from './initList';
import AsansList from './containers/asansList';

const reducer = (state) => {
  return state;
}

const store = createStore(reducer, initList);


ReactDOM.render(
  <Provider store={store}>
    <AsansList />
  </Provider>,
  document.getElementById('root')
);