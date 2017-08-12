require('babel-register')({
  "presets": [
    "es2015",
    "react",
    "stage-0",
  ],
  "plugins": [
    "add-module-exports",
    "transform-runtime"
  ]
});
var hook = require('css-modules-require-hook');
var stylus = require('stylus');

hook({
  extensions: ['.css', '.less'],
  generateScopedName: '[local]___[hash:base64:5]',
  preprocessCss: function (css, filename) {
    return stylus(css)
      .set('filename', filename)
      .render();
  },
});

const ssr = require('./ssrMiddleware');

module.exports = ssr;
