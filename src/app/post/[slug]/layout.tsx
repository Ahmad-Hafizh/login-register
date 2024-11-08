import * as React from 'react';
// import SignIn from './page';
import { Metadata } from 'next';
import { callAPI } from '@/config/axios';

interface IPostDetailLayout {
  children: React.ReactNode;
}

// export const metadata: Metadata = {
//   title: 'Sign In',
//   description: 'join to share ur story',
// };

type PropsParam = {
  params: { slug: string };
};
// dynamic metadata
// nama functionnya harus generateMetadat
export const generateMetadata = async ({ params }: PropsParam): Promise<Metadata> => {
  const res = await callAPI.get(`/posts?id=${params.slug}`);
  return {
    title: res.data[0].title,
  };
};

const PostDetailLayout: React.FC<IPostDetailLayout> = ({ children }) => {
  return <>{children}</>;
};

export default PostDetailLayout;
