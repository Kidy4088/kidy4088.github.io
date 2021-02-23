"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = require("../locales/index");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  computed: {
    $recoLocales: function $recoLocales() {
      var recoLocales = this.$themeLocaleConfig.recoLocales || {};

      if (/^zh\-(CN|SG)$/.test(this.$lang)) {
        return _objectSpread({}, _index.zhHans, {}, recoLocales);
      }

      if (/^zh\-(HK|MO|TW)$/.test(this.$lang)) {
        return _objectSpread({}, _index.zhHant, {}, recoLocales);
      }

      if (/^ja\-JP$/.test(this.$lang)) {
        return _objectSpread({}, _index.ja, {}, recoLocales);
      }

      if (/^ko\-KR$/.test(this.$lang)) {
        return _objectSpread({}, _index.ko, {}, recoLocales);
      }

      return _objectSpread({}, _index.en, {}, recoLocales);
    }
  }
};
exports["default"] = _default;