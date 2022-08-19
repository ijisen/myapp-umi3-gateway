import { PageContainer } from '@ant-design/pro-layout';
import React, { FC } from 'react';

import style from './style.less';

const PageContainerLayout: FC = (props) => {
  return (
    <PageContainer className={style['dne-page-container']} title={false}>
      {props.children}
    </PageContainer>
  );
};

export default PageContainerLayout;
