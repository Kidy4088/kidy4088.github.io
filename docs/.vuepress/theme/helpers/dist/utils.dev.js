"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalize = normalize;
exports.getHash = getHash;
exports.isExternal = isExternal;
exports.isMailto = isMailto;
exports.isTel = isTel;
exports.ensureExt = ensureExt;
exports.isActive = isActive;
exports.resolvePage = resolvePage;
exports.resolveSidebarItems = resolveSidebarItems;
exports.groupHeaders = groupHeaders;
exports.resolveNavLinkItem = resolveNavLinkItem;
exports.resolveMatchingConfig = resolveMatchingConfig;
exports.formatDate = formatDate;
exports.getTimeNum = getTimeNum;
exports.compareDate = compareDate;
exports.addLinkToHead = addLinkToHead;
exports.addScriptToHead = addScriptToHead;
exports.outboundRE = exports.endingSlashRE = exports.extRE = exports.hashRE = void 0;
var hashRE = /#.*$/;
exports.hashRE = hashRE;
var extRE = /\.(md|html)$/;
exports.extRE = extRE;
var endingSlashRE = /\/$/;
exports.endingSlashRE = endingSlashRE;
var outboundRE = /^(https?:|mailto:|tel:)/;
exports.outboundRE = outboundRE;

function normalize(path) {
  return decodeURI(path).replace(hashRE, '').replace(extRE, '');
}

function getHash(path) {
  var match = path.match(hashRE);

  if (match) {
    return match[0];
  }
}

function isExternal(path) {
  return outboundRE.test(path);
}

function isMailto(path) {
  return /^mailto:/.test(path);
}

function isTel(path) {
  return /^tel:/.test(path);
}

function ensureExt(path) {
  if (isExternal(path)) {
    return path;
  }

  var hashMatch = path.match(hashRE);
  var hash = hashMatch ? hashMatch[0] : '';
  var normalized = normalize(path);

  if (endingSlashRE.test(normalized)) {
    return path;
  }

  return normalized + '.html' + hash;
}

function isActive(route, path) {
  var routeHash = route.hash;
  var linkHash = getHash(path);

  if (linkHash && routeHash !== linkHash) {
    return false;
  }

  var routePath = normalize(route.path);
  var pagePath = normalize(path);
  return routePath === pagePath;
}

function resolvePage(pages, rawPath, base) {
  if (base) {
    rawPath = resolvePath(rawPath, base);
  }

  var path = normalize(rawPath);

  for (var i = 0; i < pages.length; i++) {
    if (normalize(pages[i].regularPath) === path) {
      return Object.assign({}, pages[i], {
        type: 'page',
        path: ensureExt(pages[i].path)
      });
    }
  }

  console.error("[vuepress] No matching page found for sidebar item \"".concat(rawPath, "\""));
  return {};
}

function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);

  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/'); // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)

  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  } // resolve relative path


  var segments = relative.replace(/^\//, '').split('/');

  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];

    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  } // ensure leading slash


  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}
/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */


function resolveSidebarItems(page, regularPath, site, localePath) {
  var pages = site.pages,
      themeConfig = site.themeConfig;
  var localeConfig = localePath && themeConfig.locales ? themeConfig.locales[localePath] || themeConfig : themeConfig;
  var sidebarConfig = localeConfig.sidebar || themeConfig.sidebar;

  var _resolveMatchingConfi = resolveMatchingConfig(regularPath, sidebarConfig),
      base = _resolveMatchingConfi.base,
      config = _resolveMatchingConfi.config;

  return config ? config.map(function (item) {
    return resolveItem(item, pages, base);
  }) : [];
}

function groupHeaders(headers) {
  // group h3s under h2
  headers = headers.map(function (h) {
    return Object.assign({}, h);
  });
  var lastH2;
  headers.forEach(function (h) {
    if (h.level === 2) {
      lastH2 = h;
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(h);
    }
  });
  return headers.filter(function (h) {
    return h.level === 2;
  });
}

function resolveNavLinkItem(linkItem) {
  return Object.assign(linkItem, {
    type: linkItem.items && linkItem.items.length ? 'links' : 'link'
  });
}
/**
 * @param { Route } route
 * @param { Array<string|string[]> | Array<SidebarGroup> | [link: string]: SidebarConfig } config
 * @returns { base: string, config: SidebarConfig }
 */


function resolveMatchingConfig(regularPath, config) {
  if (Array.isArray(config)) {
    return {
      base: '/',
      config: config
    };
  }

  for (var base in config) {
    if (ensureEndingSlash(regularPath).indexOf(encodeURI(base)) === 0) {
      return {
        base: base,
        config: config[base]
      };
    }
  }

  return {};
}

function formatDate(time) {
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-MM-dd hh:mm:ss';
  time = time.replace(/-/g, '/');
  var date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, date.getFullYear() + '').substr(4 - RegExp.$1.length);
  }

  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };

  for (var key in o) {
    if (RegExp("(".concat(key, ")")).test(fmt)) {
      var str = o[key] + '';
      fmt = fmt.replace(RegExp.$1, str.length === 2 ? str : '0' + str);
    }
  }

  return fmt;
} // 获取时间的数字类型


function getTimeNum(date) {
  return new Date(date.frontmatter.date).getTime();
} // 比对时间


function compareDate(a, b) {
  return getTimeNum(b) - getTimeNum(a);
} // 向 head 中添加 style


function addLinkToHead(href) {
  var iconLink = document.createElement('link');
  iconLink.rel = 'stylesheet';
  iconLink.href = href;
  document.head.append(iconLink);
} // 向 head 中添加 script


function addScriptToHead(href) {
  var iconLink = document.createElement('script');
  iconLink.src = href;
  document.head.append(iconLink);
}

function ensureEndingSlash(path) {
  return /(\.html|\/)$/.test(path) ? path : path + '/';
}

function resolveItem(item, pages, base) {
  var groupDepth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

  if (typeof item === 'string') {
    return resolvePage(pages, item, base);
  } else if (Array.isArray(item)) {
    return Object.assign(resolvePage(pages, item[0], base), {
      title: item[1]
    });
  } else {
    if (groupDepth > 3) {
      console.error('[vuepress] detected a too deep nested sidebar group.');
    }

    var children = item.children || [];

    if (children.length === 0 && item.path) {
      return Object.assign(resolvePage(pages, item.path, base), {
        title: item.title
      });
    }

    return {
      type: 'group',
      path: item.path,
      title: item.title,
      sidebarDepth: item.sidebarDepth,
      children: children.map(function (child) {
        return resolveItem(child, pages, base, groupDepth + 1);
      }),
      collapsable: item.collapsable !== false
    };
  }
}