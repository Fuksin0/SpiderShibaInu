import React from 'react'
import RunningString from './RunningString'

import { herobg, herobigshiba } from '../assets'

function Hero() {
  return (
    <section>
    <div className='text-white !w-[99%] container font-sf-display flex flex-col z-10 sm:pl-[40px] ss:pl-[35px] md:pl-[55px] lg:pl-[75px]'>
      <h1 className=' font-extrabold text-[50px] md:text-[55px] lg:text-[65px] leading-[50px] md:leading-[55px] lg:leading-[60px] mb-[10px] relative'>
      <span className='text-[#E11D2E]'>Who is <span className='text-white'>mr.</span>
      <br/>
      </span>Spidershiba<br/> Inu?</h1>
      <span className='text-[#71768E] text-[15px] lg:text-[17px] xl:text-[19px] mb-[40px]'>It's a hybrid of Shiba and Spiderman.... but</span>
      <span className='text-[#A0A3B5] text-[22px] lg:text-[24px] xl:text-[26px] mb-[30px] ss:mb-[40px]  ss:w-[80%] sm:w-[65%] lg:w-[46%] xl:w-[37%]'>It's not only for pump and dump by Elon tweets. 
This is real NFT game with Achiements, Goals and nice gameplay with tokenization</span>
    <img 
    src={herobigshiba} 
    alt="heroShiba"
    className='mb-[50px] w-[200px] ss:w-[220px] sm:w-[270px] lg:w-[350px] h-[180px] ss:h-[220px] sm:h-[260px] lg:h-[350px] mx-auto ss:mx-0 ss:absolute ss:right-0 ss:left-[67%] sm:mx-0 sm:absolute sm:right-0 sm:left-[64%]'
    />

    <div className='mx-auto flex flex-col items-center ss:flex-wrap ss:flex-row ss:w-[100%]  md:justify-normal'>
    <div className='mb-[45px] ss:mb-[25px] sm:mb-[30px] ss:w-[44.33%] sm:w-[36.33%] md:w-[27.33%] lg:w-[24.33%] xl:w-[20.33%] block'>
          <a href='#' className='border border-[#AC1216] rounded-xl  text-white hover:text-[#ff7849] text-[18px] xl:text-[22px]  font-bold hover:border-white items-center text-center px-[70px] ss:px-[55px] py-[20px] xl:py-[25px] bg-[#AC1216] '>Join Community</a>
        </div>
        <div className='mb-[27px] ss:mb-[25px] sm:mb-[30px] ss:w-[44.33%] sm:w-[36.33%] md:w-[27.33%] lg:w-[33.33%] xl:w-[45.33%] block'>
          <a href='#' className='border border-[#FFFFFF0D] rounded-[10px]  text-white text-[18px] xl:text-[22px] font-medium items-center text-center px-[45px] ss:px-[15px] py-[20px] xl:py-[25px] bg-[#FFFFFF0D]'>More about SpiderShiba Inu</a>
        </div>
        <div className='border border-[#FFFFFF0D] rounded-[10px]  text-white text-[14px] font-medium items-center text-center bg-[#FFFFFF0D] mb-[34px] ss:w-[88.33%]  sm:w-[71.33%] md:w-[53.66%] xl:w-[41.00%] lg:w-[47.66%] sm:py-[3px] md:py-[5px] block'>
          <p className='md:block md:text-start md:opacity-40 md:pl-[20px] md:text-[17px] xl:text-[22px]' href='#'>
            <span>Contract address:</span>
            <br/>
            0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc</p>
            </div>
          </div>
    </div>

    <div className='bg-[#5A4039]'>
    <RunningString/>
    </div>

    </section>
    
  )
}

export default Hero