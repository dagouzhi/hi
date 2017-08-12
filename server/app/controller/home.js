'use strict';
const route = require('dva/router');
const renderToString = require('react-dom/server').renderToString;
const match = route.route;
const RoutingContext = route.RoutingContext;
const createMemoryHistory = route.createMemoryHistory;

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
      console.log(ctx.url)
	    const data = { html: 'egg' };
	    // render a template, path relate to `/dist/view`
	    yield this.ctx.render('index.html', data);
    }
  }
  return HomeController;
};
