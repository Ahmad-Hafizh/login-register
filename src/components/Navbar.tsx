'use client';
import { callAPI } from '@/config/axios';
import { LanguageContext } from '@/context/LanguageContext';
import { useAppSelector } from '@/lib/redux/hooks';
import React, { useContext, useEffect } from 'react';
import { useAppDispatch } from '@/lib/redux/hooks';
import { setSignIn } from '@/lib/redux/features/userSlice';
import { getPostList } from '@/lib/redux/features/postSlice';
// useAppSelector bertujuan untuk mengambil value dari store

interface INvavbarProps {}

const Navbar: React.FC<INvavbarProps> = (props) => {
  const { language, setLanguage } = useContext(LanguageContext);
  // redux
  // get value from global store reducer user
  // state = seluruh penyimpanan dari store
  const user = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();
  const keepLogin = async () => {
    try {
      const tokenData = localStorage.getItem('dataUser');
      // code
      // -check apakah ada data login pada localstorage
      // -jika ada, gunakan id user untuk mengambil data memalui API
      // setelah mendapatkan data user dari API, simpan lagi ke global store redux
      // -simpan juga ke localstorage
      if (tokenData) {
        // const res = await callAPI.get(`/users?id=${user.id}`);
        // get item from local storage init in sign in Page
        const res = await callAPI.get(`/users?id=${JSON.parse(tokenData)?.id}`);
        dispatch(setSignIn({ ...res.data[0], isAuth: true }));
        localStorage.setItem('dataUser', JSON.stringify(res.data[0]));
        dispatch(getPostList());
      } else {
        dispatch(setSignIn({ isAuth: false }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <nav className="w-full h-full p-5 md:px-20 flex justify-between items-center">
      <div className="left">
        <h1 className="text-5xl font-bold">P</h1>
      </div>
      <div className="flex justify-center items-end gap-4 h-full">
        <input type="text" placeholder="Search" className="w-36 border-2 rounded-full p-2" />
        <div className="flex items-center mb-1">
          <span className="uppercase text-xl">{language}</span>
          <select
            name="language"
            id="languageOption"
            className="p-2  "
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value="en">English (United State)</option>
            <option value="id">Bahasa Indonesia</option>
          </select>
        </div>

        <div className="flex justify-center items-center gap-2 h-full">
          {user.email ? (
            <p>{user.name}</p>
          ) : (
            <>
              <a href="/sign-up" className="py-2 px-3 border rounded-full bg-gray-300">
                Sign Up
              </a>
              <a href="/sign-in" className="py-2 px-3 border rounded-full bg-gray-700 text-white">
                Sign In
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
