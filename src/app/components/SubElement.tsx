// "use client";

// import Image from "next/image";
// import React from "react";
// import { useState } from "react";
// import { IoIosArrowDown } from 'react-icons/io';

// const SubElement:any = ({ conceptData }: { conceptData: any }) => {
//   // conceptMap dropdown list
//   const [dropDown, setDropdown] = useState(false);
//   const [dropdownIcon, setDropdownIcon] = useState(false)
//   const dataDrop = () => {
//     setDropdown(!dropDown);
//     setDropdownIcon(!dropdownIcon);
//   };

  

//   console.log(conceptData?.sub);
//   return (
//     <>
 
//       <div onClick={dataDrop}>
//         <div className='flex items-center justify-between py-2 rounded-md hover:bg-[#303848] pr-2 cursor-pointer  my-2'>
//           <div className='flex gap-5'>
//             <Image
//               src={conceptData.img}
//               className='ml-3'
//               width={21}
//               height={25}
//               alt=''
//             />
//             <div>
//               <h1 className='text-[14px] text-[#9ca3af] font-bold text-left '>
//                 {conceptData.name}
//               </h1>
//             </div>
//           </div>
//            <div className='text-[#9ca3af]'>
//            {dropdownIcon ?  <IoIosArrowDown /> : <div>{conceptData.icon}</div>}
//            </div>
          
//         </div>

//         {conceptData?.sub?.map((ele: any, index: number) => {
//           return (
//             <div key={index}>
//        {dropDown?     
//        <h1 className='text-[13px] text-[#9ca3af] font-semibold text-left pl-16 py-2 rounded-md cursor-pointer hover:bg-[#303848]'>
//          {ele}
//        </h1>
//       : ""}     
//        </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default SubElement;




import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useAnimate, stagger, motion } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
const SubElement: any = ({ conceptData }: { conceptData: any }) => {
  // conceptMap dropdown list
  const [dropDown, setDropdown] = useState(false);
  const [dropdownIcon, setDropdownIcon] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dataDrop = () => {
    setDropdown(!dropDown);
    setDropdownIcon(!dropdownIcon);
  };

  function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
      if (isOpen) {
        animate("li", { opacity: 1, scale: 1, filter: "blur(0px)" }, {
          duration: 0.2,
          delay: staggerMenuItems
        });
      }
    }, [isOpen]);

    return scope;
  }

  console.log(conceptData?.sub);
  const scope = useMenuAnimation(isOpen);
  return (
    <>
      <div onClick={dataDrop} className="menu" ref={scope}>
        <motion.div
          className='flex items-center justify-between py-2 rounded-md hover:bg-[#303848] pr-2 cursor-pointer  my-2'
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='flex gap-5'>
            <Image
              src={conceptData.img}
              className='ml-3'
              width={21}
              height={25}
              alt=''
            />
            <div>
              <h1 className='text-[14px] text-[#9ca3af] font-bold text-left '>
                {conceptData.name}
              </h1>
            </div>
          </div>
          <div className='text-[#9ca3af]'>
            {dropdownIcon ? <IoIosArrowDown /> : <div className="arrow">{conceptData.icon}</div>}
          </div>
        </motion.div>

        <ul
          style={{
            pointerEvents: isOpen ? "auto" : "none",
            clipPath: "inset(10% 50% 90% 50% round 10px)",
          }}
        >
          {conceptData?.sub?.map((ele: any, index: number) => {
            return (
              <div key={index}>
                {dropDown ? (
                  <motion.li
                    className='text-[13px] text-[#9ca3af] font-semibold text-left pl-16 py-2 rounded-md cursor-pointer hover:bg-[#303848]'
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    delay={staggerMenuItems}
                  >
                    {ele}
                  </motion.li>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SubElement;
