import React from 'react'
import { SlCalender } from 'react-icons/sl';
import { VscArrowRight } from 'react-icons/vsc';

const UpcommingEvent = () => {

const UpcommingEvent = [
    {
        id: 1,
        date: "12",
        event: "Meeting with Partners",
        time: "17:00 to 18:00",
        icon :   <SlCalender />
    },
    {
        id: 2,
        date: "15",
        event: "Weekly Meeting",
        time: "17:00 to 18:00",
        icon :   <SlCalender />
    },
    {
        id: 3,
        date: "15",
        event: "Weekly Meeting",
        time: "17:00 to 18:00",
        icon :   <SlCalender />
    },
    {
        id: 4,
        date: "18",
        event: "Weekly Meeting",
        time: "17:00 to 18:00",
        icon :   <SlCalender />
    },
]
  return (
    <>
     <div className='bg-[#fff] mt-8 boxShadow mx-3 md:w-[45%] rounded-3xl'>
        <div className='pt-6'>
           <h1 className='text-[17px] font-bold text-slate-800 pl-8 pt-5'>Upcoming events</h1>
           <p className='text-[15px] font-medium text-slate-500 pl-8'>Based on the linked bank accounts</p>
        </div>

{UpcommingEvent.map((data, index) => {
    return (
<div key={index} className='flex items-center justify-between md:px-8 px-5 my-7'>
<div className='flex items-center gap-8'>
            <div className='bg-zinc-100 w-10 text-center rounded-2xl py-2'>
                <h1 className='text-[13px]'>JUL</h1>
                <h1 className='font-bold text-[16px]'>{data.date}</h1>
            </div>
            <div>
                <h1 className='text-[14px] font-semibold text-slate-600'>{data.event}</h1>
                <p className='text-[13px] font-medium text-slate-400'>{data.time}</p>
            </div>
            </div>

<div>
            {data.icon}
</div>
</div>
       
    )
})}



<hr />
<div className='px-3 py-2 text-[13px] font-semibold'>
            <div className='flex items-center justify-between rippleButtonDashboard hover:bg-zinc-100 py-2 w-24 px-4 rounded-lg cursor-pointer'>
          See all
          <VscArrowRight />
            </div>
          </div>
     </div> 



     
    </>
  )
}

export default UpcommingEvent
 