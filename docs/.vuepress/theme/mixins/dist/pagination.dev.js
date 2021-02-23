"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  methods: {
    // 获取当前页码
    _getStoragePage: function _getStoragePage() {
      var path = window.location.pathname;
      var currentPage = JSON.parse(sessionStorage.getItem('currentPage'));

      if (currentPage === null || path !== currentPage.path) {
        sessionStorage.setItem('currentPage', {
          page: 1,
          path: ''
        });
        return 1;
      }

      return parseInt(currentPage.page);
    },
    // 设置当前页码
    _setStoragePage: function _setStoragePage(page) {
      var path = window.location.pathname;
      sessionStorage.setItem('currentPage', JSON.stringify({
        page: page,
        path: path
      }));
    }
  }
};
exports["default"] = _default;