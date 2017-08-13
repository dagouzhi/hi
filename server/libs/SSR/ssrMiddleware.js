import React, { createElement } from 'react';
import { match, RouterContext, createMemoryHistory } from 'dva/router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
// import { app, routes } from '../../../src/index';
import '../../../dist/index';

const app = global.__APP__;
const routes = global.__ROUTER__;
const ReactApp = app.start(null);

export default (ctx) => {
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

const styles = {};

class GTest extends React.Component {
  render() {
    return (
      <div className="GFooter-wrap">
        test
      </div>
    );
  }
}