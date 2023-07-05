import Image from 'next/image'
import React, { useState } from 'react'

const MusicSubElement:any = ({ musicData }: { musicData: any}) => {
 
    const [levelDropDown, setLevelDropDown] = useState(false);
    const levelData = () => {
        setLevelDropDown(!levelDropDown);
    }

    const [nestedList, setNestedList] = useState(false)
    const handleList = () => {
      setNestedList(!nestedList);
    }

  return (
    <div>
        <div onClick={levelData} className='flex justify-between items-center py-2 rounded-md hover:bg-[#303848] pr-2 cursor-pointer  my-2'
        >
          <div className='flex gap-5'>
            <Image
              src={musicData.img}
              className='ml-3'
              width={21}
              height={25}
              alt=''
            />
            <div>
              <h1 className='text-[14px] text-[#9ca3af] font-semibold text-left'>
                {musicData.name}
              </h1>
            </div>
          </div>
          <div
            className={`text-white ${musicData.nColor} text-[13px] rounded-full ml-20 font-semibold px-2 py-[2px]`}
          >
            {musicData.nName}
          </div>
             <div className=' text-[#9ca3af] mr-4'>{musicData.icon}</div>
           </div>

           {musicData?.sub?.map((ele: any, index: number) => {
            return(
                <div key={index}>
                   {levelDropDown ?    
                    <div className="flex items-center justify-between px-6 my-1 hover:bg-[#303848] rounded-lg py-1 cursor-pointer">
                <h1 className="text-[#9ca3af] py-1 pl-8 text-[13px]  font-semibold text-left rounded-md cursor-pointer">{ele.levelName}</h1>
                <div onClick={handleList} className='text-[#9ca3af]'>{ele.arrow}
                </div>
             </div> : ""}
              </div>
            )
           })} 

                   {musicData?.sub?.map((item: any, index: number) => {
                    console.log(item, "hhh")
              return(
                <div key={index}>
 
{nestedList ? <div className="flex items-center justify-between px-6 my-1 hover:bg-[#303848] cursor-pointer rounded-lg py-1">
                <h1 className="text-[#9ca3af] py-1 pl-8 text-[13px]  font-semibold text-left rounded-md ">{item.levelTwo}</h1>
                <div className='text-[#9ca3af]'>{item.arrowTwo}</div>
             </div> : ''}
                </div>
              )
             })}      
    </div>
  )
}

export default MusicSubElement
