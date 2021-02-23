"use strict";

/**
 * 获取目录下的所有文件的相对路径
 * 解决路由名称枚举问题
 */
var fs = require('fs');

var path = require('path');

function getDocPath(title, collapsable, relateivePath) {
  var absolutePath = path.join(__dirname, '..' + relateivePath);
  var files = fs.readdirSync(absolutePath);
  var components = []; // 排除检查的文件

  var excludes = ['.DS_Store'];
  var arr = files.sort(function (a, b) {
    return a.split('.')[0] - b.split('.')[0];
  });
  var hasREADME_NoCollapsable = false;
  arr.forEach(function (item) {
    if (excludes.indexOf(item) < 0) {
      var stat = fs.lstatSync(absolutePath + '/' + item);

      if (item == 'README.md') {
        if (collapsable) {
          components.unshift([relateivePath, '前言']);
        } else {
          hasREADME_NoCollapsable = true;
        }
      } else if (!stat.isDirectory()) {
        var res = item.replace('.md', '');
        components.push(relateivePath + res);
      } else {
        var _res = item.replace('.md', '');

        getDocPath(relateivePath + _res);
      }
    }
  });
  var frame = {
    title: title,
    // sidebarDepth: 2,
    collapsable: collapsable,
    children: components
  };

  if (hasREADME_NoCollapsable) {
    frame.path = relateivePath;
  }

  return frame;
}

module.exports = getDocPath;