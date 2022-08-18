import React, { FC, useEffect } from 'react';
import { useAccess, useRequest } from 'umi';
import { AccountModelType, ConnectProps, Loading, connect } from 'umi';

import style from './style.less';
import { queryCurrent, queryFakeList } from './service';

interface PageUseDvaDemoProps extends ConnectProps {
  Account: AccountModelType;
  loading: boolean;
}

const UseDvaDemo: FC<PageUseDvaDemoProps> = ({ Account, dispatch }) => {
  const access = useAccess();
  // const { name } = Account;

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

  useEffect(() => {}, []);
  return (
    <div>
      <h1 className={style.titleHeader}>Demo Page</h1>
      {queryLoading ? <p>loading</p> : <div>{currentUser?.name}</div>}
    </div>
  );
};

export default connect(
  ({ Account, loading }: { Account: AccountModelType; loading: Loading }) => ({
    Account,
    loading: loading.models.account,
  }),
)(UseDvaDemo);
