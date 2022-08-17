// 结算类型
import React from 'react';
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

// 用户类型枚举
export enum EnumLanguageType {
  en = 'en-US',
  zh = 'zh-CN',
}

export type SettlementType = 'online' | 'offline';

export type roleType = 'admin' | 'user';

// 用户数据
export type UserInfo = {
  userId?: React.Key;
  userName: string;
  role: string;
  settlementType: SettlementType;
  cellphone: string;
  userType: string;
  isAdmin?: boolean;
};

export interface InitialModelState {
  settings?: Partial<LayoutSettings>;
  currentUser?: UserInfo | undefined;
  loading?: boolean;
  fetchUserInfo?: () => Promise<UserInfo | undefined>;
}
