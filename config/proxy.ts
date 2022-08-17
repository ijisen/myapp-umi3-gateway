export default {
  /*'/portal': {
    target: 'http://202.173.9.2:20000',
    changeOrigin: true,
    pathRewrite: {
      '^': '',
    },
  },
  '/api': {
    // target: 'http://202.173.9.2:28181',
    target: 'http://202.173.9.26:28181',
    changeOrigin: true,
    pathRewrite: {
      '^': '',
    },
  },*/
  '/api': {
    target: 'http://localhost:8181/',
    pathRewrite: { '^/api': '/mock/api' },
    changeOrigin: false,
  },
};
