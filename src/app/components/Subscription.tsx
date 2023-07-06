import Image from 'next/image';
import React from 'react'

const Subscription = () => {
  return (
    <>
      <div className='md:w-[60%] h-[100%] mx-3 mt-10 py-10 bg-[#fff] rounded-3xl boxShadow md:px-7 px-4'>
        <div className='flex items-center justify-between '>
         <div>
            <h1 className='text-[18px] font-semibold text-slate-800'>
                Subscription Usage
            </h1>
            <p className='text-[15px] font-semibold text-slate-500'>Based on the selected period</p>
         </div>
         <div className='flex md:gap-5 gap-4 text-[15px] font-semibold text-slate-500'>
            <p className='border-b text-[#7375f3] border-b-[#888afd] cursor-pointer'>Year</p>
            <p className='cursor-pointer'>Month</p>
            <p className='cursor-pointer'>Week</p>
         </div>
      </div>

      <Image src="/images/subscriptions/subscription.png" width={1000} height={100} className='w-[100%] mt-10' alt="" />
      </div>
    </>
  )
}

export default Subscription;
