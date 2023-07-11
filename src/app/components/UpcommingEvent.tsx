import React from 'react'
import { SlCalender } from 'react-icons/sl';
import { GoArrowRight } from 'react-icons/go';

const UpcommingEvent = () => {

const UpcommingEvent = [
    {
        id: 1,
        date: "5",
        event: "Meeting with Partners",
        time: "17:00 to 18:00",
        icon :   <SlCalender />
    },
    {
        id: 2,
        date: "8",
        event: "Weekly Meeting",
        time: "17:00 to 18:00",
        icon :   <SlCalender />
    },
    {
        id: 3,
        date: "8",
        event: "Weekly Meeting",
        time: "17:00 to 18:00",
        icon :   <SlCalender />
    },
    {
        id: 4,
        date: "11",
        event: "Weekly Meeting",
        time: "17:00 to 18:00",
        icon :   <SlCalender />
    },
]


  return (
    <>
     <div className='bg-[#fff] mt-8 boxShadow mx-3 md:w-[45%] rounded-3xl'>
        <div className='pt-6'>
           <h1 className='text-[18px] font-semibold text-slate-800 pl-8 pt-5'>Upcoming events</h1>
           <p className='text-[15px] font-medium text-slate-500 pl-8'>Based on the linked bank accounts</p>
        </div>

{UpcommingEvent.map((data, index) => {
    return (
<div key={index} className='flex items-center justify-between md:px-8 px-5 my-7'>
<div className='flex items-center gap-8'>
            <div className='bg-zinc-100 w-10 text-center rounded-2xl py-2'>
                <h1 className='text-sm'>JUL</h1>
                <h1 className='font-semibold text-xl'>{data.date}</h1>
            </div>
            <div>
                <h1 className='text-[15px] font-semibold text-slate-700'>{data.event}</h1>
                <p className='text-[14px] font-medium text-slate-500'>{data.time}</p>
            </div>
            </div>

<div>
            {data.icon}
</div>
</div>
       
    )
})}



<hr />
           
<div className='flex items-center gap-3 mt-3 ml-10 mb-5 hover:bg-zinc-100 w-24 rounded-lg rippleButtonDashboard cursor-pointer px-2 py-2'>See all <GoArrowRight /></div>
     </div> 
    </>
  )
}

export default UpcommingEvent
 