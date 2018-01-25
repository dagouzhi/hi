webpackJsonp([231608221292675],{

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.apiRunner = apiRunner;
	exports.apiRunnerAsync = apiRunnerAsync;
	var plugins = [{
	  plugin: __webpack_require__(254),
	  options: { "plugins": [] }
	}];
	// During bootstrap, we write requires at top of this file which looks
	// basically like:
	// var plugins = [
	//   require('/path/to/plugin1/gatsby-browser.js'),
	//   require('/path/to/plugin2/gatsby-browser.js'),
	// ]
	
	function apiRunner(api, args, defaultReturn) {
	  var results = plugins.map(function (plugin) {
	    if (plugin.plugin[api]) {
	      var result = plugin.plugin[api](args, plugin.options);
	      return result;
	    }
	  });
	
	  // Filter out undefined results.
	  results = results.filter(function (result) {
	    return typeof result !== "undefined";
	  });
	
	  if (results.length > 0) {
	    return results;
	  } else if (defaultReturn) {
	    return [defaultReturn];
	  } else {
	    return [];
	  }
	}
	
	function apiRunnerAsync(api, args, defaultReturn) {
	  return plugins.reduce(function (previous, next) {
	    return next.plugin[api] ? previous.then(function () {
	      return next.plugin[api](args, next.options);
	    }) : previous;
	  }, Promise.resolve());
	}

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _exports$json;
	
	// prefer default export if available
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	
	exports.components = {
	  "component---src-pages-404-js": __webpack_require__(399),
	  "component---src-pages-designer-js": __webpack_require__(400),
	  "component---src-pages-index-js": __webpack_require__(401),
	  "component---src-pages-marketer-js": __webpack_require__(402),
	  "component---src-pages-operator-js": __webpack_require__(403),
	  "component---src-pages-page-2-js": __webpack_require__(404),
	  "component---src-pages-tester-js": __webpack_require__(405),
	  "component---src-pages-web-js": __webpack_require__(406)
	};
	
	exports.json = (_exports$json = {
	  "layout-index.json": __webpack_require__(28),
	  "404.json": __webpack_require__(407)
	}, _exports$json["layout-index.json"] = __webpack_require__(28), _exports$json["designer.json"] = __webpack_require__(409), _exports$json["layout-index.json"] = __webpack_require__(28), _exports$json["index.json"] = __webpack_require__(410), _exports$json["layout-index.json"] = __webpack_require__(28), _exports$json["marketer.json"] = __webpack_require__(411), _exports$json["layout-index.json"] = __webpack_require__(28), _exports$json["operator.json"] = __webpack_require__(412), _exports$json["layout-index.json"] = __webpack_require__(28), _exports$json["page-2.json"] = __webpack_require__(413), _exports$json["layout-index.json"] = __webpack_require__(28), _exports$json["tester.json"] = __webpack_require__(414), _exports$json["layout-index.json"] = __webpack_require__(28), _exports$json["web.json"] = __webpack_require__(415), _exports$json["layout-index.json"] = __webpack_require__(28), _exports$json["404-html.json"] = __webpack_require__(408), _exports$json);
	
	exports.layouts = {
	  "layout---index": __webpack_require__(398)
	};

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(5);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _loader = __webpack_require__(147);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	var _emitter = __webpack_require__(73);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _apiRunnerBrowser = __webpack_require__(95);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DefaultLayout = function DefaultLayout(_ref) {
	  var children = _ref.children;
	  return _react2.default.createElement(
	    "div",
	    null,
	    children()
	  );
	};
	
	// Pass pathname in as prop.
	// component will try fetching resources. If they exist,
	// will just render, else will render null.
	
	var ComponentRenderer = function (_React$Component) {
	  _inherits(ComponentRenderer, _React$Component);
	
	  function ComponentRenderer(props) {
	    _classCallCheck(this, ComponentRenderer);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this));
	
	    var location = props.location;
	
	    // Set the pathname for 404 pages.
	    if (!_loader2.default.getPage(location.pathname)) {
	      location = _extends({}, location, {
	        pathname: "/404.html"
	      });
	    }
	
	    _this.state = {
	      location: location,
	      pageResources: _loader2.default.getResourcesForPathname(location.pathname)
	    };
	    return _this;
	  }
	
	  ComponentRenderer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this2 = this;
	
	    // During development, always pass a component's JSON through so graphql
	    // updates go through.
	    if (false) {
	      if (nextProps && nextProps.pageResources && nextProps.pageResources.json) {
	        this.setState({ pageResources: nextProps.pageResources });
	      }
	    }
	    if (this.state.location.pathname !== nextProps.location.pathname) {
	      var pageResources = _loader2.default.getResourcesForPathname(nextProps.location.pathname);
	      if (!pageResources) {
	        var location = nextProps.location;
	
	        // Set the pathname for 404 pages.
	        if (!_loader2.default.getPage(location.pathname)) {
	          location = _extends({}, location, {
	            pathname: "/404.html"
	          });
	        }
	
	        // Page resources won't be set in cases where the browser back button
	        // or forward button is pushed as we can't wait as normal for resources
	        // to load before changing the page.
	        _loader2.default.getResourcesForPathname(location.pathname, function (pageResources) {
	          _this2.setState({
	            location: location,
	            pageResources: pageResources
	          });
	        });
	      } else {
	        this.setState({
	          location: nextProps.location,
	          pageResources: pageResources
	        });
	      }
	    }
	  };
	
	  ComponentRenderer.prototype.componentDidMount = function componentDidMount() {
	    var _this3 = this;
	
	    // Listen to events so when our page gets updated, we can transition.
	    // This is only useful on delayed transitions as the page will get rendered
	    // without the necessary page resources and then re-render once those come in.
	    _emitter2.default.on("onPostLoadPageResources", function (e) {
	      if (_loader2.default.getPage(_this3.state.location.pathname) && e.page.path === _loader2.default.getPage(_this3.state.location.pathname).path) {
	        _this3.setState({ pageResources: e.pageResources });
	      }
	    });
	  };
	
	  ComponentRenderer.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
	    // 404
	    if (!nextState.pageResources) {
	      return true;
	    }
	
	    // Check if the component or json have changed.
	    if (!this.state.pageResources && nextState.pageResources) {
	      return true;
	    }
	
	    if (this.state.pageResources.component !== nextState.pageResources.component) {
	      return true;
	    }
	
	    if (this.state.pageResources.json !== nextState.pageResources.json) {
	      return true;
	    }
	
	    // Check if location has changed on a page using internal routing
	    // via matchPath configuration.
	    if (this.state.location.key !== nextState.location.key && nextState.pageResources.page && (nextState.pageResources.page.matchPath || nextState.pageResources.page.path)) {
	      return true;
	    }
	
	    return false;
	  };
	
	  ComponentRenderer.prototype.render = function render() {
	    var pluginResponses = (0, _apiRunnerBrowser.apiRunner)("replaceComponentRenderer", {
	      props: _extends({}, this.props, { pageResources: this.state.pageResources }),
	      loader: _loader.publicLoader
	    });
	    var replacementComponent = pluginResponses[0];
	    // If page.
	    if (this.props.page) {
	      if (this.state.pageResources) {
	        return replacementComponent || (0, _react.createElement)(this.state.pageResources.component, _extends({
	          key: this.props.location.pathname
	        }, this.props, this.state.pageResources.json));
	      } else {
	        return null;
	      }
	      // If layout.
	    } else if (this.props.layout) {
	      return replacementComponent || (0, _react.createElement)(this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : DefaultLayout, _extends({
	        key: this.state.pageResources && this.state.pageResources.layout ? this.state.pageResources.layout : "DefaultLayout"
	      }, this.props));
	    } else {
	      return null;
	    }
	  };
	
	  return ComponentRenderer;
	}(_react2.default.Component);
	
	ComponentRenderer.propTypes = {
	  page: _propTypes2.default.bool,
	  layout: _propTypes2.default.bool,
	  location: _propTypes2.default.object
	};
	
	exports.default = ComponentRenderer;
	module.exports = exports["default"];

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _mitt = __webpack_require__(443);
	
	var _mitt2 = _interopRequireDefault(_mitt);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var emitter = (0, _mitt2.default)();
	module.exports = emitter;

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _reactRouterDom = __webpack_require__(69);
	
	var _stripPrefix = __webpack_require__(148);
	
	var _stripPrefix2 = _interopRequireDefault(_stripPrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// TODO add tests especially for handling prefixed links.
	var pageCache = {};
	
	module.exports = function (pages) {
	  var pathPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	  return function (rawPathname) {
	    var pathname = decodeURIComponent(rawPathname);
	
	    // Remove the pathPrefix from the pathname.
	    var trimmedPathname = (0, _stripPrefix2.default)(pathname, pathPrefix);
	
	    // Remove any hashfragment
	    if (trimmedPathname.split("#").length > 1) {
	      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
	    }
	
	    // Remove search query
	    if (trimmedPathname.split("?").length > 1) {
	      trimmedPathname = trimmedPathname.split("?").slice(0, -1).join("");
	    }
	
	    if (pageCache[trimmedPathname]) {
	      return pageCache[trimmedPathname];
	    }
	
	    var foundPage = void 0;
	    // Array.prototype.find is not supported in IE so we use this somewhat odd
	    // work around.
	    pages.some(function (page) {
	      if (page.matchPath) {
	        // Try both the path and matchPath
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, { path: page.path }) || (0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.matchPath
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      } else {
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.path,
	          exact: true
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	
	        // Finally, try and match request with default document.
	        if ((0, _reactRouterDom.matchPath)(trimmedPathname, {
	          path: page.path + "index.html"
	        })) {
	          foundPage = page;
	          pageCache[trimmedPathname] = page;
	          return true;
	        }
	      }
	
	      return false;
	    });
	
	    return foundPage;
	  };
	};

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createBrowserHistory = __webpack_require__(116);
	
	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);
	
	var _apiRunnerBrowser = __webpack_require__(95);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pluginResponses = (0, _apiRunnerBrowser.apiRunner)("replaceHistory");
	var replacementHistory = pluginResponses[0];
	var history = replacementHistory || (0, _createBrowserHistory2.default)();
	module.exports = history;

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(178698757827068, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(424) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(254022195166212, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(425) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(33665995640937, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(426) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(142629428675168, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(427) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(60335399758886, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(118) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(41304687945260, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(428) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(279603704408982, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(429) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(135728916539164, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(430) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(58127010866573, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(431) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(55557699530382, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(432) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(114276838955818, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(251) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {"use strict";
	
	exports.__esModule = true;
	exports.publicLoader = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _findPage = __webpack_require__(249);
	
	var _findPage2 = _interopRequireDefault(_findPage);
	
	var _emitter = __webpack_require__(73);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _stripPrefix = __webpack_require__(148);
	
	var _stripPrefix2 = _interopRequireDefault(_stripPrefix);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var findPage = void 0;
	
	var syncRequires = {};
	var asyncRequires = {};
	var pathScriptsCache = {};
	var resourceStrCache = {};
	var resourceCache = {};
	var pages = [];
	// Note we're not actively using the path data atm. There
	// could be future optimizations however around trying to ensure
	// we load all resources for likely-to-be-visited paths.
	var pathArray = [];
	var pathCount = {};
	var pathPrefix = "";
	var resourcesArray = [];
	var resourcesCount = {};
	var preferDefault = function preferDefault(m) {
	  return m && m.default || m;
	};
	var prefetcher = void 0;
	var inInitialRender = true;
	var fetchHistory = [];
	var failedPaths = {};
	var failedResources = {};
	var MAX_HISTORY = 5;
	
	// Prefetcher logic
	if (true) {
	  prefetcher = __webpack_require__(252)({
	    getNextQueuedResources: function getNextQueuedResources() {
	      return resourcesArray.slice(-1)[0];
	    },
	    createResourceDownload: function createResourceDownload(resourceName) {
	      fetchResource(resourceName, function () {
	        resourcesArray = resourcesArray.filter(function (r) {
	          return r !== resourceName;
	        });
	        prefetcher.onResourcedFinished(resourceName);
	      });
	    }
	  });
	  _emitter2.default.on("onPreLoadPageResources", function (e) {
	    prefetcher.onPreLoadPageResources(e);
	  });
	  _emitter2.default.on("onPostLoadPageResources", function (e) {
	    prefetcher.onPostLoadPageResources(e);
	  });
	}
	
	var sortResourcesByCount = function sortResourcesByCount(a, b) {
	  if (resourcesCount[a] > resourcesCount[b]) {
	    return 1;
	  } else if (resourcesCount[a] < resourcesCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var sortPagesByCount = function sortPagesByCount(a, b) {
	  if (pathCount[a] > pathCount[b]) {
	    return 1;
	  } else if (pathCount[a] < pathCount[b]) {
	    return -1;
	  } else {
	    return 0;
	  }
	};
	
	var fetchResource = function fetchResource(resourceName) {
	  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	  if (resourceStrCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceStrCache[resourceName]);
	    });
	  } else {
	    // Find resource
	    var resourceFunction = void 0;
	    if (resourceName.slice(0, 12) === "component---") {
	      resourceFunction = asyncRequires.components[resourceName];
	    } else if (resourceName.slice(0, 9) === "layout---") {
	      resourceFunction = asyncRequires.layouts[resourceName];
	    } else {
	      resourceFunction = asyncRequires.json[resourceName];
	    }
	
	    // Download the resource
	    resourceFunction(function (err, executeChunk) {
	      resourceStrCache[resourceName] = executeChunk;
	      fetchHistory.push({
	        resource: resourceName,
	        succeeded: !err
	      });
	
	      if (!failedResources[resourceName]) {
	        failedResources[resourceName] = err;
	      }
	
	      fetchHistory = fetchHistory.slice(-MAX_HISTORY);
	      cb(err, executeChunk);
	    });
	  }
	};
	
	var getResourceModule = function getResourceModule(resourceName, cb) {
	  if (resourceCache[resourceName]) {
	    process.nextTick(function () {
	      cb(null, resourceCache[resourceName]);
	    });
	  } else if (failedResources[resourceName]) {
	    process.nextTick(function () {
	      cb(failedResources[resourceName]);
	    });
	  } else {
	    fetchResource(resourceName, function (err, executeChunk) {
	      if (err) {
	        cb(err);
	      } else {
	        var module = preferDefault(executeChunk());
	        resourceCache[resourceName] = module;
	        cb(err, module);
	      }
	    });
	  }
	};
	
	var appearsOnLine = function appearsOnLine() {
	  var isOnLine = navigator.onLine;
	  if (typeof isOnLine === "boolean") {
	    return isOnLine;
	  }
	
	  // If no navigator.onLine support assume onLine if any of last N fetches succeeded
	  var succeededFetch = fetchHistory.find(function (entry) {
	    return entry.succeeded;
	  });
	  return !!succeededFetch;
	};
	
	var handleResourceLoadError = function handleResourceLoadError(path, message) {
	  console.log(message);
	
	  if (!failedPaths[path]) {
	    failedPaths[path] = message;
	  }
	
	  if (appearsOnLine() && window.location.pathname.replace(/\/$/g, "") !== path.replace(/\/$/g, "")) {
	    window.location.pathname = path;
	  }
	};
	
	var mountOrder = 1;
	var queue = {
	  empty: function empty() {
	    pathArray = [];
	    pathCount = {};
	    resourcesCount = {};
	    resourcesArray = [];
	    pages = [];
	    pathPrefix = "";
	  },
	  addPagesArray: function addPagesArray(newPages) {
	    pages = newPages;
	    if (true) {
	      if (true) pathPrefix = ("/hi");
	    }
	    findPage = (0, _findPage2.default)(newPages, pathPrefix);
	  },
	  addDevRequires: function addDevRequires(devRequires) {
	    syncRequires = devRequires;
	  },
	  addProdRequires: function addProdRequires(prodRequires) {
	    asyncRequires = prodRequires;
	  },
	  dequeue: function dequeue() {
	    return pathArray.pop();
	  },
	  enqueue: function enqueue(rawPath) {
	    // Check page exists.
	    var path = (0, _stripPrefix2.default)(rawPath, pathPrefix);
	    if (!pages.some(function (p) {
	      return p.path === path;
	    })) {
	      return false;
	    }
	
	    var mountOrderBoost = 1 / mountOrder;
	    mountOrder += 1;
	    // console.log(
	    // `enqueue "${path}", mountOrder: "${mountOrder}, mountOrderBoost: ${mountOrderBoost}`
	    // )
	
	    // Add to path counts.
	    if (!pathCount[path]) {
	      pathCount[path] = 1;
	    } else {
	      pathCount[path] += 1;
	    }
	
	    // Add path to queue.
	    if (!queue.has(path)) {
	      pathArray.unshift(path);
	    }
	
	    // Sort pages by pathCount
	    pathArray.sort(sortPagesByCount);
	
	    // Add resources to queue.
	    var page = findPage(path);
	    if (page.jsonName) {
	      if (!resourcesCount[page.jsonName]) {
	        resourcesCount[page.jsonName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.jsonName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the JSON resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.jsonName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.jsonName);
	      }
	    }
	    if (page.componentChunkName) {
	      if (!resourcesCount[page.componentChunkName]) {
	        resourcesCount[page.componentChunkName] = 1 + mountOrderBoost;
	      } else {
	        resourcesCount[page.componentChunkName] += 1 + mountOrderBoost;
	      }
	
	      // Before adding, checking that the component resource isn't either
	      // already queued or been downloading.
	      if (resourcesArray.indexOf(page.componentChunkName) === -1 && !resourceStrCache[page.jsonName]) {
	        resourcesArray.unshift(page.componentChunkName);
	      }
	    }
	
	    // Sort resources by resourcesCount.
	    resourcesArray.sort(sortResourcesByCount);
	    if (true) {
	      prefetcher.onNewResourcesAdded();
	    }
	
	    return true;
	  },
	  getResources: function getResources() {
	    return {
	      resourcesArray: resourcesArray,
	      resourcesCount: resourcesCount
	    };
	  },
	  getPages: function getPages() {
	    return {
	      pathArray: pathArray,
	      pathCount: pathCount
	    };
	  },
	  getPage: function getPage(pathname) {
	    return findPage(pathname);
	  },
	  has: function has(path) {
	    return pathArray.some(function (p) {
	      return p === path;
	    });
	  },
	  getResourcesForPathname: function getResourcesForPathname(path) {
	    var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
	
	    if (inInitialRender && navigator && navigator.serviceWorker && navigator.serviceWorker.controller && navigator.serviceWorker.controller.state === "activated") {
	      // If we're loading from a service worker (it's already activated on
	      // this initial render) and we can't find a page, there's a good chance
	      // we're on a new page that this (now old) service worker doesn't know
	      // about so we'll unregister it and reload.
	      if (!findPage(path)) {
	        navigator.serviceWorker.getRegistrations().then(function (registrations) {
	          // We would probably need this to
	          // prevent unnecessary reloading of the page
	          // while unregistering of ServiceWorker is not happening
	          if (registrations.length) {
	            for (var _iterator = registrations, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	              var _ref;
	
	              if (_isArray) {
	                if (_i >= _iterator.length) break;
	                _ref = _iterator[_i++];
	              } else {
	                _i = _iterator.next();
	                if (_i.done) break;
	                _ref = _i.value;
	              }
	
	              var registration = _ref;
	
	              registration.unregister();
	            }
	            window.location.reload();
	          }
	        });
	      }
	    }
	    inInitialRender = false;
	    // In development we know the code is loaded already
	    // so we just return with it immediately.
	    if (false) {
	      var page = findPage(path);
	      if (!page) return cb();
	      var pageResources = {
	        component: syncRequires.components[page.componentChunkName],
	        json: syncRequires.json[page.jsonName],
	        layout: syncRequires.layouts[page.layout],
	        page: page
	      };
	      cb(pageResources);
	      return pageResources;
	      // Production code path
	    } else {
	      if (failedPaths[path]) {
	        handleResourceLoadError(path, "Previously detected load failure for \"" + path + "\"");
	
	        return cb();
	      }
	
	      var _page = findPage(path);
	
	      if (!_page) {
	        handleResourceLoadError(path, "A page wasn't found for \"" + path + "\"");
	
	        return cb();
	      }
	
	      // Use the path from the page so the pathScriptsCache uses
	      // the normalized path.
	      path = _page.path;
	
	      // Check if it's in the cache already.
	      if (pathScriptsCache[path]) {
	        process.nextTick(function () {
	          cb(pathScriptsCache[path]);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: pathScriptsCache[path]
	          });
	        });
	        return pathScriptsCache[path];
	      }
	
	      _emitter2.default.emit("onPreLoadPageResources", { path: path });
	      // Nope, we need to load resource(s)
	      var component = void 0;
	      var json = void 0;
	      var layout = void 0;
	      // Load the component/json/layout and parallel and call this
	      // function when they're done loading. When both are loaded,
	      // we move on.
	      var done = function done() {
	        if (component && json && (!_page.layoutComponentChunkName || layout)) {
	          pathScriptsCache[path] = { component: component, json: json, layout: layout, page: _page };
	          var _pageResources = { component: component, json: json, layout: layout, page: _page };
	          cb(_pageResources);
	          _emitter2.default.emit("onPostLoadPageResources", {
	            page: _page,
	            pageResources: _pageResources
	          });
	        }
	      };
	      getResourceModule(_page.componentChunkName, function (err, c) {
	        if (err) {
	          handleResourceLoadError(_page.path, "Loading the component for " + _page.path + " failed");
	        }
	        component = c;
	        done();
	      });
	      getResourceModule(_page.jsonName, function (err, j) {
	        if (err) {
	          handleResourceLoadError(_page.path, "Loading the JSON for " + _page.path + " failed");
	        }
	        json = j;
	        done();
	      });
	
	      _page.layoutComponentChunkName && getResourceModule(_page.layout, function (err, l) {
	        if (err) {
	          handleResourceLoadError(_page.path, "Loading the Layout for " + _page.path + " failed");
	        }
	        layout = l;
	        done();
	      });
	
	      return undefined;
	    }
	  },
	  peek: function peek(path) {
	    return pathArray.slice(-1)[0];
	  },
	  length: function length() {
	    return pathArray.length;
	  },
	  indexOf: function indexOf(path) {
	    return pathArray.length - pathArray.indexOf(path) - 1;
	  }
	};
	
	var publicLoader = exports.publicLoader = {
	  getResourcesForPathname: queue.getResourcesForPathname
	};
	
	exports.default = queue;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(89)))

/***/ }),

/***/ 433:
/***/ (function(module, exports) {

	module.exports = [{"componentChunkName":"component---src-pages-404-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"404.json","path":"/404/"},{"componentChunkName":"component---src-pages-designer-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"designer.json","path":"/designer/"},{"componentChunkName":"component---src-pages-index-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"index.json","path":"/"},{"componentChunkName":"component---src-pages-marketer-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"marketer.json","path":"/marketer/"},{"componentChunkName":"component---src-pages-operator-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"operator.json","path":"/operator/"},{"componentChunkName":"component---src-pages-page-2-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"page-2.json","path":"/page-2/"},{"componentChunkName":"component---src-pages-tester-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"tester.json","path":"/tester/"},{"componentChunkName":"component---src-pages-web-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"web.json","path":"/web/"},{"componentChunkName":"component---src-pages-404-js","layout":"layout---index","layoutComponentChunkName":"component---src-layouts-index-js","jsonName":"404-html.json","path":"/404.html"}]

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (_ref) {
	  var getNextQueuedResources = _ref.getNextQueuedResources,
	      createResourceDownload = _ref.createResourceDownload;
	
	  var pagesLoading = [];
	  var resourcesDownloading = [];
	
	  // Do things
	  var startResourceDownloading = function startResourceDownloading() {
	    var nextResource = getNextQueuedResources();
	    if (nextResource) {
	      resourcesDownloading.push(nextResource);
	      createResourceDownload(nextResource);
	    }
	  };
	
	  var reducer = function reducer(action) {
	    switch (action.type) {
	      case "RESOURCE_FINISHED":
	        resourcesDownloading = resourcesDownloading.filter(function (r) {
	          return r !== action.payload;
	        });
	        break;
	      case "ON_PRE_LOAD_PAGE_RESOURCES":
	        pagesLoading.push(action.payload.path);
	        break;
	      case "ON_POST_LOAD_PAGE_RESOURCES":
	        pagesLoading = pagesLoading.filter(function (p) {
	          return p !== action.payload.page.path;
	        });
	        break;
	      case "ON_NEW_RESOURCES_ADDED":
	        break;
	    }
	
	    // Take actions.
	    // Wait for event loop queue to finish.
	    setTimeout(function () {
	      if (resourcesDownloading.length === 0 && pagesLoading.length === 0) {
	        // Start another resource downloading.
	        startResourceDownloading();
	      }
	    }, 0);
	  };
	
	  return {
	    onResourcedFinished: function onResourcedFinished(event) {
	      // Tell prefetcher that the resource finished downloading
	      // so it can grab the next one.
	      reducer({ type: "RESOURCE_FINISHED", payload: event });
	    },
	    onPreLoadPageResources: function onPreLoadPageResources(event) {
	      // Tell prefetcher a page load has started so it should stop
	      // loading anything new
	      reducer({ type: "ON_PRE_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onPostLoadPageResources: function onPostLoadPageResources(event) {
	      // Tell prefetcher a page load has finished so it should start
	      // loading resources again.
	      reducer({ type: "ON_POST_LOAD_PAGE_RESOURCES", payload: event });
	    },
	    onNewResourcesAdded: function onNewResourcesAdded() {
	      // Tell prefetcher that more resources to be downloaded have
	      // been added.
	      reducer({ type: "ON_NEW_RESOURCES_ADDED" });
	    },
	    getState: function getState() {
	      return { pagesLoading: pagesLoading, resourcesDownloading: resourcesDownloading };
	    },
	    empty: function empty() {
	      pagesLoading = [];
	      resourcesDownloading = [];
	    }
	  };
	};

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _apiRunnerBrowser = __webpack_require__(95);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(120);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouterDom = __webpack_require__(69);
	
	var _gatsbyReactRouterScroll = __webpack_require__(419);
	
	var _domready = __webpack_require__(364);
	
	var _domready2 = _interopRequireDefault(_domready);
	
	var _history = __webpack_require__(250);
	
	var _history2 = _interopRequireDefault(_history);
	
	var _emitter = __webpack_require__(73);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	var _pages = __webpack_require__(433);
	
	var _pages2 = _interopRequireDefault(_pages);
	
	var _redirects = __webpack_require__(434);
	
	var _redirects2 = _interopRequireDefault(_redirects);
	
	var _componentRenderer = __webpack_require__(248);
	
	var _componentRenderer2 = _interopRequireDefault(_componentRenderer);
	
	var _asyncRequires = __webpack_require__(247);
	
	var _asyncRequires2 = _interopRequireDefault(_asyncRequires);
	
	var _loader = __webpack_require__(147);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (true) {
	  __webpack_require__(354);
	}
	
	window.___history = _history2.default;
	
	window.___emitter = _emitter2.default;
	
	_loader2.default.addPagesArray(_pages2.default);
	_loader2.default.addProdRequires(_asyncRequires2.default);
	window.asyncRequires = _asyncRequires2.default;
	window.___loader = _loader2.default;
	window.matchPath = _reactRouterDom.matchPath;
	
	// Convert to a map for faster lookup in maybeRedirect()
	var redirectMap = _redirects2.default.reduce(function (map, redirect) {
	  map[redirect.fromPath] = redirect;
	  return map;
	}, {});
	
	var maybeRedirect = function maybeRedirect(pathname) {
	  var redirect = redirectMap[pathname];
	
	  if (redirect != null) {
	    _history2.default.replace(redirect.toPath);
	    return true;
	  } else {
	    return false;
	  }
	};
	
	// Check for initial page-load redirect
	maybeRedirect(window.location.pathname);
	
	// Let the site/plugins run code very early.
	(0, _apiRunnerBrowser.apiRunnerAsync)("onClientEntry").then(function () {
	  // Let plugins register a service worker. The plugin just needs
	  // to return true.
	  if ((0, _apiRunnerBrowser.apiRunner)("registerServiceWorker").length > 0) {
	    __webpack_require__(253);
	  }
	
	  var navigateTo = function navigateTo(pathname) {
	    var redirect = redirectMap[pathname];
	
	    // If we're redirecting, just replace the passed in pathname
	    // to the one we want to redirect to.
	    if (redirect) {
	      pathname = redirect.toPath;
	    }
	
	    // If we're already at this path, do nothing.
	    if (window.location.pathname === pathname) {
	      return;
	    }
	
	    // Listen to loading events. If page resources load before
	    // a second, navigate immediately.
	    function eventHandler(e) {
	      if (e.page.path === _loader2.default.getPage(pathname).path) {
	        _emitter2.default.off("onPostLoadPageResources", eventHandler);
	        clearTimeout(timeoutId);
	        window.___history.push(pathname);
	      }
	    }
	
	    // Start a timer to wait for a second before transitioning and showing a
	    // loader in case resources aren't around yet.
	    var timeoutId = setTimeout(function () {
	      _emitter2.default.off("onPostLoadPageResources", eventHandler);
	      _emitter2.default.emit("onDelayedLoadPageResources", { pathname: pathname });
	      window.___history.push(pathname);
	    }, 1000);
	
	    if (_loader2.default.getResourcesForPathname(pathname)) {
	      // The resources are already loaded so off we go.
	      clearTimeout(timeoutId);
	      window.___history.push(pathname);
	    } else {
	      // They're not loaded yet so let's add a listener for when
	      // they finish loading.
	      _emitter2.default.on("onPostLoadPageResources", eventHandler);
	    }
	  };
	
	  // window.___loadScriptsForPath = loadScriptsForPath
	  window.___navigateTo = navigateTo;
	
	  // Call onRouteUpdate on the initial page load.
	  (0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", {
	    location: _history2.default.location,
	    action: _history2.default.action
	  });
	
	  var initialAttachDone = false;
	  function attachToHistory(history) {
	    if (!window.___history || initialAttachDone === false) {
	      window.___history = history;
	      initialAttachDone = true;
	
	      history.listen(function (location, action) {
	        if (!maybeRedirect(location.pathname)) {
	          (0, _apiRunnerBrowser.apiRunner)("onRouteUpdate", { location: location, action: action });
	        }
	      });
	    }
	  }
	
	  function shouldUpdateScroll(prevRouterProps, _ref) {
	    var pathname = _ref.location.pathname;
	
	    var results = (0, _apiRunnerBrowser.apiRunner)("shouldUpdateScroll", {
	      prevRouterProps: prevRouterProps,
	      pathname: pathname
	    });
	    if (results.length > 0) {
	      return results[0];
	    }
	
	    if (prevRouterProps) {
	      var oldPathname = prevRouterProps.location.pathname;
	
	      if (oldPathname === pathname) {
	        return false;
	      }
	    }
	    return true;
	  }
	
	  var AltRouter = (0, _apiRunnerBrowser.apiRunner)("replaceRouterComponent", { history: _history2.default })[0];
	  var DefaultRouter = function DefaultRouter(_ref2) {
	    var children = _ref2.children;
	    return _react2.default.createElement(
	      _reactRouterDom.Router,
	      { history: _history2.default },
	      children
	    );
	  };
	
	  var ComponentRendererWithRouter = (0, _reactRouterDom.withRouter)(_componentRenderer2.default);
	
	  _loader2.default.getResourcesForPathname(window.location.pathname, function () {
	    var Root = function Root() {
	      return (0, _react.createElement)(AltRouter ? AltRouter : DefaultRouter, null, (0, _react.createElement)(_gatsbyReactRouterScroll.ScrollContext, { shouldUpdateScroll: shouldUpdateScroll }, (0, _react.createElement)(ComponentRendererWithRouter, {
	        layout: true,
	        children: function children(layoutProps) {
	          return (0, _react.createElement)(_reactRouterDom.Route, {
	            render: function render(routeProps) {
	              attachToHistory(routeProps.history);
	              var props = layoutProps ? layoutProps : routeProps;
	
	              if (_loader2.default.getPage(props.location.pathname)) {
	                return (0, _react.createElement)(_componentRenderer2.default, _extends({
	                  page: true
	                }, props));
	              } else {
	                return (0, _react.createElement)(_componentRenderer2.default, {
	                  page: true,
	                  location: { pathname: "/404.html" }
	                });
	              }
	            }
	          });
	        }
	      })));
	    };
	
	    var NewRoot = (0, _apiRunnerBrowser.apiRunner)("wrapRootComponent", { Root: Root }, Root)[0];
	    (0, _domready2.default)(function () {
	      return _reactDom2.default.render(_react2.default.createElement(NewRoot, null), typeof window !== "undefined" ? document.getElementById("___gatsby") : void 0, function () {
	        (0, _apiRunnerBrowser.apiRunner)("onInitialClientRender");
	      });
	    });
	  });
	});

/***/ }),

/***/ 434:
/***/ (function(module, exports) {

	module.exports = []

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _emitter = __webpack_require__(73);
	
	var _emitter2 = _interopRequireDefault(_emitter);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var pathPrefix = "/";
	if (true) {
	  pathPrefix = ("/hi") + "/";
	}
	
	if ("serviceWorker" in navigator) {
	  navigator.serviceWorker.register(pathPrefix + "sw.js").then(function (reg) {
	    reg.addEventListener("updatefound", function () {
	      // The updatefound event implies that reg.installing is set; see
	      // https://w3c.github.io/ServiceWorker/#service-worker-registration-updatefound-event
	      var installingWorker = reg.installing;
	      console.log("installingWorker", installingWorker);
	      installingWorker.addEventListener("statechange", function () {
	        switch (installingWorker.state) {
	          case "installed":
	            if (navigator.serviceWorker.controller) {
	              // At this point, the old content will have been purged and the fresh content will
	              // have been added to the cache.
	              // We reload immediately so the user sees the new content.
	              // This could/should be made configurable in the future.
	              window.location.reload();
	            } else {
	              // At this point, everything has been precached.
	              // It's the perfect time to display a "Content is cached for offline use." message.
	              console.log("Content is now available offline!");
	              _emitter2.default.emit("sw:installed");
	            }
	            break;
	
	          case "redundant":
	            console.error("The installing service worker became redundant.");
	            break;
	        }
	      });
	    });
	  }).catch(function (e) {
	    console.error("Error during service worker registration:", e);
	  });
	}

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	/**
	 * Remove a prefix from a string. Return the input string if the given prefix
	 * isn't found.
	 */
	
	exports.default = function (str) {
	  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
	
	  if (str.substr(0, prefix.length) === prefix) return str.slice(prefix.length);
	  return str;
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouterDom = __webpack_require__(69);
	
	var _reactRedux = __webpack_require__(30);
	
	var _dva = __webpack_require__(268);
	
	var _dva2 = _interopRequireDefault(_dva);
	
	var _app = __webpack_require__(259);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var app = (0, _dva2.default)({
		onError: function onError(e) {
			console.log('onError', e);
		}
	});
	
	app.model(_app2.default);
	
	exports.replaceRouterComponent = function (_ref) {
		var history = _ref.history;
	
		app.setHistory(history);
		var ConnectedRouterWrapper = function ConnectedRouterWrapper(_ref2) {
			var children = _ref2.children;
			return app.start(_react2.default.createElement(
				_reactRouterDom.Router,
				{ history: history },
				children
			));
		};
	
		return ConnectedRouterWrapper;
	};

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	  * domready (c) Dustin Diaz 2014 - License MIT
	  */
	!function (name, definition) {
	
	  if (true) module.exports = definition()
	  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
	  else this[name] = definition()
	
	}('domready', function () {
	
	  var fns = [], listener
	    , doc = document
	    , hack = doc.documentElement.doScroll
	    , domContentLoaded = 'DOMContentLoaded'
	    , loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState)
	
	
	  if (!loaded)
	  doc.addEventListener(domContentLoaded, listener = function () {
	    doc.removeEventListener(domContentLoaded, listener)
	    loaded = 1
	    while (listener = fns.shift()) listener()
	  })
	
	  return function (fn) {
	    loaded ? setTimeout(fn, 0) : fns.push(fn)
	  }
	
	});


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(373);


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(12);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _getIterator2 = __webpack_require__(57);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _classCallCheck2 = __webpack_require__(17);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(38);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _keys = __webpack_require__(44);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.filterHooks = filterHooks;
	
	var _invariant = __webpack_require__(10);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utils = __webpack_require__(42);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var hooks = ['onError', 'onStateChange', 'onAction', 'onHmr', 'onReducer', 'onEffect', 'extraReducers', 'extraEnhancers'];
	
	function filterHooks(obj) {
	  return (0, _keys2.default)(obj).reduce(function (memo, key) {
	    if (hooks.indexOf(key) > -1) {
	      memo[key] = obj[key];
	    }
	    return memo;
	  }, {});
	}
	
	var Plugin = function () {
	  function Plugin() {
	    (0, _classCallCheck3.default)(this, Plugin);
	
	    this.hooks = hooks.reduce(function (memo, key) {
	      memo[key] = [];
	      return memo;
	    }, {});
	  }
	
	  (0, _createClass3.default)(Plugin, [{
	    key: 'use',
	    value: function use(plugin) {
	      (0, _invariant2.default)((0, _utils.isPlainObject)(plugin), 'plugin.use: plugin should be plain object');
	      var hooks = this.hooks;
	      for (var key in plugin) {
	        if (Object.prototype.hasOwnProperty.call(plugin, key)) {
	          (0, _invariant2.default)(hooks[key], 'plugin.use: unknown plugin property: ' + key);
	          if (key === 'extraEnhancers') {
	            hooks[key] = plugin[key];
	          } else {
	            hooks[key].push(plugin[key]);
	          }
	        }
	      }
	    }
	  }, {
	    key: 'apply',
	    value: function apply(key, defaultHandler) {
	      var hooks = this.hooks;
	      var validApplyHooks = ['onError', 'onHmr'];
	      (0, _invariant2.default)(validApplyHooks.indexOf(key) > -1, 'plugin.apply: hook ' + key + ' cannot be applied');
	      var fns = hooks[key];
	
	      return function () {
	        if (fns.length) {
	          var _iteratorNormalCompletion = true;
	          var _didIteratorError = false;
	          var _iteratorError = undefined;
	
	          try {
	            for (var _iterator = (0, _getIterator3.default)(fns), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	              var fn = _step.value;
	
	              fn.apply(undefined, arguments);
	            }
	          } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	          } finally {
	            try {
	              if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	              }
	            } finally {
	              if (_didIteratorError) {
	                throw _iteratorError;
	              }
	            }
	          }
	        } else if (defaultHandler) {
	          defaultHandler.apply(undefined, arguments);
	        }
	      };
	    }
	  }, {
	    key: 'get',
	    value: function get(key) {
	      var hooks = this.hooks;
	      (0, _invariant2.default)(key in hooks, 'plugin.get: hook ' + key + ' cannot be got');
	      if (key === 'extraReducers') {
	        return getExtraReducers(hooks[key]);
	      } else if (key === 'onReducer') {
	        return getOnReducer(hooks[key]);
	      } else {
	        return hooks[key];
	      }
	    }
	  }]);
	  return Plugin;
	}();
	
	exports.default = Plugin;
	
	
	function getExtraReducers(hook) {
	  var ret = {};
	  var _iteratorNormalCompletion2 = true;
	  var _didIteratorError2 = false;
	  var _iteratorError2 = undefined;
	
	  try {
	    for (var _iterator2 = (0, _getIterator3.default)(hook), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	      var reducerObj = _step2.value;
	
	      ret = (0, _extends3.default)({}, ret, reducerObj);
	    }
	  } catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion2 && _iterator2.return) {
	        _iterator2.return();
	      }
	    } finally {
	      if (_didIteratorError2) {
	        throw _iteratorError2;
	      }
	    }
	  }
	
	  return ret;
	}
	
	function getOnReducer(hook) {
	  return function (reducer) {
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	      for (var _iterator3 = (0, _getIterator3.default)(hook), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var reducerEnhancer = _step3.value;
	
	        reducer = reducerEnhancer(reducer);
	      }
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }
	
	    return reducer;
	  };
	}

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(44);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _typeof2 = __webpack_require__(45);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.default = checkModel;
	
	var _invariant = __webpack_require__(10);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _utils = __webpack_require__(42);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function checkModel(model, existModels) {
	  var namespace = model.namespace,
	      reducers = model.reducers,
	      effects = model.effects,
	      subscriptions = model.subscriptions;
	
	  // namespace 必须被定义
	
	  (0, _invariant2.default)(namespace, '[app.model] namespace should be defined');
	  // 并且是字符串
	  (0, _invariant2.default)(typeof namespace === 'string', '[app.model] namespace should be string, but got ' + (typeof namespace === 'undefined' ? 'undefined' : (0, _typeof3.default)(namespace)));
	  // 并且唯一
	  (0, _invariant2.default)(!existModels.some(function (model) {
	    return model.namespace === namespace;
	  }), '[app.model] namespace should be unique');
	
	  // state 可以为任意值
	
	  // reducers 可以为空，PlainObject 或者数组
	  if (reducers) {
	    (0, _invariant2.default)((0, _utils.isPlainObject)(reducers) || (0, _utils.isArray)(reducers), '[app.model] reducers should be plain object or array, but got ' + (typeof reducers === 'undefined' ? 'undefined' : (0, _typeof3.default)(reducers)));
	    // 数组的 reducers 必须是 [Object, Function] 的格式
	    (0, _invariant2.default)(!(0, _utils.isArray)(reducers) || (0, _utils.isPlainObject)(reducers[0]) && (0, _utils.isFunction)(reducers[1]), '[app.model] reducers with array should be [Object, Function]');
	  }
	
	  // effects 可以为空，PlainObject
	  if (effects) {
	    (0, _invariant2.default)((0, _utils.isPlainObject)(effects), '[app.model] effects should be plain object, but got ' + (typeof effects === 'undefined' ? 'undefined' : (0, _typeof3.default)(effects)));
	  }
	
	  if (subscriptions) {
	    // subscriptions 可以为空，PlainObject
	    (0, _invariant2.default)((0, _utils.isPlainObject)(subscriptions), '[app.model] subscriptions should be plain object, but got ' + (typeof subscriptions === 'undefined' ? 'undefined' : (0, _typeof3.default)(subscriptions)));
	
	    // subscription 必须为函数
	    (0, _invariant2.default)(isAllFunction(subscriptions), '[app.model] subscription should be function');
	  }
	}
	
	function isAllFunction(obj) {
	  return (0, _keys2.default)(obj).every(function (key) {
	    return (0, _utils.isFunction)(obj[key]);
	  });
	}
	module.exports = exports['default'];

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var NAMESPACE_SEP = exports.NAMESPACE_SEP = '/';

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _slicedToArray2 = __webpack_require__(280);
	
	var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
	
	var _promise = __webpack_require__(276);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	exports.default = createPromiseMiddleware;
	
	var _constants = __webpack_require__(64);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function createPromiseMiddleware(app) {
	  var map = {};
	
	  var middleware = function middleware() {
	    return function (next) {
	      return function (action) {
	        var type = action.type;
	
	        if (isEffect(type)) {
	          return new _promise2.default(function (resolve, reject) {
	            map[type] = {
	              resolve: wrapped.bind(null, type, resolve),
	              reject: wrapped.bind(null, type, reject)
	            };
	          });
	        } else {
	          return next(action);
	        }
	      };
	    };
	  };
	
	  function isEffect(type) {
	    var _type$split = type.split(_constants.NAMESPACE_SEP),
	        _type$split2 = (0, _slicedToArray3.default)(_type$split, 1),
	        namespace = _type$split2[0];
	
	    var model = app._models.filter(function (m) {
	      return m.namespace === namespace;
	    })[0];
	    if (model) {
	      if (model.effects && model.effects[type]) {
	        return true;
	      }
	    }
	
	    return false;
	  }
	
	  function wrapped(type, fn, args) {
	    if (map[type]) delete map[type];
	    fn(args);
	  }
	
	  function resolve(type, args) {
	    if (map[type]) {
	      map[type].resolve(args);
	    }
	  }
	
	  function reject(type, args) {
	    if (map[type]) {
	      map[type].reject(args);
	    }
	  }
	
	  return {
	    middleware: middleware,
	    resolve: resolve,
	    reject: reject
	  };
	}
	module.exports = exports['default'];

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(96);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _typeof2 = __webpack_require__(45);
	
	var _typeof3 = _interopRequireDefault(_typeof2);
	
	exports.default = function (_ref) {
	  var reducers = _ref.reducers,
	      initialState = _ref.initialState,
	      plugin = _ref.plugin,
	      sagaMiddleware = _ref.sagaMiddleware,
	      promiseMiddleware = _ref.promiseMiddleware,
	      _ref$createOpts$setup = _ref.createOpts.setupMiddlewares,
	      setupMiddlewares = _ref$createOpts$setup === undefined ? _utils.returnSelf : _ref$createOpts$setup;
	
	  // extra enhancers
	  var extraEnhancers = plugin.get('extraEnhancers');
	  (0, _invariant2.default)((0, _utils.isArray)(extraEnhancers), '[app.start] extraEnhancers should be array, but got ' + (typeof extraEnhancers === 'undefined' ? 'undefined' : (0, _typeof3.default)(extraEnhancers)));
	
	  var extraMiddlewares = plugin.get('onAction');
	  var middlewares = setupMiddlewares([sagaMiddleware, promiseMiddleware].concat((0, _toConsumableArray3.default)((0, _flatten2.default)(extraMiddlewares))));
	
	  var devtools = function devtools() {
	    return function (noop) {
	      return noop;
	    };
	  };
	  if (false) {
	    devtools = _window2.default.__REDUX_DEVTOOLS_EXTENSION__;
	  }
	
	  var enhancers = [_redux.applyMiddleware.apply(undefined, (0, _toConsumableArray3.default)(middlewares)), devtools(_window2.default.__REDUX_DEVTOOLS_EXTENSION__OPTIONS)].concat((0, _toConsumableArray3.default)(extraEnhancers));
	
	  return (0, _redux.createStore)(reducers, initialState, _redux.compose.apply(undefined, (0, _toConsumableArray3.default)(enhancers)));
	};
	
	var _redux = __webpack_require__(143);
	
	var _flatten = __webpack_require__(397);
	
	var _flatten2 = _interopRequireDefault(_flatten);
	
	var _invariant = __webpack_require__(10);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _window = __webpack_require__(420);
	
	var _window2 = _interopRequireDefault(_window);
	
	var _utils = __webpack_require__(42);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = exports['default'];

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getReducer;
	
	var _handleActions = __webpack_require__(372);
	
	var _handleActions2 = _interopRequireDefault(_handleActions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getReducer(reducers, state) {
	  // Support reducer enhancer
	  // e.g. reducers: [realReducers, enhancer]
	  if (Array.isArray(reducers)) {
	    return reducers[1]((0, _handleActions2.default)(reducers[0], state));
	  } else {
	    return (0, _handleActions2.default)(reducers || {}, state);
	  }
	}
	module.exports = exports['default'];

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(57);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _extends2 = __webpack_require__(12);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _toConsumableArray2 = __webpack_require__(96);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _regenerator = __webpack_require__(281);
	
	var _regenerator2 = _interopRequireDefault(_regenerator);
	
	exports.default = getSaga;
	
	var _invariant = __webpack_require__(10);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _effects = __webpack_require__(568);
	
	var sagaEffects = _interopRequireWildcard(_effects);
	
	var _warning = __webpack_require__(11);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _sagaHelpers = __webpack_require__(227);
	
	var _constants = __webpack_require__(64);
	
	var _prefixType = __webpack_require__(178);
	
	var _prefixType2 = _interopRequireDefault(_prefixType);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getSaga(resolve, reject, effects, model, onError, onEffect) {
	  return (/*#__PURE__*/_regenerator2.default.mark(function _callee3() {
	      var _this = this;
	
	      var key;
	      return _regenerator2.default.wrap(function _callee3$(_context3) {
	        while (1) {
	          switch (_context3.prev = _context3.next) {
	            case 0:
	              _context3.t0 = _regenerator2.default.keys(effects);
	
	            case 1:
	              if ((_context3.t1 = _context3.t0()).done) {
	                _context3.next = 7;
	                break;
	              }
	
	              key = _context3.t1.value;
	
	              if (!Object.prototype.hasOwnProperty.call(effects, key)) {
	                _context3.next = 5;
	                break;
	              }
	
	              return _context3.delegateYield( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
	                var watcher, task;
	                return _regenerator2.default.wrap(function _callee2$(_context2) {
	                  while (1) {
	                    switch (_context2.prev = _context2.next) {
	                      case 0:
	                        watcher = getWatcher(resolve, reject, key, effects[key], model, onError, onEffect);
	                        _context2.next = 3;
	                        return sagaEffects.fork(watcher);
	
	                      case 3:
	                        task = _context2.sent;
	                        _context2.next = 6;
	                        return sagaEffects.fork( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
	                          return _regenerator2.default.wrap(function _callee$(_context) {
	                            while (1) {
	                              switch (_context.prev = _context.next) {
	                                case 0:
	                                  _context.next = 2;
	                                  return sagaEffects.take(model.namespace + '/@@CANCEL_EFFECTS');
	
	                                case 2:
	                                  _context.next = 4;
	                                  return sagaEffects.cancel(task);
	
	                                case 4:
	                                case 'end':
	                                  return _context.stop();
	                              }
	                            }
	                          }, _callee, this);
	                        }));
	
	                      case 6:
	                      case 'end':
	                        return _context2.stop();
	                    }
	                  }
	                }, _callee2, _this);
	              })(), 't2', 5);
	
	            case 5:
	              _context3.next = 1;
	              break;
	
	            case 7:
	            case 'end':
	              return _context3.stop();
	          }
	        }
	      }, _callee3, this);
	    })
	  );
	}
	
	function getWatcher(resolve, reject, key, _effect, model, onError, onEffect) {
	  var _marked = /*#__PURE__*/_regenerator2.default.mark(sagaWithCatch);
	
	  var effect = _effect;
	  var type = 'takeEvery';
	  var ms = void 0;
	
	  if (Array.isArray(_effect)) {
	    effect = _effect[0];
	    var opts = _effect[1];
	    if (opts && opts.type) {
	      type = opts.type;
	      if (type === 'throttle') {
	        (0, _invariant2.default)(opts.ms, 'app.start: opts.ms should be defined if type is throttle');
	        ms = opts.ms;
	      }
	    }
	    (0, _invariant2.default)(['watcher', 'takeEvery', 'takeLatest', 'throttle'].indexOf(type) > -1, 'app.start: effect type should be takeEvery, takeLatest, throttle or watcher');
	  }
	
	  function sagaWithCatch() {
	    var _len,
	        args,
	        _key,
	        ret,
	        _args4 = arguments;
	
	    return _regenerator2.default.wrap(function sagaWithCatch$(_context4) {
	      while (1) {
	        switch (_context4.prev = _context4.next) {
	          case 0:
	            _context4.prev = 0;
	            _context4.next = 3;
	            return sagaEffects.put({ type: '' + key + _constants.NAMESPACE_SEP + '@@start' });
	
	          case 3:
	            for (_len = _args4.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	              args[_key] = _args4[_key];
	            }
	
	            _context4.next = 6;
	            return effect.apply(undefined, (0, _toConsumableArray3.default)(args.concat(createEffects(model))));
	
	          case 6:
	            ret = _context4.sent;
	            _context4.next = 9;
	            return sagaEffects.put({ type: '' + key + _constants.NAMESPACE_SEP + '@@end' });
	
	          case 9:
	            resolve(key, ret);
	            _context4.next = 16;
	            break;
	
	          case 12:
	            _context4.prev = 12;
	            _context4.t0 = _context4['catch'](0);
	
	            onError(_context4.t0);
	            if (!_context4.t0._dontReject) {
	              reject(key, _context4.t0);
	            }
	
	          case 16:
	          case 'end':
	            return _context4.stop();
	        }
	      }
	    }, _marked, this, [[0, 12]]);
	  }
	
	  var sagaWithOnEffect = applyOnEffect(onEffect, sagaWithCatch, model, key);
	
	  switch (type) {
	    case 'watcher':
	      return sagaWithCatch;
	    case 'takeLatest':
	      return (/*#__PURE__*/_regenerator2.default.mark(function _callee4() {
	          return _regenerator2.default.wrap(function _callee4$(_context5) {
	            while (1) {
	              switch (_context5.prev = _context5.next) {
	                case 0:
	                  _context5.next = 2;
	                  return (0, _sagaHelpers.takeLatestHelper)(key, sagaWithOnEffect);
	
	                case 2:
	                case 'end':
	                  return _context5.stop();
	              }
	            }
	          }, _callee4, this);
	        })
	      );
	    case 'throttle':
	      return (/*#__PURE__*/_regenerator2.default.mark(function _callee5() {
	          return _regenerator2.default.wrap(function _callee5$(_context6) {
	            while (1) {
	              switch (_context6.prev = _context6.next) {
	                case 0:
	                  _context6.next = 2;
	                  return (0, _sagaHelpers.throttleHelper)(ms, key, sagaWithOnEffect);
	
	                case 2:
	                case 'end':
	                  return _context6.stop();
	              }
	            }
	          }, _callee5, this);
	        })
	      );
	    default:
	      return (/*#__PURE__*/_regenerator2.default.mark(function _callee6() {
	          return _regenerator2.default.wrap(function _callee6$(_context7) {
	            while (1) {
	              switch (_context7.prev = _context7.next) {
	                case 0:
	                  _context7.next = 2;
	                  return (0, _sagaHelpers.takeEveryHelper)(key, sagaWithOnEffect);
	
	                case 2:
	                case 'end':
	                  return _context7.stop();
	              }
	            }
	          }, _callee6, this);
	        })
	      );
	  }
	}
	
	function createEffects(model) {
	  function assertAction(type, name) {
	    (0, _invariant2.default)(type, 'dispatch: action should be a plain Object with type');
	    (0, _warning2.default)(type.indexOf('' + model.namespace + _constants.NAMESPACE_SEP) !== 0, '[' + name + '] ' + type + ' should not be prefixed with namespace ' + model.namespace);
	  }
	  function put(action) {
	    var type = action.type;
	
	    assertAction(type, 'sagaEffects.put');
	    return sagaEffects.put((0, _extends3.default)({}, action, { type: (0, _prefixType2.default)(type, model) }));
	  }
	  function take(type) {
	    if (typeof type === 'string') {
	      assertAction(type, 'sagaEffects.take');
	      return sagaEffects.take((0, _prefixType2.default)(type, model));
	    } else {
	      return sagaEffects.take(type);
	    }
	  }
	  return (0, _extends3.default)({}, sagaEffects, { put: put, take: take });
	}
	
	function applyOnEffect(fns, effect, model, key) {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = (0, _getIterator3.default)(fns), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var fn = _step.value;
	
	      effect = fn(effect, sagaEffects, model, key);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  return effect;
	}
	module.exports = exports['default'];

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _toConsumableArray2 = __webpack_require__(96);
	
	var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
	
	var _keys = __webpack_require__(44);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function identify(value) {
	  return value;
	}
	
	function handleAction(actionType) {
	  var reducer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : identify;
	
	  return function (state, action) {
	    var type = action.type;
	
	    if (type && actionType !== type) {
	      return state;
	    }
	    return reducer(state, action);
	  };
	}
	
	function reduceReducers() {
	  for (var _len = arguments.length, reducers = Array(_len), _key = 0; _key < _len; _key++) {
	    reducers[_key] = arguments[_key];
	  }
	
	  return function (previous, current) {
	    return reducers.reduce(function (p, r) {
	      return r(p, current);
	    }, previous);
	  };
	}
	
	function handleActions(handlers, defaultState) {
	  var reducers = (0, _keys2.default)(handlers).map(function (type) {
	    return handleAction(type, handlers[type]);
	  });
	  var reducer = reduceReducers.apply(undefined, (0, _toConsumableArray3.default)(reducers));
	  return function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	    var action = arguments[1];
	    return reducer(state, action);
	  };
	}
	
	exports.default = handleActions;
	module.exports = exports["default"];

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(57);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _keys = __webpack_require__(44);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _extends2 = __webpack_require__(12);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.create = create;
	
	var _redux = __webpack_require__(143);
	
	var _middleware = __webpack_require__(569);
	
	var _middleware2 = _interopRequireDefault(_middleware);
	
	var _invariant = __webpack_require__(10);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _checkModel = __webpack_require__(367);
	
	var _checkModel2 = _interopRequireDefault(_checkModel);
	
	var _prefixNamespace = __webpack_require__(374);
	
	var _prefixNamespace2 = _interopRequireDefault(_prefixNamespace);
	
	var _Plugin = __webpack_require__(366);
	
	var _Plugin2 = _interopRequireDefault(_Plugin);
	
	var _createStore = __webpack_require__(369);
	
	var _createStore2 = _interopRequireDefault(_createStore);
	
	var _getSaga = __webpack_require__(371);
	
	var _getSaga2 = _interopRequireDefault(_getSaga);
	
	var _getReducer = __webpack_require__(370);
	
	var _getReducer2 = _interopRequireDefault(_getReducer);
	
	var _createPromiseMiddleware = __webpack_require__(368);
	
	var _createPromiseMiddleware2 = _interopRequireDefault(_createPromiseMiddleware);
	
	var _subscription = __webpack_require__(376);
	
	var _utils = __webpack_require__(42);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Internal model to update global state when do unmodel
	var dvaModel = {
	  namespace: '@@dva',
	  state: 0,
	  reducers: {
	    UPDATE: function UPDATE(state) {
	      return state + 1;
	    }
	  }
	};
	
	/**
	 * Create dva-core instance.
	 *
	 * @param hooksAndOpts
	 * @param createOpts
	 */
	function create() {
	  var hooksAndOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var createOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	  var initialReducer = createOpts.initialReducer,
	      _createOpts$setupApp = createOpts.setupApp,
	      setupApp = _createOpts$setupApp === undefined ? _utils.noop : _createOpts$setupApp;
	
	
	  var plugin = new _Plugin2.default();
	  plugin.use((0, _Plugin.filterHooks)(hooksAndOpts));
	
	  var app = {
	    _models: [(0, _prefixNamespace2.default)((0, _extends3.default)({}, dvaModel))],
	    _store: null,
	    _plugin: plugin,
	    use: plugin.use.bind(plugin),
	    model: model,
	    start: start
	  };
	  return app;
	
	  /**
	   * Register model before app is started.
	   *
	   * @param m {Object} model to register
	   */
	  function model(m) {
	    if (false) {
	      (0, _checkModel2.default)(m, app._models);
	    }
	    app._models.push((0, _prefixNamespace2.default)(m));
	  }
	
	  /**
	   * Inject model after app is started.
	   *
	   * @param createReducer
	   * @param onError
	   * @param unlisteners
	   * @param m
	   */
	  function injectModel(createReducer, onError, unlisteners, m) {
	    model(m);
	
	    var store = app._store;
	    if (m.reducers) {
	      store.asyncReducers[m.namespace] = (0, _getReducer2.default)(m.reducers, m.state);
	      store.replaceReducer(createReducer(store.asyncReducers));
	    }
	    if (m.effects) {
	      store.runSaga(app._getSaga(m.effects, m, onError, plugin.get('onEffect')));
	    }
	    if (m.subscriptions) {
	      unlisteners[m.namespace] = (0, _subscription.run)(m.subscriptions, m, app, onError);
	    }
	  }
	
	  /**
	   * Unregister model.
	   *
	   * @param createReducer
	   * @param reducers
	   * @param unlisteners
	   * @param namespace
	   *
	   * Unexpected key warn problem:
	   * https://github.com/reactjs/redux/issues/1636
	   */
	  function unmodel(createReducer, reducers, unlisteners, namespace) {
	    var store = app._store;
	
	    // Delete reducers
	    delete store.asyncReducers[namespace];
	    delete reducers[namespace];
	    store.replaceReducer(createReducer());
	    store.dispatch({ type: '@@dva/UPDATE' });
	
	    // Cancel effects
	    store.dispatch({ type: namespace + '/@@CANCEL_EFFECTS' });
	
	    // Unlisten subscrioptions
	    (0, _subscription.unlisten)(unlisteners, namespace);
	
	    // Delete model from app._models
	    app._models = app._models.filter(function (model) {
	      return model.namespace !== namespace;
	    });
	  }
	
	  /**
	   * Start the app.
	   *
	   * @returns void
	   */
	  function start() {
	    // Global error handler
	    var onError = function onError(err) {
	      if (err) {
	        if (typeof err === 'string') err = new Error(err);
	        err.preventDefault = function () {
	          err._dontReject = true;
	        };
	        plugin.apply('onError', function (err) {
	          throw new Error(err.stack || err);
	        })(err, app._store.dispatch);
	      }
	    };
	
	    var sagaMiddleware = (0, _middleware2.default)();
	
	    var _createPromiseMiddlew = (0, _createPromiseMiddleware2.default)(app),
	        promiseMiddleware = _createPromiseMiddlew.middleware,
	        resolve = _createPromiseMiddlew.resolve,
	        reject = _createPromiseMiddlew.reject;
	
	    app._getSaga = _getSaga2.default.bind(null, resolve, reject);
	
	    var sagas = [];
	    var reducers = (0, _extends3.default)({}, initialReducer);
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	      for (var _iterator = (0, _getIterator3.default)(app._models), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var m = _step.value;
	
	        reducers[m.namespace] = (0, _getReducer2.default)(m.reducers, m.state);
	        if (m.effects) sagas.push(app._getSaga(m.effects, m, onError, plugin.get('onEffect')));
	      }
	    } catch (err) {
	      _didIteratorError = true;
	      _iteratorError = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	          _iterator.return();
	        }
	      } finally {
	        if (_didIteratorError) {
	          throw _iteratorError;
	        }
	      }
	    }
	
	    var reducerEnhancer = plugin.get('onReducer');
	    var extraReducers = plugin.get('extraReducers');
	    (0, _invariant2.default)((0, _keys2.default)(extraReducers).every(function (key) {
	      return !(key in reducers);
	    }), '[app.start] extitraReducers is conflict with other reducers, reducers list: ' + (0, _keys2.default)(reducers).join(', '));
	
	    // Create store
	    var store = app._store = (0, _createStore2.default)({ // eslint-disable-line
	      reducers: createReducer(),
	      initialState: hooksAndOpts.initialState || {},
	      plugin: plugin,
	      createOpts: createOpts,
	      sagaMiddleware: sagaMiddleware,
	      promiseMiddleware: promiseMiddleware
	    });
	
	    // Extend store
	    store.runSaga = sagaMiddleware.run;
	    store.asyncReducers = {};
	
	    // Execute listeners when state is changed
	    var listeners = plugin.get('onStateChange');
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	      var _loop = function _loop() {
	        var listener = _step2.value;
	
	        store.subscribe(function () {
	          listener(store.getState());
	        });
	      };
	
	      for (var _iterator2 = (0, _getIterator3.default)(listeners), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        _loop();
	      }
	
	      // Run sagas
	    } catch (err) {
	      _didIteratorError2 = true;
	      _iteratorError2 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	          _iterator2.return();
	        }
	      } finally {
	        if (_didIteratorError2) {
	          throw _iteratorError2;
	        }
	      }
	    }
	
	    sagas.forEach(sagaMiddleware.run);
	
	    // Setup app
	    setupApp(app);
	
	    // Run subscriptions
	    var unlisteners = {};
	    var _iteratorNormalCompletion3 = true;
	    var _didIteratorError3 = false;
	    var _iteratorError3 = undefined;
	
	    try {
	      for (var _iterator3 = (0, _getIterator3.default)(this._models), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var _model = _step3.value;
	
	        if (_model.subscriptions) {
	          unlisteners[_model.namespace] = (0, _subscription.run)(_model.subscriptions, _model, app, onError);
	        }
	      }
	
	      // Setup app.model and app.unmodel
	    } catch (err) {
	      _didIteratorError3 = true;
	      _iteratorError3 = err;
	    } finally {
	      try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	          _iterator3.return();
	        }
	      } finally {
	        if (_didIteratorError3) {
	          throw _iteratorError3;
	        }
	      }
	    }
	
	    app.model = injectModel.bind(app, createReducer, onError, unlisteners);
	    app.unmodel = unmodel.bind(app, createReducer, reducers, unlisteners);
	
	    /**
	     * Create global reducer for redux.
	     *
	     * @returns {Object}
	     */
	    function createReducer() {
	      return reducerEnhancer((0, _redux.combineReducers)((0, _extends3.default)({}, reducers, extraReducers, app._store ? app._store.asyncReducers : {})));
	    }
	  }
	}

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(44);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	exports.default = prefixNamespace;
	
	var _warning = __webpack_require__(11);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _utils = __webpack_require__(42);
	
	var _constants = __webpack_require__(64);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prefix(obj, namespace, type) {
	  return (0, _keys2.default)(obj).reduce(function (memo, key) {
	    (0, _warning2.default)(key.indexOf('' + namespace + _constants.NAMESPACE_SEP) !== 0, '[prefixNamespace]: ' + type + ' ' + key + ' should not be prefixed with namespace ' + namespace);
	    var newKey = '' + namespace + _constants.NAMESPACE_SEP + key;
	    memo[newKey] = obj[key];
	    return memo;
	  }, {});
	}
	
	function prefixNamespace(model) {
	  var namespace = model.namespace,
	      reducers = model.reducers,
	      effects = model.effects;
	
	
	  if (reducers) {
	    if ((0, _utils.isArray)(reducers)) {
	      model.reducers[0] = prefix(reducers[0], namespace, 'reducer');
	    } else {
	      model.reducers = prefix(reducers, namespace, 'reducer');
	    }
	  }
	  if (effects) {
	    model.effects = prefix(effects, namespace, 'effect');
	  }
	  return model;
	}
	module.exports = exports['default'];

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = prefixType;
	
	var _constants = __webpack_require__(64);
	
	function prefixType(type, model) {
	  var prefixedType = '' + model.namespace + _constants.NAMESPACE_SEP + type;
	  var typeWithoutAffix = prefixedType.replace(/\/@@[^/]+?$/, '');
	  if (model.reducers && model.reducers[typeWithoutAffix] || model.effects && model.effects[typeWithoutAffix]) {
	    return prefixedType;
	  }
	  return type;
	}
	module.exports = exports['default'];

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends2 = __webpack_require__(12);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	exports.default = prefixedDispatch;
	
	var _invariant = __webpack_require__(10);
	
	var _invariant2 = _interopRequireDefault(_invariant);
	
	var _warning = __webpack_require__(11);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _constants = __webpack_require__(64);
	
	var _prefixType = __webpack_require__(178);
	
	var _prefixType2 = _interopRequireDefault(_prefixType);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function prefixedDispatch(dispatch, model) {
	  return function (action) {
	    var type = action.type;
	
	    (0, _invariant2.default)(type, 'dispatch: action should be a plain Object with type');
	    (0, _warning2.default)(type.indexOf('' + model.namespace + _constants.NAMESPACE_SEP) !== 0, 'dispatch: ' + type + ' should not be prefixed with namespace ' + model.namespace);
	    return dispatch((0, _extends3.default)({}, action, { type: (0, _prefixType2.default)(type, model) }));
	  };
	}
	module.exports = exports['default'];

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _getIterator2 = __webpack_require__(57);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	exports.run = run;
	exports.unlisten = unlisten;
	
	var _warning = __webpack_require__(11);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _utils = __webpack_require__(42);
	
	var _prefixedDispatch = __webpack_require__(375);
	
	var _prefixedDispatch2 = _interopRequireDefault(_prefixedDispatch);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function run(subs, model, app, onError) {
	  var funcs = [];
	  var nonFuncs = [];
	  for (var key in subs) {
	    if (Object.prototype.hasOwnProperty.call(subs, key)) {
	      var sub = subs[key];
	      var unlistener = sub({
	        dispatch: (0, _prefixedDispatch2.default)(app._store.dispatch, model),
	        history: app._history
	      }, onError);
	      if ((0, _utils.isFunction)(unlistener)) {
	        funcs.push(unlistener);
	      } else {
	        nonFuncs.push(key);
	      }
	    }
	  }
	  return { funcs: funcs, nonFuncs: nonFuncs };
	}
	
	function unlisten(unlisteners, namespace) {
	  if (!unlisteners[namespace]) return;
	
	  var _unlisteners$namespac = unlisteners[namespace],
	      funcs = _unlisteners$namespac.funcs,
	      nonFuncs = _unlisteners$namespac.nonFuncs;
	
	  (0, _warning2.default)(nonFuncs.length === 0, '[app.unmodel] subscription should return unlistener function, check these subscriptions ' + nonFuncs.join(', '));
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;
	
	  try {
	    for (var _iterator = (0, _getIterator3.default)(funcs), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var unlistener = _step.value;
	
	      unlistener();
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	
	  delete unlisteners[namespace];
	}

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = exports.returnSelf = exports.isFunction = exports.isArray = exports.isPlainObject = undefined;
	
	var _isPlainObject2 = __webpack_require__(421);
	
	var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.isPlainObject = _isPlainObject3.default;
	var isArray = exports.isArray = Array.isArray.bind(Array);
	var isFunction = exports.isFunction = function isFunction(o) {
	  return typeof o === 'function';
	};
	var returnSelf = exports.returnSelf = function returnSelf(m) {
	  return m;
	};
	var noop = exports.noop = function noop() {};

/***/ }),

