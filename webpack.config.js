const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function webpackConfig(webpackConfig, env) {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      title: '工具链',
      filename: 'index.html',
      template: './public/index.ejs',
      hash: true,
      production: true,
    }),
  );
  return webpackConfig;
};
