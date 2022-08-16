import CompressionWebpackPlugin from 'compression-webpack-plugin';

export const chunks = process.env.NODE_ENV === 'production' ? [
  'vendors',
  'design',
  'antd',
  'umi-js',
  'umi-rc-plugins',
  'umi-production',
  'common',
  'umi',
] : undefined;

// webpackConfig: any, args: any
export const chainWebpack = (config: any, { env, webpack }: { env: any, webpack: any }) => {
  if(env === 'production') {
    config.optimization // share the same chunks across different modules
      .splitChunks({
        // all | async | initial
        chunks: 'async',
        // 生成名称的分隔符（例如 vendors~main.js）
        automaticNameDelimiter: '_',
        // 生成 chunk 的最小体积（bytes）
        minSize: 20000,
        // 按需加载时的最大并行请求数  30
        // maxAsyncRequests: 20,
        // 入口点的最大并行请求数  30
        // maxInitialRequests: 20,
        // 共享模块的最小 chunks 数
        minChunks: 1,
        // 生成 chunk 的最小体积
        // maxSize: 50000,
        // 强制执行拆分的体积阈值和其他限制（minRemainingSize，maxAsyncRequests，maxInitialRequests）将被忽略
        // enforceSizeThreshold: 25000,
        //【webpack 5 】中引入，通过确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块
        // minRemainingSize: 0,
        //【webpack 5 】 false function  string
        //【webpack 4 】 true function  string
        // name: false,
        // 缓存组可以继承和/或覆盖来自 splitChunks
        cacheGroups: {
          vendors: {
            name: 'vendors',
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|react-router|lodash|lodash-decorators|dva|moment)[\\/]/,
            // 权重，数字越大表示优先级越高。
            priority: -8,
          },
          design: {
            name: 'design',
            // all chunks包括异步和非异步
            // async chunks异步 (default)
            // initial chunks非异步
            chunks: 'all',
            test: /[\\/]node_modules[\\/](@ant-design)[\\/]/,
            priority: -10,
          },
          antd: {
            name: 'antd',
            // all chunks包括异步和非异步
            // async chunks异步
            // initial chunks非异步
            chunks: 'all',
            test: /[\\/]node_modules[\\/](antd)[\\/]/,
            priority: -11,
          },
          // 从umi中拆分组件
          'umi-js': {
            name: 'umi-js',
            // all chunks包括异步和非异步
            // async chunks异步
            // initial chunks非异步
            chunks: 'all',
            // test: './src/.umi-production',
            test: /[\\/]node_modules[\\/](@umijs)[\\/]/,
            priority: -12,
          },
          // 从umi中拆分组件
          'umi-rc-plugins': {
            name: 'umi-rc-plugins',
            // all chunks包括异步和非异步
            // async chunks异步
            // initial chunks非异步
            chunks: 'all',
            // test: './src/.umi-production',
            // test: /[\\/]node_modules[\\/](rc-field-form|rc-trigger|rc-menu|rc-motion|rc-align|rc-util|rc-notification)[\\/]/,
            test(module: any) {
              // `module.resource` contains the absolute path of the file on disk.
              // Note the usage of `path.sep` instead of / or \, for cross-platform compatibility.
              const path = require('path');
              // console.log(path.sep);
              // console.log(module.resource);
              // \node_modules\rc-field-form
              // \node_modules\rc-menu
              return (
                module.resource &&
                module.resource.includes(`${path.sep}node_modules${path.sep}rc-`)
              );
            },
            priority: -13,
          },
          // 从umi中拆分组件
          'umi-production': {
            name: 'umi-production',
            // all chunks包括异步和非异步
            // async chunks异步
            // initial chunks非异步
            chunks: 'all',
            // test: './src/.umi-production',
            test: /[\\/]src[\\/](.umi-production)[\\/]/,
            priority: -14,
          },
          // 从umi中抽离项目ts
          'common': {
            name: 'common',
            // all chunks包括异步和非异步
            // async chunks异步
            // initial chunks非异步
            chunks: 'all',
            // test: './src/.umi-production',
            test(module: any) {
              // `module.resource` contains the absolute path of the file on disk.
              // Note the usage of `path.sep` instead of / or \, for cross-platform compatibility.
              const path = require('path');
              // console.log(path.sep);
              // console.log(module.resource);
              return (
                module.resource &&
                module.resource.endsWith('.ts') &&
                module.resource.includes(`${path.sep}src${path.sep}`)
              );
            },
            priority: -16,
          },
        },
      });
    config.plugin('replace').use(require('webpack').ContextReplacementPlugin).tap(() => {
      return [/moment[\/\\]locale$/, /en|zh-cn/];
    });
    config.plugin('compression-webpack-plugin').use(
      new CompressionWebpackPlugin({
        // filename: 文件名称，这里我们不设置，让它保持和未压缩的文件同一个名称
        algorithm: 'gzip', // 指定生成gzip格式
        test: new RegExp('\\.(js|css)$'), // 压缩 js 与 css
        threshold: 10240, //对超过10k的数据进行压缩
        minRatio: 0.8, // 压缩比例，值为0 ~ 1
      }),
    );
  }
};