/***/ 397:
/***/ (function(module, exports) {

	module.exports = function flatten(list, depth) {
	  depth = (typeof depth == 'number') ? depth : Infinity;
	
	  if (!depth) {
	    if (Array.isArray(list)) {
	      return list.map(function(i) { return i; });
	    }
	    return list;
	  }
	
	  return _flatten(list, 1);
	
	  function _flatten(list, d) {
	    return list.reduce(function (acc, item) {
	      if (Array.isArray(item) && d < depth) {
	        return acc.concat(_flatten(item, d + 1));
	      }
	      else {
	        return acc.concat(item);
	      }
	    }, []);
	  }
	};


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	/* global document: false, __webpack_require__: false */
	patch();
	
	function patch() {
	  var head = document.querySelector("head");
	  var ensure = __webpack_require__.e;
	  var chunks = __webpack_require__.s;
	  var failures;
	
	  __webpack_require__.e = function (chunkId, callback) {
	    var loaded = false;
	    var immediate = true;
	
	    var handler = function handler(error) {
	      if (!callback) return;
	
	      callback(__webpack_require__, error);
	      callback = null;
	    };
	
	    if (!chunks && failures && failures[chunkId]) {
	      handler(true);
	      return;
	    }
	
	    ensure(chunkId, function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (immediate) {
	        // webpack fires callback immediately if chunk was already loaded
	        // IE also fires callback immediately if script was already
	        // in a cache (AppCache counts too)
	        setTimeout(function () {
	          handler();
	        });
	      } else {
	        handler();
	      }
	    });
	
	    // This is |true| if chunk is already loaded and does not need onError call.
	    // This happens because in such case ensure() is performed in sync way
	    if (loaded) {
	      return;
	    }
	
	    immediate = false;
	
	    onError(function () {
	      if (loaded) return;
	      loaded = true;
	
	      if (chunks) {
	        chunks[chunkId] = void 0;
	      } else {
	        failures || (failures = {});
	        failures[chunkId] = true;
	      }
	
	      handler(true);
	    });
	  };
	
	  function onError(callback) {
	    var script = head.lastChild;
	
	    if (script.tagName !== "SCRIPT") {
	      if (typeof console !== "undefined" && console.warn) {
	        console.warn("Script is not a script", script);
	      }
	
	      return;
	    }
	
	    script.onload = script.onerror = function () {
	      script.onload = script.onerror = null;
	      setTimeout(callback, 0);
	    };
	  }
	}

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {var win;
	
	if (typeof window !== "undefined") {
	    win = window;
	} else if (typeof global !== "undefined") {
	    win = global;
	} else if (typeof self !== "undefined"){
	    win = self;
	} else {
	    win = {};
	}
	
	module.exports = win;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	var isObject = __webpack_require__(422);
	
	function isObjectObject(o) {
	  return isObject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}
	
	module.exports = function isPlainObject(o) {
	  var ctor,prot;
	
	  if (isObjectObject(o) === false) return false;
	
	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;
	
	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;
	
	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }
	
	  // Most likely a plain Object
	  return true;
	};


/***/ }),

