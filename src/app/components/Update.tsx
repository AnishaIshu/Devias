import Image from 'next/image'
import React from 'react'

const Update = () => {
  return (
    <>
    <div className='md:flex boxShadow md:flex-row flex-col items-center gap-10 md:w-[60%] mx-3 mt-5 py-10 px-10 rounded-3xl shadow-sm bg-[#e9ecfa]'>
        <div>
      <Image src="/images/update/personStanding.png" className='m-auto' width={200} height={100} alt="" /> 
        </div>
        <div>
            <h6 className='text-xs text-[#7173e8] font-semibold'>NEW V6 UPDATE</h6>
            <h1 className='font-semibold text-lg mt-5'>New update available!</h1>
            <p className='text-slate-700 py-3'>Your favorite template has a new trendy look, more customization options, screens & more.</p>
            <button className='bg-[#5d5fe7] flex items-center px-4 rounded-lg cursor-pointer hover:bg-[#4e51f6] gap-1'>
                <Image src="/images/update/updateIcon.svg" width={20} height={100} alt="" />
                <h1 className='text-white font-semibold text-sm py-2'>Open app Settings</h1>
            </button>
        </div>
    </div>
    </>
  )
}

export default Update
