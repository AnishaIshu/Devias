"use client"
import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { VscArrowRight } from 'react-icons/vsc';



const Overview = () => {
  const overviewData = [
    {
      id: 1,
      img: "/images/overview/overOne.png",
      h1 : "Done Tasks",
      h2 : "See all tasks",
      h6 : "31"
    },
    {
      id: 2,
      img: "/images/overview/overTwo.png",
      h1 : "Panding Issues",
      h2 : "See all issues",
      h6 : "12"
    },
    {
      id: 3,
      img: "/images/overview/overThree.png",
      h1 : "Open Tickets",
      h2 : "See all tickets",
      h6 : "5"
    },
  ]

  return (
    <>
      <div className="flex justify-between items-center mx-3 mt-28 ">
        <div className='text-[25px] md:text-[33px] font-bold text-[#292c33]'>
          Overview
        </div>
        {/* 6366F1 */}
        <div className='bg-[#5d5fe7]  rippleButtonBlueBtn flex items-center gap-1 px-4 py-2 rounded-lg cursor-pointer hover:bg-[#4e51f6]'>
          <div><AiOutlinePlus className="text-[#ffff]"/></div>
          <div className="system text-white text-[14px] font-semibold">New Dashboard</div>
        </div>
      </div>

<div className="md:flex md:flex-row flex-col items-center justify-between mx-5">
{overviewData.map((item, index) => {

  return (
<div key={index} className="boxShadow bg-white w-full md:w-[32%] pt-8 rounded-xl my-5">
        <div className="flex items-start pl-10 gap-5">
      
        <Image src={item.img} width={50} height={30} alt="" />
       
        <div>
          <h6 className="text-[13.5px] text-[#8e95a0] font-medium">{item.h1}</h6>
          <h1 className="text-4xl font-bold pb-7">{item.h6}</h1>
        </div>
        </div>
        
        <hr />
        <div className='px-5 py-2 text-[13px] font-semibold'>
            <div className='flex items-center justify-between rippleButtonDashboard hover:bg-zinc-100 py-2 w-32 px-3 rounded-lg cursor-pointer'>
          {item.h2}
          <VscArrowRight />
            </div>
          </div>



      </div>
  )
})}

</div>

      
    </>
  );
};

export default Overview;
