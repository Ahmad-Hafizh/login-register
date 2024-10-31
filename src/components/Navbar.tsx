'use client';
import { LanguageContext } from '@/context/LanguageContext';
import React, { useContext } from 'react';

interface INvavbarProps {}

const Navbar: React.FC<INvavbarProps> = (props) => {
  const { language, setLanguage } = useContext(LanguageContext);

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
          <a href="/sign-up" className="py-2 px-3 border rounded-full bg-gray-300">
            Sign Up
          </a>
          <a href="/sign-in" className="py-2 px-3 border rounded-full bg-gray-700 text-white">
            Sign In
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
