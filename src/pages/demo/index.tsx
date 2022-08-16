import React, { FC, useEffect } from 'react';
import { useAccess, useRequest } from 'umi';
import { DemoModelState, ConnectProps, Loading, connect } from 'umi';

import style from './style.less';
import { queryCurrent, queryFakeList } from '@/pages/demo/service';

interface PageProps extends ConnectProps {
  DemoModel: DemoModelState;
  loading: boolean;
}

const PageDemo: FC<PageProps> = ({ DemoModel, dispatch }) => {
  const access = useAccess();
  // const { name } = DemoModel;

  //  获取用户信息
  const { data: currentUser, loading: queryLoading } = useRequest(() => {
    return queryCurrent();
  });
  // 获取tab列表数据
  const { data: listData } = useRequest(() => {
    return queryFakeList({
      count: 30,
    });
  });
  console.log(access);
  console.log(listData);
  console.log(currentUser);

  useEffect(() => {

  }, []);
  return (
    <div>
      <h1 className={style.titleHeader}>Demo Page</h1>
      {
        queryLoading ? (<p>loading</p>) : (
          <div>{currentUser?.name}</div>
        )
      }
    </div>
  );
};


export default connect(
  ({ DemoModel, loading }: {
    DemoModel: DemoModelState;
    loading: Loading
  }) => ({
    DemoModel,
    loading: loading.models.DemoModel,
  }),
)(PageDemo);
