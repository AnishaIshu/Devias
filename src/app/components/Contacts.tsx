'use client';
import React, {useEffect, useState } from 'react';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export const Contacts = () => {
  // contacts
  const contactContent = [
    {
      id: 1,
      img: '/images/navbar/contacts/personOne.png',
      name: 'Alcides Antonio',
      bgColor: 'bg-green-700',
    },
    {
      id: 2,
      img: '/images/navbar/contacts/personeTwo.png',
      name: 'Marcus Finn',
      time: '2h ago',
    },
    {
      id: 3,
      img: '/images/navbar/contacts/personeThree.png',
      name: 'Carson Darrin',
      time: '2h ago',
    },
    {
      id: 4,
      img: '/images/navbar/contacts/personeFour.png',
      name: 'Fran Perez',
      bgColor: 'bg-green-700',
    },
    {
      id: 5,
      img: '/images/navbar/contacts/personeFive.png',
      name: 'Jie Yan Song',
      bgColor: 'bg-green-700',
    },
  ];

  const [contact, setContact] = useState(false);
  const handleContact = () => {
    setContact(!contact);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button
        onClick={handleContact}
        title="Contacts"
        className="hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full"
      >
        <Image
          src="/images/navbar/contacts.svg"
          width={30}
          height={30}
          alt=""
        />
      </Menu.Button>

      {contact ? (
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
            <div className="bg-white boxShadow w-[18rem] lg:w-[20rem] py-4 rounded-md absolute right-0 top-14 z-10">
              <h1 className="font-semibold text-lg pb-6 text-zinc-800 px-5">
                Contacts
              </h1>

              <Menu.Item>
                <>
                  {contactContent.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between py-2 hover:bg-gray-100 cursor-pointer px-5"
                      >
                        <div className="flex items-center gap-5">
                          <div>
                            <Image
                              src={item.img}
                              width={40}
                              height={50}
                              alt=""
                              className="rounded-full"
                            />
                          </div>
                          <h1 className="text-sm font-medium text-zinc-700">
                            {item.name}
                          </h1>
                        </div>

                        <div>
                          <div
                            className={`${item.bgColor} rounded-full w-1 p-[6px]`}
                          ></div>
                          <h1 className="font-semibold text-xs text-zinc-500 ">
                            {item.time}
                          </h1>
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
