'use client';
import { callAPI } from '@/config/axios';
import { useSearchParams } from 'next/navigation';
import * as React from 'react';

interface IDetailProps {}

const Detail: React.FunctionComponent<IDetailProps> = (props) => {
  const searchParams = useSearchParams();
  // medapatkan id dari url yang di deklarasi menggunakan useRouter.push
  console.log(searchParams.get('id'));
  const [detailPost, setDetailPost] = React.useState<any>(null);

  const getDetailPosts = async () => {
    try {
      const res = await callAPI.get(`/posts?id=${searchParams.get('id')}`);
      setDetailPost(res.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getDetailPosts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl">Detail Page</h1>
      {/* ? karena data awalnya null */}
      <h1 className="text-3xl">{detailPost?.title}</h1>
    </div>
  );
};

export default Detail;
