/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { callAPI } from '@/config/axios';
import * as React from 'react';

interface IDetailProps {
  params: Promise<{ slug: string }>;
}

const Detail: React.FunctionComponent<IDetailProps> = ({ params }) => {
  const [detailPost, setDetailPost] = React.useState<any>(null);
  //  shorthand dari slug.slug
  // karena request data berupa promise
  // outputnya parameter url atau id yang dituju contoh id=1
  // const slug = (await params).slug;
  // atau
  // use  client tidak bisa digunakan apabila function page async
  const getDetailPosts = async () => {
    try {
      const slug = (await params).slug;
      const res = await callAPI.get(`/posts?id=${slug}`);
      setDetailPost(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getDetailPosts();
  }, []);

  if (!detailPost) {
    return <p className="7xl">Loading...</p>;
  }
  return (
    <div>
      {/* <p className="text-3xl">Posts ID : {slug}</p> */}
      <h1 className="text-3xl">{detailPost.title}</h1>
    </div>
  );
};

export default Detail;
