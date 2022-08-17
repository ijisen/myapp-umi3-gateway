import { message } from 'antd';
import type { Effect, ImmerReducer } from 'umi';

/**初始化数据*/
const initState = {
  total: 0,
  data: [],
};
/**state数据类型*/
export type AccountModelState = {
  total: number;
  data: any[];
};
/**model数据类型*/
export type AccountModelType = {
  namespace: string;
  state: AccountModelState;
  effects: {
    // 联系人管理
    getContact: Effect;
  };
  reducers: {
    // 联系人管理
    setContact: ImmerReducer<AccountModelState>;
    clearData: ImmerReducer;
  };
};
const model: AccountModelType = {
  namespace: 'account',
  state: initState,
  effects: {
    /**获取联系人管理表格数据*/
    *getContact({ payload }, { put, call }) {
      const res = { code: 1000, data: [] };
      if (res?.code == 20000 || res?.data) {
        const payload = {
          total: res.code,
          data: res?.data,
        };
        yield put({
          type: 'setContact',
          payload,
        });
      } else {
        message.destroy('api');
      }
    },
  },

  reducers: {
    /**更新联系人管理表格数据*/
    setContact(state, action) {
      state.total = action.payload;
    },
    /**清空account数据*/
    clearData() {
      return initState;
    },
  },
};

export default model;
