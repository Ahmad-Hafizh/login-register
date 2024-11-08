import * as React from 'react';
// import SignIn from './page';
import { Metadata } from 'next';

interface ISignInLayout {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: 'Sign In',
  description: 'join to share ur story',
};

const SignInLayout: React.FC<ISignInLayout> = ({ children }) => {
  return <>{children}</>;
};

export default SignInLayout;
