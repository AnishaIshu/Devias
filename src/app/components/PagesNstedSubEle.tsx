"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import PagesNestedList from "./PagesNestedList";
const PagesNstedSubEle: any = ({ pagesData }: { pagesData: any }) => {
  const [dropDown, setDropdown] = useState(false);
  const [dropDownIcon, setDropdownIcon] = useState(false);
  const dataList = () => {
    setDropdown(!dropDown);
    setDropdownIcon(!dropDownIcon);
  };

  return (
    <div className="my-2">
      <div onClick={dataList}>
        <li className="flex items-center justify-between my-1 px-3 rippleButton hover:bg-[#303848] rounded-lg py-1  cursor-pointer">
          <h1 className="text-[#9ca3af] pl-8 py-2 text-[12px]  font-semibold text-left rounded-md ">
            {pagesData.authName}
          </h1>
          <div className="text-slate-600 ">
            {dropDownIcon ? <div>{pagesData.arrow}</div> : <IoIosArrowDown />}
          </div>
        </li>
      </div>
      <motion.nav className="">
        <AnimatePresence>
          {dropDown && (
            <motion.ul
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden pl-5"
            >
              {pagesData?.sub?.map((ele: any, index: number) => {
                console.log(ele, "ppp ele");
                return (
                  <div key={index}>
                    <li className="flex items-center justify-between my-1 px-3 rippleButton hover:bg-[#303848] rounded-lg py-1  cursor-pointer">
                      <h1 className="text-[#9ca3af] pl-8 py-2 text-[12px]  font-semibold text-left rounded-md ">
                        {ele}
                      </h1>
                    </li>
                  </div>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};

export default PagesNstedSubEle;
