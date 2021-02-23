"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOneColor = getOneColor;
exports.registerCodeThemeCss = registerCodeThemeCss;
exports.interceptRouterError = interceptRouterError;

var _utils = require("./utils");

/* eslint-disable no-proto */
function getOneColor() {
  var tagColorArr = ['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87', '#e15b64', '#f47e60', '#f8b26a', '#f26d6d', '#67cc86', '#fb9b5f', '#3498db'];
  var index = Math.floor(Math.random() * tagColorArr.length);
  return tagColorArr[index];
}

function registerCodeThemeCss() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'tomorrow';
  var themeArr = ['tomorrow', 'funky', 'okaidia', 'solarizedlight', 'default'];
  var href = "//prismjs.com/themes/prism".concat(themeArr.indexOf(theme) > -1 ? "-".concat(theme) : '', ".css");
  (0, _utils.addLinkToHead)(href);
}

function interceptRouterError(router) {
  // 获取原型对象上的 push 函数
  var originalPush = router.__proto__.push; // 修改原型对象中的p ush 方法

  router.__proto__.push = function push(location) {
    return originalPush.call(this, location)["catch"](function (err) {
      return err;
    });
  };
}