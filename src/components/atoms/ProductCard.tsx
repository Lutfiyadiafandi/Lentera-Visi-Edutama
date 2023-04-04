import { useState } from "react";
import Image from "next/image";
import header from "../../assets/images/header.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const ProductCard = () => {
  // const [active, setActive] = useState(0)
  const datas = [
    {
      title: "content 1",
      image: header,
    },
    {
      title: "content 2",
      image: header,
    },
    {
      title: "content 3",
      image: header,
    },
    {
      title: "content 4",
      image: header,
    },
    {
      title: "content 5",
      image: header,
    },
    {
      title: "content 6",
      image: header,
    },
  ];
  // ]
  // const limit = 1
  // const handlePrev = () => {
  //      if (active > 0) {
  //           setActive(active - limit)
  //      }
  // }
  // const handleNext = () => {
  //      if (active < datas.length - limit) {
  //           setActive(active + limit)
  //      }
  // }
  return (
    <>
      <div className="flex items-center justify-center mt-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="max-w-sm sm:max-w-lg"
        >
          <SwiperSlide>
            <div className="relative flex justify-center items-end">
              <Image src={datas[0].image} alt={""} className="rounded-md" />
              <span className="text-2xl text-white absolute">
                {datas[0].title}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-end">
              <Image src={datas[1].image} alt={""} className="rounded-md" />
              <span className="text-2xl text-white absolute">
                {datas[1].title}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-end">
              <Image src={datas[2].image} alt={""} className="rounded-md" />
              <span className="text-2xl text-white absolute">
                {datas[2].title}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-end">
              <Image src={datas[3].image} alt={""} className="rounded-md" />
              <span className="text-2xl text-white absolute">
                {datas[3].title}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-end">
              <Image src={datas[4].image} alt={""} className="rounded-md" />
              <span className="text-2xl text-white absolute">
                {datas[4].title}
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center items-end">
              <Image src={datas[5].image} alt={""} className="rounded-md" />
              <span className="text-2xl text-white absolute">
                {datas[5].title}
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* /* <ArrowBackIosNewIcon className='text-cyan-700 cursor-pointer' onClick={handlePrev} />
                    {datas.slice(active, active + limit).map((data, index) => {
                         const isActive = active === index
                         return (
                              <div className={`w-[263px] shadow-lg border rounded-2xl ${isActive ? '' : 'hiden'}`} key={index} >
                                   <Image src={data.image} width={263} height={220} alt='' className='rounded-t-2xl  ' />
                                   <h1 className='p-2 text-cyan-700'>{data.title}</h1>
                              </div>
                         )
                    })}
                    <ArrowForwardIosIcon className='text-cyan-700 cursor-pointer' onClick={handleNext} /> */}
      </div>
    </>
  );
};
export default ProductCard;
