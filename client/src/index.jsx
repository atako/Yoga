import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import AsansList from './containers/asansList';
import Menu from './components/menu';
import reducers from './reducers';

import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// console.log(createStore(reducers).getState());
// const store = createStore(reducer, {});

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <div>
      <Menu />
      <AsansList />
    </div>
    
  </Provider>,
  document.getElementById('root')
);