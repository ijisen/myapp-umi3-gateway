// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';
import type { ListItemDataType } from './typings.d';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];

// 当前用户信息
const currentUseDetail = {
  name: 'Serati Ma',
  userid: '00000001',
  title: '交互专家',
  address: '西湖区工专路 77 号',
  phone: '0752-268888888',
};

function fakeList(count: number): ListItemDataType[] {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      id: `fake-list-${i}`,
      title: titles[i % 8],
      status: ['active', 'exception', 'normal'][i % 3] as
        | 'normal'
        | 'exception'
        | 'active'
        | 'success',
      percent: Math.ceil(Math.random() * 50) + 50,
      members: [
        {
          name: '曲丽丽',
          id: 'member1',
        },
        {
          name: '王昭君',
          id: 'member2',
        },
        {
          name: '董娜娜',
          id: 'member3',
        },
      ],
    });
  }

  return list;
}

function getFakeList(req: Request, res: Response) {
  const params = req.query as any;

  const count = Number(params.count) * 1 || 5;

  const result = fakeList(count);
  return res.json({
    data: {
      list: result,
    },
  });
}

// 获取用户信息
function getCurrentUser(req: Request, res: Response) {
  return res.json({
    data: currentUseDetail,
  });
}

export default {
  'GET  /mock/api/fake/list': getFakeList,
  // 支持值为 Object 和 Array
  'GET  /mock/api/fake/detail': getCurrentUser,
};
