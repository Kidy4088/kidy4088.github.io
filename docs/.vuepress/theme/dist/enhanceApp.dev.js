"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _posts = _interopRequireDefault(require("@theme/mixins/posts"));

var _locales = _interopRequireDefault(require("@theme/mixins/locales"));

var _utils = require("@theme/helpers/utils");

var _other = require("@theme/helpers/other");

var _compositionApi = _interopRequireDefault(require("@vue/composition-api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-proto */
var _default = function _default(_ref) {
  var Vue = _ref.Vue,
      siteData = _ref.siteData,
      isServer = _ref.isServer,
      router = _ref.router;
  Vue.use(_compositionApi["default"]);
  Vue.mixin(_posts["default"]);
  Vue.mixin(_locales["default"]);

  if (!isServer) {
    (0, _utils.addLinkToHead)('//at.alicdn.com/t/font_1030519_2ciwdtb4x65.css');
    (0, _utils.addScriptToHead)('//kit.fontawesome.com/51b01de608.js');
    (0, _other.registerCodeThemeCss)(siteData.themeConfig.codeTheme);
  }

  (0, _other.interceptRouterError)(router);
};

exports["default"] = _default;