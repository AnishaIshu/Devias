"use client"
import Image from "next/image";
import React, { useState } from "react";

// icon
import { RiSearchLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from 'react-icons/rx';
import { PiLightbulbFilamentBold } from 'react-icons/pi';
import { LuMailOpen } from 'react-icons/lu';
import { GoPerson } from 'react-icons/go';

const Navbar = () => {
  const [search, setSearch] = useState(false)
   const handleSearch = () => {
    setSearch(true);
    console.log(search, "fjfbbb")
   }

   const [language, setLanguage] = useState(false)
   const handleLanguage = () => {
    setLanguage(!language)
   }

   const [notification, setNotification] = useState(false)
   const handleNotification = () => {
    setNotification(!notification);
   }

   const [contact, setContact] = useState(false)
   const handleContact = () => {
    setContact(!contact)
   }

   const [profile, setProfile] = useState(false)
   const handleprofile = () => {
    setProfile(!profile)
   }
  //  languages
  const languagesContent = [
    {
      id: 1, 
      langName: "English", 
      img: "/images/navbar/flag/flagUk.svg"
    },
    {
      id: 2, 
      langName: "German", 
      img: "/images/navbar/flag/flagGer.svg"
    },
    {
      id: 3, 
      langName: "Spanish", 
      img: "/images/navbar/flag/flagSpanish.svg"
    }
  ]

  // notication
  const notifyContent = [
    {
      id:1, 
      img:"/images/navbar/notifyOne.png", 
      textOne:"Jie Yang Song added a new job",
      textAnchor:"Remote React / React Native Developer", 
      date:"Jul 06, 8:01 AM",
      cross:<RxCross2/>
    },
    {
      id:2, 
      img:"/images/navbar/notifyOne.png", 
      textOne:"Jie Yang Song added a new job",
      textAnchor:"Senior Golang Backend Engineer", 
      date:"Jul 06, 8:01 AM",
      cross:<RxCross2/>
    },
    {
      id:3, 
      img:"/images/navbar/notifyOne.png", 
      textOne:"New feature!",
      textTwo:"Logistics management is now available",
      date:"Jul 05, 10:01 AM",
      cross:<RxCross2/>
    },
    {
      id:4, 
      img:"/images/navbar/notifyOne.png", 
      textOne:"Jie Yang Song created",
      textAnchor:"Augmastic Inc", 
      date:"Jul 06, 8:01 AM",
      cross:<RxCross2/>
    },

  ]

  // contacts
  const contactContent = [
    {
      id:1, 
      img:"/images/navbar/contacts/personOne.png",
      name: "Alcides Antonio",
      bgColor: "bg-green-700"
    },
    {
      id:2, 
      img:"/images/navbar/contacts/personeTwo.png",
      name: "Marcus Finn",
      time: "2h ago",
    },
    {
      id:3, 
      img:"/images/navbar/contacts/personeThree.png",
      name: "Carson Darrin",
      time: "2h ago",
    },
    {
      id:4, 
      img:"/images/navbar/contacts/personeFour.png",
      name: "Fran Perez",  
      bgColor: "bg-green-700"
    },
    {
      id:5, 
      img:"/images/navbar/contacts/personeFive.png",
      name: "Jie Yan Song",
      bgColor: "bg-green-700"
    }

  ]

// person
const personContent = [
  {
    id:1, 
    img: "/images/navbar/profile/profilePerson.svg",
    title: "Person"
  },
  {
    id:2, 
    img: "/images/navbar/profile/profileSetting.svg",
    title: "Settings"
  },
  {
    id:3, 
    img: "/images/navbar/profile/profileBilling.svg",
    title: "Billing"
  }
]
  return (
    <>
      <div className='flex justify-between w-[100%] px-7 mt-5'>
        <div onClick={handleSearch}
          title='Search'
          className=' hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full '
        >
          <RiSearchLine className='text-2xl text-zinc-500 cursor-pointer ml-14 xl:ml-0' />
        </div>

        <div className='flex items-center md:gap-7 gap-1'>
          <div onClick={handleLanguage}
            title='Language'
            className='hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full'
          >
            <Image
              src='/images/navbar/flag/flagUk.svg'
              title='Language'
              width={50}
              height={50}
              alt=''
            />
          </div>

          <div onClick={handleNotification}
            title='Notification'
            className='relative hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full'
          >
            <span className='bg-red-500 rounded-full text-white px-[6px] text-sm absolute bottom-6 left-6'>
              2
            </span>
            <Image
              src='/images/navbar/notification.svg'
              width={30}
              height={30}
              alt=''
            />
          </div>

          <div onClick={handleContact}
            title='Contacts'
            className='hover:bg-zinc-100 cursor-pointer w-10 px-[7px] py-[7px] rounded-full'
          >
            <Image
              src='/images/navbar/contacts.svg'
              width={30}
              height={30}
              alt=''
            />
          </div>

          <div onClick={handleprofile}
          className='border-2 cursor-pointer border-zinc-200 p-[2px] rounded-full'>
            <Image
              src='/images/navbar/profile.png'
              width={30}
              height={30}
              alt=''
              className='rounded-full'
            />
          </div>
        </div>
      </div>



{search?   <div className="py-5 shadow-md border-t-zinc-400 rounded-xl px-2 sm:px-5 xl:w-[35%] 2xl:w-[30%] mx-2 absolute top-[30%] sm:left-[20%] md:left-[20%] lg:left-[28%] xl:left-[42%] z-50  bg-white">
        <div className="flex items-center justify-between mb-10 text-zinc-900">
        <div className="font-semibold text-lg">Search</div>
        <div onClick={() => setSearch(false)} className="text-xl cursor-pointer"><RxCross2 /></div>
      </div>

      <div className="flex items-center gap-3 text-zinc-600 bg-gray-200 py-2 px-3 rounded-md cursor-pointer">
        <div className="text-2xl"><PiLightbulbFilamentBold /></div>
        <h1 className="text-sm"><strong>Tip.</strong>Search by entering a keyword and pressing Enter</h1>
      </div>


    <div className="border-2 border-gray-300 px-3 rounded-md mt-5 py-2 hover:border-[#676afe] cursor-pointer">
      <h1 className="text-sm text-zinc-500 font-semibold hover:text-[#676afe]">search</h1>
      <div className="flex items-center gap-3">
        <FiSearch className="text-2xl text-zinc-500"/>
      <input type="text" className=" focus:outline-none text-base font-semibold text-zinc-700" placeholder="Search..."/>
      </div>
    </div>
  </div> : ''}

{language? <div className="bg-white shadow-md w-56 rounded-md absolute top-16 right-14 xl:right-60 md:right-56">
  {languagesContent.map((item, index)=> {
    return(
      <div key={index} className="flex items-center gap-6 px-4 py-2 hover:bg-gray-100 cursor-pointer">
      <div><Image src={item.img} width={30} height={35} alt="" /></div>
      <div className="font-semibold text-zinc-700 text-sm">{item.langName}</div>
    </div>
    )
  })}

</div>:'' }

{notification?<div className="bg-white w-[18rem] sm:w-[23rem] shadow-md rounded-lg absolute right-0 mx-3">
  <div className="flex items-center justify-between py-4 px-4">
    <div className="text-lg font-semibold text-zinc-800">Notifications</div>
    <div className="text-zinc-800 text-2xl"><LuMailOpen /></div>
  </div>

{notifyContent.map((item, index) => {
  return(
    <div key={index} className="flex px-4 justify-between border-b py-2 cursor-pointer hover:bg-gray-100">

      <div className="flex ">
      <div>
    <Image src={item.img} width={50} height={50} className="rounded-full" alt="" />
    </div>
    <div className="pl-5 text-[14px]">
      <h1 className="text-zinc-600 font-semibold">{item.textOne}</h1>
      <a href="#" className="text-[#676afe] underline">{item.textAnchor}</a>
      <h1 className="text-zinc-600 font-medium">{item.textTwo}</h1>
      <h6 className="text-zinc-500 font-medium text-[12px] py-1">{item.date}</h6>
    </div>
      </div>
    
    <div>
    <RxCross2 title="Remove" className="text-xl text-zinc-600"/>
    </div>
  </div>
  )
})}

 
</div>:'' }


{contact? <div className="bg-white boxShadow w-[18rem] lg:w-[20rem] py-4 rounded-md  absolute right-5 top-16">
  <h1 className="font-semibold text-lg pb-6 text-zinc-800 px-5">Contacts</h1>


  {contactContent.map((item, index) => {
    return(
<div key={index} className="flex items-center justify-between py-2 hover:bg-gray-100 cursor-pointer px-5">
  <div className="flex items-center gap-5">
    <div><Image src={item.img} width={40} height={50} alt=""  className="rounded-full" /></div>
    <h1 className="text-sm font-medium text-zinc-700">{item.name}</h1>
  </div>

<div>
<div className={`${item.bgColor} rounded-full w-1 p-[6px]`}></div>
  <h1 className="font-semibold text-xs text-zinc-500 ">{item.time}</h1>
</div>

  </div>
    )
  })}
  

</div> : ''}

{profile? <div className="bg-white border rounded-md w-[12rem] absolute right-3 top-16">
  <div className="py-3 px-5">
    <h1 className="font-medium text-lg text-zinc-700">Anika Vissar</h1>
    <h1 className="leading-3 font-medium text-sm text-zinc-500">demo@devias.io</h1>
  </div><hr />
{personContent.map((item, index) => {
  return(
    <div key={index} className="py-2 px-2 flex items-center gap-4 cursor-pointer rounded-md my-1 mx-2 hover:bg-zinc-100">
  <Image src={item.img} width={23} height={20} alt=""   />
    <h1 className="text-[16px] font-semibold text-zinc-600">{item.title}</h1> 
  </div>
  )
})}
<hr />
<div>
 <h1 className="text-sm font-bold m-auto mx-14 my-3 px-3 rounded-md py-2 cursor-pointer hover:bg-zinc-100 ">Log Out</h1> 
</div>
</div>:''}

    
    </>
  );
};

export default Navbar;
