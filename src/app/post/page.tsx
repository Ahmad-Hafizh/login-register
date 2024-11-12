/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import { callAPI } from '@/config/axios';
import PostCard from '@/components/PostCard';
import UserCard from '@/components/UserCard';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
// import { addPostData, getPostList } from '@/lib/redux/features/postSlice';

const PostPage = () => {
  // const dispatch = useAppDispatch();
  const router = useRouter();
  const [dataPost, setDataPost] = useState<any>([]);
  const [dataUser, setDataUser] = useState<any>([]);
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [countBody, setCountBody] = useState<number>(0);
  const post = useAppSelector((state) => state.postReducer);

  // useEffect(() => {
  //   // dispatch(getPostList());
  // }, []);

  // const getPost = async () => {
  //   try {
  //     const responsePost = await callAPI.get('/posts');
  //     const responseUser = await callAPI.get('/users');
  //     // console.log(responsePost.data);
  //     // localStorage.setItem('dataPost', JSON.stringify(responsePost.data));
  //     // console.log(localStorage);
  //     dispatch(addPostData(responsePost.data));

  //     // setDataPost(responsePost.data);
  //     setDataUser(responseUser.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const setPost = async () => {
    try {
      const resUpload = await callAPI.post('/posts', {
        userId: 2,
        id: dataPost.length + 1,
        title,
        body,
      });
      console.log(resUpload);
      // getPost();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(post);

  return (
    <div className="w-full h-full min-h-screen px-5 md:px-20 flex bg-gray-100 pt-10 gap-10">
      <div className="w-[75%] flex flex-col gap-7">
        <div className="flex w-full gap-2">
          <img src={`https://robohash.org/2`} alt="profile picture" className="rounded-full w-[85px] h-[85px] bg-gray-100 shadow-md " />
          <div className="flex flex-col justify-center items-start  bg-white rounded-e-md w-full gap-2 shadow-md rounded-md">
            <input
              type="text"
              placeholder="title"
              className="w-full py-2 px-4"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <div className="w-full relative">
              <textarea
                name=""
                id=""
                placeholder="type your story"
                className="w-full py-2 px-4 border-b-2"
                onChange={(e) => {
                  setCountBody(e.target.value.length);
                  if (e.target.value.length < 350) {
                    setBody(e.target.value);
                  }
                }}
              />
              <span className="absolute text-sm text-gray-400 right-4 bottom-2">{countBody}/350</span>
            </div>
            <div className="flex justify-between items-center w-full py-2 px-4">
              <div className="flex gap-2">
                <p>img</p>
                <p>doc</p>
              </div>
              <button className="py-2 px-4 bg-gray-500 text-white rounded-full" onClick={setPost}>
                Post
              </button>
            </div>
          </div>
        </div>
        <hr className="border w-full" />
        <div className="flex flex-col-reverse items-start justify-start gap-4 mb-10">
          {post.map((e: any, i: number) => {
            // ? = bersifat query boleh ada boleh ngga
            return (
              <PostCard
                id={e.id}
                title={e.title}
                body={e.body}
                key={i}
                //request parameter query
                // onClick={() => router.push(`/post/detail?id=${e.id}`)}
                // request parameter
                onClick={() => router.push(`/post/${e.id}`)}
              />
            );
          })}
        </div>
      </div>
      <div className="w-[25%] flex flex-col gap-3 justify-start items-start">
        {dataUser.map((e: any, i: number) => {
          return <UserCard id={e.id} name={e.name} phone={e.phone} key={i} />;
        })}
      </div>
    </div>
  );
};

export default PostPage;
