'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = {
	  view: {
		  defaultViewEngine: 'nunjucks',
		  root: [
			  path.join(appInfo.baseDir, '../dist'),
		  ].join(',')
	  },
	  static: {
		  prefix: "/",
		  dir: path.join(appInfo.baseDir, '../dist'),
		  dynamic: true,
		  preload: false,
		  buffer: true,
		  maxFiles: 1000,
		  maxAge: 3600,
	  },
  };

  // should change to your own
  config.keys = appInfo.name + '_1501752624262_3097';

  // add your config here

  return config;
};

exports.view = {
	defaultViewEngine: 'nunjucks',
	mapping: {
		'.html': 'nunjucks',
	},
};
