// "冰山之下"背面显示的数据
export const backData = [
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
        detailedDescription: 'Svelte 是一个现代化的前端框架，通过编译时优化将组件转换为高效的原生 JavaScript 代码，无需虚拟 DOM，性能卓越。',
        tags: ['框架', '前端', 'Svelte'],
        rating: 5,
        features: [
          '编译时优化',
          '无虚拟 DOM',
          '更少的样板代码',
          '响应式声明',
          '内置动画和过渡效果'
        ],
        stats: {
          'GitHub Stars': '78k+',
          '包大小': '极小',
          '学习曲线': '平缓'
        }
      },
      {
        title: 'HTTP Archive',
        url: 'https://httparchive.org',
        icon: '📊',
        description: 'Web 性能统计数据',
        tags: ['性能', '统计', 'Web'],
        rating: 4,
      }
    ]
  },
  {
    title: '🔧 开发者工具',
    links: [
      {
        title: 'RegExr',
        url: 'https://regexr.com',
        icon: '🔍',
        description: '正则表达式测试工具',
        detailedDescription: 'RegExr 是一个在线正则表达式学习、构建和测试工具，提供实时匹配、语法高亮和详细的参考文档。',
        tags: ['正则', '测试', '工具'],
        rating: 5,
        features: [
          '实时匹配预览',
          '语法高亮',
          '详细的表达式解释',
          '常用正则库',
          '社区分享'
        ],
        stats: {
          '支持语言': '多种',
          '社区模式': '数千个',
          '更新频率': '活跃'
        }
      },
      {
        title: 'JSON Formatter',
        url: 'https://jsonformatter.org',
        icon: '📝',
        description: 'JSON 格式化工具',
        tags: ['JSON', '格式化', '验证'],
        rating: 4,
      },
      {
        title: 'CyberChef',
        url: 'https://gchq.github.io/CyberChef/',
        icon: '🔐',
        description: '数据处理和加密工具',
        detailedDescription: 'CyberChef 是 GCHQ 开发的"数据瑞士军刀"，提供编码、加密、压缩、数据分析等 300 多种操作。',
        tags: ['加密', '编码', '分析'],
        rating: 5,
        features: [
          '300+ 种操作',
          '可视化操作流程',
          '支持拖拽组合',
          '无需安装',
          '开源免费'
        ],
        stats: {
          '操作数量': '300+',
          'GitHub Stars': '27k+',
          '维护状态': '活跃'
        }
      },
      {
        title: 'Carbon',
        url: 'https://carbon.now.sh',
        icon: '📸',
        description: '代码截图美化工具',
        tags: ['截图', '美化', '分享'],
        rating: 5,
      },
      {
        title: 'Excalidraw',
        url: 'https://excalidraw.com',
        icon: '✏️',
        description: '手绘风格白板工具',
        tags: ['白板', '绘图', '协作'],
        rating: 5,
      }
    ]
  },
  {
    title: '🎮 有趣网站',
    links: [
      {
        title: 'Neal.fun',
        url: 'https://neal.fun',
        icon: '🎨',
        description: '创意互动网站集合',
        detailedDescription: 'Neal.fun 是一个创意互动网站集合，包含各种有趣的 Web 实验和可视化项目，如"宇宙深度"、"密码游戏"等。',
        tags: ['创意', '互动', '教育'],
        rating: 5,
        features: [
          '宇宙深度探索',
          '互联网地图',
          '时间机器',
          '密码强度游戏',
          '婴儿地图'
        ],
        stats: {
          '项目数量': '30+',
          '访问量': '数百万',
          '更新频率': '定期'
        }
      },
      {
        title: 'The Useless Web',
        url: 'https://theuselessweb.com',
        icon: '🎲',
        description: '随机无用但有趣的网站',
        tags: ['随机', '娱乐', '探索'],
        rating: 4,
      },
      {
        title: 'Windows 93',
        url: 'https://www.windows93.net',
        icon: '💻',
        description: '浏览器中的复古操作系统',
        tags: ['复古', '模拟器', '娱乐'],
        rating: 4,
      },
      {
        title: 'A Soft Murmur',
        url: 'https://asoftmurmur.com',
        icon: '🎵',
        description: '环境白噪音生成器',
        tags: ['音乐', '专注', '放松'],
        rating: 4,
      }
    ]
  },
  {
    title: '📚 知识宝库',
    links: [
      {
        title: 'Internet Archive',
        url: 'https://archive.org',
        icon: '📚',
        description: '互联网档案馆',
        detailedDescription: 'Internet Archive 是一个非营利性数字图书馆，保存了数十亿网页、书籍、软件、音乐、视频等数字资料。',
        tags: ['档案', '历史', '图书馆'],
        rating: 5,
        features: [
          'Wayback Machine 网页时光机',
          '数百万本免费书籍',
          '经典软件下载',
          '音乐和影片收藏',
          '学术论文'
        ],
        stats: {
          '网页快照': '7350亿+',
          '书籍数量': '3800万+',
          '成立年份': '1996'
        }
      },
      {
        title: 'Project Gutenberg',
        url: 'https://www.gutenberg.org',
        icon: '📖',
        description: '免费电子书图书馆',
        tags: ['电子书', '经典', '免费'],
        rating: 5,
      },
      {
        title: 'Khan Academy',
        url: 'https://www.khanacademy.org',
        icon: '🎓',
        description: '免费在线教育平台',
        tags: ['教育', '数学', '科学'],
        rating: 5,
      },
      {
        title: 'arXiv',
        url: 'https://arxiv.org',
        icon: '🔬',
        description: '学术论文预印本库',
        detailedDescription: 'arXiv 是康奈尔大学运营的学术论文预印本库，包含物理、数学、计算机科学等领域的 200 多万篇论文。',
        tags: ['学术', '论文', '科研'],
        rating: 5,
        features: [
          '免费访问',
          '每日更新',
          '多学科覆盖',
          'PDF 下载',
          '引用追踪'
        ],
        stats: {
          '论文数量': '240万+',
          '日均提交': '500+',
          '成立年份': '1991'
        }
      }
    ]
  },
  {
    title: '🌐 特色站点',
    links: [
      {
        title: 'Little Workshop',
        url: 'https://littleworkshop.fr',
        icon: '🎪',
        description: '精致的 Web 创意工作室',
        tags: ['创意', '设计', '艺术'],
        rating: 4,
      },
      {
        title: 'Hacker Typer',
        url: 'https://hackertyper.net',
        icon: '⌨️',
        description: '装模作样的黑客模拟器',
        tags: ['娱乐', '模拟', '恶作剧'],
        rating: 3,
      },
      {
        title: 'This Person Does Not Exist',
        url: 'https://thispersondoesnotexist.com',
        icon: '👤',
        description: 'AI 生成的虚拟人脸',
        detailedDescription: '使用 StyleGAN 生成逼真的虚拟人脸图像，每次刷新都会生成一张不存在的人脸照片，展示 AI 生成技术的强大。',
        tags: ['AI', '生成', '人脸'],
        rating: 5,
        features: [
          'StyleGAN 技术',
          '高度逼真',
          '每次不同',
          '免费使用',
          '无版权问题'
        ],
        stats: {
          '技术': 'StyleGAN2',
          '图片质量': '1024x1024',
          '生成速度': '即时'
        }
      },
      {
        title: 'Radio Garden',
        url: 'http://radio.garden',
        icon: '📻',
        description: '全球广播电台地图',
        tags: ['音乐', '广播', '全球'],
        rating: 5,
      },
      {
        title: 'Pointer Pointer',
        url: 'https://pointerpointer.com',
        icon: '👆',
        description: '总能指向你鼠标的图片',
        tags: ['创意', '互动', '有趣'],
        rating: 4,
      }
    ]
  }
];
