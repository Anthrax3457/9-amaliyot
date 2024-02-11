import React, { useState } from 'react'
import CarouselComponent from './Carousel'
import Gallery from './gallery';
import Popular from './popular';

const Home = () => {
  const [show, setShow] = useState(true)
  return (
    <>
      <CarouselComponent />
      <div className='bg-[#E5E5E5]'>
        <div className='flex flex-col items-center justify-center'>
          <div className='md:flex flex-wrap  flex justify-center items-center md:items-start md:justify-start md:pl-[2.3rem] xl:w-full md:gap-[3rem] lg:gap-[2.5rem] md:mt-[-20px] md:z-[60] lg:px-0 lg:pl-[1rem] xl:justify-center xl:gap-[5.5rem] xl:mt-[-45px]'>
            <div className='bg-white h-[437px] w-[92%] md:w-[350px] lg:h-[390px] lg:w-[300px] xl:w-[24.9%]'>
              <div className='flex items-center'>
                <p className='w-[179px] xl:w-[190px] h-[50px] flex items-center text-[#5d4905] justify-center bg-white'>HOTEL</p>
                <p className='w-[179px] xl:w-[190px] h-[50px] flex items-center text-[#5d4905] justify-center bg-[#EAC008]'>CAR RENTAL</p>
              </div>
              <div className='grid items-center mt-[39px] text-[1.3rem] md:mt-[35px] justify-center lg:flex lg:flex-col '>
                <select className='w-[286px] lg:w-[80%] xl:w-[85%]  outline-[#f3d10e] text-[#999] border py-[6px] px-[10px]'>
                  <option value="">-- Select Hotel -- </option>
                  <option value="shangrila">Shangri-La</option>
                  <option value="chatrium">Chatrium</option>
                  <option value="fourseasons">Four Seasons</option>
                  <option value="hilton">Hilton</option>
                </select>
                <input placeholder='check-in-date' className='mt-[31px]  lg:mt-[14px] xl:mt-[30px] xl:w-[85%] xl:py-[5px] lg:w-[80%] lg:py-[10px] outline-[#f3d10e] border  py-[4.5px] px-[10px]' type="date" name="" id="" />
                <input placeholder='check-out-date' className='mt-[31px] lg:mt-[9px] xl:mt-[30px] xl:w-[85%] xl:py-[5px] lg:w-[80%] lg:py-[10px] outline-[#f3d10e]  border py-[4.5px] px-[10px]' type="date" name="" id="" />
                <select className='w-[286px] lg:w-[80%] text-[1.3rem] md:mt-[33px] lg:mt-[13px] xl:mt-[33px] xl:w-[85%] mt-[30px] border py-[6px] outline-[#f3d10e] px-[10px]'>
                  <option value="">-- Guets -- </option>
                  <option value="shangrila">Shangri-La</option>
                  <opt
                    ion value="chatrium">Chatrium</opt>
                  <option value="fourseasons">Four Seasons</option>
                  <option value="hilton">Hilton</option>
                </select>
              </div>
              <div className='flex items-center justify-center h-[88px] mt-[36px] lg:mt-[26px] xl:mt-[34px] bg-[#F1C50D]'>
                <p className='w-[130px] bg-opacity-[0.9] bg-[#F4D238] text-[0.7em] tracking-wider mt-[0px] flex items-center justify-center text-[#5d4905] py-[10px]'>Check Now</p>
              </div>
            </div>
            <div className='mt-[50px] md:mt-0 lg:w-[298px] xl:w-[25.5%]'>
              <img className='xl:w-[100%]' src="img/index-01.jpg" alt="" />
              <div className='bg-[#2dc970] flex pt-[28px] justify-center gap-[10.5rem] h-[85px]'>
                <p className='text-[white]'>New Yourk</p>
                <p className='text-[white]'>$6,600</p>
              </div>
            </div>
            <div className='mt-[50px] md:mt-[18px] lg:w-[300px] xl:w-[25.5%] lg:mt-0 '>
              <img className='xl:w-[100%]' src="img/index-02.jpg" alt="" />
              <div className='bg-[#ef6865] flex pt-[29px] justify-center gap-[13rem] h-[85px]'>
                <p className='text-[white]'>Paris</p>
                <p className='text-[white]'>$4,200</p>
              </div>
            </div>
          </div>
          <div className='mt-[122px] md:flex mditems-center md:justify-center md:gap-[5rem] lg:gap-[0rem] xl:gap-[2.5rem] lg:mt-[100px] xl:mt-[102px] md:mt-[153px]'>
            <p className='w-[350px] h-[1px] md:w-[160px] bg-[#999] md:mt-[18px] lg:w-[300px] xl:w-[370px]'></p>
            <p className='text-[29px] text-[#333333] text-center font-light leading-[1.1] md:w-[40%] lg:w-[70%] md:text-[3.6rem] md:text-center'>LOREM IPSUM DOLOR</p>
            <p className='w-[350px]  mt-[20px] h-[1px] bg-[#999] md:w-[160px] md:mt-[18px] lg:w-[300px] xl:w-[370px]'></p>
          </div>
          <div>
            <Gallery />
            <div className='flex items-center pl-[2em] md:pl-[1.5em] pr-[1.5rem] justify-center mt-[70px] lg:mt-[43px] xl:mt-[44px]'>
              <p className='w-[90%] md:w-[94%] lg:w-[88%] leading-[1.58] md:leading-[1.6] tracking-[0.025em] xl:w-[81%] lg:text-[0.79em] lg:leading-[1.6] text-[0.8em] md:text-center'>Holiday is free Bootstrap v3.3.5 responsive template for tour and travel websites. You can download and use this layout for any purpose. You do not need to provide a credit link to us. If you have any question, feel free to <span className='text-[#09c] mr-[18px] md:mr-0'>contact us</span>. Credit goes to  <span className='text-[#09c] mr-[0px]'>Unspash</span> for images used in this template.</p>
            </div>
          </div>
        </div>
        <div className='bg-white'>
          <div className='mt-[108px] grid justify-center md:flex md:items-center md:justify-center md:gap-[3rem] md:mt-[59px] md:pt-[99px] xl:mt-[101px] xl:gap-[4rem] lg:gap-[8.7rem] lg:mt-[70px] lg:pt-[102px]'>
            <p className='w-[350px] h-[1px] md:w-[160px] bg-[#999] md:mt-[0px] lg:w-[210px] xl:w-[360px]'></p>
            <p className='text-[29px]  leading-[1.1] md:text-[3.6rem] md:text-center font-extralight md:tracking-[-0.-10em] text-center'>POPULAR  PACKAGES</p>
            <p className='w-[350px] mt-[18px] h-[1px] bg-[#999] md:w-[160px] md:mt-[0px] lg:w-[210px] xl:w-[360px]'></p>
          </div>
          <Popular />
        </div>
      </div>
    </>
  )
}

export default Home