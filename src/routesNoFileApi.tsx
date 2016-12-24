import * as React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NoFileApiSupportPage from './components/NoFileApiSupport';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={NoFileApiSupportPage}/>
  </Route>
);
