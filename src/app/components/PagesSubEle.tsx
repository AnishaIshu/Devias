"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import PagesNestedList from "./PagesNestedList";
import PagesNstedSubEle from "./PagesNstedSubEle";
const PagesSubEle: any = ({ pagesData }: { pagesData: any }) => {
  const [dropDown, setDropdown] = useState(false);
  const [dropDownIcon, setDropdownIcon] = useState(false);
  const dataList = () => {
    setDropdown(!dropDown);
    setDropdownIcon(!dropDownIcon);
  };

  return (
    <>
      <motion.nav className="my-2">
        <motion.div
          onClick={dataList}
          className="flex items-center justify-between py-2 rounded-md rippleButton hover:bg-[#303848] cursor-pointer"
        >
          <div className="flex gap-5">
            <Image
              src={pagesData.img}
              className="ml-3"
              width={21}
              height={25}
              alt=""
            />
            <div>
              <h1 className="text-[13px] text-[#9ca3af] font-semibold text-left">
                {pagesData.name}
              </h1>
            </div>
          </div>

          <motion.button className=" text-slate-500 mr-4">
            <motion.div>
              {pagesData.sub ? (
                <div>
                  {dropDownIcon ? (
                    <IoIosArrowDown />
                  ) : (
                    <div>{pagesData.icon}</div>
                  )}
                </div>
              ) : (
                ""
              )}
            </motion.div>
          </motion.button>
        </motion.div>

        <AnimatePresence>
          {dropDown && (
            <motion.ul
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              className="overflow-hidden"
            >
              {pagesData?.sub?.map((ele: any, index: number) => {
                console.log(ele, "ppp ele");
                return <PagesNstedSubEle key={index} pagesData={ele} />;
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default PagesSubEle;
