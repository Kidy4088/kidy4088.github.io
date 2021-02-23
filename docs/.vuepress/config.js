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
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  // theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: 'QHPFBRcheCkguC0kOvFVHQoA-gzGzoHsz',
      appKey: '7aAUdFwSHStwRWVAX9gAck1P'
    },
    subSidebar: 'auto',
    sidebar: 'auto',
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
            link: '/docs/KChat/'
          }
        ]
      },
      {
        text: '关于',
        link: '/about/',
        icon: 'reco-account'
      }
    ],
    sidebar: require('./sidebarConf'),
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: 'reco-github', link: 'https://github.com/Kidy4088' },
        { icon: 'reco-mayun', link: 'https://gitee.com/Kidy4088' }
      ]
    },
    friendLink: [
      {
        title: 'KChat项目文档',
        desc: '船新版本KChat项目文档.',
        email: '2013235002@qq.com',
        link: 'https://kidy4088.gitee.io/kchat-note'
      }
    ],
    // locales: {
    //   '/': {
    //     recoLocales: {
    //       homeBlog: {
    //         article: '文章',
    //         tag: '标签',
    //         category: '分类',
    //         friendLink: '友链'
    //       },
    //       pagation: {
    //         prev: '上一页',
    //         next: '下一页',
    //         go: '前往',
    //         jump: '跳转至'
    //       },
    //       tag: {
    //         all: '全部'
    //       }
    //     }
    //   }
    // },
    logo: '/logo.png',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: '最近一次更新 ',
    author: 'Kidy4088',
    authorAvatar: '/avatar.png',
    // record: 'xxxx',
    startYear: '2021'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['flowchart'],
    [
      'cursor-effects',
      {
        size: 2,
        shape: 'star',
        zIndex: 999999999
      }
    ],
    [
      'dynamic-title',
      {
        showIcon: '/favicon.ico',
        showText: '(/≧▽≦/)欢迎帅哥美女！',
        hideIcon: '/failure.ico',
        hideText: '(●—●)哎呀,别走啊！',
        recoverTime: 1000
      }
    ],
    ['go-top'],
    [
      'meting',
      {
        //metingApi: "https://meting.sigure.xyz/api/music",
        meting: {
          // 网易
          server: 'netease',
          // 读取歌单
          type: 'playlist',
          mid: '696441716'
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: '#f9bcdd',
          // 播放顺序为随机
          order: 'random',
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0
        },
        mobile: {
          // 手机端去掉cover图
          cover: false
        }
      }
    ],
    [
      'vuepress-plugin-nuggets-style-copy',
      {
        copyText: '复制代码',
        tip: {
          content: '复制成功!'
        }
      }
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: '发现新内容可用',
          buttonText: '刷新'
        }
      }
    ],
    [
      'vuepress-plugin-helper-live2d',
      {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)
          model: 'koharu',
          display: {
            vOffset: -35, //  垂直偏移
            hOffset: 165 //  水平偏移
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ],
    [
      'ribbon-animation',
      {
        size: 90, // 默认数据
        opacity: 0.3, //  透明度
        zIndex: -1, //  层级
        opt: {
          // 色带HSL饱和度
          colorSaturation: '80%',
          // 色带HSL亮度量
          colorBrightness: '60%',
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: 'center',
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true // 滑动彩带
      }
    ],
    ['@vuepress-reco/back-to-top', false]
  ]
}
