'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
	    const data = { name: 'egg' };
	    // render a template, path relate to `/dist/view`
	    yield this.ctx.render('index.html', data);
    }
  }
  return HomeController;
};
