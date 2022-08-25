import { formatMessage } from 'umi';
import { isCellPhone, isEmail } from 'varian-validator';

/** type 类申明 */
import { RuleObject } from 'rc-field-form/lib/interface';

/**
 * 普通文本格式校验
 * 中文 数字 字母 . _ - @
 * */
export const validateStr = (str: string) => {
  const reg = /^[\w\s\u4E00-\u9FA5.\-@]+$/;
  return reg.test(str);
};

/**
 * 【输入文本内容】 校验
 * */
export const validatorInputStr = (rule: any, value: any, max?: number) => {
  if (value.trim()) {
    let reg = /^(\u0000|\s|\n)/;
    if (reg.test(value)) {
      return Promise.reject(
        new Error(
          formatMessage({ id: 'registryOpen.createForm.err.start.empty' }),
        ),
      );
    }

    reg = /(\n|\u0000|\s)$/;
    if (reg.test(value)) {
      return Promise.reject(
        new Error(
          formatMessage({ id: 'registryOpen.createForm.err.end.empty' }),
        ),
      );
    }

    /*reg = /(\n|\u0000|\s){2}/g;
    if (reg.test(value)) {
      return Promise.reject(new Error('不能出现连续的空格'));
    }*/

    const max_len = max || 50;
    if (value.length > max_len) {
      return Promise.reject(
        new Error(
          formatMessage(
            { id: 'registryOpen.createForm.err.max' },
            {
              max: max_len,
            },
          ),
        ),
      );
    }

    if (validateStr(value)) {
      return Promise.resolve();
    }

    return Promise.reject(
      new Error(formatMessage({ id: 'registryOpen.createForm.err.format' })),
    );
  }
  const { field } = rule;
  if (field) {
    let msg = formatMessage({ id: 'registryOpen.createForm.required.prefix' });
    msg += formatMessage({ id: `registryOpen.createForm.${field}` });
    return Promise.reject(new Error(msg));
  }
  return Promise.reject(
    new Error(formatMessage({ id: 'registryOpen.createForm.required' })),
  );
};

/**
 * 【邮箱格式校验】 校验
 * @param[value] 校验值
 * */
export const validatorEmail = (rule: RuleObject, value: any) => {
  if (isEmail(value)) {
    return Promise.resolve();
  }
  return Promise.reject(
    formatMessage({ id: 'registryOpen.createForm.email.err' }),
  );
};

/**
 * 【电话格式校验】 校验
 * @param[value] 校验值
 * */
export const validatorTelephone = (rule: RuleObject, value: any) => {
  let reg = /^[0-9]{1,12}$/;
  if (reg.test(value)) {
    return Promise.resolve();
  }
  return Promise.reject(
    formatMessage({ id: 'registryOpen.createForm.tel.err' }),
  );
};

/**
 * 【手机电话格式】 校验
 * @param[value] 校验值
 * */
export const validatorCellphone = (rule: RuleObject, value: any) => {
  if (isCellPhone(value)) {
    return Promise.resolve();
  }
  return Promise.reject(
    formatMessage({ id: 'registryOpen.createForm.phone.error' }),
  );
};

/**
 * 【用户名格式】 校验
 * @param[value] 校验值
 * */
export const validatorUsername = (rule: RuleObject, value: any) => {
  // 登录账号：长度为3-32位，由大小写字母、数字或特殊符号(只包括-_.)组成，且必须由字母开头，字母或数字结尾
  const userNameReg = /^[a-zA-Z]+[a-zA-Z\d-_.]*[a-zA-Z\d]+$/;
  if (value) {
    if (userNameReg.test(value) && value.length >= 3 && value.length <= 32) {
      return Promise.resolve();
    } else {
      return Promise.reject(
        formatMessage({ id: 'registryOpen.createForm.username.error' }),
      );
    }
  }
  return Promise.reject(
    formatMessage({ id: 'registryOpen.createForm.username.required' }),
  );
};

/**
 * 【密码格式】 校验
 * @param[value] 校验值
 * */
export const validatorPassword = (rule: RuleObject, value: any) => {
  // 密码：密码长度为8-16位，不能包含空格，且必须包含数字、大小写字母、特殊字符至少三种
  const passwordReg =
    /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[^\u4e00-\u9fa5\s]{8,16}$/;
  if (value) {
    if (passwordReg.test(value)) {
      return Promise.resolve();
    } else {
      return Promise.reject(
        formatMessage({ id: 'registryOpen.createForm.password.error' }),
      );
    }
  }
  return Promise.reject(
    formatMessage({ id: 'registryOpen.createForm.password.required' }),
  );
};
