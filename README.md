# 我的导航网站

一个使用 Svelte 和 Tailwind CSS 构建的静态导航网站。

## 功能特点

- 🎨 精美的 UI 设计，使用 Tailwind CSS
- 📱 响应式布局，支持移动端
- ⚡ 快速加载，基于 Vite 构建
- 🎯 分类清晰的导航链接
- ⏰ 实时时钟显示

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

然后在浏览器中打开 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

构建后的文件将在 `dist` 目录中。

### 预览生产版本

```bash
npm run preview
```

## 部署

### 部署到 GitHub Pages

1. 构建项目：
```bash
npm run build
```

2. 将 `dist` 目录推送到 GitHub Pages

本项目已配置自定义域名 `mikumi.linkpc.net`（通过 `public/CNAME` 文件）。

### 部署到其他平台

- **Vercel**: 直接导入 GitHub 仓库
- **Netlify**: 拖拽 `dist` 文件夹或连接 Git 仓库
- **Cloudflare Pages**: 连接 Git 仓库并配置构建命令

构建命令：`npm run build`  
输出目录：`dist`

## 自定义导航链接

编辑 `src/data/navData.js` 文件来添加、修改或删除导航链接。

```javascript
export const navData = [
  {
    title: '分类名称',
    links: [
      {
        title: '网站名称',
        url: 'https://example.com',
        icon: '🔗',
        description: '网站描述'
      }
    ]
  }
];
```

## 技术栈

- [Svelte](https://svelte.dev/) - 响应式前端框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [Vite](https://vitejs.dev/) - 构建工具

## 许可证

MIT
