'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';

const  Home=()=> {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://morachikankari.com/wp-content/uploads/2023/12/Homepage-BannerNY.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://morachikankari.com/wp-content/uploads/2023/04/Mora-Chikankari-SliderSlider.webp" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

  

export default Home;