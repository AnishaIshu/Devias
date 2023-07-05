"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";


const PagesSubEle: any = ({ pagesData }: { pagesData: any }) => {
    const [dropDown, setDropdown] = useState(false);
    const [dropDownIcon, setDropdownIcon] = useState(false)
    const dataList = () => {
    setDropdown(!dropDown);
    setDropdownIcon(!dropDownIcon)
  };



  const [nested, setNested] = useState(false);
  const nestedData = () => {
     setNested(!nested) 
  }


  console.log(pagesData?.sub);

  return (
    <>
    <div>
   
      <div
        onClick={dataList}
        className='flex items-center justify-between py-2 rounded-md hover:bg-[#303848] pr-2 cursor-pointer my-2'
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
        <div className=' text-[#9ca3af] mr-4'>
           {dropDownIcon ?  <IoIosArrowDown /> : <div>{pagesData.icon}</div>}
        </div>
</div>
{pagesData?.sub?.map((ele: any, index: number) => {
    return (
<div key={index}>
{dropDown &&
<div onClick={nestedData} className="flex items-center justify-between my-1 px-3 hover:bg-[#303848] rounded-lg py-1  cursor-pointer">
    <h1 className="text-[#9ca3af] pl-8 py-2 text-[13px]  font-semibold text-left rounded-md ">{ele.authName}</h1>
     <div className="text-[#9ca3af] ">
     {dropDownIcon ? <div>{ele.arrow}</div> : <IoIosArrowDown /> }   
     </div>

</div>
    }
   {nested? <NestedPageEle  key={index} pagesData = {ele?.sub}/> :''} 
</div>
    )
})}
</div>
    </>
  );
};
export default PagesSubEle;

// nested dropdown

export  function NestedPageEle({pagesData}:any) {
     
  return (
    <div>

      {pagesData?.map((elem: any, index: number) => {
        return(
          <div key={index} >
          <div className="flex items-center pl-10 justify-between my-1 hover:bg-[#303848] rounded-lg py-1">
          <h1 className="text-[#9ca3af] pl-8 py-1 text-[13px]  font-semibold text-left rounded-md cursor-pointer">{elem}</h1>
        </div> 
         </div> 
        )
      })}
    </div>
  )
}

