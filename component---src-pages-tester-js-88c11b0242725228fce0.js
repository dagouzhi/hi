webpackJsonp([0xff5e230c391b],{266:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return e}t.__esModule=!0;var c=n(35),i=l(c);n(36);var s=n(1),f=l(s),m=n(30);n(51);var p=n(37),d=p.tools,E=function(e){function t(){var n,l,o;a(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return n=l=r(this,e.call.apply(e,[this].concat(c))),l.returnTools=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(function(e,t){return f.default.createElement("div",{key:t,className:"box-wrap"},f.default.createElement("h2",{className:"box-title"},f.default.createElement("strong",null,e.title)),f.default.createElement("div",{className:"boxMain"},f.default.createElement("ul",{className:"items-wrap"},e.list.map(function(e,t){return f.default.createElement("li",{key:t,className:"item-wrap"},f.default.createElement("h3",{className:"item-title"},f.default.createElement("strong",null,e.name),f.default.createElement("span",null,e.info)),f.default.createElement(i.default,null,f.default.createElement("ul",{className:"tools-items"},l.returnItems(e.list))))}))))})},l.returnItems=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map(function(e,t){return f.default.createElement("li",{key:t,className:"tools-item"},f.default.createElement("div",{onClick:function(){return l.open(e.url)}},f.default.createElement("img",{alt:"logo",src:e.pic,title:""}),f.default.createElement("p",null,f.default.createElement("strong",null,e.name),f.default.createElement("span",null,e.info))))})},l.open=function(e){window.open(e)},o=n,r(l,o)}return o(t,e),t.prototype.render=function(){var e=d.tester||[];return f.default.createElement("div",{className:"PmPage"},f.default.createElement("div",{className:"PmPage-body"},this.returnTools(e)))},t}(f.default.Component);E.propTypes={},t.default=(0,m.connect)(u)(E),e.exports=t.default}});
//# sourceMappingURL=component---src-pages-tester-js-88c11b0242725228fce0.js.map