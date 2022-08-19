export default [
  /** 创建成功 */
  {
    code: '200',
    success: true,
    message: 'success',
    data: {
      // 创建成功
      result: true,
      message: '创建成功',
    },
  },
  /** 创建失败 */
  {
    code: '200',
    success: true,
    message: 'success',
    data: {
      // 创建失败
      result: false,
      message: '创建失败原因',
    },
  },
  /** 获取列表数据-成功 */
  {
    code: '200',
    success: true,
    message: 'success',
    data: {
      result: true,
      list: [],
      pagination: {
        total: 100,
        currentPage: 1,
        pageSize: 10,
      },
    },
  },
  /** 获取列表数据-失败 */
  {
    code: '200',
    success: true,
    message: 'success',
    data: {
      result: false,
      message: '获取失败原因',
    },
  },
  /** 无权限访问 */
  {
    code: '403',
    success: false,
    message: 'Forbidden',
    error: '定位失败原因',
  },
  /** token 失效 */
  {
    code: '401',
    success: false,
    message: 'token is invalid',
    error: '定位失败原因',
  },
];
