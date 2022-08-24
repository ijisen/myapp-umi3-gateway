import React, { useEffect, useState } from 'react';
import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi';
import { Button, message as $Message, ConfigProvider } from 'antd';

import PageContainer from '@/layouts/PageContainer';
import CreateForm from './component/CreateForm';

import {
  apiOpenRegistryExistValidatorByType,
  apiOpenRegistryPost,
} from './service';

import { ExistValueValidatorType } from '@/pages/registry/registryOpen/typings';

/**
 * 参数否存在校验
 * @param[type]
 *    --- registry 注册局名称否存在校验
 *    --- username 登录帐号是否存在校验
 *    --- tld     注册局-授权TLD是否存在校验
 * @description： 校验参数是否已经存在
 * */
export const handleExistValidatorByType = async (
  params: { name: string } | { username: string } | { tld: string },
  type: ExistValueValidatorType,
) => {
  console.log(params);
  let res_msg = {
    success: false,
    message: formatMessage({ id: 'registryOpen.validator.failed' }),
  };
  switch (type) {
    case 'registry':
      res_msg.message = formatMessage({
        id: 'registryOpen.name.validator.failed',
      });
      break;
    case 'username':
      res_msg.message = formatMessage({
        id: 'registryOpen.username.validator.failed',
      });
      break;
    case 'tld':
      res_msg.message = formatMessage({
        id: 'registryOpen.tld.validator.failed',
      });
      break;
  }
  try {
    const { success = false, message } =
      (await apiOpenRegistryExistValidatorByType({ type, params })) || {};
    res_msg = {
      success: success || false,
      message: message || res_msg.message,
    };
    return res_msg;
  } catch (err) {
    console.log(err);
    return res_msg;
  }
};

/**
 * 开通注册局
 * */
export const handleBatchCreateRR = async (formData: any) => {
  console.log(formData);
  try {
    const {
      success = false,
      message,
      data,
    } = (await apiOpenRegistryPost(formData)) || {};
    if (success) {
      $Message.success(formatMessage({ id: 'registryOpen.success' }));
    } else {
      $Message.error(message || formatMessage({ id: 'registryOpen.failed' }));
    }
    return {
      success,
    };
  } catch (err) {
    $Message.error(formatMessage({ id: 'registryOpen.failed' }));
    console.log(err);
    return {
      success: false,
    };
  }
};

const PageContent = () => {
  useEffect(() => {
    console.log(`index home ${getLocale()}`);
  }, [getLocale()]);

  const changeLocale = () => {
    const locale = getLocale();
    if (locale === 'zh-CN') {
      setLocale('en-US', false);
    } else {
      setLocale('zh-CN', false);
    }
    // setLocale(getLocale());
    // console.log(getLocale());
  };
  return (
    <PageContainer>
      <div>
        <Button type="primary" onClick={changeLocale}>
          切换 - <FormattedMessage id="registryOpen.failed" />
        </Button>
      </div>
      <ConfigProvider locale={getLocale()}>
        <CreateForm
          httpSubmitAJax={handleBatchCreateRR}
          locale={getLocale()}
          httpValueExistValidator={handleExistValidatorByType}
        />
      </ConfigProvider>
    </PageContainer>
  );
};

export default PageContent;
