'use client';
import { useAppSelector } from '@/lib/redux/hooks';
import { redirect } from 'next/navigation';
// useAppSelector
import * as React from 'react';

interface IAuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FunctionComponent<IAuthGuardProps> = ({ children }) => {
  // ngambil data dari redux
  const userData = useAppSelector((state) => state.userReducer);
  React.useEffect(() => {
    if (Object.hasOwn(userData, 'isAuth')) {
      if (!userData?.isAuth) {
        redirect('/');
      }
    }
  }, [userData]);
  return <>{children}</>;
};

export default AuthGuard;