/***/ 422:
/***/ (function(module, exports) {

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */
	
	'use strict';
	
	module.exports = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};


/***/ }),

/***/ 443:
/***/ (function(module, exports) {

	function n(n){return n=n||Object.create(null),{on:function(c,e){(n[c]||(n[c]=[])).push(e)},off:function(c,e){n[c]&&n[c].splice(n[c].indexOf(e)>>>0,1)},emit:function(c,e){(n[c]||[]).slice().map(function(n){n(e)}),(n["*"]||[]).slice().map(function(n){n(c,e)})}}}module.exports=n;
	//# sourceMappingURL=mitt.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _io = __webpack_require__(72);
	
	Object.defineProperty(exports, 'take', {
	  enumerable: true,
	  get: function get() {
	    return _io.take;
	  }
	});
	Object.defineProperty(exports, 'takem', {
	  enumerable: true,
	  get: function get() {
	    return _io.takem;
	  }
	});
	Object.defineProperty(exports, 'put', {
	  enumerable: true,
	  get: function get() {
	    return _io.put;
	  }
	});
	Object.defineProperty(exports, 'all', {
	  enumerable: true,
	  get: function get() {
	    return _io.all;
	  }
	});
	Object.defineProperty(exports, 'race', {
	  enumerable: true,
	  get: function get() {
	    return _io.race;
	  }
	});
	Object.defineProperty(exports, 'call', {
	  enumerable: true,
	  get: function get() {
	    return _io.call;
	  }
	});
	Object.defineProperty(exports, 'apply', {
	  enumerable: true,
	  get: function get() {
	    return _io.apply;
	  }
	});
	Object.defineProperty(exports, 'cps', {
	  enumerable: true,
	  get: function get() {
	    return _io.cps;
	  }
	});
	Object.defineProperty(exports, 'fork', {
	  enumerable: true,
	  get: function get() {
	    return _io.fork;
	  }
	});
	Object.defineProperty(exports, 'spawn', {
	  enumerable: true,
	  get: function get() {
	    return _io.spawn;
	  }
	});
	Object.defineProperty(exports, 'join', {
	  enumerable: true,
	  get: function get() {
	    return _io.join;
	  }
	});
	Object.defineProperty(exports, 'cancel', {
	  enumerable: true,
	  get: function get() {
	    return _io.cancel;
	  }
	});
	Object.defineProperty(exports, 'select', {
	  enumerable: true,
	  get: function get() {
	    return _io.select;
	  }
	});
	Object.defineProperty(exports, 'actionChannel', {
	  enumerable: true,
	  get: function get() {
	    return _io.actionChannel;
	  }
	});
	Object.defineProperty(exports, 'cancelled', {
	  enumerable: true,
	  get: function get() {
	    return _io.cancelled;
	  }
	});
	Object.defineProperty(exports, 'flush', {
	  enumerable: true,
	  get: function get() {
	    return _io.flush;
	  }
	});
	Object.defineProperty(exports, 'getContext', {
	  enumerable: true,
	  get: function get() {
	    return _io.getContext;
	  }
	});
	Object.defineProperty(exports, 'setContext', {
	  enumerable: true,
	  get: function get() {
	    return _io.setContext;
	  }
	});
	Object.defineProperty(exports, 'takeEvery', {
	  enumerable: true,
	  get: function get() {
	    return _io.takeEvery;
	  }
	});
	Object.defineProperty(exports, 'takeLatest', {
	  enumerable: true,
	  get: function get() {
	    return _io.takeLatest;
	  }
	});
	Object.defineProperty(exports, 'throttle', {
	  enumerable: true,
	  get: function get() {
	    return _io.throttle;
	  }
	});

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	exports.buffers = exports.BUFFER_OVERFLOW = undefined;
	
	var _utils = __webpack_require__(32);
	
	var BUFFER_OVERFLOW = exports.BUFFER_OVERFLOW = "Channel's Buffer overflow!";
	
	var ON_OVERFLOW_THROW = 1;
	var ON_OVERFLOW_DROP = 2;
	var ON_OVERFLOW_SLIDE = 3;
	var ON_OVERFLOW_EXPAND = 4;
	
	var zeroBuffer = { isEmpty: _utils.kTrue, put: _utils.noop, take: _utils.noop };
	
	function ringBuffer() {
	  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
	  var overflowAction = arguments[1];
	
	  var arr = new Array(limit);
	  var length = 0;
	  var pushIndex = 0;
	  var popIndex = 0;
	
	  var push = function push(it) {
	    arr[pushIndex] = it;
	    pushIndex = (pushIndex + 1) % limit;
	    length++;
	  };
	
	  var take = function take() {
	    if (length != 0) {
	      var it = arr[popIndex];
	      arr[popIndex] = null;
	      length--;
	      popIndex = (popIndex + 1) % limit;
	      return it;
	    }
	  };
	
	  var flush = function flush() {
	    var items = [];
	    while (length) {
	      items.push(take());
	    }
	    return items;
	  };
	
	  return {
	    isEmpty: function isEmpty() {
	      return length == 0;
	    },
	    put: function put(it) {
	      if (length < limit) {
	        push(it);
	      } else {
	        var doubledLimit = void 0;
	        switch (overflowAction) {
	          case ON_OVERFLOW_THROW:
	            throw new Error(BUFFER_OVERFLOW);
	          case ON_OVERFLOW_SLIDE:
	            arr[pushIndex] = it;
	            pushIndex = (pushIndex + 1) % limit;
	            popIndex = pushIndex;
	            break;
	          case ON_OVERFLOW_EXPAND:
	            doubledLimit = 2 * limit;
	
	            arr = flush();
	
	            length = arr.length;
	            pushIndex = arr.length;
	            popIndex = 0;
	
	            arr.length = doubledLimit;
	            limit = doubledLimit;
	
	            push(it);
	            break;
	          default:
	          // DROP
	        }
	      }
	    },
	    take: take,
	    flush: flush
	  };
	}
	
	var buffers = exports.buffers = {
	  none: function none() {
	    return zeroBuffer;
	  },
	  fixed: function fixed(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_THROW);
	  },
	  dropping: function dropping(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_DROP);
	  },
	  sliding: function sliding(limit) {
	    return ringBuffer(limit, ON_OVERFLOW_SLIDE);
	  },
	  expanding: function expanding(initialSize) {
	    return ringBuffer(initialSize, ON_OVERFLOW_EXPAND);
	  }
	};

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.UNDEFINED_INPUT_ERROR = exports.INVALID_BUFFER = exports.isEnd = exports.END = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.emitter = emitter;
	exports.channel = channel;
	exports.eventChannel = eventChannel;
	exports.stdChannel = stdChannel;
	
	var _utils = __webpack_require__(32);
	
	var _buffers = __webpack_require__(141);
	
	var _scheduler = __webpack_require__(228);
	
	var CHANNEL_END_TYPE = '@@redux-saga/CHANNEL_END';
	var END = exports.END = { type: CHANNEL_END_TYPE };
	var isEnd = exports.isEnd = function isEnd(a) {
	  return a && a.type === CHANNEL_END_TYPE;
	};
	
	function emitter() {
	  var subscribers = [];
	
	  function subscribe(sub) {
	    subscribers.push(sub);
	    return function () {
	      return (0, _utils.remove)(subscribers, sub);
	    };
	  }
	
	  function emit(item) {
	    var arr = subscribers.slice();
	    for (var i = 0, len = arr.length; i < len; i++) {
	      arr[i](item);
	    }
	  }
	
	  return {
	    subscribe: subscribe,
	    emit: emit
	  };
	}
	
	var INVALID_BUFFER = exports.INVALID_BUFFER = 'invalid buffer passed to channel factory function';
	var UNDEFINED_INPUT_ERROR = exports.UNDEFINED_INPUT_ERROR = 'Saga was provided with an undefined action';
	
	if (false) {
	  exports.UNDEFINED_INPUT_ERROR = UNDEFINED_INPUT_ERROR += '\nHints:\n    - check that your Action Creator returns a non-undefined value\n    - if the Saga was started using runSaga, check that your subscribe source provides the action to its listeners\n  ';
	}
	
	function channel() {
	  var buffer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _buffers.buffers.fixed();
	
	  var closed = false;
	  var takers = [];
	
	  (0, _utils.check)(buffer, _utils.is.buffer, INVALID_BUFFER);
	
	  function checkForbiddenStates() {
	    if (closed && takers.length) {
	      throw (0, _utils.internalErr)('Cannot have a closed channel with pending takers');
	    }
	    if (takers.length && !buffer.isEmpty()) {
	      throw (0, _utils.internalErr)('Cannot have pending takers with non empty buffer');
	    }
	  }
	
	  function put(input) {
	    checkForbiddenStates();
	    (0, _utils.check)(input, _utils.is.notUndef, UNDEFINED_INPUT_ERROR);
	    if (closed) {
	      return;
	    }
	    if (!takers.length) {
	      return buffer.put(input);
	    }
	    for (var i = 0; i < takers.length; i++) {
	      var cb = takers[i];
	      if (!cb[_utils.MATCH] || cb[_utils.MATCH](input)) {
	        takers.splice(i, 1);
	        return cb(input);
	      }
	    }
	  }
	
	  function take(cb) {
	    checkForbiddenStates();
	    (0, _utils.check)(cb, _utils.is.func, "channel.take's callback must be a function");
	
	    if (closed && buffer.isEmpty()) {
	      cb(END);
	    } else if (!buffer.isEmpty()) {
	      cb(buffer.take());
	    } else {
	      takers.push(cb);
	      cb.cancel = function () {
	        return (0, _utils.remove)(takers, cb);
	      };
	    }
	  }
	
	  function flush(cb) {
	    checkForbiddenStates(); // TODO: check if some new state should be forbidden now
	    (0, _utils.check)(cb, _utils.is.func, "channel.flush' callback must be a function");
	    if (closed && buffer.isEmpty()) {
	      cb(END);
	      return;
	    }
	    cb(buffer.flush());
	  }
	
	  function close() {
	    checkForbiddenStates();
	    if (!closed) {
	      closed = true;
	      if (takers.length) {
	        var arr = takers;
	        takers = [];
	        for (var i = 0, len = arr.length; i < len; i++) {
	          arr[i](END);
	        }
	      }
	    }
	  }
	
	  return {
	    take: take,
	    put: put,
	    flush: flush,
	    close: close,
	    get __takers__() {
	      return takers;
	    },
	    get __closed__() {
	      return closed;
	    }
	  };
	}
	
	function eventChannel(subscribe) {
	  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _buffers.buffers.none();
	  var matcher = arguments[2];
	
	  /**
	    should be if(typeof matcher !== undefined) instead?
	    see PR #273 for a background discussion
	  **/
	  if (arguments.length > 2) {
	    (0, _utils.check)(matcher, _utils.is.func, 'Invalid match function passed to eventChannel');
	  }
	
	  var chan = channel(buffer);
	  var close = function close() {
	    if (!chan.__closed__) {
	      if (unsubscribe) {
	        unsubscribe();
	      }
	      chan.close();
	    }
	  };
	  var unsubscribe = subscribe(function (input) {
	    if (isEnd(input)) {
	      close();
	      return;
	    }
	    if (matcher && !matcher(input)) {
	      return;
	    }
	    chan.put(input);
	  });
	  if (chan.__closed__) {
	    unsubscribe();
	  }
	
	  if (!_utils.is.func(unsubscribe)) {
	    throw new Error('in eventChannel: subscribe should return a function to unsubscribe');
	  }
	
	  return {
	    take: chan.take,
	    flush: chan.flush,
	    close: close
	  };
	}
	
	function stdChannel(subscribe) {
	  var chan = eventChannel(function (cb) {
	    return subscribe(function (input) {
	      if (input[_utils.SAGA_ACTION]) {
	        cb(input);
	        return;
	      }
	      (0, _scheduler.asap)(function () {
	        return cb(input);
	      });
	    });
	  });
	
	  return _extends({}, chan, {
	    take: function take(cb, matcher) {
	      if (arguments.length > 1) {
	        (0, _utils.check)(matcher, _utils.is.func, "channel.take's matcher argument must be a function");
	        cb[_utils.MATCH] = matcher;
	      }
	      chan.take(cb);
	    }
	  });
	}

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.asEffect = exports.takem = undefined;
	exports.take = take;
	exports.put = put;
	exports.all = all;
	exports.race = race;
	exports.call = call;
	exports.apply = apply;
	exports.cps = cps;
	exports.fork = fork;
	exports.spawn = spawn;
	exports.join = join;
	exports.cancel = cancel;
	exports.select = select;
	exports.actionChannel = actionChannel;
	exports.cancelled = cancelled;
	exports.flush = flush;
	exports.getContext = getContext;
	exports.setContext = setContext;
	exports.takeEvery = takeEvery;
	exports.takeLatest = takeLatest;
	exports.throttle = throttle;
	
	var _utils = __webpack_require__(32);
	
	var _sagaHelpers = __webpack_require__(227);
	
	var IO = (0, _utils.sym)('IO');
	var TAKE = 'TAKE';
	var PUT = 'PUT';
	var ALL = 'ALL';
	var RACE = 'RACE';
	var CALL = 'CALL';
	var CPS = 'CPS';
	var FORK = 'FORK';
	var JOIN = 'JOIN';
	var CANCEL = 'CANCEL';
	var SELECT = 'SELECT';
	var ACTION_CHANNEL = 'ACTION_CHANNEL';
	var CANCELLED = 'CANCELLED';
	var FLUSH = 'FLUSH';
	var GET_CONTEXT = 'GET_CONTEXT';
	var SET_CONTEXT = 'SET_CONTEXT';
	
	var TEST_HINT = '\n(HINT: if you are getting this errors in tests, consider using createMockTask from redux-saga/utils)';
	
	var effect = function effect(type, payload) {
	  var _ref;
	
	  return _ref = {}, _ref[IO] = true, _ref[type] = payload, _ref;
	};
	
	function take() {
	  var patternOrChannel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '*';
	
	  if (arguments.length) {
	    (0, _utils.check)(arguments[0], _utils.is.notUndef, 'take(patternOrChannel): patternOrChannel is undefined');
	  }
	  if (_utils.is.pattern(patternOrChannel)) {
	    return effect(TAKE, { pattern: patternOrChannel });
	  }
	  if (_utils.is.channel(patternOrChannel)) {
	    return effect(TAKE, { channel: patternOrChannel });
	  }
	  throw new Error('take(patternOrChannel): argument ' + String(patternOrChannel) + ' is not valid channel or a valid pattern');
	}
	
	take.maybe = function () {
	  var eff = take.apply(undefined, arguments);
	  eff[TAKE].maybe = true;
	  return eff;
	};
	
	var takem = /*#__PURE__*/exports.takem = (0, _utils.deprecate)(take.maybe, /*#__PURE__*/(0, _utils.updateIncentive)('takem', 'take.maybe'));
	
	function put(channel, action) {
	  if (arguments.length > 1) {
	    (0, _utils.check)(channel, _utils.is.notUndef, 'put(channel, action): argument channel is undefined');
	    (0, _utils.check)(channel, _utils.is.channel, 'put(channel, action): argument ' + channel + ' is not a valid channel');
	    (0, _utils.check)(action, _utils.is.notUndef, 'put(channel, action): argument action is undefined');
	  } else {
	    (0, _utils.check)(channel, _utils.is.notUndef, 'put(action): argument action is undefined');
	    action = channel;
	    channel = null;
	  }
	  return effect(PUT, { channel: channel, action: action });
	}
	
	put.resolve = function () {
	  var eff = put.apply(undefined, arguments);
	  eff[PUT].resolve = true;
	  return eff;
	};
	
	put.sync = (0, _utils.deprecate)(put.resolve, (0, _utils.updateIncentive)('put.sync', 'put.resolve'));
	
	function all(effects) {
	  return effect(ALL, effects);
	}
	
	function race(effects) {
	  return effect(RACE, effects);
	}
	
	function getFnCallDesc(meth, fn, args) {
	  (0, _utils.check)(fn, _utils.is.notUndef, meth + ': argument fn is undefined');
	
	  var context = null;
	  if (_utils.is.array(fn)) {
	    var _fn = fn;
	    context = _fn[0];
	    fn = _fn[1];
	  } else if (fn.fn) {
	    var _fn2 = fn;
	    context = _fn2.context;
	    fn = _fn2.fn;
	  }
	  if (context && _utils.is.string(fn) && _utils.is.func(context[fn])) {
	    fn = context[fn];
	  }
	  (0, _utils.check)(fn, _utils.is.func, meth + ': argument ' + fn + ' is not a function');
	
	  return { context: context, fn: fn, args: args };
	}
	
	function call(fn) {
	  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    args[_key - 1] = arguments[_key];
	  }
	
	  return effect(CALL, getFnCallDesc('call', fn, args));
	}
	
	function apply(context, fn) {
	  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	
	  return effect(CALL, getFnCallDesc('apply', { context: context, fn: fn }, args));
	}
	
	function cps(fn) {
	  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	    args[_key2 - 1] = arguments[_key2];
	  }
	
	  return effect(CPS, getFnCallDesc('cps', fn, args));
	}
	
	function fork(fn) {
	  for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
	    args[_key3 - 1] = arguments[_key3];
	  }
	
	  return effect(FORK, getFnCallDesc('fork', fn, args));
	}
	
	function spawn(fn) {
	  for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
	    args[_key4 - 1] = arguments[_key4];
	  }
	
	  var eff = fork.apply(undefined, [fn].concat(args));
	  eff[FORK].detached = true;
	  return eff;
	}
	
	function join() {
	  for (var _len5 = arguments.length, tasks = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
	    tasks[_key5] = arguments[_key5];
	  }
	
	  if (tasks.length > 1) {
	    return all(tasks.map(function (t) {
	      return join(t);
	    }));
	  }
	  var task = tasks[0];
	  (0, _utils.check)(task, _utils.is.notUndef, 'join(task): argument task is undefined');
	  (0, _utils.check)(task, _utils.is.task, 'join(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
	  return effect(JOIN, task);
	}
	
	function cancel() {
	  for (var _len6 = arguments.length, tasks = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
	    tasks[_key6] = arguments[_key6];
	  }
	
	  if (tasks.length > 1) {
	    return all(tasks.map(function (t) {
	      return cancel(t);
	    }));
	  }
	  var task = tasks[0];
	  if (tasks.length === 1) {
	    (0, _utils.check)(task, _utils.is.notUndef, 'cancel(task): argument task is undefined');
	    (0, _utils.check)(task, _utils.is.task, 'cancel(task): argument ' + task + ' is not a valid Task object ' + TEST_HINT);
	  }
	  return effect(CANCEL, task || _utils.SELF_CANCELLATION);
	}
	
	function select(selector) {
	  for (var _len7 = arguments.length, args = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
	    args[_key7 - 1] = arguments[_key7];
	  }
	
	  if (arguments.length === 0) {
	    selector = _utils.ident;
	  } else {
	    (0, _utils.check)(selector, _utils.is.notUndef, 'select(selector,[...]): argument selector is undefined');
	    (0, _utils.check)(selector, _utils.is.func, 'select(selector,[...]): argument ' + selector + ' is not a function');
	  }
	  return effect(SELECT, { selector: selector, args: args });
	}
	
	/**
	  channel(pattern, [buffer])    => creates an event channel for store actions
	**/
	function actionChannel(pattern, buffer) {
	  (0, _utils.check)(pattern, _utils.is.notUndef, 'actionChannel(pattern,...): argument pattern is undefined');
	  if (arguments.length > 1) {
	    (0, _utils.check)(buffer, _utils.is.notUndef, 'actionChannel(pattern, buffer): argument buffer is undefined');
	    (0, _utils.check)(buffer, _utils.is.buffer, 'actionChannel(pattern, buffer): argument ' + buffer + ' is not a valid buffer');
	  }
	  return effect(ACTION_CHANNEL, { pattern: pattern, buffer: buffer });
	}
	
	function cancelled() {
	  return effect(CANCELLED, {});
	}
	
	function flush(channel) {
	  (0, _utils.check)(channel, _utils.is.channel, 'flush(channel): argument ' + channel + ' is not valid channel');
	  return effect(FLUSH, channel);
	}
	
	function getContext(prop) {
	  (0, _utils.check)(prop, _utils.is.string, 'getContext(prop): argument ' + prop + ' is not a string');
	  return effect(GET_CONTEXT, prop);
	}
	
	function setContext(props) {
	  (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)(null, props));
	  return effect(SET_CONTEXT, props);
	}
	
	function takeEvery(patternOrChannel, worker) {
	  for (var _len8 = arguments.length, args = Array(_len8 > 2 ? _len8 - 2 : 0), _key8 = 2; _key8 < _len8; _key8++) {
	    args[_key8 - 2] = arguments[_key8];
	  }
	
	  return fork.apply(undefined, [_sagaHelpers.takeEveryHelper, patternOrChannel, worker].concat(args));
	}
	
	function takeLatest(patternOrChannel, worker) {
	  for (var _len9 = arguments.length, args = Array(_len9 > 2 ? _len9 - 2 : 0), _key9 = 2; _key9 < _len9; _key9++) {
	    args[_key9 - 2] = arguments[_key9];
	  }
	
	  return fork.apply(undefined, [_sagaHelpers.takeLatestHelper, patternOrChannel, worker].concat(args));
	}
	
	function throttle(ms, pattern, worker) {
	  for (var _len10 = arguments.length, args = Array(_len10 > 3 ? _len10 - 3 : 0), _key10 = 3; _key10 < _len10; _key10++) {
	    args[_key10 - 3] = arguments[_key10];
	  }
	
	  return fork.apply(undefined, [_sagaHelpers.throttleHelper, ms, pattern, worker].concat(args));
	}
	
	var createAsEffectType = function createAsEffectType(type) {
	  return function (effect) {
	    return effect && effect[IO] && effect[type];
	  };
	};
	
	var asEffect = exports.asEffect = {
	  take: createAsEffectType(TAKE),
	  put: createAsEffectType(PUT),
	  all: createAsEffectType(ALL),
	  race: createAsEffectType(RACE),
	  call: createAsEffectType(CALL),
	  cps: createAsEffectType(CPS),
	  fork: createAsEffectType(FORK),
	  join: createAsEffectType(JOIN),
	  cancel: createAsEffectType(CANCEL),
	  select: createAsEffectType(SELECT),
	  actionChannel: createAsEffectType(ACTION_CHANNEL),
	  cancelled: createAsEffectType(CANCELLED),
	  flush: createAsEffectType(FLUSH),
	  getContext: createAsEffectType(GET_CONTEXT),
	  setContext: createAsEffectType(SET_CONTEXT)
	};

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = sagaMiddlewareFactory;
	
	var _utils = __webpack_require__(32);
	
	var _channel = __webpack_require__(71);
	
	var _runSaga = __webpack_require__(571);
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function sagaMiddlewareFactory() {
	  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var _ref$context = _ref.context,
	      context = _ref$context === undefined ? {} : _ref$context,
	      options = _objectWithoutProperties(_ref, ['context']);
	
	  var sagaMonitor = options.sagaMonitor,
	      logger = options.logger,
	      onError = options.onError;
	
	
	  if (_utils.is.func(options)) {
	    if (true) {
	      throw new Error('Saga middleware no longer accept Generator functions. Use sagaMiddleware.run instead');
	    } else {
	      throw new Error('You passed a function to the Saga middleware. You are likely trying to start a        Saga by directly passing it to the middleware. This is no longer possible starting from 0.10.0.        To run a Saga, you must do it dynamically AFTER mounting the middleware into the store.\n        Example:\n          import createSagaMiddleware from \'redux-saga\'\n          ... other imports\n\n          const sagaMiddleware = createSagaMiddleware()\n          const store = createStore(reducer, applyMiddleware(sagaMiddleware))\n          sagaMiddleware.run(saga, ...args)\n      ');
	    }
	  }
	
	  if (logger && !_utils.is.func(logger)) {
	    throw new Error('`options.logger` passed to the Saga middleware is not a function!');
	  }
	
	  if (false) {
	    throw new Error('`options.onerror` was removed. Use `options.onError` instead.');
	  }
	
	  if (onError && !_utils.is.func(onError)) {
	    throw new Error('`options.onError` passed to the Saga middleware is not a function!');
	  }
	
	  if (options.emitter && !_utils.is.func(options.emitter)) {
	    throw new Error('`options.emitter` passed to the Saga middleware is not a function!');
	  }
	
	  function sagaMiddleware(_ref2) {
	    var getState = _ref2.getState,
	        dispatch = _ref2.dispatch;
	
	    var sagaEmitter = (0, _channel.emitter)();
	    sagaEmitter.emit = (options.emitter || _utils.ident)(sagaEmitter.emit);
	
	    sagaMiddleware.run = _runSaga.runSaga.bind(null, {
	      context: context,
	      subscribe: sagaEmitter.subscribe,
	      dispatch: dispatch,
	      getState: getState,
	      sagaMonitor: sagaMonitor,
	      logger: logger,
	      onError: onError
	    });
	
	    return function (next) {
	      return function (action) {
	        if (sagaMonitor && sagaMonitor.actionDispatched) {
	          sagaMonitor.actionDispatched(action);
	        }
	        var result = next(action); // hit reducers
	        sagaEmitter.emit(action);
	        return result;
	      };
	    };
	  }
	
	  sagaMiddleware.run = function () {
	    throw new Error('Before running a Saga, you must mount the Saga middleware on the Store using applyMiddleware');
	  };
	
	  sagaMiddleware.setContext = function (props) {
	    (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)('sagaMiddleware', props));
	    _utils.object.assign(context, props);
	  };
	
	  return sagaMiddleware;
	}

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.TASK_CANCEL = exports.CHANNEL_END = exports.NOT_ITERATOR_ERROR = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = proc;
	
	var _utils = __webpack_require__(32);
	
	var _scheduler = __webpack_require__(228);
	
	var _io = __webpack_require__(72);
	
	var _channel = __webpack_require__(71);
	
	var _buffers = __webpack_require__(141);
	
	function _defineEnumerableProperties(obj, descs) { for (var key in descs) { var desc = descs[key]; desc.configurable = desc.enumerable = true; if ("value" in desc) desc.writable = true; Object.defineProperty(obj, key, desc); } return obj; }
	
	var NOT_ITERATOR_ERROR = exports.NOT_ITERATOR_ERROR = 'proc first argument (Saga function result) must be an iterator';
	
	var CHANNEL_END = exports.CHANNEL_END = {
	  toString: function toString() {
	    return '@@redux-saga/CHANNEL_END';
	  }
	};
	var TASK_CANCEL = exports.TASK_CANCEL = {
	  toString: function toString() {
	    return '@@redux-saga/TASK_CANCEL';
	  }
	};
	
	var matchers = {
	  wildcard: function wildcard() {
	    return _utils.kTrue;
	  },
	  default: function _default(pattern) {
	    return (typeof pattern === 'undefined' ? 'undefined' : _typeof(pattern)) === 'symbol' ? function (input) {
	      return input.type === pattern;
	    } : function (input) {
	      return input.type === String(pattern);
	    };
	  },
	  array: function array(patterns) {
	    return function (input) {
	      return patterns.some(function (p) {
	        return matcher(p)(input);
	      });
	    };
	  },
	  predicate: function predicate(_predicate) {
	    return function (input) {
	      return _predicate(input);
	    };
	  }
	};
	
	function matcher(pattern) {
	  // prettier-ignore
	  return (pattern === '*' ? matchers.wildcard : _utils.is.array(pattern) ? matchers.array : _utils.is.stringableFunc(pattern) ? matchers.default : _utils.is.func(pattern) ? matchers.predicate : matchers.default)(pattern);
	}
	
	/**
	  Used to track a parent task and its forks
	  In the new fork model, forked tasks are attached by default to their parent
	  We model this using the concept of Parent task && main Task
	  main task is the main flow of the current Generator, the parent tasks is the
	  aggregation of the main tasks + all its forked tasks.
	  Thus the whole model represents an execution tree with multiple branches (vs the
	  linear execution tree in sequential (non parallel) programming)
	
	  A parent tasks has the following semantics
	  - It completes if all its forks either complete or all cancelled
	  - If it's cancelled, all forks are cancelled as well
	  - It aborts if any uncaught error bubbles up from forks
	  - If it completes, the return value is the one returned by the main task
	**/
	function forkQueue(name, mainTask, cb) {
	  var tasks = [],
	      result = void 0,
	      completed = false;
	  addTask(mainTask);
	
	  function abort(err) {
	    cancelAll();
	    cb(err, true);
	  }
	
	  function addTask(task) {
	    tasks.push(task);
	    task.cont = function (res, isErr) {
	      if (completed) {
	        return;
	      }
	
	      (0, _utils.remove)(tasks, task);
	      task.cont = _utils.noop;
	      if (isErr) {
	        abort(res);
	      } else {
	        if (task === mainTask) {
	          result = res;
	        }
	        if (!tasks.length) {
	          completed = true;
	          cb(result);
	        }
	      }
	    };
	    // task.cont.cancel = task.cancel
	  }
	
	  function cancelAll() {
	    if (completed) {
	      return;
	    }
	    completed = true;
	    tasks.forEach(function (t) {
	      t.cont = _utils.noop;
	      t.cancel();
	    });
	    tasks = [];
	  }
	
	  return {
	    addTask: addTask,
	    cancelAll: cancelAll,
	    abort: abort,
	    getTasks: function getTasks() {
	      return tasks;
	    },
	    taskNames: function taskNames() {
	      return tasks.map(function (t) {
	        return t.name;
	      });
	    }
	  };
	}
	
	function createTaskIterator(_ref) {
	  var context = _ref.context,
	      fn = _ref.fn,
	      args = _ref.args;
	
	  if (_utils.is.iterator(fn)) {
	    return fn;
	  }
	
	  // catch synchronous failures; see #152 and #441
	  var result = void 0,
	      error = void 0;
	  try {
	    result = fn.apply(context, args);
	  } catch (err) {
	    error = err;
	  }
	
	  // i.e. a generator function returns an iterator
	  if (_utils.is.iterator(result)) {
	    return result;
	  }
	
	  // do not bubble up synchronous failures for detached forks
	  // instead create a failed task. See #152 and #441
	  return error ? (0, _utils.makeIterator)(function () {
	    throw error;
	  }) : (0, _utils.makeIterator)(function () {
	    var pc = void 0;
	    var eff = { done: false, value: result };
	    var ret = function ret(value) {
	      return { done: true, value: value };
	    };
	    return function (arg) {
	      if (!pc) {
	        pc = true;
	        return eff;
	      } else {
	        return ret(arg);
	      }
	    };
	  }());
	}
	
	var wrapHelper = function wrapHelper(helper) {
	  return { fn: helper };
	};
	
	function proc(iterator) {
	  var subscribe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
	    return _utils.noop;
	  };
	  var dispatch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.noop;
	  var getState = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _utils.noop;
	  var parentContext = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
	  var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
	  var parentEffectId = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
	  var name = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 'anonymous';
	  var cont = arguments[8];
	
	  (0, _utils.check)(iterator, _utils.is.iterator, NOT_ITERATOR_ERROR);
	
	  var effectsString = '[...effects]';
	  var runParallelEffect = (0, _utils.deprecate)(runAllEffect, (0, _utils.updateIncentive)(effectsString, 'all(' + effectsString + ')'));
	
	  var sagaMonitor = options.sagaMonitor,
	      logger = options.logger,
	      onError = options.onError;
	
	  var log = logger || _utils.log;
	  var stdChannel = (0, _channel.stdChannel)(subscribe);
	  var taskContext = Object.create(parentContext);
	  /**
	    Tracks the current effect cancellation
	    Each time the generator progresses. calling runEffect will set a new value
	    on it. It allows propagating cancellation to child effects
	  **/
	  next.cancel = _utils.noop;
	
	  /**
	    Creates a new task descriptor for this generator, We'll also create a main task
	    to track the main flow (besides other forked tasks)
	  **/
	  var task = newTask(parentEffectId, name, iterator, cont);
	  var mainTask = { name: name, cancel: cancelMain, isRunning: true };
	  var taskQueue = forkQueue(name, mainTask, end);
	
	  /**
	    cancellation of the main task. We'll simply resume the Generator with a Cancel
	  **/
	  function cancelMain() {
	    if (mainTask.isRunning && !mainTask.isCancelled) {
	      mainTask.isCancelled = true;
	      next(TASK_CANCEL);
	    }
	  }
	
	  /**
	    This may be called by a parent generator to trigger/propagate cancellation
	    cancel all pending tasks (including the main task), then end the current task.
	     Cancellation propagates down to the whole execution tree holded by this Parent task
	    It's also propagated to all joiners of this task and their execution tree/joiners
	     Cancellation is noop for terminated/Cancelled tasks tasks
	  **/
	  function cancel() {
	    /**
	      We need to check both Running and Cancelled status
	      Tasks can be Cancelled but still Running
	    **/
	    if (iterator._isRunning && !iterator._isCancelled) {
	      iterator._isCancelled = true;
	      taskQueue.cancelAll();
	      /**
	        Ending with a Never result will propagate the Cancellation to all joiners
	      **/
	      end(TASK_CANCEL);
	    }
	  }
	  /**
	    attaches cancellation logic to this task's continuation
	    this will permit cancellation to propagate down the call chain
	  **/
	  cont && (cont.cancel = cancel);
	
	  // tracks the running status
	  iterator._isRunning = true;
	
	  // kicks up the generator
	  next();
	
	  // then return the task descriptor to the caller
	  return task;
	
	  /**
	    This is the generator driver
	    It's a recursive async/continuation function which calls itself
	    until the generator terminates or throws
	  **/
	  function next(arg, isErr) {
	    // Preventive measure. If we end up here, then there is really something wrong
	    if (!mainTask.isRunning) {
	      throw new Error('Trying to resume an already finished generator');
	    }
	
	    try {
	      var result = void 0;
	      if (isErr) {
	        result = iterator.throw(arg);
	      } else if (arg === TASK_CANCEL) {
	        /**
	          getting TASK_CANCEL automatically cancels the main task
	          We can get this value here
	           - By cancelling the parent task manually
	          - By joining a Cancelled task
	        **/
	        mainTask.isCancelled = true;
	        /**
	          Cancels the current effect; this will propagate the cancellation down to any called tasks
	        **/
	        next.cancel();
	        /**
	          If this Generator has a `return` method then invokes it
	          This will jump to the finally block
	        **/
	        result = _utils.is.func(iterator.return) ? iterator.return(TASK_CANCEL) : { done: true, value: TASK_CANCEL };
	      } else if (arg === CHANNEL_END) {
	        // We get CHANNEL_END by taking from a channel that ended using `take` (and not `takem` used to trap End of channels)
	        result = _utils.is.func(iterator.return) ? iterator.return() : { done: true };
	      } else {
	        result = iterator.next(arg);
	      }
	
	      if (!result.done) {
	        runEffect(result.value, parentEffectId, '', next);
	      } else {
	        /**
	          This Generator has ended, terminate the main task and notify the fork queue
	        **/
	        mainTask.isMainRunning = false;
	        mainTask.cont && mainTask.cont(result.value);
	      }
	    } catch (error) {
	      if (mainTask.isCancelled) {
	        log('error', 'uncaught at ' + name, error.message);
	      }
	      mainTask.isMainRunning = false;
	      mainTask.cont(error, true);
	    }
	  }
	
	  function end(result, isErr) {
	    iterator._isRunning = false;
	    stdChannel.close();
	    if (!isErr) {
	      if (false) {
	        log('info', name + ' has been cancelled', '');
	      }
	      iterator._result = result;
	      iterator._deferredEnd && iterator._deferredEnd.resolve(result);
	    } else {
	      if (result instanceof Error) {
	        result.sagaStack = 'at ' + name + ' \n ' + (result.sagaStack || result.stack);
	      }
	      if (!task.cont) {
	        log('error', 'uncaught', result.sagaStack || result.stack);
	        if (result instanceof Error && onError) {
	          onError(result);
	        }
	      }
	      iterator._error = result;
	      iterator._isAborted = true;
	      iterator._deferredEnd && iterator._deferredEnd.reject(result);
	    }
	    task.cont && task.cont(result, isErr);
	    task.joiners.forEach(function (j) {
	      return j.cb(result, isErr);
	    });
	    task.joiners = null;
	  }
	
	  function runEffect(effect, parentEffectId) {
	    var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	    var cb = arguments[3];
	
	    var effectId = (0, _utils.uid)();
	    sagaMonitor && sagaMonitor.effectTriggered({ effectId: effectId, parentEffectId: parentEffectId, label: label, effect: effect });
	
	    /**
	      completion callback and cancel callback are mutually exclusive
	      We can't cancel an already completed effect
	      And We can't complete an already cancelled effectId
	    **/
	    var effectSettled = void 0;
	
	    // Completion callback passed to the appropriate effect runner
	    function currCb(res, isErr) {
	      if (effectSettled) {
	        return;
	      }
	
	      effectSettled = true;
	      cb.cancel = _utils.noop; // defensive measure
	      if (sagaMonitor) {
	        isErr ? sagaMonitor.effectRejected(effectId, res) : sagaMonitor.effectResolved(effectId, res);
	      }
	      cb(res, isErr);
	    }
	    // tracks down the current cancel
	    currCb.cancel = _utils.noop;
	
	    // setup cancellation logic on the parent cb
	    cb.cancel = function () {
	      // prevents cancelling an already completed effect
	      if (effectSettled) {
	        return;
	      }
	
	      effectSettled = true;
	      /**
	        propagates cancel downward
	        catch uncaught cancellations errors; since we can no longer call the completion
	        callback, log errors raised during cancellations into the console
	      **/
	      try {
	        currCb.cancel();
	      } catch (err) {
	        log('error', 'uncaught at ' + name, err.message);
	      }
	      currCb.cancel = _utils.noop; // defensive measure
	
	      sagaMonitor && sagaMonitor.effectCancelled(effectId);
	    };
	
	    /**
	      each effect runner must attach its own logic of cancellation to the provided callback
	      it allows this generator to propagate cancellation downward.
	       ATTENTION! effect runners must setup the cancel logic by setting cb.cancel = [cancelMethod]
	      And the setup must occur before calling the callback
	       This is a sort of inversion of control: called async functions are responsible
	      for completing the flow by calling the provided continuation; while caller functions
	      are responsible for aborting the current flow by calling the attached cancel function
	       Library users can attach their own cancellation logic to promises by defining a
	      promise[CANCEL] method in their returned promises
	      ATTENTION! calling cancel must have no effect on an already completed or cancelled effect
	    **/
	    var data = void 0;
	    // prettier-ignore
	    return (
	      // Non declarative effect
	      _utils.is.promise(effect) ? resolvePromise(effect, currCb) : _utils.is.helper(effect) ? runForkEffect(wrapHelper(effect), effectId, currCb) : _utils.is.iterator(effect) ? resolveIterator(effect, effectId, name, currCb)
	
	      // declarative effects
	      : _utils.is.array(effect) ? runParallelEffect(effect, effectId, currCb) : (data = _io.asEffect.take(effect)) ? runTakeEffect(data, currCb) : (data = _io.asEffect.put(effect)) ? runPutEffect(data, currCb) : (data = _io.asEffect.all(effect)) ? runAllEffect(data, effectId, currCb) : (data = _io.asEffect.race(effect)) ? runRaceEffect(data, effectId, currCb) : (data = _io.asEffect.call(effect)) ? runCallEffect(data, effectId, currCb) : (data = _io.asEffect.cps(effect)) ? runCPSEffect(data, currCb) : (data = _io.asEffect.fork(effect)) ? runForkEffect(data, effectId, currCb) : (data = _io.asEffect.join(effect)) ? runJoinEffect(data, currCb) : (data = _io.asEffect.cancel(effect)) ? runCancelEffect(data, currCb) : (data = _io.asEffect.select(effect)) ? runSelectEffect(data, currCb) : (data = _io.asEffect.actionChannel(effect)) ? runChannelEffect(data, currCb) : (data = _io.asEffect.flush(effect)) ? runFlushEffect(data, currCb) : (data = _io.asEffect.cancelled(effect)) ? runCancelledEffect(data, currCb) : (data = _io.asEffect.getContext(effect)) ? runGetContextEffect(data, currCb) : (data = _io.asEffect.setContext(effect)) ? runSetContextEffect(data, currCb) : /* anything else returned as is */currCb(effect)
	    );
	  }
	
	  function resolvePromise(promise, cb) {
	    var cancelPromise = promise[_utils.CANCEL];
	    if (_utils.is.func(cancelPromise)) {
	      cb.cancel = cancelPromise;
	    } else if (_utils.is.func(promise.abort)) {
	      cb.cancel = function () {
	        return promise.abort();
	      };
	      // TODO: add support for the fetch API, whenever they get around to
	      // adding cancel support
	    }
	    promise.then(cb, function (error) {
	      return cb(error, true);
	    });
	  }
	
	  function resolveIterator(iterator, effectId, name, cb) {
	    proc(iterator, subscribe, dispatch, getState, taskContext, options, effectId, name, cb);
	  }
	
	  function runTakeEffect(_ref2, cb) {
	    var channel = _ref2.channel,
	        pattern = _ref2.pattern,
	        maybe = _ref2.maybe;
	
	    channel = channel || stdChannel;
	    var takeCb = function takeCb(inp) {
	      return inp instanceof Error ? cb(inp, true) : (0, _channel.isEnd)(inp) && !maybe ? cb(CHANNEL_END) : cb(inp);
	    };
	    try {
	      channel.take(takeCb, matcher(pattern));
	    } catch (err) {
	      return cb(err, true);
	    }
	    cb.cancel = takeCb.cancel;
	  }
	
	  function runPutEffect(_ref3, cb) {
	    var channel = _ref3.channel,
	        action = _ref3.action,
	        resolve = _ref3.resolve;
	
	    /**
	      Schedule the put in case another saga is holding a lock.
	      The put will be executed atomically. ie nested puts will execute after
	      this put has terminated.
	    **/
	    (0, _scheduler.asap)(function () {
	      var result = void 0;
	      try {
	        result = (channel ? channel.put : dispatch)(action);
	      } catch (error) {
	        // If we have a channel or `put.resolve` was used then bubble up the error.
	        if (channel || resolve) return cb(error, true);
	        log('error', 'uncaught at ' + name, error.stack || error.message || error);
	      }
	
	      if (resolve && _utils.is.promise(result)) {
	        resolvePromise(result, cb);
	      } else {
	        return cb(result);
	      }
	    });
	    // Put effects are non cancellables
	  }
	
	  function runCallEffect(_ref4, effectId, cb) {
	    var context = _ref4.context,
	        fn = _ref4.fn,
	        args = _ref4.args;
	
	    var result = void 0;
	    // catch synchronous failures; see #152
	    try {
	      result = fn.apply(context, args);
	    } catch (error) {
	      return cb(error, true);
	    }
	    return _utils.is.promise(result) ? resolvePromise(result, cb) : _utils.is.iterator(result) ? resolveIterator(result, effectId, fn.name, cb) : cb(result);
	  }
	
	  function runCPSEffect(_ref5, cb) {
	    var context = _ref5.context,
	        fn = _ref5.fn,
	        args = _ref5.args;
	
	    // CPS (ie node style functions) can define their own cancellation logic
	    // by setting cancel field on the cb
	
	    // catch synchronous failures; see #152
	    try {
	      var cpsCb = function cpsCb(err, res) {
	        return _utils.is.undef(err) ? cb(res) : cb(err, true);
	      };
	      fn.apply(context, args.concat(cpsCb));
	      if (cpsCb.cancel) {
	        cb.cancel = function () {
	          return cpsCb.cancel();
	        };
	      }
	    } catch (error) {
	      return cb(error, true);
	    }
	  }
	
	  function runForkEffect(_ref6, effectId, cb) {
	    var context = _ref6.context,
	        fn = _ref6.fn,
	        args = _ref6.args,
	        detached = _ref6.detached;
	
	    var taskIterator = createTaskIterator({ context: context, fn: fn, args: args });
	
	    try {
	      (0, _scheduler.suspend)();
	      var _task = proc(taskIterator, subscribe, dispatch, getState, taskContext, options, effectId, fn.name, detached ? null : _utils.noop);
	
	      if (detached) {
	        cb(_task);
	      } else {
	        if (taskIterator._isRunning) {
	          taskQueue.addTask(_task);
	          cb(_task);
	        } else if (taskIterator._error) {
	          taskQueue.abort(taskIterator._error);
	        } else {
	          cb(_task);
	        }
	      }
	    } finally {
	      (0, _scheduler.flush)();
	    }
	    // Fork effects are non cancellables
	  }
	
	  function runJoinEffect(t, cb) {
	    if (t.isRunning()) {
	      var joiner = { task: task, cb: cb };
	      cb.cancel = function () {
	        return (0, _utils.remove)(t.joiners, joiner);
	      };
	      t.joiners.push(joiner);
	    } else {
	      t.isAborted() ? cb(t.error(), true) : cb(t.result());
	    }
	  }
	
	  function runCancelEffect(taskToCancel, cb) {
	    if (taskToCancel === _utils.SELF_CANCELLATION) {
	      taskToCancel = task;
	    }
	    if (taskToCancel.isRunning()) {
	      taskToCancel.cancel();
	    }
	    cb();
	    // cancel effects are non cancellables
	  }
	
	  function runAllEffect(effects, effectId, cb) {
	    var keys = Object.keys(effects);
	
	    if (!keys.length) {
	      return cb(_utils.is.array(effects) ? [] : {});
	    }
	
	    var completedCount = 0;
	    var completed = void 0;
	    var results = {};
	    var childCbs = {};
	
	    function checkEffectEnd() {
	      if (completedCount === keys.length) {
	        completed = true;
	        cb(_utils.is.array(effects) ? _utils.array.from(_extends({}, results, { length: keys.length })) : results);
	      }
	    }
	
	    keys.forEach(function (key) {
	      var chCbAtKey = function chCbAtKey(res, isErr) {
	        if (completed) {
	          return;
	        }
	        if (isErr || (0, _channel.isEnd)(res) || res === CHANNEL_END || res === TASK_CANCEL) {
	          cb.cancel();
	          cb(res, isErr);
	        } else {
	          results[key] = res;
	          completedCount++;
	          checkEffectEnd();
	        }
	      };
	      chCbAtKey.cancel = _utils.noop;
	      childCbs[key] = chCbAtKey;
	    });
	
	    cb.cancel = function () {
	      if (!completed) {
	        completed = true;
	        keys.forEach(function (key) {
	          return childCbs[key].cancel();
	        });
	      }
	    };
	
	    keys.forEach(function (key) {
	      return runEffect(effects[key], effectId, key, childCbs[key]);
	    });
	  }
	
	  function runRaceEffect(effects, effectId, cb) {
	    var completed = void 0;
	    var keys = Object.keys(effects);
	    var childCbs = {};
	
	    keys.forEach(function (key) {
	      var chCbAtKey = function chCbAtKey(res, isErr) {
	        if (completed) {
	          return;
	        }
	
	        if (isErr) {
	          // Race Auto cancellation
	          cb.cancel();
	          cb(res, true);
	        } else if (!(0, _channel.isEnd)(res) && res !== CHANNEL_END && res !== TASK_CANCEL) {
	          var _cb;
	
	          cb.cancel();
	          completed = true;
	          cb((_cb = {}, _cb[key] = res, _cb));
	        }
	      };
	      chCbAtKey.cancel = _utils.noop;
	      childCbs[key] = chCbAtKey;
	    });
	
	    cb.cancel = function () {
	      // prevents unnecessary cancellation
	      if (!completed) {
	        completed = true;
	        keys.forEach(function (key) {
	          return childCbs[key].cancel();
	        });
	      }
	    };
	    keys.forEach(function (key) {
	      if (completed) {
	        return;
	      }
	      runEffect(effects[key], effectId, key, childCbs[key]);
	    });
	  }
	
	  function runSelectEffect(_ref7, cb) {
	    var selector = _ref7.selector,
	        args = _ref7.args;
	
	    try {
	      var state = selector.apply(undefined, [getState()].concat(args));
	      cb(state);
	    } catch (error) {
	      cb(error, true);
	    }
	  }
	
	  function runChannelEffect(_ref8, cb) {
	    var pattern = _ref8.pattern,
	        buffer = _ref8.buffer;
	
	    var match = matcher(pattern);
	    match.pattern = pattern;
	    cb((0, _channel.eventChannel)(subscribe, buffer || _buffers.buffers.fixed(), match));
	  }
	
	  function runCancelledEffect(data, cb) {
	    cb(!!mainTask.isCancelled);
	  }
	
	  function runFlushEffect(channel, cb) {
	    channel.flush(cb);
	  }
	
	  function runGetContextEffect(prop, cb) {
	    cb(taskContext[prop]);
	  }
	
	  function runSetContextEffect(props, cb) {
	    _utils.object.assign(taskContext, props);
	    cb();
	  }
	
	  function newTask(id, name, iterator, cont) {
	    var _done, _ref9, _mutatorMap;
	
	    iterator._deferredEnd = null;
	    return _ref9 = {}, _ref9[_utils.TASK] = true, _ref9.id = id, _ref9.name = name, _done = 'done', _mutatorMap = {}, _mutatorMap[_done] = _mutatorMap[_done] || {}, _mutatorMap[_done].get = function () {
	      if (iterator._deferredEnd) {
	        return iterator._deferredEnd.promise;
	      } else {
	        var def = (0, _utils.deferred)();
	        iterator._deferredEnd = def;
	        if (!iterator._isRunning) {
	          iterator._error ? def.reject(iterator._error) : def.resolve(iterator._result);
	        }
	        return def.promise;
	      }
	    }, _ref9.cont = cont, _ref9.joiners = [], _ref9.cancel = cancel, _ref9.isRunning = function isRunning() {
	      return iterator._isRunning;
	    }, _ref9.isCancelled = function isCancelled() {
	      return iterator._isCancelled;
	    }, _ref9.isAborted = function isAborted() {
	      return iterator._isAborted;
	    }, _ref9.result = function result() {
	      return iterator._result;
	    }, _ref9.error = function error() {
	      return iterator._error;
	    }, _ref9.setContext = function setContext(props) {
	      (0, _utils.check)(props, _utils.is.object, (0, _utils.createSetContextWarning)('task', props));
	      _utils.object.assign(taskContext, props);
	    }, _defineEnumerableProperties(_ref9, _mutatorMap), _ref9;
	  }
	}

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.runSaga = runSaga;
	
	var _utils = __webpack_require__(32);
	
	var _proc = __webpack_require__(570);
	
	var _proc2 = _interopRequireDefault(_proc);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var RUN_SAGA_SIGNATURE = 'runSaga(storeInterface, saga, ...args)';
	var NON_GENERATOR_ERR = RUN_SAGA_SIGNATURE + ': saga argument must be a Generator function!';
	
	function runSaga(storeInterface, saga) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  var iterator = void 0;
	
	  if (_utils.is.iterator(storeInterface)) {
	    if (false) {
	      (0, _utils.log)('warn', 'runSaga(iterator, storeInterface) has been deprecated in favor of ' + RUN_SAGA_SIGNATURE);
	    }
	    iterator = storeInterface;
	    storeInterface = saga;
	  } else {
	    (0, _utils.check)(saga, _utils.is.func, NON_GENERATOR_ERR);
	    iterator = saga.apply(undefined, args);
	    (0, _utils.check)(iterator, _utils.is.iterator, NON_GENERATOR_ERR);
	  }
	
	  var _storeInterface = storeInterface,
	      subscribe = _storeInterface.subscribe,
	      dispatch = _storeInterface.dispatch,
	      getState = _storeInterface.getState,
	      context = _storeInterface.context,
	      sagaMonitor = _storeInterface.sagaMonitor,
	      logger = _storeInterface.logger,
	      onError = _storeInterface.onError;
	
	
	  var effectId = (0, _utils.uid)();
	
	  if (sagaMonitor) {
	    // monitors are expected to have a certain interface, let's fill-in any missing ones
	    sagaMonitor.effectTriggered = sagaMonitor.effectTriggered || _utils.noop;
	    sagaMonitor.effectResolved = sagaMonitor.effectResolved || _utils.noop;
	    sagaMonitor.effectRejected = sagaMonitor.effectRejected || _utils.noop;
	    sagaMonitor.effectCancelled = sagaMonitor.effectCancelled || _utils.noop;
	    sagaMonitor.actionDispatched = sagaMonitor.actionDispatched || _utils.noop;
	
	    sagaMonitor.effectTriggered({ effectId: effectId, root: true, parentEffectId: 0, effect: { root: true, saga: saga, args: args } });
	  }
	
	  var task = (0, _proc2.default)(iterator, subscribe, (0, _utils.wrapSagaDispatch)(dispatch), getState, context, { sagaMonitor: sagaMonitor, logger: logger, onError: onError }, effectId, saga.name);
	
	  if (sagaMonitor) {
	    sagaMonitor.effectResolved(effectId, task);
	  }
	
	  return task;
	}

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.qEnd = undefined;
	exports.safeName = safeName;
	exports.default = fsmIterator;
	
	var _utils = __webpack_require__(32);
	
	var done = { done: true, value: undefined };
	var qEnd = exports.qEnd = {};
	
	function safeName(patternOrChannel) {
	  if (_utils.is.channel(patternOrChannel)) {
	    return 'channel';
	  } else if (Array.isArray(patternOrChannel)) {
	    return String(patternOrChannel.map(function (entry) {
	      return String(entry);
	    }));
	  } else {
	    return String(patternOrChannel);
	  }
	}
	
	function fsmIterator(fsm, q0) {
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'iterator';
	
	  var updateState = void 0,
	      qNext = q0;
	
	  function next(arg, error) {
	    if (qNext === qEnd) {
	      return done;
	    }
	
	    if (error) {
	      qNext = qEnd;
	      throw error;
	    } else {
	      updateState && updateState(arg);
	
	      var _fsm$qNext = fsm[qNext](),
	          q = _fsm$qNext[0],
	          output = _fsm$qNext[1],
	          _updateState = _fsm$qNext[2];
	
	      qNext = q;
	      updateState = _updateState;
	      return qNext === qEnd ? done : output;
	    }
	  }
	
	  return (0, _utils.makeIterator)(next, function (error) {
	    return next(null, error);
	  }, name, true);
	}

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.throttleHelper = exports.takeLatestHelper = exports.takeEveryHelper = exports.throttle = exports.takeLatest = exports.takeEvery = undefined;
	
	var _takeEvery = __webpack_require__(572);
	
	var _takeEvery2 = _interopRequireDefault(_takeEvery);
	
	var _takeLatest = __webpack_require__(573);
	
	var _takeLatest2 = _interopRequireDefault(_takeLatest);
	
	var _throttle = __webpack_require__(574);
	
	var _throttle2 = _interopRequireDefault(_throttle);
	
	var _utils = __webpack_require__(32);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var deprecationWarning = function deprecationWarning(helperName) {
	  return 'import { ' + helperName + ' } from \'redux-saga\' has been deprecated in favor of import { ' + helperName + ' } from \'redux-saga/effects\'.\nThe latter will not work with yield*, as helper effects are wrapped automatically for you in fork effect.\nTherefore yield ' + helperName + ' will return task descriptor to your saga and execute next lines of code.';
	};
	
	var takeEvery = /*#__PURE__*/(0, _utils.deprecate)(_takeEvery2.default, /*#__PURE__*/deprecationWarning('takeEvery'));
	var takeLatest = /*#__PURE__*/(0, _utils.deprecate)(_takeLatest2.default, /*#__PURE__*/deprecationWarning('takeLatest'));
	var throttle = /*#__PURE__*/(0, _utils.deprecate)(_throttle2.default, /*#__PURE__*/deprecationWarning('throttle'));
	
	exports.takeEvery = takeEvery;
	exports.takeLatest = takeLatest;
	exports.throttle = throttle;
	exports.takeEveryHelper = _takeEvery2.default;
	exports.takeLatestHelper = _takeLatest2.default;
	exports.throttleHelper = _throttle2.default;

