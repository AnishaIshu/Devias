import React from 'react'
import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineLink } from 'react-icons/ai';

const HelpCenter = () => {
  return (
    <>
        <div className='bg-[#fff] mx-3 mt-10 md:w-[55%] pt-3 rounded-3xl shadow-md'>
         <div className='flex items-center gap-3 py-3 px-10'>
          <BsInfoCircle className='text-[25px] text-[#6366F1] '/>
          <h1 className='text-[#6366F1] font-medium'>Help center</h1>
         </div>
          <h1 className='font-semibold text-lg py-1 md:px-10 px-5'>Need help figuring things out?</h1>
          <p className='text-sm pb-7 text-slate-500 md:pl-10 px-5 pr-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <hr />
          <div className='px-10 py-3 text-sm font-semibold'>
            <div className='flex items-center gap-3 hover:bg-zinc-100 py-2 w-36 px-3 rounded-xl cursor-pointer'>
             Help Center
          <AiOutlineLink className='text-xl'/>
            </div>
          </div>
      </div>
    </>
  )
}

export default HelpCenter
