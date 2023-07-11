'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ClickAwayListener from 'react-click-away-listener';

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

<ClickAwayListener onClickAway={() => {
      setContact(false);
    }}>

<div>
      <div
        onClick={handleContact}
        title="Contacts"
        className="hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full"
      >
        <Image
          src="/images/navbar/contacts.svg"
          width={25}
          height={30}
          alt=""
        />
      </div>

   
            <div className={`bg-white shadow-md w-72 rounded-md absolute z-10 top-16 lg:right-10 right-3 xl:right-[24rem] dropdownDiv ${contact ? "active" : ""}`}>
              <h1 className="font-semibold text-lg pb-6 text-zinc-800 px-5">
                Contacts
              </h1>

              <div>
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
              </div>
            </div>
   
            </div>
            </ClickAwayListener>

  );
};
