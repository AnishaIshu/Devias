import Image from "next/image";
import React from "react";
import { MdReplay } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

const Inbox = () => {

    const profile = [
        {
            id: 1,
            img: "/images/inbox/profileOne.png",
            name : " Alcides Antonio",
            p: "Hello, we spoke earlier on the phone",
            time: "2h ago",
        },
        {
            id: 2,
            img: "/images/inbox/profileTwo.png",
            name : "Marcus Finn",
            p: "Is the job still available?",
            time: "56m ago",
        },
        {
            id: 3,
            img: "/images/inbox/profileThree.png",
            name : "Carson Darrin",
            p: "What is a screening task? I’d like to",
            time: "3h ago",
        },
        {
            id: 4,
            img: "/images/inbox/profileFour.png",
            name : "Fran Perez",
            p: "Still waiting for feedback",
            time: "8h ago",
        },
        {
            id: 5,
            img: "/images/inbox/profileFive.png",
            name : " Jie Yan Song",
            p: "Need more information about campaigns",
            time: "10h ago",
        }
    ]

  return (
    <>
      <div className='bg-[#fff] rounded-3xl boxShadow md:w-[45%] mx-3 py-4 mt-10'>
        <div className='flex items-center justify-between mb-5 md:px-10 px-5 pt-2'>
          <div>
            <h1 className='text-xl font-semibold text-slate-700'>Inbox</h1>
          </div>
          <div>
            <MdReplay className='text-slate-600 text-2xl' />
          </div>
        </div>


{profile.map((profileData, index) => {
    return(
        <div key={index} className="flex items-center justify-between md:px-5 px-3 py-2 my-1 hover:bg-slate-100 cursor-pointer">
        <div className='flex gap-4 items-center'>
          <Image
            src={profileData.img}
            width={50}
            height={100}
            className='rounded-full'
            alt=''
          />

          <div>
            <h1 className='md:text-[15px] text-[14px] text-slate-700 font-semibold'>
              {profileData.name}
            </h1>
            <p className='md:text-[14px] text-[12px] leading-3 text-slate-500 font-medium'>
             {profileData.p}
            </p>
          </div>
        </div>

        <div>
          <p className="md:text-[14px] text-[11px] font-semibold text-slate-500">{profileData.time}</p>
        </div>
      </div>
    )
})}

<hr />
<div className="flex items-center gap-2 text-base font-semibold text-slate-600 ml-10 cursor-pointer rippleButton hover:bg-slate-100 rounded-md mt-4 w-40 px-6 py-2">
Go to Chat <FiArrowRight />
</div>

      
      </div>
    </>
  );
};

export default Inbox;
