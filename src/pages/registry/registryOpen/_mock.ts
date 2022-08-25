import type { Request, Response } from 'express';

export default {
  'GET  /mock/api/admin/openRegistry/validator/registry': (
    req: Request,
    res: Response,
  ) => {
    setTimeout(() => {
      const success = Date.now() % 2 === 0;
      return res.json({
        code: '1000',
        success: success,
        message: success ? '注册局名称可以使用' : '注册局名称已经存在',
      });
    }, 1000);
  },

  'GET  /mock/api/admin/openRegistry/validator/username': (
    req: Request,
    res: Response,
  ) => {
    setTimeout(() => {
      const success = Date.now() % 2 === 0;
      return res.json({
        code: '1000',
        success: success,
        message: success ? '登录帐号可以使用' : '登录帐号已经存在',
      });
    }, 1000);
  },

  'GET  /mock/api/admin/openRegistry/validator/tld': (
    req: Request,
    res: Response,
  ) => {
    setTimeout(() => {
      const success = Date.now() % 2 === 0;
      return res.json({
        code: '1000',
        success: success,
        message: success ? 'TLD可以使用' : 'TLD已经存在',
      });
    }, 1000);
  },

  'POST  /mock/api/admin/openRegistry': (req: Request, res: Response) => {
    return res.json({
      code: '1000',
      success: true,
      message: '创建成功',
    });
  },
};
