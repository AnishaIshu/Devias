"use client"
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState }  from 'react'

const PagesNestedList  = ({pagesData} : {pagesData : any}) => {
    const [nested, setNested] = useState(false);
    const nestedData = () => {
        setNested(!nested) 
        console.log(nestedData ,  "ssssss")
    }
    
    return (
        <div>
            {nested &&
        
         <AnimatePresence>
         <motion.ul  
         initial={{ height: 0 }}
         animate={{ height: "auto" }}
         exit={{ height: 0 }}
         className="overflow-hidden">
     
           {pagesData?.map((elem: any, index: number) => {
               return(
                   <div key={index} >
               <div className="flex items-center pl-10 justify-between my-1 rippleButton hover:bg-[#303848] rounded-lg py-1">
               <h1 className="text-[#9ca3af] pl-8 py-1 text-[12px]  font-semibold text-left rounded-md cursor-pointer">{elem}</h1>
             </div> 
              </div> 
             )
            })}
         </motion.ul>
         
         </AnimatePresence>
}
       
    </div>
  )
}

export default PagesNestedList
