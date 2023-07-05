import Image from "next/image";
import React from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdArrowForward } from 'react-icons/io';

const Overview = () => {
  const overviewData = [
    {
      id: 1,
      img: "/images/overview/overOne.svg",
      h1 : "Done Tasks",
      h2 : "See all tasks",
      h6 : "31"
    },
    {
      id: 2,
      img: "/images/overview/overTwo.svg",
      h1 : "Panding Issues",
      h2 : "See all issues",
      h6 : "12"
    },
    {
      id: 3,
      img: "/images/overview/overThree.svg",
      h1 : "Open Tickets",
      h2 : "See all tickets",
      h6 : "5"
    },
  ]

  return (
    <>
      <div className="flex justify-between items-center mx-3 mt-16">
        <div className='text-[28px] md:text-[35px] font-[600] Jakarta text-[#181e28]'>
          Overview
        </div>

        <div className='bg-[#6366F1] flex items-center gap-1 px-2 py-2 rounded-lg cursor-pointer hover:bg-[#3b3de2]'>
          <div><AiOutlinePlus className="text-[#ffff]"/></div>
          <div className="system text-white font-bold">New Dashboard</div>
        </div>
      </div>

<div className="md:flex md:flex-row flex-col items-center justify-between mx-5">
{overviewData.map((item, index) => {

  console.log(Image, "kjdfhjfk")
  return (
<div key={index} className=" shadow-md bg-white w-full md:w-[32%] pt-8 rounded-xl my-5">
        <div className="flex items-start pl-10 gap-5">
        <Image src={item.img} className='m-auto' width={50} height={50} alt="" /> 

        <div>
          <h6 className="text-[14px] text-[#6C737F] font-medium">{item.h1}</h6>
          <h1 className="text-4xl Jakarta font-bold pb-7">{item.h6}</h1>
        </div>
        </div>
        
        <hr />
        <div className="flex items-center py-3 pl-10">
        <h2 className="text-[#111927] text-sm font-semibold">{item.h2}</h2>
        <IoMdArrowForward className="text-[#111927] text-xl"/>
        </div>
      </div>
  )
})}

</div>

      
    </>
  );
};

export default Overview;
