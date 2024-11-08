// server component
// console log muncul di terminal
import { callAPI } from '@/config/axios';
import * as React from 'react';

interface IPostDetailPageProps {
  params: { slug: string };
}

const PostDetailPage: React.FunctionComponent<IPostDetailPageProps> = async ({ params }) => {
  const res = await callAPI.get(`/posts?id=${params.slug}`);
  console.log(res.data[0]);

  return (
    <div>
      {/* <p className="text-3xl">Posts ID : {slug}</p> */}
      <h1 className="text-3xl">Post Title Server: {res.data[0].title}</h1>
    </div>
  );
};

export default PostDetailPage;
