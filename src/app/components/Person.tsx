'use client';
import Image from 'next/image';
import React, {useEffect, useState, Fragment} from 'react';
import { Menu, Transition } from '@headlessui/react';
import 'tailwindcss/tailwind.css';

export const Person = () => {
  // person
  const personContent = [
    {
      id: 1,
      img: '/images/navbar/profile/profilePerson.svg',
      title: 'Person',
    },
    {
      id: 2,
      img: '/images/navbar/profile/profileSetting.svg',
      title: 'Settings',
    },
    {
      id: 3,
      img: '/images/navbar/profile/profileBilling.svg',
      title: 'Billing',
    },
  ];

  const [profile, setProfile] = useState(false);
  const handleprofile = () => {
    setProfile(!profile);
  };

  return (
    <div>
      <div
        onClick={handleprofile}
        className="border-2 cursor-pointer border-zinc-200 p-[2px] rounded-full"
      >
        <Image
          src="/images/navbar/profile.png"
          width={30}
          height={30}
          alt=""
          className="rounded-full"
        />
      </div>


       
            <div  className={`bg-white shadow-md w-56 rounded-md absolute z-10 top-16 right-5 dropdownDiv ${profile ? "active" : ""}`}>
              <div className="py-3 px-5">
                <h1 className="font-medium text-lg text-zinc-700">
                  Anika Vissar
                </h1>
                <h1 className="leading-3 font-medium text-sm text-zinc-500"></h1>
              </div>
              <hr />

              {/* profile */}
              <div>
                  {personContent.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="py-2 px-2 flex items-center gap-4 cursor-pointer rounded-md my-1 mx-2 hover:bg-zinc-100"
                      >
                        <Image src={item.img} width={23} height={20} alt="" />
                        <h1 className="text-[16px] font-semibold text-zinc-600">
                          {item.title}
                        </h1>
                      </div>
                    );
                  })}
              </div>

              <hr />
              <div>
                <h1 className="text-sm font-bold m-auto mx-14 my-3 px-3 rounded-md py-2 cursor-pointer hover:bg-zinc-100 ">
                  Log Out
                </h1>
              </div>
            </div>
       </div>
  );
};
