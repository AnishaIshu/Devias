'use client';

import Image from 'next/image';
import { useState } from 'react';
import React from 'react';
import 'tailwindcss/tailwind.css';
import ClickAwayListener from 'react-click-away-listener';



export const Languages = () => {
  //  languages
  const languagesContent = [
    {
      id: 1,
      langName: 'English',
      img: '/images/navbar/flag/flagUk.svg',
    },
    {
      id: 2,
      langName: 'German',
      img: '/images/navbar/flag/flagGer.svg',
    },
    {
      id: 3,
      langName: 'Spanish',
      img: '/images/navbar/flag/flagSpanish.svg',
    },
  ];

  const [language, setLanguage] = useState(false);
  const handleLanguage = () => {
    setLanguage(!language);
  };

  return (
    <ClickAwayListener onClickAway={() => {
      setLanguage(false);
    }}>
      <div>
      <div
        onClick={handleLanguage}
        title="Language"
        className="hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full"
      >
        <Image
          src="/images/navbar/flag/flagUk.svg"
          title="Language"
          width={35}
          height={50}
          alt=""
        />
      </div>

   
      {/* language */}
          <div className={`bg-white shadow-md w-56 rounded-md absolute z-10 top-16 right-14 xl:right-[30rem] md:right-56 dropdownDiv ${language ? "active" : ""}`}>
            {languagesContent.map((item, index) => {
              return (
                <div key={index}>
                  <div className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div>
                      <Image src={item.img} width={30} height={35} alt="" />
                    </div>
                    <div className="font-semibold text-zinc-700 text-sm">
                      {item.langName}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
    </ClickAwayListener>
  );
};


