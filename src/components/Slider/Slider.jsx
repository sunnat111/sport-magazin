import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { swiperimage } from '../../utils/imgExport/';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
    return (
            <div className="container">
                <Swiper 
                    modules={[Navigation, A11y,]}
                    spaceBetween={25}
                    slidesPerView={1}
                    navigation
                >
                    
                    <SwiperSlide>
                        <img src={swiperimage} alt=""  />   
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiperimage} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiperimage} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={swiperimage} alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
    )
}

export default Slider