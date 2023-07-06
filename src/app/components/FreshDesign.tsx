import Image from 'next/image';
import React from 'react'

const FreshDesign = () => {
  return (
    <>
     <div className='bg-[#fff] boxShadow mt-5 rounded-3xl md:w-[45%] mx-3 py-8 px-7'>
       <Image src="/images/freshDesign/nextTip.svg" width={120} height={100} alt="" />
       <h1 className='mt-10 font-bold text-slate-800 py-1 text-lg'>New fresh design.</h1>
       <p className='text-slate-500'>Your favorite template has a new trendy look, more customization options, screens & more.</p>
    </div> 
    </>
  )
}

export default FreshDesign;
