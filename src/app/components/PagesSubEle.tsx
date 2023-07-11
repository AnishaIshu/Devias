"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion,Variants } from "framer-motion";
const PagesSubEle: any = ({ pagesData }: { pagesData: any }) => {
    const [dropDown, setDropdown] = useState(false);
    const [dropDownIcon, setDropdownIcon] = useState(false)
     const [isOpen, setIsOpen] = useState(false);
    const dataList = () => {
    setDropdown(!dropDown);
    setDropdownIcon(!dropDownIcon)
  };
  const [nested, setNested] = useState(false);
  const nestedData = () => {
     setNested(!nested) 
  }
   const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.8 } }
  };
  console.log(pagesData?.sub);

  return (
    <>

    <motion.nav initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu">


            <motion.div whileTap={{ scale: 0.97 }}
onClick={() => setIsOpen(!isOpen)}>

      <motion.div
        onClick={dataList}
        className='flex items-center justify-between py-2 rounded-md rippleButton hover:bg-[#303848] pr-2 cursor-pointer my-2'
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



        <motion.button className=' text-[#9ca3af] mr-4' whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}>
              <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
           {pagesData.sub ? <div>{dropDownIcon ? <IoIosArrowDown/> : <div>{pagesData.icon}</div>}</div> : ''}
           </motion.div>
        </motion.button>
</motion.div>

</motion.div>



<motion.ul  variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05
                }
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3
                }
              }
            }}
            style={{ pointerEvents: isOpen ? "auto" : "none" }} >
{pagesData?.sub?.map((ele: any, index: number) => {
    return (
<div key={index}>
{dropDown &&
<motion.li variants={itemVariants} onClick={nestedData} className="flex items-center justify-between my-1 px-3 rippleButton hover:bg-[#303848] rounded-lg py-1  cursor-pointer">
    <h1 className="text-[#9ca3af] pl-8 py-2 text-[13px]  font-semibold text-left rounded-md ">{ele.authName}</h1>
     <div className="text-[#9ca3af] ">
     {dropDownIcon ? <div>{ele.arrow}</div> : <IoIosArrowDown /> }   
     </div>
</motion.li>
    }
   {nested? <NestedPageEle  key={index} pagesData = {ele?.sub}/> :''} 
</div>
    )
})}
</motion.ul>

</motion.nav>
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
          <div className="flex items-center pl-10 justify-between my-1 rippleButton hover:bg-[#303848] rounded-lg py-1">
          <h1 className="text-[#9ca3af] pl-8 py-1 text-[13px]  font-semibold text-left rounded-md cursor-pointer">{elem}</h1>
        </div> 
         </div> 
        )
      })}
    </div>
  )
}

