'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';



// icon
import { RiSearchLine } from 'react-icons/ri';
import { FiSearch } from 'react-icons/fi';
import { RxCross2 } from 'react-icons/rx';
import { PiLightbulbFilamentBold } from 'react-icons/pi';
import { Notification } from './Notification';
import { Languages } from './Languages';
import { Contacts } from './Contacts';
import { Person } from './Person';

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(true);
  };

  return (
    <>
      <div className=" w-[100%] px-7 pt-5 pb-5 bg-neutral-100 lg:bg-neutral-50 z-20 fixed lg:flex lg:justify-between">
<div className=' flex justify-between w-[100%] xl:mr-72 mr-5'>
        <div
          onClick={handleSearch}
          title="Search"
          className=" hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full "
        >
          <RiSearchLine className="text-2xl text-zinc-500 cursor-pointer ml-14 xl:ml-0" />
        </div>

        <div className="flex items-center md:gap-3 gap-1">
          <Languages/>

          <Notification/>

          <Contacts/>

          <Person/>
        </div>
        </div>
      </div>

      {/* search */}


      {search ? (
        

        <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center searchRepo"
        >

<ClickAwayListener onClickAway={() => {
        setSearch(false);
      }}>

              <div className="py-5 shadow-md border-t-zinc-400 rounded-xl px-2 sm:px-5 xl:w-[35%] 2xl:w-[30%] mx-2 top-[30%] sm:left-[20%] md:left-[20%] lg:left-[28%] xl:left-[42%] z-50  bg-white">
            <div className="flex items-center justify-between mb-10 text-zinc-900">
              <div className="font-semibold text-lg">Search</div>
              <div
                onClick={() => setSearch(false)}
                className="text-xl cursor-pointer"
              >
                <RxCross2 />
              </div>
            </div>

            <div className="flex items-center gap-3 text-zinc-600 bg-gray-200 py-2 px-3 rounded-md cursor-pointer">
              <div className="text-2xl">
                <PiLightbulbFilamentBold />
              </div>
              <h1 className="text-sm">
                <strong>Tip.</strong>Search by entering a keyword and pressing
                Enter
              </h1>
            </div>

            <div className="border-2 border-gray-300 px-3 rounded-md mt-5 py-2 hover:border-[#676afe] cursor-pointer">
              <h1 className="text-sm text-zinc-500 font-semibold hover:text-[#676afe]">
                search
              </h1>
              <div className="flex items-center gap-3">
                <FiSearch className="text-2xl text-zinc-500" />
                <input
                  type="text"
                  className=" focus:outline-none text-base font-semibold text-zinc-700"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>



</ClickAwayListener>
        </div>

      ) 
      
      : (
        ''
      )}


    </>
  );
};

export default Navbar;
