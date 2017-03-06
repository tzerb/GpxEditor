import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import NotFoundPage from './components/NotFoundPage';
import GetGpxFilePage from './containers/GetGpxFilePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="GetGpxFilePage" component={GetGpxFilePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route> 
);
