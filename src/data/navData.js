export const navData = [
  {
    title: '🔍 搜索引擎',
    links: [
      {
        title: 'Google',
        url: 'https://www.google.com',
        icon: '🔍',
        description: '全球最大的搜索引擎',
        detailedDescription: 'Google 是世界上最流行的搜索引擎，每天处理超过 85 亿次搜索查询。它使用复杂的算法来提供最相关的搜索结果。',
        rating: 5,
        tags: ['搜索', '广告', '云服务', '人工智能'],
        features: [
          '强大的搜索算法',
          '丰富的搜索过滤选项',
          '图片、视频、新闻等多种搜索类型',
          '个性化搜索结果',
          'Google Scholar 学术搜索'
        ],
        stats: {
          '全球市场份额': '92%',
          '日均搜索': '85亿+',
          '索引页面': '数千亿'
        }
      },
      {
        title: '百度',
        url: 'https://www.baidu.com',
        icon: '🐻',
        description: '中国最大的搜索引擎',
        detailedDescription: '百度是中国市场占有率最高的搜索引擎，提供网页、图片、视频、新闻等多种搜索服务，并且针对中文内容进行了优化。',
        rating: 4,
        tags: ['搜索', '中文', 'AI', '百科'],
        features: [
          '中文搜索优化',
          '百度百科知识库',
          '百度知道问答社区',
          '百度网盘云存储',
          'Apollo 自动驾驶平台'
        ],
        stats: {
          '中国市场份额': '76%',
          '月活用户': '6亿+',
          '成立年份': '2000'
        }
      },
      {
        title: 'Bing',
        url: 'https://www.bing.com',
        icon: '🦅',
        description: '微软搜索引擎',
        detailedDescription: 'Bing 是微软开发的搜索引擎，以其精美的每日背景图片和与 Windows、Office 的深度集成而闻名。',
        rating: 4,
        tags: ['搜索', '微软', '图片', 'AI'],
        features: [
          '精美的每日背景图片',
          '视觉搜索功能',
          '与 Microsoft 产品集成',
          'Bing AI 聊天功能',
          '奖励计划'
        ],
        stats: {
          '全球市场份额': '3%',
          '月活用户': '10亿+',
          '成立年份': '2009'
        }
      },
      {
        title: 'DuckDuckGo',
        url: 'https://duckduckgo.com',
        icon: '🦆',
        description: '注重隐私的搜索引擎',
        detailedDescription: 'DuckDuckGo 是一款注重用户隐私保护的搜索引擎，不追踪用户行为，不存储个人信息，为用户提供私密的搜索体验。',
        rating: 4,
        tags: ['搜索', '隐私', '安全', '开源'],
        features: [
          '不追踪用户行为',
          '不存储个人信息',
          '加密搜索连接',
          '无过滤气泡效应',
          '开源浏览器扩展'
        ],
        stats: {
          '日均搜索': '1亿+',
          '隐私评级': 'A+',
          '成立年份': '2008'
        }
      }
    ]
  },
  {
    title: '🧪 示例网站',
    links: [
      {
        title: 'Example Domain',
        url: 'https://example.com',
        icon: '🧪',
        description: 'IANA 提供的演示站点',
        tags: ['示例', 'HTTP', '演示'],
        rating: 3,
      },
      {
        title: 'W3C',
        url: 'https://www.w3.org',
        icon: '🌐',
        description: 'Web 标准组织',
        tags: ['标准', 'Web', '文档'],
        rating: 4,
      },
      {
        title: 'Svelte',
        url: 'https://svelte.dev',
        icon: '⚡',
        description: '构建更快的 Web 应用框架',
        tags: ['框架', '前端', 'Svelte'],
        rating: 5,
      }
    ]
  },
  {
    title: '💻 开发工具',
    links: [
      {
        title: 'GitHub',
        url: 'https://github.com',
        icon: '🐙',
        description: '代码托管平台',
        detailedDescription: 'GitHub 是全球最大的代码托管平台和开发者社区，提供 Git 版本控制、协作开发、CI/CD、项目管理等功能。',
        rating: 5,
        tags: ['Git', '开源', '协作', 'DevOps'],
        features: [
          'Git 版本控制',
          'Pull Request 代码审查',
          'GitHub Actions CI/CD',
          'Issues 和 Projects 项目管理',
          'GitHub Copilot AI 编程助手',
          'GitHub Pages 静态网站托管'
        ],
        stats: {
          '注册用户': '1亿+',
          '托管项目': '4.2亿+',
          '成立年份': '2008'
        }
      },
      {
        title: 'Stack Overflow',
        url: 'https://stackoverflow.com',
        icon: '📚',
        description: '程序员问答社区',
        detailedDescription: 'Stack Overflow 是全球最大的程序员问答社区，开发者可以在这里提问、回答技术问题，分享编程知识和经验。',
        rating: 5,
        tags: ['问答', '社区', '学习', '技术'],
        features: [
          '海量技术问答',
          '投票和声誉系统',
          '代码高亮显示',
          '标签分类',
          'Stack Overflow for Teams'
        ],
        stats: {
          '月访问量': '1亿+',
          '问题数量': '2400万+',
          '成立年份': '2008'
        }
      },
      {
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org',
        icon: '📖',
        description: 'Web 开发文档',
        detailedDescription: 'MDN Web Docs 是由 Mozilla 维护的权威 Web 技术文档，涵盖 HTML、CSS、JavaScript 等 Web 标准和最佳实践。',
        rating: 5,
        tags: ['文档', 'Web', 'JavaScript', '教程'],
        features: [
          '权威的 Web 标准文档',
          '丰富的代码示例',
          '浏览器兼容性表格',
          '交互式示例',
          '多语言支持'
        ],
        stats: {
          '文档页面': '4.5万+',
          '月访问量': '1800万+',
          '贡献者': '4.5万+'
        }
      },
      {
        title: 'CodePen',
        url: 'https://codepen.io',
        icon: '✏️',
        description: '前端代码演示平台',
        detailedDescription: 'CodePen 是一个在线前端代码编辑器和社区，开发者可以创建、分享和探索 HTML、CSS、JavaScript 代码片段。',
        rating: 4,
        tags: ['前端', '在线编辑器', '社区', '展示'],
        features: [
          '实时代码预览',
          '支持主流前端框架',
          '代码分享和嵌入',
          '探索优秀作品',
          '团队协作功能'
        ],
        stats: {
          '注册用户': '数百万',
          '创建作品': '数千万',
          '成立年份': '2012'
        }
      },
      {
        title: 'npm',
        url: 'https://www.npmjs.com',
        icon: '📦',
        description: 'Node.js 包管理器',
        detailedDescription: 'npm 是 Node.js 的包管理器，也是世界上最大的软件注册表，开发者可以分享和使用 JavaScript 包。',
        rating: 5,
        tags: ['包管理', 'Node.js', 'JavaScript', '开源'],
        features: [
          '海量 JavaScript 包',
          '版本管理',
          '依赖解析',
          'npx 包执行器',
          '私有包支持'
        ],
        stats: {
          '可用包数': '250万+',
          '周下载量': '300亿+',
          '成立年份': '2010'
        }
      },
      {
        title: 'Can I Use',
        url: 'https://caniuse.com',
        icon: '🔧',
        description: '浏览器兼容性查询',
        detailedDescription: 'Can I Use 提供最新的浏览器支持表，帮助开发者了解 Web 技术在不同浏览器中的兼容性情况。',
        rating: 5,
        tags: ['兼容性', '浏览器', 'Web标准', '查询'],
        features: [
          '详细的浏览器支持数据',
          '全球浏览器使用统计',
          '按功能搜索',
          '导入数据到项目',
          '历史版本数据'
        ],
        stats: {
          '追踪功能': '500+',
          '浏览器版本': '数百个',
          '更新频率': '每周'
        }
      }
    ]
  },
  {
    title: '🎨 设计资源',
    links: [
      {
        title: 'Dribbble',
        url: 'https://dribbble.com',
        icon: '🏀',
        description: '设计师作品分享平台'
      },
      {
        title: 'Behance',
        url: 'https://www.behance.net',
        icon: '🎭',
        description: 'Adobe 设计作品展示'
      },
      {
        title: 'Unsplash',
        url: 'https://unsplash.com',
        icon: '📷',
        description: '免费高清图片素材'
      },
      {
        title: 'Figma',
        url: 'https://www.figma.com',
        icon: '🎨',
        description: '在线UI设计工具'
      }
    ]
  },
  {
    title: '📱 社交媒体',
    links: [
      {
        title: 'Twitter',
        url: 'https://twitter.com',
        icon: '🐦',
        description: '社交网络平台'
      },
      {
        title: 'Reddit',
        url: 'https://www.reddit.com',
        icon: '🤖',
        description: '社交新闻聚合'
      },
      {
        title: 'Discord',
        url: 'https://discord.com',
        icon: '💬',
        description: '游戏语音聊天平台'
      },
      {
        title: 'YouTube',
        url: 'https://www.youtube.com',
        icon: '📺',
        description: '视频分享平台'
      }
    ]
  },
  {
    title: '📰 新闻资讯',
    links: [
      {
        title: 'Hacker News',
        url: 'https://news.ycombinator.com',
        icon: '🗞️',
        description: '技术新闻聚合'
      },
      {
        title: 'Medium',
        url: 'https://medium.com',
        icon: '✍️',
        description: '优质内容发布平台'
      },
      {
        title: 'Dev.to',
        url: 'https://dev.to',
        icon: '👨‍💻',
        description: '开发者社区'
      },
      {
        title: '少数派',
        url: 'https://sspai.com',
        icon: '📱',
        description: '数字生活指南'
      }
    ]
  },
  {
    title: '🎓 学习平台',
    links: [
      {
        title: 'Coursera',
        url: 'https://www.coursera.org',
        icon: '🎓',
        description: '在线课程平台'
      },
      {
        title: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org',
        icon: '🔥',
        description: '免费编程学习'
      },
      {
        title: 'LeetCode',
        url: 'https://leetcode.com',
        icon: '💡',
        description: '算法刷题平台'
      },
      {
        title: 'Udemy',
        url: 'https://www.udemy.com',
        icon: '📚',
        description: '在线课程市场'
      }
    ]
  }
];
