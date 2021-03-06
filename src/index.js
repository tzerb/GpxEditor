/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import routesNoFileApi from './routesNoFileApi';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

var routes2 = routesNoFileApi;

if (window.File && window.FileReader && window.FileList && window.Blob) {
  routes2 = routes;
} else {
  routes2 = routesNoFileApi;
}
render(
  <Provider store={store}>
    <Router history={history} routes={routes2} />
  </Provider>, document.getElementById('app')
);
