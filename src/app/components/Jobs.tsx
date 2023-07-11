import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { VscArrowRight } from 'react-icons/vsc';

const Jobs = () => {
  return (
    <>
      <div className='bg-[#fff] mx-2 mt-10 md:w-[55%] pt-3 rounded-3xl boxShadow'>
         <div className='flex items-center gap-3 py-3 px-6'>
          <HiOutlineShoppingBag className='text-[20px] text-[#6366F1] '/>
          <h1 className='text-[#6366F1] text-[14px] font-semibold'>Jobs</h1>
         </div>
          <h1 className='font-bold text-[16px] py-1 px-7'>Find your dream job</h1>
          <p className='text-[13px] pb-7 text-slate-500 px-7 pr-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <hr />
          <div className='px-5 py-2 text-[13px] font-semibold'>
            <div className='flex items-center justify-between rippleButtonDashboard hover:bg-zinc-100 py-2 w-32 px-3 rounded-lg cursor-pointer'>
            Search Jobs 
          <VscArrowRight />
            </div>
          </div>
      </div>
    </>
  )
}

export default Jobs
