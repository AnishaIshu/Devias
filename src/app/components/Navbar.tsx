"use client"
import Image from "next/image";
import React, { useState } from "react";

// icon
import { RiSearchLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from 'react-icons/rx';
import { PiLightbulbFilamentBold } from 'react-icons/pi';

const Navbar = () => {
  const [search, setSearch] = useState(false)
   const handleSearch = () => {
    setSearch(true);
    console.log(search, "fjfbbb")
   }
  return (
    <>
      <div className='flex justify-between w-[100%] px-7 mt-5'>
        <div onClick={handleSearch}
          title='Search'
          className=' hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full '
        >
          <RiSearchLine className='text-2xl text-zinc-500 cursor-pointer ml-14 xl:ml-0' />
        </div>

        <div className='flex items-center md:gap-7 gap-1'>
          <div
            title='Language'
            className='hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full'
          >
            <Image
              src='/images/navbar/flagUk.svg'
              title='Language'
              width={50}
              height={50}
              alt=''
            />
          </div>

          <div
            title='Notification'
            className='relative hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full'
          >
            <span className='bg-red-500 rounded-full text-white px-[6px] text-sm absolute bottom-6 left-6'>
              2
            </span>
            <Image
              src='/images/navbar/notification.svg'
              width={30}
              height={30}
              alt=''
            />
          </div>

          <div
            title='Contacts'
            className='hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full'
          >
            <Image
              src='/images/navbar/contacts.svg'
              width={30}
              height={30}
              alt=''
            />
          </div>

          <div className='border-2 cursor-pointer border-zinc-200 p-[2px] rounded-full'>
            <Image
              src='/images/navbar/profile.png'
              width={30}
              height={30}
              alt=''
              className='rounded-full'
            />
          </div>
        </div>
      </div>



{search?   <div className="py-5 shadow-md border-t-zinc-400 rounded-xl px-2 sm:px-5 lg:w-[40%] xl:w-[30%]  mx-2 absolute top-[30%] sm:left-[20%] md:left-[27%] lg:left-[40%] xl:top-[30%] z-50  bg-white">
        <div className="flex items-center justify-between mb-10 text-zinc-900">
        <div className="font-semibold text-lg">Search</div>
        <div onClick={() => setSearch(false)} className="text-xl cursor-pointer"><RxCross2 /></div>
      </div>

      <div className="flex items-center gap-3 text-zinc-600 bg-gray-200 py-2 px-3 rounded-md cursor-pointer">
        <div className="text-2xl"><PiLightbulbFilamentBold /></div>
        <h1 className="text-sm"><strong>Tip.</strong>Search by entering a keyword and pressing Enter</h1>
      </div>


    <div className="border-2 border-gray-300 px-3 rounded-md mt-5 py-2 hover:border-[#676afe] cursor-pointer">
      <h1 className="text-sm text-zinc-500 font-semibold hover:text-[#676afe]">search</h1>
      <div className="flex items-center gap-3">
        <FiSearch className="text-2xl text-zinc-500"/>
      <input type="text" className=" focus:outline-none text-base font-semibold text-zinc-700" placeholder="Search..."/>
      </div>
    </div>
  </div> : ''}
    
    </>
  );
};

export default Navbar;
