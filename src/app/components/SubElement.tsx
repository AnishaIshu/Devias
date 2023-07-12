"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const SubElement: any = ({ conceptData }: { conceptData: any }) => {
  // conceptMap dropdown list
  const [dropDown, setDropdown] = useState(false);
  const [dropdownIcon, setDropdownIcon] = useState(false);
  const dataDrop = () => {
    setDropdown(!dropDown);
    setDropdownIcon(!dropdownIcon);
  };

  // console.log(conceptData?.sub);
  // console.log(conceptData)
  return (
    <>
      <motion.nav className="my-2">
        <motion.div onClick={dataDrop}>


          <motion.div className='flex items-center justify-between py-2 rounded-md rippleButton hover:bg-[#303848] pr-2 cursor-pointer'>
            <div className='flex gap-5'>
              <Image
                src={conceptData.img}
                className='ml-3'
                width={20}
                height={22}
                alt=''
              />
              <h1 className='text-[13px] text-[#9ca3af] font-bold text-left '>
                {conceptData.name}
              </h1>
            </div>
            <motion.button className='text-slate-500'>
              <motion.div>
                {conceptData.sub ? (
                  <div>
                    {dropdownIcon ? (
                      <IoIosArrowDown />
                    ) : (
                      <div>{conceptData.icon}</div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </motion.div>
            </motion.button>
          </motion.div>

        </motion.div>



        <AnimatePresence>
          {dropDown && 
          (
          <motion.ul
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
          <div>
              {conceptData?.sub?.map((ele: any, index: number) => {
                return (
                  <div key={index}>
                    <li className='text-[12px] text-[#9ca3af] font-semibold rippleButton text-left pl-16 py-2 rounded-md cursor-pointer hover:bg-[#303848]'>
                      {ele}
                    </li>
                  </div>
                );
              })}
          </div>
            </motion.ul>
          )
          
          }
        </AnimatePresence>

      </motion.nav>
    </>
  );
};

export default SubElement;
