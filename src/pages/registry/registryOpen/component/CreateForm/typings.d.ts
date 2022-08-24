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

export type CreateStepFormProps = {
  formName: string;
  formItemLayout: { [propsName: string]: any };
  buttonItemLayout: { [propsName: string]: any };
  handleStepChange: (step: number, data?: any) => void;
};

export type TLDItemDataType = {
  registryName: string;
  tld: string;
};

export type TLDTableDataType = TLDItemDataType[];
