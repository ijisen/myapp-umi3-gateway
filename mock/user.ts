import { Request, Response } from 'express';
import { getSessionStorage } from 'varian-validator';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

async function getFakeCaptcha(req: Request, res: Response) {
  await waitTime(2000);
  return res.json('captcha-xxx');
}

/**
 * 当前用户的权限，如果为空代表没登录
 * current user access， if is '', user need login
 * 如果是 pro 的预览，默认是有权限的
 */
let access = 'user';
let userInfo = {
  userId: 1,
  username: 'user',
  userType: 1,
};

const getAccess = () => {
  return access;
};

// 代码中会兼容本地 service mock 以及部署站点的静态数据
export default {
  // 支持值为 Object 和 Array
  'GET /mock/api/currentUser': async (req: Request, res: Response) => {
    // const { password, username, type } = req.body;
    await waitTime(1000);
    if (!getAccess()) {
      res.status(401).send({
        success: false,
        code: 401,
        message: '请先登录！',
      });
      return;
    }
    res.send({
      success: true,
      code: 1000,
      data: {
        ...userInfo,
      },
    });
  },
  // 支持值为 Object 和 Array
  'GET /mock/api/user/login/:user': (req: Request, res: Response) => {
    const { user } = req.params;
    // console.log(req.params);
    // console.log(req.query);
    let _access = 'user';
    let _userInfo = {
      userId: 1,
      username: 'user',
      userType: 1,
    };
    if (['superAdmin', 'admin'].findIndex((item) => item === user) > -1) {
      _access = 'admin';
      _userInfo.username = _access;
    }
    userInfo = _userInfo;
    access = _access;
    res.send({
      success: true,
      code: 1000,
      data: { ...userInfo },
    });
  },

  'GET /api/500': (req: Request, res: Response) => {
    res.status(500).send({
      timestamp: 1513932555104,
      status: 500,
      error: 'error',
      message: 'error',
      path: '/base/category/list',
    });
  },
  'GET /api/404': (req: Request, res: Response) => {
    res.status(404).send({
      timestamp: 1513932643431,
      status: 404,
      error: 'Not Found',
      message: 'No message available',
      path: '/base/category/list/2121212',
    });
  },
  'GET /api/403': (req: Request, res: Response) => {
    res.status(403).send({
      timestamp: 1513932555104,
      status: 403,
      error: 'Forbidden',
      message: 'Forbidden',
      path: '/base/category/list',
    });
  },
  'GET /api/401': (req: Request, res: Response) => {
    res.status(401).send({
      timestamp: 1513932555104,
      status: 401,
      error: 'Unauthorized',
      message: 'Unauthorized',
      path: '/base/category/list',
    });
  },

  'GET  /api/login/captcha': getFakeCaptcha,
};
