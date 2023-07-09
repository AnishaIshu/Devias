'use client';

import Image from 'next/image';
import { useState, Fragment, useEffect } from 'react';
import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import 'tailwindcss/tailwind.css';



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
    <Menu>
      <Menu.Button
        onClick={handleLanguage}
        title="Language"
        className="hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full"
      >
        <Image
          src="/images/navbar/flag/flagUk.svg"
          title="Language"
          width={50}
          height={50}
          alt=""
        />
      </Menu.Button>

      {language ? (
        <Transition
          as={Fragment}
          enter="transition ease-out duration-500"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="bg-white shadow-md w-56 rounded-md absolute z-10 top-16 right-14 xl:right-60 md:right-56">
            {languagesContent.map((item, index) => {
              return (
                <Menu.Item key={index}>
                  <div className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <div>
                      <Image src={item.img} width={30} height={35} alt="" />
                    </div>
                    <div className="font-semibold text-zinc-700 text-sm">
                      {item.langName}
                    </div>
                  </div>
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      ) : (
        ''
      )}
    </Menu>
  );
};