/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = takeEvery;
	
	var _fsmIterator = __webpack_require__(142);
	
	var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
	
	var _io = __webpack_require__(72);
	
	var _channel = __webpack_require__(71);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function takeEvery(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	
	  var action = void 0,
	      setAction = function setAction(ac) {
	    return action = ac;
	  };
	
	  return (0, _fsmIterator2.default)({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === _channel.END ? [_fsmIterator.qEnd] : ['q1', yFork(action)];
	    }
	  }, 'q1', 'takeEvery(' + (0, _fsmIterator.safeName)(patternOrChannel) + ', ' + worker.name + ')');
	}

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = takeLatest;
	
	var _fsmIterator = __webpack_require__(142);
	
	var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
	
	var _io = __webpack_require__(72);
	
	var _channel = __webpack_require__(71);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function takeLatest(patternOrChannel, worker) {
	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }
	
	  var yTake = { done: false, value: (0, _io.take)(patternOrChannel) };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yCancel = function yCancel(task) {
	    return { done: false, value: (0, _io.cancel)(task) };
	  };
	
	  var task = void 0,
	      action = void 0;
	  var setTask = function setTask(t) {
	    return task = t;
	  };
	  var setAction = function setAction(ac) {
	    return action = ac;
	  };
	
	  return (0, _fsmIterator2.default)({
	    q1: function q1() {
	      return ['q2', yTake, setAction];
	    },
	    q2: function q2() {
	      return action === _channel.END ? [_fsmIterator.qEnd] : task ? ['q3', yCancel(task)] : ['q1', yFork(action), setTask];
	    },
	    q3: function q3() {
	      return ['q1', yFork(action), setTask];
	    }
	  }, 'q1', 'takeLatest(' + (0, _fsmIterator.safeName)(patternOrChannel) + ', ' + worker.name + ')');
	}

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = throttle;
	
	var _fsmIterator = __webpack_require__(142);
	
	var _fsmIterator2 = _interopRequireDefault(_fsmIterator);
	
	var _io = __webpack_require__(72);
	
	var _channel = __webpack_require__(71);
	
	var _buffers = __webpack_require__(141);
	
	var _utils = __webpack_require__(32);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function throttle(delayLength, pattern, worker) {
	  for (var _len = arguments.length, args = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	    args[_key - 3] = arguments[_key];
	  }
	
	  var action = void 0,
	      channel = void 0;
	
	  var yActionChannel = { done: false, value: (0, _io.actionChannel)(pattern, _buffers.buffers.sliding(1)) };
	  var yTake = function yTake() {
	    return { done: false, value: (0, _io.take)(channel) };
	  };
	  var yFork = function yFork(ac) {
	    return { done: false, value: _io.fork.apply(undefined, [worker].concat(args, [ac])) };
	  };
	  var yDelay = { done: false, value: (0, _io.call)(_utils.delay, delayLength) };
	
	  var setAction = function setAction(ac) {
	    return action = ac;
	  };
	  var setChannel = function setChannel(ch) {
	    return channel = ch;
	  };
	
	  return (0, _fsmIterator2.default)({
	    q1: function q1() {
	      return ['q2', yActionChannel, setChannel];
	    },
	    q2: function q2() {
	      return ['q3', yTake(), setAction];
	    },
	    q3: function q3() {
	      return action === _channel.END ? [_fsmIterator.qEnd] : ['q4', yFork(action)];
	    },
	    q4: function q4() {
	      return ['q2', yDelay];
	    }
	  }, 'q1', 'throttle(' + (0, _fsmIterator.safeName)(pattern) + ', ' + worker.name + ')');
	}

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.asap = asap;
	exports.suspend = suspend;
	exports.flush = flush;
	var queue = [];
	/**
	  Variable to hold a counting semaphore
	  - Incrementing adds a lock and puts the scheduler in a `suspended` state (if it's not
	    already suspended)
	  - Decrementing releases a lock. Zero locks puts the scheduler in a `released` state. This
	    triggers flushing the queued tasks.
	**/
	var semaphore = 0;
	
	/**
	  Executes a task 'atomically'. Tasks scheduled during this execution will be queued
	  and flushed after this task has finished (assuming the scheduler endup in a released
	  state).
	**/
	function exec(task) {
	  try {
	    suspend();
	    task();
	  } finally {
	    release();
	  }
	}
	
	/**
	  Executes or queues a task depending on the state of the scheduler (`suspended` or `released`)
	**/
	function asap(task) {
	  queue.push(task);
	
	  if (!semaphore) {
	    suspend();
	    flush();
	  }
	}
	
	/**
	  Puts the scheduler in a `suspended` state. Scheduled tasks will be queued until the
	  scheduler is released.
	**/
	function suspend() {
	  semaphore++;
	}
	
	/**
	  Puts the scheduler in a `released` state.
	**/
	function release() {
	  semaphore--;
	}
	
	/**
	  Releases the current lock. Executes all queued tasks if the scheduler is in the released state.
	**/
	function flush() {
	  release();
	
	  var task = void 0;
	  while (!semaphore && (task = queue.shift()) !== undefined) {
	    exec(task);
	  }
	}

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.check = check;
	exports.hasOwn = hasOwn;
	exports.remove = remove;
	exports.deferred = deferred;
	exports.arrayOfDeffered = arrayOfDeffered;
	exports.delay = delay;
	exports.createMockTask = createMockTask;
	exports.autoInc = autoInc;
	exports.makeIterator = makeIterator;
	exports.log = log;
	exports.deprecate = deprecate;
	var sym = exports.sym = function sym(id) {
	  return '@@redux-saga/' + id;
	};
	
	var TASK = exports.TASK = sym('TASK');
	var HELPER = exports.HELPER = sym('HELPER');
	var MATCH = exports.MATCH = sym('MATCH');
	var CANCEL = exports.CANCEL = sym('CANCEL_PROMISE');
	var SAGA_ACTION = exports.SAGA_ACTION = sym('SAGA_ACTION');
	var SELF_CANCELLATION = exports.SELF_CANCELLATION = sym('SELF_CANCELLATION');
	var konst = exports.konst = function konst(v) {
	  return function () {
	    return v;
	  };
	};
	var kTrue = exports.kTrue = konst(true);
	var kFalse = exports.kFalse = konst(false);
	var noop = exports.noop = function noop() {};
	var ident = exports.ident = function ident(v) {
	  return v;
	};
	
	function check(value, predicate, error) {
	  if (!predicate(value)) {
	    log('error', 'uncaught at check', error);
	    throw new Error(error);
	  }
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function hasOwn(object, property) {
	  return is.notUndef(object) && hasOwnProperty.call(object, property);
	}
	
	var is = exports.is = {
	  undef: function undef(v) {
	    return v === null || v === undefined;
	  },
	  notUndef: function notUndef(v) {
	    return v !== null && v !== undefined;
	  },
	  func: function func(f) {
	    return typeof f === 'function';
	  },
	  number: function number(n) {
	    return typeof n === 'number';
	  },
	  string: function string(s) {
	    return typeof s === 'string';
	  },
	  array: Array.isArray,
	  object: function object(obj) {
	    return obj && !is.array(obj) && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
	  },
	  promise: function promise(p) {
	    return p && is.func(p.then);
	  },
	  iterator: function iterator(it) {
	    return it && is.func(it.next) && is.func(it.throw);
	  },
	  iterable: function iterable(it) {
	    return it && is.func(Symbol) ? is.func(it[Symbol.iterator]) : is.array(it);
	  },
	  task: function task(t) {
	    return t && t[TASK];
	  },
	  observable: function observable(ob) {
	    return ob && is.func(ob.subscribe);
	  },
	  buffer: function buffer(buf) {
	    return buf && is.func(buf.isEmpty) && is.func(buf.take) && is.func(buf.put);
	  },
	  pattern: function pattern(pat) {
	    return pat && (is.string(pat) || (typeof pat === 'undefined' ? 'undefined' : _typeof(pat)) === 'symbol' || is.func(pat) || is.array(pat));
	  },
	  channel: function channel(ch) {
	    return ch && is.func(ch.take) && is.func(ch.close);
	  },
	  helper: function helper(it) {
	    return it && it[HELPER];
	  },
	  stringableFunc: function stringableFunc(f) {
	    return is.func(f) && hasOwn(f, 'toString');
	  }
	};
	
	var object = exports.object = {
	  assign: function assign(target, source) {
	    for (var i in source) {
	      if (hasOwn(source, i)) {
	        target[i] = source[i];
	      }
	    }
	  }
	};
	
	function remove(array, item) {
	  var index = array.indexOf(item);
	  if (index >= 0) {
	    array.splice(index, 1);
	  }
	}
	
	var array = exports.array = {
	  from: function from(obj) {
	    var arr = Array(obj.length);
	    for (var i in obj) {
	      if (hasOwn(obj, i)) {
	        arr[i] = obj[i];
	      }
	    }
	    return arr;
	  }
	};
	
	function deferred() {
	  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var def = _extends({}, props);
	  var promise = new Promise(function (resolve, reject) {
	    def.resolve = resolve;
	    def.reject = reject;
	  });
	  def.promise = promise;
	  return def;
	}
	
	function arrayOfDeffered(length) {
	  var arr = [];
	  for (var i = 0; i < length; i++) {
	    arr.push(deferred());
	  }
	  return arr;
	}
	
	function delay(ms) {
	  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	
	  var timeoutId = void 0;
	  var promise = new Promise(function (resolve) {
	    timeoutId = setTimeout(function () {
	      return resolve(val);
	    }, ms);
	  });
	
	  promise[CANCEL] = function () {
	    return clearTimeout(timeoutId);
	  };
	
	  return promise;
	}
	
	function createMockTask() {
	  var _ref;
	
	  var running = true;
	  var _result = void 0,
	      _error = void 0;
	
	  return _ref = {}, _ref[TASK] = true, _ref.isRunning = function isRunning() {
	    return running;
	  }, _ref.result = function result() {
	    return _result;
	  }, _ref.error = function error() {
	    return _error;
	  }, _ref.setRunning = function setRunning(b) {
	    return running = b;
	  }, _ref.setResult = function setResult(r) {
	    return _result = r;
	  }, _ref.setError = function setError(e) {
	    return _error = e;
	  }, _ref;
	}
	
	function autoInc() {
	  var seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
	  return function () {
	    return ++seed;
	  };
	}
	
	var uid = exports.uid = autoInc();
	
	var kThrow = function kThrow(err) {
	  throw err;
	};
	var kReturn = function kReturn(value) {
	  return { value: value, done: true };
	};
	function makeIterator(next) {
	  var thro = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : kThrow;
	  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	  var isHelper = arguments[3];
	
	  var iterator = { name: name, next: next, throw: thro, return: kReturn };
	
	  if (isHelper) {
	    iterator[HELPER] = true;
	  }
	  if (typeof Symbol !== 'undefined') {
	    iterator[Symbol.iterator] = function () {
	      return iterator;
	    };
	  }
	  return iterator;
	}
	
	/**
	  Print error in a useful way whether in a browser environment
	  (with expandable error stack traces), or in a node.js environment
	  (text-only log output)
	 **/
	function log(level, message) {
	  var error = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
	
	  /*eslint-disable no-console*/
	  if (typeof window === 'undefined') {
	    console.log('redux-saga ' + level + ': ' + message + '\n' + (error && error.stack || error));
	  } else {
	    console[level](message, error);
	  }
	}
	
	function deprecate(fn, deprecationWarning) {
	  return function () {
	    if (false) log('warn', deprecationWarning);
	    return fn.apply(undefined, arguments);
	  };
	}
	
	var updateIncentive = exports.updateIncentive = function updateIncentive(deprecated, preferred) {
	  return deprecated + ' has been deprecated in favor of ' + preferred + ', please update your code';
	};
	
	var internalErr = exports.internalErr = function internalErr(err) {
	  return new Error('\n  redux-saga: Error checking hooks detected an inconsistent state. This is likely a bug\n  in redux-saga code and not yours. Thanks for reporting this in the project\'s github repo.\n  Error: ' + err + '\n');
	};
	
	var createSetContextWarning = exports.createSetContextWarning = function createSetContextWarning(ctx, props) {
	  return (ctx ? ctx + '.' : '') + 'setContext(props): argument ' + props + ' is not a plain object';
	};
	
	var wrapSagaDispatch = exports.wrapSagaDispatch = function wrapSagaDispatch(dispatch) {
	  return function (action) {
	    return dispatch(Object.defineProperty(action, SAGA_ACTION, { value: true }));
	  };
	};
	
	var cloneableGenerator = exports.cloneableGenerator = function cloneableGenerator(generatorFunc) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var history = [];
	    var gen = generatorFunc.apply(undefined, args);
	    return {
	      next: function next(arg) {
	        history.push(arg);
	        return gen.next(arg);
	      },
	      clone: function clone() {
	        var clonedGen = cloneableGenerator(generatorFunc).apply(undefined, args);
	        history.forEach(function (arg) {
	          return clonedGen.next(arg);
	        });
	        return clonedGen;
	      },
	      return: function _return(value) {
	        return gen.return(value);
	      },
	      throw: function _throw(exception) {
	        return gen.throw(exception);
	      }
	    };
	  };
	};

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() { return this })() || Function("return this")();
	
	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;
	
	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;
	
	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;
	
	module.exports = __webpack_require__(579);
	
	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}


