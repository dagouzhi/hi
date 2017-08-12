const createElement = require('react').createElement;
const match = require('dva/router').match;
const RouterContext = require('dva/router').RouterContext;
const createMemoryHistory = require('dva/router').createMemoryHistory;
const renderToString = require('react-dom/server').renderToString;
require('../../../../dist/index');

const app = global.__APP__;
const routes = global.__ROUTER__;
const ReactApp = app.start(null);

module.exports = (ctx) => {
  return new Promise((resolve, reject) => {
    match({
      routes,
      location: ctx.url,
    }, function(err, redirectLocation, renderProps) {
      if (err) {
        reject(`Internal Server Error ${err}`);
      }
      if (redirectLocation) {
        ctx.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      if (renderProps) {
        // const html = renderToString(createApp.start()({ renderProps }));
        // resolve({ url: ctx.url, html: html, initialState: JSON.stringify({}) })
      }
      // html = renderToString(createElement(GTest)) || '';
      const html = renderToString(createElement(ReactApp)) || '';
      resolve({ url: ctx.url, html: html, initialState: JSON.stringify({}) })
      // ctx.status(404).send('Not found')
    });
  });
}
