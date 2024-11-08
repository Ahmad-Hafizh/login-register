import React from 'react';
interface IPostCardType {
  id: number;
  title: string;
  body: string;
  onClick?: () => void;
}
const PostCard: React.FC<IPostCardType> = ({ id, title, body, onClick }) => {
  return (
    <div className="flex w-full justify-start items-center cursor-pointer" onClick={onClick}>
      <img src={`https://robohash.org/${id}`} alt="profile picture" className="rounded-full w-[85px] h-[85px] bg-gray-100 shadow-md absolute" />
      <div className="w-full flex flex-col justify-center items-start ml-14 pl-10 pr-5 bg-white py-1 rounded-e-md shadow-sm min-h-24">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="post">{body}</p>
      </div>
    </div>
  );
};

export default PostCard;
