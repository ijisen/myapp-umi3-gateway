import { useState, useCallback } from 'react';

export type UserInfoType = {
  name: string;
  age: number;
};
export default function useAuthModel() {
  const [user, setUser] = useState<UserInfoType | null>(null);

  const signIn = useCallback((config) => {
    // signIn implementation
    console.log(config);
    setUser({
      ...config,
    });
  }, []);

  const signOut = useCallback(() => {
    // signOut implementation
    setUser(null);
  }, []);

  return {
    user,
    signIn,
    signOut,
  };
}
