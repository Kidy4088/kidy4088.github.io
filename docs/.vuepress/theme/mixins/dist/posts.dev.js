"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _postData = require("../helpers/postData");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = {
  computed: {
    $recoPosts: function $recoPosts() {
      var articles = this.$categories.list;
      var posts = articles.reduce(function (allData, currentData) {
        return [].concat(_toConsumableArray(allData), _toConsumableArray(currentData.pages));
      }, []);
      posts = (0, _postData.filterPosts)(posts, false);
      (0, _postData.sortPostsByStickyAndDate)(posts);
      return posts;
    },
    $recoPostsForTimeline: function $recoPostsForTimeline() {
      var pages = this.$recoPosts;
      var formatPages = {};
      var formatPagesArr = [];
      pages = (0, _postData.filterPosts)(pages, true);
      this.pages = pages.length == 0 ? [] : pages;

      for (var i = 0, length = pages.length; i < length; i++) {
        var page = pages[i];
        var pageDateYear = dateFormat(page.frontmatter.date, 'year');
        if (formatPages[pageDateYear]) formatPages[pageDateYear].push(page);else {
          formatPages[pageDateYear] = [page];
        }
      }

      for (var key in formatPages) {
        var data = formatPages[key];
        (0, _postData.sortPostsByDate)(data);
        formatPagesArr.unshift({
          year: key,
          data: data
        });
      }

      return formatPagesArr;
    },
    $showSubSideBar: function $showSubSideBar() {
      var _this$$themeConfig = this.$themeConfig,
          themeSubSidebar = _this$$themeConfig.subSidebar,
          themeSidebar = _this$$themeConfig.sidebar,
          _this$$frontmatter = this.$frontmatter,
          pageSubSidebar = _this$$frontmatter.subSidebar,
          pageSidebar = _this$$frontmatter.sidebar;
      var headers = this.$page.headers || [];

      if ([pageSubSidebar, pageSidebar].indexOf(false) > -1) {
        return false;
      } else if ([pageSubSidebar, pageSidebar].indexOf('auto') > -1 && headers.length > 0) {
        return true;
      } else if ([themeSubSidebar, themeSidebar].indexOf('auto') > -1 && headers.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
exports["default"] = _default;

function renderTime(date) {
  var dateee = new Date(date).toJSON();
  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').replace(/-/g, '/');
}

function dateFormat(date, type) {
  date = renderTime(date);
  var dateObj = new Date(date);
  var year = dateObj.getFullYear();
  var mon = dateObj.getMonth() + 1;
  var day = dateObj.getDate();
  if (type == 'year') return year;else return "".concat(mon, "-").concat(day);
}