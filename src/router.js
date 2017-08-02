import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/Home';

import NotFound from "./routes/NotFound";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

export default RouterConfig;
