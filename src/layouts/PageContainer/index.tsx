import { PageContainer } from '@ant-design/pro-layout';
import React, { FC } from 'react';

const PageContainerLayout: FC = (props) => {
  return <PageContainer title={false}>{props.children}</PageContainer>;
};

export default PageContainerLayout;
