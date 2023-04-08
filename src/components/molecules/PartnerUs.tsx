import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PartnerLogo from "../../assets/icon/logo.png";
import PartnerImage from "../../assets/icon/saltacademy.png";
import Image from "next/image";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper";

function PartnerUs() {
  return (
    <div className="mx-auto">
      <div className="text-center mt-10">
        <h1 className="text-cyan-700 font-bold text-4xl">Partner Kami</h1>
      </div>
      <div className="mt-20 mb-40">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className=""
        >
          <SwiperSlide className="px-5 sm:px-36 mx-auto">
            <Image src={PartnerImage} alt={""} className="w-20 sm:w-36" />
          </SwiperSlide>
          <SwiperSlide className="px-5 sm:px-36 mx-auto">
            <Image src={PartnerLogo} alt={""} className="w-16 sm:w-28" />
          </SwiperSlide>
          <SwiperSlide className="px-5 sm:px-36 mx-auto">
            <Image src={PartnerImage} alt={""} className="w-20 sm:w-36" />
          </SwiperSlide>
          <SwiperSlide className="px-5 sm:px-36 mx-auto">
            <Image src={PartnerLogo} alt={""} className="w-16 sm:w-28" />
          </SwiperSlide>
          <SwiperSlide className="px-5 sm:px-36 mx-auto">
            <Image src={PartnerImage} alt={""} className="w-20 sm:w-36" />
          </SwiperSlide>
          <SwiperSlide className="px-5 sm:px-36 mx-auto">
            <Image src={PartnerLogo} alt={""} className="w-16 sm:w-28" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default PartnerUs;