/***/ }),

/***/ 579:
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };
	
	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }
	
	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };
	
	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }
	
	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }
	
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      context.method = method;
	      context.arg = arg;
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }
	
	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;
	
	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }
	
	          context.dispatchException(context.arg);
	
	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          if (record.arg === ContinueSentinel) {
	            continue;
	          }
	
	          return {
	            value: record.arg,
	            done: context.done
	          };
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;
	
	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);
	
	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }
	
	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }
	
	      return ContinueSentinel;
	    }
	
	    var record = tryCatch(method, delegate.iterator, context.arg);
	
	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    var info = record.arg;
	
	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }
	
	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;
	
	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;
	
	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }
	
	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }
	
	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[toStringTagSymbol] = "Generator";
	
	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.method = "next";
	      this.arg = undefined;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	
	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }
	
	        return !! caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }
	
	      return this.complete(record);
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	
	      return ContinueSentinel;
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _utils = __webpack_require__(269);
	
	exports.default = {
	  namespace: 'app',
	  state: {
	    count: 0
	  },
	  reducers: {
	    increment: function increment(state) {
	      return { count: state.count + 1 };
	    },
	    decrement: function decrement(state) {
	      return { count: state.count - 1 };
	    }
	  },
	  effects: {
	    delayed: function* delayed(_ref, _ref2) {
	      var timeout = _ref.payload.timeout;
	      var put = _ref2.put;
	
	      yield (0, _utils.delay)(timeout);
	      yield put({ type: 'increment' });
	    }
	  },
	  subscriptions: {
	    setup: function setup(_ref3) {
	      var history = _ref3.history,
	          dispatch = _ref3.dispatch;
	
	      history.listen(function (_ref4) {
	        var pathname = _ref4.pathname;
	
	        console.log(pathname);
	      });
	    }
	  }
	};
	module.exports = exports['default'];

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(162898551421021, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(260) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(251079058078209, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(261) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(35783957827783, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(262) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(247123438946984, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(263) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(61251621958946, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(264) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(218538773642512, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(265) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(280779780012315, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(266) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(
	      8
	    );
	    module.exports = function(cb) { return __webpack_require__.e/* nsure */(12248415010738, function(_, error) {
	        if (error) {
	          console.log('bundle loading error', error)
	          cb(true)
	        } else {
	          cb(null, function() { return __webpack_require__(267) })
	        }
	      });
	     }
	    

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	exports.default = function () {
	  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var app = core.create(opts);
	  var oldAppStart = app.start;
	  app.start = function (container) {
	    oldAppStart.call(app);
	
	    return _react2.default.createElement(
	      _reactRedux.Provider,
	      { store: app._store },
	      container
	    );
	  };
	  app.setHistory = function (history) {
	    var oldListen = history.listen;
	    history.listen = function (callback) {
	      callback(history.location);
	      return oldListen.call(history, callback);
	    };
	    app._history = history;
	  };
	
	  return app;
	};
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(30);
	
	var _dvaCore = __webpack_require__(365);
	
	var core = _interopRequireWildcard(_dvaCore);
	
	var _utils = __webpack_require__(42);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports['default'];

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	var delay = exports.delay = function delay(time) {
	  return new Promise(function (resolve) {
	    return setTimeout(resolve, time);
	  });
	};

/***/ })

});
//# sourceMappingURL=app-c7c9e2dead4a5ea37e2c.js.map