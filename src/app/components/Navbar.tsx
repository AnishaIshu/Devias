import Image from "next/image";
import React from "react";

// icon
import { RiSearchLine } from "react-icons/ri";
import { LuBell } from "react-icons/lu";

const Navbar = () => {
  return (
    <>
      <div className='flex justify-between w-[100%] px-7 mt-5'>
        <div
          title='Search'
          className=' hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full'
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
    </>
  );
};

export default Navbar;
