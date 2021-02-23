"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterPosts = filterPosts;
exports.sortPostsByStickyAndDate = sortPostsByStickyAndDate;
exports.sortPostsByDate = sortPostsByDate;

var _utils = require("@theme/helpers/utils");

function filterPosts(posts, isTimeline) {
  posts = posts.filter(function (item, index) {
    var title = item.title,
        _item$frontmatter = item.frontmatter,
        home = _item$frontmatter.home,
        date = _item$frontmatter.date,
        publish = _item$frontmatter.publish; // 过滤多个分类时产生的重复数据

    if (posts.indexOf(item) !== index) {
      return false;
    } else {
      var someConditions = home == true || title == undefined || publish === false;
      var boo = isTimeline === true ? !(someConditions || date === undefined) : !someConditions;
      return boo;
    }
  });
  return posts;
} // 排序博客数据


function sortPostsByStickyAndDate(posts) {
  posts.sort(function (prev, next) {
    var prevSticky = prev.frontmatter.sticky;
    var nextSticky = next.frontmatter.sticky;

    if (prevSticky && nextSticky) {
      return prevSticky == nextSticky ? (0, _utils.compareDate)(prev, next) : prevSticky - nextSticky;
    } else if (prevSticky && !nextSticky) {
      return -1;
    } else if (!prevSticky && nextSticky) {
      return 1;
    }

    return (0, _utils.compareDate)(prev, next);
  });
}

function sortPostsByDate(posts) {
  posts.sort(function (prev, next) {
    return (0, _utils.compareDate)(prev, next);
  });
}