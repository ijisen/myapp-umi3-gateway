import React from 'react';

import PageContainer from '@/layouts/PageContainer';
import CreateForm from './component/CreateForm';

import {
  apiOpenRegistryExistValidatorByType,
  apiOpenRegistryPost,
} from './service';

const PageContent = () => {
  return (
    <PageContainer>
      <CreateForm
        httpSubmitAJax={apiOpenRegistryPost}
        httpValueExistValidator={apiOpenRegistryExistValidatorByType}
      />
    </PageContainer>
  );
};

export default PageContent;
