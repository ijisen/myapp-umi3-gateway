import { defineConfig } from 'umi';

import routes from './routes';
import theme from './theme';
import { chunks, chainWebpack } from './config.build.chunks';
import proxy from './proxy';
import { mountElementId } from './config.global.path';

export const isProdEnv = process.env.NODE_ENV === 'production';

const publicPath = '/';
// const publicPath = isProdEnv ? '/web/' : '/';

export default defineConfig({
  // 配置标题。
  // title: false,
  // title: 'site.title',
  // 指定 react app 渲染到的 HTML 元素 id。 默认 root
  mountElementId,
  // 设置路由前缀，通常用于部署到非根目录。 默认 /
  base: publicPath,
  // 指定输出路径。 默认 dist
  outputPath: 'dist',
  // 配置 webpack 的 publicPath。当打包的时候，默认: /
  // webpack 会在静态文件路径前面添加 publicPath 的值
  publicPath,
  locale: {
    default: 'zh-CN',
    // 开启后，支持 antd 国际化
    antd: true,
    // 标题国际化
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
  layout: {
    locale: true,
  },
  antd: {},
  routes,
  // 是否启用按需加载，即是否把构建产物进行拆分，在需要的时候下载额外的 JS 再执行。
  dynamicImport: {
    loading: '@/components/PageLoading',
  },
  // 配置主题，实际上是配 less 变量。
  theme,
  // 设置 node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'all',
  },
  // Fast Refresh 热更新
  fastRefresh: {},
  // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。默认false
  hash: true,
  // 配置 html 的输出形式，默认只输出 index.html。
  // 如果需要预渲染，请开启 ssr 配置，常用来解决没有服务端情况下，页面的 SEO 和首屏渲染提速。
  // 如果开启 exportStatic，则会针对每个路由输出 html 文件。
  exportStatic: {},
  // webpack5: {},
  // 开启该功能将会自动开启 webpack5 和 dynamicImport.
  mfsu: isProdEnv ? {} : undefined,
  // 忽略 moment 的 locale 文件，用于减少尺寸。
  ignoreMomentLocale: true,
  // 配置压缩器 terser 的配置项。
  terserOptions: {
    compress: {
      // drop_console: true,
    },
  },
  targets: {
    ie: 10,
  },
  // 整合 dva 数据流。
  dva: {
    // 表示是否启用 immer 以方便修改 reducer。
    immer: { enableES5: true },
    // 表示是否启用 dva model 的热更新。
    hmr: false,
  },
  // chunks: ['design', 'vendors', 'umi'], // 需要包含 cacheGroups 的包
  chunks,
  /**
   * chainWebpack 是 只兼容webpack5； 所以mfsu必须开启
   * */
  chainWebpack,
  // 同 headScripts，配置 <body> 里的额外脚本。
  scripts: [
    {
      id: 'zdns-mo-header',
      src: 'https://static.zdns.cn/header/zdns-header.js?client_id=portal&auto_oauth=false',
    },
  ],
  proxy,
  mock: {},
  cssLoader: {
    localsConvention: 'camelCase',
  },
});
