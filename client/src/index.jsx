import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AsansList from './containers/asansList';
import NewAsana from './components/newAsana';
import FullAsana from './containers/fullAsana';
import EditAsana from './components/asanaEdit';
import PlanList from './containers/listPlans';
import MaterialTest from './components/materialTest';
import Menu from './components/menu';
import reducers from './reducers';
import { MuiThemeProvider } from 'material-ui/styles';
import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <MuiThemeProvider>
      <div>
        <Menu />
        <Switch>
          <Route path="/asans/edit/:id" component={EditAsana} />
          <Route path="/asans/:id" component={FullAsana} />
          <Route path="/plan" component={PlanList} />
          <Route path='/new' component={NewAsana} />
          <Route path="/" component={AsansList} />
        </Switch>
      </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));