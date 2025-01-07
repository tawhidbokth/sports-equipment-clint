import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div className=" max-w-full mx-auto py-10 -mt-5 ">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="lg:h-[550px] flex justify-center items-center text-white text-2xl">
            <img
              className="w-full object-cover"
              src="https://i.ibb.co.com/cthYRCL/Orange-Yellow-Green-Creative-Sportsfest-Banner-2.png"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:h-[550px] flex justify-center items-center text-white text-2xl">
            <img
              className="w-full object-cover"
              src="https://i.ibb.co.com/VL00Whq/Orange-Yellow-Green-Creative-Sportsfest-Banner-1.png"
              alt=""
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="lg:h-[550px] flex justify-center items-center text-white text-2xl">
            <img
              className="w-full object-cover"
              src="https://i.ibb.co.com/KqSycVW/Orange-Yellow-Green-Creative-Sportsfest-Banner.png"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
