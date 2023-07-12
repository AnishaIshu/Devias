import Image from 'next/image'
import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";


const MusicSubElement:any = ({ musicData }: { musicData: any}) => {
 
    const [levelDropDown, setLevelDropDown] = useState(false);
    const [dropDownIcon, setDropdownIcon] = useState(false)
    const levelData = () => {
        setLevelDropDown(!levelDropDown);
        setDropdownIcon(!dropDownIcon)
    }

  return (
<motion.nav className='my-2'>

 <motion.div  onClick={levelData} className='flex items-center justify-between py-2 rounded-md rippleButton hover:bg-[#303848] pr-2 cursor-pointer'> 
 
    <div className='flex gap-5'>
      <Image
        src={musicData.img}
        className='ml-3'
        width={21}
        height={25}
        alt=''
      />
        <h1 className='text-[13px] text-[#9ca3af] font-bold text-left '>
          {musicData.name}
        </h1>
    </div>

     <motion.button className='text-slate-500'>
     <motion.div>
     {musicData.sub ? <div>{dropDownIcon ? <IoIosArrowDown/> : <div>{musicData.icon}</div>}</div> : ''}
  </motion.div>
     </motion.button>
     </motion.div> 



    <AnimatePresence>
      {levelDropDown &&  (
    <motion.ul  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden">
    {musicData?.sub?.map((ele: any, index: number) => {
                return(
                    <div key={index}>  
                        <li className="flex items-center justify-between px-6 my-1 rippleButton hover:bg-[#303848] rounded-lg py-1 cursor-pointer">
                    <h1 className="text-[#9ca3af] py-1 pl-8 text-[12px]  font-semibold text-left rounded-md cursor-pointer">{ele}</h1>
                    <div className='text-[#9ca3af]'>
                    </div>
                 </li>
                  </div>
                )
               })} 
    </motion.ul>
      )

}
</AnimatePresence>   

     
    </motion.nav>
  )
}

export default MusicSubElement
