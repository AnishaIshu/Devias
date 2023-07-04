import React from 'react'

const Transition = () => {

const transitionData = [
    {
        id: 1,
        date: "4",
        name: "Devias",
        p: "Payment received",
        hold: "ON_HOLD",
        bgColor:"bg-[#FAE8DB]",
        text:"text-[#d25e17f1]",
        price:"+ $25,000.00",
        priceColor: "text-[#15a776]"
    },
    {
        id: 2,
        date: "3",
        name: "Zimbru",
        p: "Payment sent",
        hold: "CONFIRMED",
        bgColor:"bg-[#ddfce6]",
        text:"text-[#106a47]",
        price:"- $6,843.00",
        priceColor: "text-[#e4554d]"
    },
    {
        id: 3,
        date: "3",
        name: "Vertical Jelly",
        p: "Payment sent",
        hold: "FAILED",
        bgColor:"bg-[#fadbdb]",
        text:"text-[#cb1414]",
        price:"- $91,823.00",
        priceColor: "text-[#e4554d]"
    },
    {
        id: 4,
        date: "1",
        name: "Devias",
        p: "Payment received",
        hold: "CONFIRMED",
        bgColor:"bg-[#ddfce6]",
        text:"text-[#016a47]",
        price:"+ $49,550.00",
        priceColor: "text-[#15a776]"
    }
]

  return (
    <>
    <div className='md:w-[60%] mx-3 bg-[#fff] mt-8 pt-5 rounded-3xl shadow-md'>
          <h1 className='text-[18px] font-semibold text-slate-800 pl-8 pt-3'>Latest Transition</h1> 
          <p className='text-[15px] font-medium text-slate-500 pl-8 pb-1'>Based on the selected period</p>  
       <div className='flex items-center gap-6 text-[15px] font-semibold text-slate-600 mt-4 pl-8 mb-3'>
        <h2 className='text-[#7375f3] border-b border-b-[#888afd] cursor-pointer'>All</h2>
        <h2 className='cursor-pointer'>Confirmed</h2>
        <h2 className='cursor-pointer'>Pending</h2>
        </div> 




{transitionData.map((data, index)=> {
    return(

        <div key={index} className='flex items-center justify-between border-t py-5 px-10 cursor-pointer hover:bg-zinc-100'>
            <div className='flex items-center gap-10'>
            <div className='bg-zinc-200 w-10 text-center rounded-2xl py-2'>
                <h1 className='text-sm'>JUL</h1>
                <h1 className='font-semibold text-xl'>{data.date}</h1>
            </div>
            <div>
                <h1 className='text-[17px] font-semibold text-slate-600'>{data.name}</h1>
                <p className='text-[15px] font-medium text-slate-500'>{data.p}</p>
            </div>
            </div>

            <div className={`${data.bgColor} ${data.text} px-3 py-1 text-center text-[13px] rounded-full font-semibold`}>
       {data.hold}   
        </div> 

        <div className={`${data.priceColor} w-24 text-center text-[14px] rounded-full font-semibold`}>{data.price}</div> 
        </div> 
    )
})}


    </div> 
    </>
  )
}

export default Transition
