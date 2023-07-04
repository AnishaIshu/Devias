"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";


const PagesSubEle: any = ({ pagesData }: { pagesData: any }) => {
    const [dropDown, setDropdown] = useState(false);
    const dataList = () => {
    setDropdown(!dropDown);
    console.log(dropDown);
  };
  console.log(pagesData?.sub);

  return (
    <>
    <div>
   
      <div
        onClick={dataList}
        className='flex items-center justify-between py-2 rounded-md pr-2 cursor-pointer my-2'
      >
        <div className='flex gap-5'>
          <Image
            src={pagesData.img}
            className='ml-3'
            width={21}
            height={25}
            alt=''
          />
          <div>
            <h1 className='text-[14px] text-[#9ca3af] font-semibold text-left'>
              {pagesData.name}
            </h1>
          </div>
        </div>
        <div className=' text-[#9ca3af] mr-4'>{pagesData.icon}</div>
</div>
{pagesData?.sub?.map((ele: any, index: number) => {
    return (
<>
{dropDown &&
<div key={index} className="flex items-center justify-between my-1">
    <h1 className="text-[#9ca3af] pl-8 py-2 text-[13px]  font-semibold text-left rounded-md cursor-pointer ">{ele.authName}</h1>
     <div className="text-[#9ca3af]">
        {ele.arrow}
     </div>
</div>
    }
</>
    )
})}

      
      </div>


    
    </>
  );
};

// nested dropdown

// const [nested, setNested] = useState(false);
// const handleNestList = () => {
//         setNested(!nested);
//         console.log(nested);
//     }

//     return (
//         <div>
            
//         </div>
//     )

export default PagesSubEle;
