"use client"

import Image from 'next/image'
import React from 'react'


const Update = () => {
  return (
    
    <>
    <div className='md:flex boxShadow md:flex-row flex-col items-center gap-5 md:w-[65%] mx-1 mt-5 py-5 px-5 rounded-3xl shadow-sm bg-[#f2f4ff]'>
        <div>
      
      <Image src="/images/update/personStanding.png" className='m-auto mr-5' width={180} height={100} alt="" /> 
        </div>
        <div>
            <h6 className='text-[12px] text-[#6a6df8] font-semibold'>NEW V6 UPDATE</h6>
            <h1 className='font-bold text-[17px] text-slate-800 mt-5'>New update available!</h1>
            <p className='text-slate-600 py-3 text-[15px] font-medium'>Your favorite template has a new trendy look, more customization options, screens & more.</p>
            <button className='bg-[#5d5fe7] rippleButtonBlueBtn flex items-center px-4 rounded-lg cursor-pointer rippleButton hover:bg-[#4e51f6] gap-1'>
                <Image src="/images/update/updateIcon.svg" width={20} height={100} alt="" />
                <h1 className='text-white font-semibold text-sm py-2'>Open app Settings</h1>
            </button>
        </div>
    </div>
    </>
  )
}

export default Update
