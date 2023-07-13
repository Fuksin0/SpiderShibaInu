import React, { useRef, useState } from "react";
// Import Swiper React components 
import { Swiper,SwiperSlide } from "swiper/react";
import  { Navigation } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../SwiperJs/style.css";

import { Pagination } from "swiper";
import { team } from "../../constants";
const SwiperSlider = () => {
  return (
    <>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
    {team.map((slide) => (
    <SwiperSlide>
<div>
        <img className="relative" src={slide.icon} alt="" />
    <div className="flex justify-center">
        <p className="absolute mt-[25px] z-50 text-white text-[27px] leading-[32px] font-bold">{slide.name}</p>
        <p class='caption' className="absolute mt-[65px] z-50 text-[15px] leading-[21px] font-semibold text-white opacity-60">{slide.designation}</p>
    </div> 
</div>
        </SwiperSlide>
    ))}
    </Swiper>
  </>
  )
}

export default SwiperSlider