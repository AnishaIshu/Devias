"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from 'react-icons/io';
import { motion,Variants } from "framer-motion";

const SubElement:any = ({ conceptData }: { conceptData: any }) => {
  // conceptMap dropdown list
  const [dropDown, setDropdown] = useState(false);
  const [dropdownIcon, setDropdownIcon] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const dataDrop = () => {
    setDropdown(!dropDown);
    setDropdownIcon(!dropdownIcon);
  };

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.8 } }
  };

  console.log(conceptData?.sub);
  return (
    <>
      <motion.nav onClick={dataDrop}  initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu">



            <motion.div whileTap={{ scale: 0.97 }}
onClick={() => setIsOpen(!isOpen)}>

       <motion.div className='flex items-center justify-between py-2 rounded-md rippleButton hover:bg-[#303848] pr-2 cursor-pointer  my-2'> 
       
          <div className='flex gap-5'>
            <Image
              src={conceptData.img}
              className='ml-3'
              width={21}
              height={25}
              alt=''
            />
              <h1 className='text-[14px] text-[#9ca3af] font-bold text-left '>
                {conceptData.name}
              </h1>
          </div>



           <motion.button className='text-[#9ca3af]' whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        >
           <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          style={{ originY: 0.55 }}
        >
           {dropdownIcon ?  <IoIosArrowDown /> : <div>{conceptData.icon}</div>}
        </motion.div>
           </motion.button>




           </motion.div>

        </motion.div>








         <motion.ul variants={{
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

        {conceptData?.sub?.map((ele: any, index: number) => {
          return (
            <div key={index}>
       {dropDown?     
       <motion.li variants={itemVariants} className='text-[13px] text-[#9ca3af] font-semibold text-left pl-16 py-2 rounded-md cursor-pointer hover:bg-[#303848]'>
         {ele}
       </motion.li>
      : ""}     
       </div>
          );
        })}
          </motion.ul>
      </motion.nav>
    </>
  );
};

export default SubElement;




