import React from 'react';
interface IUserCard {
  id: number;
  name: string;
  phone: string;
}
const UserCard: React.FC<IUserCard> = ({ id, name, phone }) => {
  return (
    <div className="flex bg-white rounded-md w-full h-[70px] justify-start items-center p-2 shadow-md gap-4">
      <img src={`https://robohash.org/${id}`} alt="profile picture" className="rounded-full w-[60px] h-[60px] bg-white shadow-md " />
      <div>
        <p className="text-lg font-bold">{name}</p>
        <p className="text-md text-gray-500">{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
