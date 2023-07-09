import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { VscArrowRight } from 'react-icons/vsc';

const Jobs = () => {
  return (
    <>
      <div className='bg-[#fff] mx-3 mt-10 md:w-[55%] pt-3 rounded-3xl boxShadow'>
         <div className='flex items-center gap-3 py-3 px-10'>
          <HiOutlineShoppingBag className='text-[25px] text-[#6366F1] '/>
          <h1 className='text-[#6366F1] font-medium'>Jobs</h1>
         </div>
          <h1 className='font-semibold text-lg py-1 md:px-10 px-5'>Find your dream job</h1>
          <p className='text-sm pb-7 text-slate-500 md:pl-10 px-6 pr-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <hr />
          <div className='px-10 py-3 text-sm font-semibold'>
            <div className='flex items-center gap-3 rippleButton hover:bg-zinc-100 py-2 w-40 px-6 rounded-xl cursor-pointer'>
            Search Jobs 
          <VscArrowRight />
            </div>
          </div>
      </div>
    </>
  )
}

export default Jobs
