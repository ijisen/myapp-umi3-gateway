import React from 'react';
import { useModel } from 'umi';
import PageContainer from '@/layouts/PageContainer';
import { Button } from 'antd';

export default () => {
  const { user, signIn, signOut } = useModel('useAuthModel');
  if (user) {
    return (
      <PageContainer>
        <div>
          {user.name} - {user.age}
        </div>
        <Button type="primary" onClick={signOut}>
          退出
        </Button>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Button
        type="primary"
        onClick={() =>
          signIn({
            name: 'primary',
            age: 50,
          })
        }
      >
        登录
      </Button>
    </PageContainer>
  );
};
