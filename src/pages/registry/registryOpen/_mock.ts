import type { Request, Response } from 'express';

export default {
  'POST  /mock/api/admin/openRegistry': (req: Request, res: Response) => {
    return res.json({
      code: '1000',
      success: true,
      message: '创建成功',
    });
  },
};
