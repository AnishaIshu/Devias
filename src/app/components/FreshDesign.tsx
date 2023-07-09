'use client';

import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const FreshDesign = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="bg-[#fff] boxShadow cursor-grab mt-5 rounded-3xl md:w-[45%] mx-3 py-8 px-7">
        <Slider {...settings}>
          <div>
            <Image
              src="/images/freshDesign/nextTip.svg"
              width={120}
              height={100}
              alt=""
            />
            <h1 className="mt-10 font-bold text-slate-800 py-1 text-lg">
              New fresh design.
            </h1>
            <p className="text-slate-500">
              Your favorite template has a new trendy look, more customization
              options, screens & more.
            </p>
          </div>

          <div>
            <Image
              src="/images/freshDesign/nextTip.svg"
              width={120}
              height={100}
              alt=""
            />
            <h1 className="mt-10 font-bold text-slate-800 py-1 text-lg">
              Tip 2.
            </h1>
            <p className="text-slate-500">Tip Content</p>
          </div>

          <div>
            <Image
              src="/images/freshDesign/nextTip.svg"
              width={120}
              height={100}
              alt=""
            />
            <h1 className="mt-10 font-bold text-slate-800 py-1 text-lg">
              Tip 3.
            </h1>
            <p className="text-slate-500">Tip Content</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default FreshDesign;
