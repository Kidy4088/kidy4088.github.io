"use strict";

var path = require('path'); // Theme API.


module.exports = function (options, ctx) {
  return {
    alias: function alias() {
      var themeConfig = ctx.themeConfig,
          siteConfig = ctx.siteConfig; // resolve algolia

      var isAlgoliaSearch = themeConfig.algolia || Object.keys(siteConfig.locales && themeConfig.locales || {}).some(function (base) {
        return themeConfig.locales[base].algolia;
      });
      return {
        '@AlgoliaSearchBox': isAlgoliaSearch ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue') : path.resolve(__dirname, 'noopModule.js'),
        '@SearchBox': path.resolve(__dirname, 'components/SearchBox.vue')
      };
    },
    plugins: ['@vuepress-reco/back-to-top', '@vuepress-reco/loading-page', '@vuepress-reco/pagation', '@vuepress-reco/comments', '@vuepress/active-header-links', ['@vuepress/medium-zoom', {
      selector: '.theme-reco-content :not(a) > img'
    }], '@vuepress/plugin-nprogress', ['@vuepress/plugin-blog', {
      permalink: '/:regular',
      frontmatters: [{
        id: 'tags',
        keys: ['tags'],
        path: '/tag/',
        layout: 'Tags',
        scopeLayout: 'Tag'
      }, {
        id: 'categories',
        keys: ['categories'],
        path: '/categories/',
        layout: 'Categories',
        scopeLayout: 'Category'
      }, {
        id: 'timeline',
        keys: ['timeline'],
        path: '/timeline/',
        layout: 'TimeLines',
        scopeLayout: 'TimeLine'
      }]
    }], 'vuepress-plugin-smooth-scroll', ['container', {
      type: 'tip',
      before: function before(info) {
        return "<div class=\"custom-block tip\"><p class=\"title\">".concat(info, "</p>");
      },
      after: '</div>',
      defaultTitle: ''
    }], ['container', {
      type: 'warning',
      before: function before(info) {
        return "<div class=\"custom-block warning\"><p class=\"title\">".concat(info, "</p>");
      },
      after: '</div>',
      defaultTitle: ''
    }], ['container', {
      type: 'danger',
      before: function before(info) {
        return "<div class=\"custom-block danger\"><p class=\"title\">".concat(info, "</p>");
      },
      after: '</div>',
      defaultTitle: ''
    }], ['container', {
      type: 'right',
      defaultTitle: ''
    }], ['container', {
      type: 'theorem',
      before: function before(info) {
        return "<div class=\"custom-block theorem\"><p class=\"title\">".concat(info, "</p>");
      },
      after: '</div>',
      defaultTitle: ''
    }], ['container', {
      type: 'details',
      before: function before(info) {
        return "<details class=\"custom-block details\">".concat(info ? "<summary>".concat(info, "</summary>") : '', "\n");
      },
      after: function after() {
        return '</details>\n';
      },
      defaultTitle: {
        '/': 'See More',
        '/zh/': '更多'
      }
    }]]
  };
};