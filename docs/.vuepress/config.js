module.exports = {
  title: 'K/X',
  description: 'Kidy4088的博客',
  dest: 'public',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/',
        icon: 'reco-home'
      },
      {
        text: '时间轴',
        link: '/timeline/',
        icon: 'reco-date'
      },
      {
        text: '文档',
        icon: 'reco-api',
        items: [
          {
            text: 'KChat项目文档',
            link: '/kchat'
          }
        ]
      },
      {
        text: '关于',
        link: '/about',
        icon: 'reco-account'
      }
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api']
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    friendLink: [
      {
        title: 'KChat项目文档',
        desc: 'KChat项目文档.',
        email: '2013235002@qq.com',
        link: 'https://kidy4088.gitee.com/kchat-note'
      }
    ],
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'Kidy4088',
    authorAvatar: '/avatar.png',
    record: 'xxxx',
    startYear: '2017'
  },
  markdown: {
    lineNumbers: true
  }
}
