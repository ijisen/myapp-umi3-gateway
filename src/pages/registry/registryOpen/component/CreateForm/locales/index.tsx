import zhCN from './zh-CN';
import zhEn from './en-US';
import React from 'react';

let localePackage: {
  [propName: string]: string;
} = {};

/**
 * 配置语言包
 * @param locale 语言的 key
 * @returns
 */
export const setLocale = (locale: string) => {
  console.log(`setLocale get ${locale}`);
  const locale_arr = ['en-US', 'en'];
  if (locale_arr.findIndex((item) => item === locale) > -1) {
    localePackage = zhEn;
  } else {
    localePackage = zhCN;
  }
};

/**
 * formatMessage
 * @param { id: string; defaultMessage: string }
 * @returns string
 */
export const formatMessage = ({
  id,
  defaultMessage = undefined,
}: {
  id: string;
  defaultMessage?: string;
}) => {
  console.log(`formatMessage get`);
  if (id && localePackage[id]) {
    return localePackage[id];
  }
  return defaultMessage || id + '-default';
};

/**
 * 配置语言包
 * */
export const FormattedMessage: React.FC<{
  id: string;
  defaultMessage?: string;
}> = (props) => {
  const { id, defaultMessage } = props;
  if (id && localePackage[id]) {
    return <>{localePackage[id]}</>;
  }
  return (
    <>
      {defaultMessage} || {id}
    </>
  );
};
