import React from 'react';
import { Router, Route } from 'dva/router';
import Home from './routes/Home';

import NotFound from './routes/NotFound';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Home} />
      {/* 产品 */}
      <Route path="/pm" component={Home} />
      {/* 设计 */}
      <Route path="/designer" component={Home} />
      {/* 运营 */}
      <Route path="/operator" component={Home} />
      {/* 市场 */}
      <Route path="/marketer" component={Home} />
      {/* 测试 */}
      <Route path="/tester" component={Home} />
      {/* 程序员 */}
      <Route path="/web" component={Home} />

      <Route path="*" component={NotFound} />
    </Router>
  );
}

export default RouterConfig;
