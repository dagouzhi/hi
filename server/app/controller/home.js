'use strict';
const createApp = require('../../libs/SSR/index.js');

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
	    const data = yield createApp(ctx);
	    // render a template, path relate to `/dist/view`
	    yield this.ctx.render('index.html', { html: data.html });
    }
  }
  return HomeController;
};
