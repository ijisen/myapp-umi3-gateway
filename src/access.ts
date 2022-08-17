import { UserInfo } from '@/types/basic.d';

export default function (initialState: UserInfo) {
  const { userId, role } = initialState;

  return {
    canReadFoo: true,
    canUpdateFoo: role === 'admin',
    canDeleteFoo: (foo: any) => {
      return foo.ownerId === userId;
    },
  };
}
