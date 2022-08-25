import React from 'react';
import { ValidatorRule } from 'rc-field-form/lib/interface';

export enum EnumDictKey {
  // 新增
  CREATE = 'create',
  // 删除
  DELETE = 'del',
  // 编辑
  EDIT = 'edit',
}

export type CustomFormItemType = {
  name: string | number | (string | number)[];
  type?: string;
  label?: React.ReactNode;
  rules?: ValidatorRule[];
};

export type TLDItemDataType = {
  registryName: string;
  tld: string;
};

export type CreateFormDataType = {
  basicInfo: Record<string, string>;
  accountInfo: Record<string, string>;
  tldInfo: TLDItemDataType[];
};

export type CreateStepFormProps = {
  formName: string;
  registryFormData: CreateFormDataType;
  submitting: boolean;
  submitted: boolean;
  formItemLayout: { [propsName: string]: any };
  buttonItemLayout: { [propsName: string]: any };
  handleStepChange: (name: string, type?: 'prev' | 'next') => void;
  handleChildSubmit: (name: string, data?: any) => void;
  httpValueExistValidator: (data: {
    params: { name: string } | { username: string } | { tld: string };
    type: 'registry' | 'username' | 'tld';
  }) => Promise<any>;
};

export type TLDTableDataType = TLDItemDataType[];
