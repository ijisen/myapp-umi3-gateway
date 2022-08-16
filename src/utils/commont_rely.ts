import { useIntl, getLocale } from 'umi';

import { EnumLanguageType } from '@/types/basic.d';


/**
 * 页面错误消息
 * */
export const pageMsgTips: {
  type?: string;
  message?: string;
} = {
  type: undefined,
  message: undefined,
};

/**
 * 设置标题
 * */
export const setLanguage = (keys: string) => {
  const intl = useIntl();
  return intl.formatMessage({
    id: keys,
    defaultMessage: '-',
  });
};

/**
 * @names：普通文本空格过滤
 * @params[str] string
 * @return string
 * */
export const isLocaleEn = () => {
  const locale = getLocale();
  return locale === EnumLanguageType.en;
};
