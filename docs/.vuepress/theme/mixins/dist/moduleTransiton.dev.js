"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: function data() {
    return {
      recoShowModule: false
    };
  },
  mounted: function mounted() {
    this.recoShowModule = true;
  },
  watch: {
    '$route': function $route(newV, oldV) {
      var _this = this;

      if (newV.path === oldV.path) return;
      this.recoShowModule = false;
      setTimeout(function () {
        _this.recoShowModule = true;
      }, 200);
    }
  }
};
exports["default"] = _default;