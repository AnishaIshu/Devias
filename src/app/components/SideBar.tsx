import Image from "next/image";
import React from "react";

// icons
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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
    nColor : "bg-[#6366F1]"
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
    icon: <IoIosArrowForward/>
  },
  {
    id: 2,
    img: "/images/sideBar/concepts/products.svg",
    name: "Products",
    icon: <IoIosArrowForward/>
  },
  {
    id: 3,
    img: "/images/sideBar/concepts/orders.svg",
    name: "Orders",
    icon: <IoIosArrowForward/>
  },
  {
    id: 4,
    img: "/images/sideBar/concepts/invoices.svg",
    name: "Invoices",
    icon: <IoIosArrowForward/>
  },
  {
    id: 5,
    img: "/images/sideBar/concepts/logistics.svg",
    name: "Logistics",
    icon: <IoIosArrowForward/>
  },
  {
    id: 6,
    img: "/images/sideBar/concepts/academy.svg",
    name: "Academy",
    icon: <IoIosArrowForward/>
  },
  {
    id: 7,
    img: "/images/sideBar/concepts/jobListings.svg",
    name: "Job Listings",
    icon: <IoIosArrowForward/>
  },
  {
    id: 8,
    img: "/images/sideBar/concepts/socialmedia.svg",
    name: "Social Media",
    icon: <IoIosArrowForward/>
  },
  {
    id: 9,
    img: "/images/sideBar/concepts/blog.svg",
    name: "Blog",
    icon: <IoIosArrowForward/>
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
    icon: <IoIosArrowForward/>
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
    name: "Error",
    icon: <IoIosArrowForward/>
  },
];

const music = [
  {
    id: 1,
    img: "/images/sideBar/music/level.svg",
    name: "Level",
    icon: <IoIosArrowForward/>
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
    nColor : "bg-[#6366F1]"
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

const SideBar = () => {
  return (
    <>
      <div className='sideBarColor w-72 pt-6 pl-5 pr-4 pb-5 h-screen overflow-y-auto'>

        {/* ******************************************** */}

        <div className='flex items-center justify-between pb-5'>
          <div className='border-[1px] border-zinc-700 w-10 h-10 mt-1 ml-3 rounded-md'>
            <Image
              src='/images/logo/logo.svg'
              className='p-[2px]'
              width={40}
              height={30}
              alt=''
            />
          </div>
          <div className='pr-16'>
            <h1 className='text-white text-lg font-bold'>Devias</h1>
            <h6 className='text-zinc-400 text-sm leading-3'>Production</h6>
          </div>
          <IoIosArrowDown className='text-zinc-400 mr-5 text-base cursor-pointer' />
        </div>

        {/* ******************************************** */}
        <div>
          {overview.map((item, index) => {
            return (
              <>
                <div
                  className={`flex pl-3  py-2 hover:bg-[#303848] rounded-md gap-4 cursor-pointer mb-[2px] ${item.bgColor} py-2`}
                >
                  <div key={index}>
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
                  <div className={`text-white ${item.nColor} text-[14px] rounded-full ml-20 font-semibold px-2 py-[2px]`}>{item.nName}</div>
                </div>
              </>
            );
          })}
        </div>

        {/* ******************************************** */}
        <div>
          <h1 className='text-[#9ca3af] text-[12px] my-5 font-semibold '>
            CONCEPTS
          </h1>
          {concept.map((conceptData, index) => {
            return (
              <>
                <div
                  key={index}
                  className='flex items-center justify-between py-2 rounded-md hover:bg-[#303848] cursor-pointer  my-2'
                >
                  <div className="flex gap-5">
                    <Image
                      src={conceptData.img}
                      className='ml-3'
                      width={21}
                      height={25}
                      alt=''
                    />
                  <div>
                    <h1 className='text-[14px] text-[#9ca3af] font-semibold text-left '>
                      {conceptData.name}
                    </h1>
                  </div>
                  </div>
                  <div
                    className="text-[#9ca3af] "
                  >{conceptData.icon}</div>
                </div>
              </>
            );
          })}
        </div>

        {/* ******************************************** */}
        
        <div>
          <h1 className='text-[#9ca3af] text-[12px] my-5 font-semibold '>
            PAGES
          </h1>

          {pages.map((pagesData, index) => {
            return (
              <>
                <div
                  key={index}
                  className='flex items-center justify-between py-2 rounded-md hover:bg-[#303848] cursor-pointer  my-2'
                >
                  <div className="flex gap-5">
                    <Image
                      src={pagesData.img}
                      className='ml-3'
                      width={21}
                      height={25}
                      alt=''
                    />
                  <div>
                    <h1 className='text-[14px] text-[#9ca3af] font-semibold text-left'>
                      {pagesData.name}
                    </h1>
                  </div>
                  </div>
                  <div className=" text-[#9ca3af] mr-4">{pagesData.icon}</div>
                </div>
              </>
            );
          })}
        </div>

        {/* ******************************************** */}

        <div>
          <h1 className='text-[#9ca3af] text-[12px] my-5 font-semibold '>
            MISC
          </h1>
          {music.map((musicData, index) => {
            return (
              <>
                <div
                  key={index}
                  className='flex justify-between items-center py-2 rounded-md hover:bg-[#303848] cursor-pointer  my-2'
                >
                  <div className="flex gap-5">
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
                  <div className={`text-white ${musicData.nColor} text-[14px] rounded-full ml-20 font-semibold px-2 py-[2px]`}>{musicData.nName}</div>
                  <div className=" text-[#9ca3af] mr-4">{musicData.icon}</div>
                </div>
              </>
            );
          })}
        </div>

        {/* ******************************************** */}
      </div>
    </>
  );
};

export default SideBar;
