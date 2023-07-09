'use client';

import React, {useEffect, useState, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import 'tailwindcss/tailwind.css';
import Image from 'next/image';
import { RxCross2 } from 'react-icons/rx';
import { LuMailOpen } from 'react-icons/lu';

export const Notification = () => {
  // notication
  const notifyContent = [
    {
      id: 1,
      img: '/images/navbar/notifyOne.png',
      textOne: 'Jie Yang Song added a new job',
      textAnchor: 'Remote React / React Native Developer',
      date: 'Jul 06, 8:01 AM',
      cross: <RxCross2 />,
    },
    {
      id: 2,
      img: '/images/navbar/notifyOne.png',
      textOne: 'Jie Yang Song added a new job',
      textAnchor: 'Senior Golang Backend Engineer',
      date: 'Jul 06, 8:01 AM',
      cross: <RxCross2 />,
    },
    {
      id: 3,
      img: '/images/navbar/notifyOne.png',
      textOne: 'New feature!',
      textTwo: 'Logistics management is now available',
      date: 'Jul 05, 10:01 AM',
      cross: <RxCross2 />,
    },
    {
      id: 4,
      img: '/images/navbar/notifyOne.png',
      textOne: 'Jie Yang Song created',
      textAnchor: 'Augmastic Inc',
      date: 'Jul 06, 8:01 AM',
      cross: <RxCross2 />,
    },
  ];

  const [notification, setNotification] = useState(false);
  const handleNotification = () => {
    setNotification(!notification);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        onClick={handleNotification}
        title="Notification"
        className="relative hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full"
      >
        <span className="bg-red-500 rounded-full text-white px-[6px] text-sm absolute bottom-6 left-6">
          2
        </span>
        <Image
          src="/images/navbar/notification.svg"
          width={30}
          height={30}
          alt=""
        />
      </Menu.Button>

      {notification ? (
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <div className="bg-white w-[18rem] sm:w-[23rem] shadow-md rounded-lg top-14 z-10 absolute right-0 mx-3">
              <div className="flex items-center justify-between py-4 px-4">
                <div className="text-lg font-semibold text-zinc-800">
                  Notifications
                </div>
                <div className="text-zinc-800 text-2xl">
                  <LuMailOpen />
                </div>
              </div>
              <Menu.Item>
                <>
                  {notifyContent.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex px-4 justify-between border-b py-2 cursor-pointer hover:bg-gray-100"
                      >
                        <div className="flex ">
                          <div>
                            <Image
                              src={item.img}
                              width={50}
                              height={50}
                              className="rounded-full"
                              alt=""
                            />
                          </div>
                          <div className="pl-5 text-[14px]">
                            <h1 className="text-zinc-600 font-semibold">
                              {item.textOne}
                            </h1>
                            <a href="#" className="text-[#676afe] underline">
                              {item.textAnchor}
                            </a>
                            <h1 className="text-zinc-600 font-medium">
                              {item.textTwo}
                            </h1>
                            <h6 className="text-zinc-500 font-medium text-[12px] py-1">
                              {item.date}
                            </h6>
                          </div>
                        </div>

                        <div>
                          <RxCross2
                            title="Remove"
                            className="text-xl text-zinc-600"
                          />
                        </div>
                      </div>
                    );
                  })}
                </>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      ) : (
        ''
      )}
    </Menu>
  );
};
