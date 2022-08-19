import React, { useEffect } from 'react';
import { formatMessage, FormattedMessage } from 'umi';
import { message as $Message, Button, Steps } from 'antd';

import PageContainer from '@/layouts/PageContainer';

import { apiOpenRegistryPost } from './service';
import CreateForm from './component/CreateForm';

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
  useEffect(() => {}, []);

  return (
    <PageContainer>
      <CreateForm submitAJax={handleBatchCreateRR} />
    </PageContainer>
  );
};

export default PageContent;
