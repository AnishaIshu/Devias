import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { motion,Variants } from "framer-motion";


const MusicSubElement:any = ({ musicData }: { musicData: any}) => {
 
    const [levelDropDown, setLevelDropDown] = useState(false);
    const [dropDownIcon, setDropdownIcon] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const levelData = () => {
        setLevelDropDown(!levelDropDown);
        setDropdownIcon(!dropDownIcon)
    }

    const [nestedList, setNestedList] = useState(false)
    const handleList = () => {
      setNestedList(!nestedList);
    }

    const itemVariants: Variants = {
      open: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 24 }
      },
      closed: { opacity: 0, y: 20, transition: { duration: 0.8 } }
    };

  return (
<motion.nav onClick={levelData}  initial={false}
animate={isOpen ? "open" : "closed"}
className="menu">



      <motion.div whileTap={{ scale: 0.97 }}
onClick={() => setIsOpen(!isOpen)}>

 <motion.div className='flex items-center justify-between py-2 rounded-md hover:bg-[#303848] pr-2 cursor-pointer  my-2'> 
 
    <div className='flex gap-5'>
      <Image
        src={musicData.img}
        className='ml-3'
        width={21}
        height={25}
        alt=''
      />
        <h1 className='text-[14px] text-[#9ca3af] font-bold text-left '>
          {musicData.name}
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
     {dropDownIcon ?  <IoIosArrowDown /> : <div>{musicData.icon}</div>}
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

{musicData?.sub?.map((ele: any, index: number) => {
            return(
                <div key={index}>
                   {levelDropDown ?    
                    <motion.li variants={itemVariants} className="flex items-center justify-between px-6 my-1 hover:bg-[#303848] rounded-lg py-1 cursor-pointer">
                <h1 className="text-[#9ca3af] py-1 pl-8 text-[13px]  font-semibold text-left rounded-md cursor-pointer">{ele.levelName}</h1>
                <div onClick={handleList} className='text-[#9ca3af]'>
                </div>
             </motion.li> : ""}
              </div>
            )
           })} 
</motion.ul>
        
     
    </motion.nav>
  )
}

export default MusicSubElement
