import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Carousel() {
    return (
        <div className='mt-[-2px]'>
            <Swiper
                loop
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="carousel-item">
                        <img className='h-[130px] md:h-[270px] lg:h-[358px] xl:w-full xl:h-[100%]' src="img/banner-1.jpg" />
                        <div className="carousel-text">
                            <p className='text-[white] tracking-widest leading-[1.2] md:leading-[1.1] md:text-[4.5rem] xl:text-[7rem] xl:tracking-[0.08em]' >FIND <span className='mx-[3px] text-[#FCDD44] tracking-widest'>THE BEST</span> PLACE</p>
                            <p className='text-[white] text-[68%] md:text-[3.1rem] font-light xl:text-[3.5rem]'>FOR YOUR HOLIDAYS</p>
                            <div className='flex items-center justify-center'>
                                <p className='text-[white] mt-[10px] border bg-[#FCDD44] bg-opacity-[0.3] border-[#D2B731] py-[6px] md:py-[15px] md:mt-[29px] w-[110px] text-[72%] tracking-widest md:w-[170px]'>LEARN MORE</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-item">
                        <img className='h-[130px] md:h-[270px] lg:h-[358px] xl:w-full xl:h-[100%]' src="img/banner-2.jpg" />
                        <div className="carousel-text">
                            <p className='text-[white] tracking-widest leading-[1.2] md:leading-[1.1] md:text-[4.5rem] xl:text-[7rem] xl:tracking-[0.08em]' >LOREM <span className='mx-[3px] text-[#FCDD44] tracking-widest'>IPSUM</span> DOLOR</p>
                            <p className='text-[white] text-[68%] md:text-[3.1rem] font-light xl:text-[3.5rem]'>WONDERFUL DESTINATIONS</p>
                            <div className='flex items-center justify-center'>
                                <p className='text-[white] mt-[10px] border bg-[#FCDD44] bg-opacity-[0.3] border-[#D2B731] py-[6px] md:py-[15px] md:mt-[29px] w-[110px] text-[72%] tracking-widest md:w-[170px]'>LEARN MORE</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-item">
                        <img className='h-[130px] md:h-[270px] lg:h-[358px] xl:w-full xl:h-[100%]' src="img/banner-3.jpg" />
                        <div className="carousel-text ml-[-8%]">
                            <p className='text-[white] tracking-widest leading-[1.2] md:leading-[1.1] md:text-[4.5rem] xl:text-[7rem] xl:tracking-[0.08em]' >PROIN <span className='mx-[3px] text-[#FCDD44] tracking-widest xl:tracking-wide'>GRAVIDA</span> NIBHVELL</p>
                            <p className='text-[white] text-[68%] md:text-[3.1rem] font-light xl:text-[3.5rem]'>VELIT AUCTOR</p>
                            <div className='flex items-center justify-center'>
                                <p className='text-[white] mt-[10px] border bg-[#FCDD44] bg-opacity-[0.3] border-[#D2B731] py-[6px] md:py-[15px] md:mt-[29px] xl:mt-[26px] xl:py-[18px] w-[110px] text-[72%] tracking-widest md:w-[170px]'>LEARN MORE</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
