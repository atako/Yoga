import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AsansList from './containers/asansList';
import EditAsansList from './containers/asansListEdit';
import NewAsana from './components/newAsana';
import FullAsana from './containers/fullAsana';
import EditAsana from './components/asanaEdit';
import PlanList from './containers/listPlans';
import PlanDetail from './containers/detailPlan';
import Menu from './components/menu';
import reducers from './reducers';
import { MuiThemeProvider } from 'material-ui/styles';
import promise from 'redux-promise';
import logger from 'redux-logger';

const middleware = [ promise, logger ];
// const createStoreWithMiddleware = applyMiddleware(logger, promise)(createStore);

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(...middleware))}>
    <BrowserRouter>
    <MuiThemeProvider>
      <div>
        <Menu />
        <Switch>
          {/* <Route path='/new' component={NewAsana} /> */}
          <Route path="/asans/edit/:id" component={EditAsana} />
          <Route path="/asans/:id" component={FullAsana} />
          <Route path="/plan/:id" component={PlanDetail} />
          <Route path="/new" component={NewAsana} />
          <Route path="/edit" component={EditAsansList} />
          <Route path="/plan" component={PlanList} />
          <Route path="/" component={AsansList} />
        </Switch>
      </div>
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));