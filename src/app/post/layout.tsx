import * as React from 'react';
// import SignIn from './page';
import { Metadata } from 'next';
import AuthGuard from '@/guard/AuthGuard';

interface IPostLayout {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: 'Post List | see others stories',
  description: 'share ur story',
};

const PostLayout: React.FC<IPostLayout> = async ({ children }) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
  return <AuthGuard>{children}</AuthGuard>;
};

export default PostLayout;
