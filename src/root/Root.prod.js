import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { hashHistory, browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { fromJS } from 'immutable';
import routes from '../router';

import configureStore from '../store';
import initData from '../api/initData';

const initialState = window ? window.__INITDATA__ || initData : {};
const store = configureStore(fromJS(initialState));
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState(state) {
    return state.get('routing').toJS();
  },
});
export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}
