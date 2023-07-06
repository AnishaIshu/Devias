"use client";
import { motion } from 'framer-motion'; 
import Image from "next/image";
import React from "react";
import { useState } from "react";

// icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineDocument } from "react-icons/hi";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import SubElement from "./SubElement";
import PagesSubEle from "./PagesSubEle";
import MusicSubElement from "./MusicSubElement";

const SideBar = () => {
  const overview = [
    {
      id: 1,
      img: "/images/sideBar/overview.svg",
      bgColor: "bg-[#303848]",
      txtColor: "text-white",
      name: "Overview",
    },
    {
      id: 2,
      img: "/images/sideBar/analytics.svg",
      txtColor: "text-[#9ca3af]",
      name: "Analytics",
    },
    {
      id: 3,
      img: "/images/sideBar/eCommerce.svg",
      txtColor: "text-[#9ca3af]",
      name: "eCommerce",
    },
    {
      id: 4,
      img: "/images/sideBar/crypto.svg",
      txtColor: "text-[#9ca3af]",
      name: "Crypto",
      nName: "New",
      nColor: "bg-[#6366F1]",
    },
    {
      id: 5,
      img: "/images/sideBar/account.svg",
      txtColor: "text-[#9ca3af]",
      name: "Account",
    },
  ];

  const concept = [
    {
      id: 1,
      img: "/images/sideBar/concepts/customers.svg",
      name: "Customers",
      icon: <IoIosArrowForward />,

      sub: ["List", "Details", "Edit"],
    },
    {
      id: 2,
      img: "/images/sideBar/concepts/products.svg",
      name: "Products",
      icon: <IoIosArrowForward />,

      sub: ["List", "Create"],
    },
    {
      id: 3,
      img: "/images/sideBar/concepts/orders.svg",
      name: "Orders",
      icon: <IoIosArrowForward />,
      sub: ["List", "Details"],
    },
    {
      id: 4,
      img: "/images/sideBar/concepts/invoices.svg",
      name: "Invoices",
      icon: <IoIosArrowForward />,
      sub: ["List", "Details"],
    },
    {
      id: 5,
      img: "/images/sideBar/concepts/logistics.svg",
      name: "Logistics",
      icon: <IoIosArrowForward />,
      sub: ["Dashboard", "Fleet"],
    },
    {
      id: 6,
      img: "/images/sideBar/concepts/academy.svg",
      name: "Academy",
      icon: <IoIosArrowForward />,
      sub: ["Dashboard", "Course"],
    },
    {
      id: 7,
      img: "/images/sideBar/concepts/jobListings.svg",
      name: "Job Listings",
      icon: <IoIosArrowForward />,
      sub: ["Browse", "Details", "Create"],
    },
    {
      id: 8,
      img: "/images/sideBar/concepts/socialmedia.svg",
      name: "Social Media",
      icon: <IoIosArrowForward />,
      sub: ["Profile", "Feed"],
    },
    {
      id: 9,
      img: "/images/sideBar/concepts/blog.svg",
      name: "Blog",
      icon: <IoIosArrowForward />,
      sub: ["Post List", "Post Details", "Post Create"],
    },
    {
      id: 10,
      img: "/images/sideBar/concepts/fileManager.svg",
      name: "File Manager",
    },
    {
      id: 11,
      img: "/images/sideBar/concepts/kanban.svg",
      name: "Kanban",
    },
    {
      id: 12,
      img: "/images/sideBar/concepts/mail.svg",
      name: "Mail",
    },
    {
      id: 13,
      img: "/images/sideBar/concepts/chat.svg",
      name: "Chat",
    },
    {
      id: 14,
      img: "/images/sideBar/concepts/calendar.svg",
      name: "Calendar",
    },
  ];

  const pages = [
    {
      id: 1,
      img: "/images/sideBar/pages/auth.svg",
      name: "Auth",
      icon: <IoIosArrowForward />,
      sub: [
        {
          authName: "Login",
          arrow: <IoIosArrowForward />,
          sub: [
            "Classic", "Modern"
          ],
        },
        {
          authName: "Register",
          arrow: <IoIosArrowForward />,
          sub: ["Classic", "Modern"],
        },
        {
          authName: "Forgot Password",
          arrow: <IoIosArrowForward />,
          sub: ["Classic", "Modern"],
        },
        {
          authName: "Rest Password",
          arrow: <IoIosArrowForward />,
          sub: ["Classic", "Modern"],
        },
        {
          authName: "Verify Code",
          arrow: <IoIosArrowForward />,
          sub: ["Classic", "Modern"],
        },
      ],
    },
    {
      id: 2,
      img: "/images/sideBar/pages/pricing.svg",
      name: "Pricing",
    },
    {
      id: 3,
      img: "/images/sideBar/pages/checkout.svg",
      name: "Checkout",
    },
    {
      id: 4,
      img: "/images/sideBar/pages/contact.svg",
      name: "Contact",
    },
    {
      id: 5,
      img: "/images/sideBar/pages/error.svg",
      name: "Error"
    },
  ];

  const music = [
    {
      id: 1,
      img: "/images/sideBar/music/level.svg",
      name: "Level",
      icon: <IoIosArrowForward />,
      sub: [
        {
          levelName: "Level 1a",
          arrow: <IoIosArrowForward />,
          sub: [
            {
              levelTwo: "Level 2a",
              arrowTwo: <IoIosArrowForward />,
              sub: ["Level 3a", "Level 3b"],
            },
            {
              levelTwo: "Level 2b",
            },
          ],
        },
        {
          levelName: "Level 1b",
        },
      ],
    },
    {
      id: 2,
      img: "/images/sideBar/music/disabled.svg",
      name: "Disabled",
    },
    {
      id: 3,
      img: "/images/sideBar/music/label.svg",
      name: "Label",
      nName: "New",
      nColor: "bg-[#6366F1]",
    },
    {
      id: 4,
      img: "/images/sideBar/music/label.svg",
      name: "Blank",
    },
    {
      id: 5,
      img: "/images/sideBar/music/label.svg",
      name: "ExternalLink",
    },
  ];

  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(true);

  // responsive menu

  const hundelClick = () => {
    setShow(false);
    setMenuShow(false);
    console.log(show);
  };
  const closeShow = () => {
    setShow(true);
    console.log(show);
    setMenuShow(true);
  };


// pageMap dropdown listdiv
const [pageDropdown , SetPageDropdown] = useState(false);
const pageData = () => {
  SetPageDropdown(!pageDropdown);
  console.log(pageDropdown);
}


  return (
    <>
      {!menuShow ? (
        ""
      ) : (
        <div
          onClick={hundelClick}
          className=' hover:bg-gray-300 absolute top-0 left-0  cursor-pointer w-10 rounded-full px-4 py-2 m-5 xl:hidden block'
        >
          <AiOutlineMenu className='text-2xl text-zinc-600' />
        </div>
      )}

      {show ? (
        ""
      ) : (
        <div className='sideBarColor  w-72 pt-6 pl-5 pr-6 pb-5 absolute z-10 top-0 left-0 h-screen overflow-y-auto scrollBarDesign'>

          {/* CLOSE ICON */}
          <div>
            <RxCross2
              onClick={closeShow}
              className='text-white text-2xl mb-3 ml-56 cursor-pointer xl:hidden block'
            />
          </div>
          {/* ******************************************** */}

          <div className='flex items-center justify-between pb-5'>
            <div className='border-[1px] border-zinc-700 w-10 h-10 mt-1 ml-1 rounded-md'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src='/images/logo/logo.svg'
                className='p-[4px]'
                width={38}
                height={30}
                alt=''
              />
               </motion.div>
            </div>
            <div className='pr-16'>
              <h1 className='text-white text-lg font-bold'>Devias</h1>
              <h6 className='text-zinc-400 text-sm leading-3'>Production</h6>
            </div>
            <IoIosArrowDown className='text-zinc-500 mr-5 text-sm cursor-pointer' />
          </div>


{/* OVERVIEW */}
          {/* ******************************************** */}
          <div>
            {overview.map((item, index) => {
              return (
                <div  key={index}>
                  <div
                    className={`flex pl-3 py-2 hover:bg-[#303848] rounded-md gap-4 cursor-pointer mb-[2px] ${item.bgColor} py-2`}
                  >
                    <div>
                      <Image
                        src={item.img}
                        className=''
                        width={20}
                        height={25}
                        alt=''
                      />
                    </div>
                    <div>
                      <h1
                        className={`${item.txtColor} text-[14px] font-semibold `}
                      >
                        {item.name}
                      </h1>
                    </div>
                    <div
                      className={`text-white ${item.nColor} text-[13px] rounded-full ml-20 font-semibold px-2 py-[2px]`}
                    >
                      {item.nName}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


{/* CONCEPT */}
          {/* ******************************************** */}
          <div>
            <h1 className='text-[#9ca3af] text-[12px] my-5 font-semibold '>
              CONCEPTS
            </h1>
            {concept.map((conceptData, index) => {
              return (
           <SubElement key={index} conceptData = {conceptData}/>
              );
            })}
          </div>  

          {/* ******************************************** */}


{/* PAGES */}
          <div>
            <h1 className='text-[#9ca3af] text-[12px] my-5 font-semibold '>
              PAGES
            </h1>

            {pages.map((pagesData, index) => {
              return (
                <PagesSubEle key={index} pagesData = {pagesData}/>
              );
            })}
          </div>

          {/* ******************************************** */}

{/* MUSIC */}
          <div>
            <h1 className='text-[#9ca3af] text-[12px] my-5 font-semibold '>
              MISC
            </h1>
            {music.map((musicData, index) => {
              return ( 
                <MusicSubElement key={index} musicData = {musicData}/>
             
              );
            })}
          </div>




          {/* ******************************************** */}

          <div>
            <h1 className='text-white text-[16px] font-semibold mt-6'>
              Need Help?
            </h1>
            <h6 className=' text-[#9ca3af] text-[14px]'>
              Please check our docs.
            </h6>

            <div className='flex bg-[#6366F1] items-center cursor-pointer hover:bg-[#494cff] gap-2 mr-3 mt-3 rounded-xl justify-center '>
              <HiOutlineDocument className='text-white text-xl' />
              <h1 className='text-white text-[15px] font-semibold py-[10px]'>
                Documentation
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
