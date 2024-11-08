import * as React from 'react';
// import SignIn from './page';
import { Metadata } from 'next';

interface ISignUpLayout {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'join to share ur story',
};

const SignUpLayout: React.FC<ISignUpLayout> = ({ children }) => {
  return <>{children}</>;
};

export default SignUpLayout;
