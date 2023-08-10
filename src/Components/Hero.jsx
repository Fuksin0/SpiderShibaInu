import React from 'react'
import RunningString from './RunningString'

import { herobg, herobigshiba } from '../assets'

function Hero() {
  return (
    <section>
    <div className='text-white !w-[99%] container font-sf-display flex flex-col z-10'>
      <h1 className=' font-extrabold text-[50px] leading-[50px] mb-[10px] relative'>
      <span className='text-[#E11D2E]'>Who is <span className='text-white'>mr.</span>
      <br/>
      </span>Spidershiba<br/> Inu?</h1>
      <span className='text-[#71768E] text-[15px] mb-[40px]'>It's a hybrid of Shiba and Spiderman.... but</span>
      <span className='text-[#A0A3B5] text-[22px] mb-[30px] ss:mb-[40px]  ss:w-[80%] sm:w-[65%]'>It's not only for pump and dump by Elon tweets. 
This is real NFT game with Achiements, Goals and nice gameplay with tokenization</span>
    <img 
    src={herobigshiba} 
    alt="heroShiba"
    className='mb-[50px] w-[200px] sm:w-[250px] h-[180px] sm:h-[230px] mx-auto ss:mx-0 ss:absolute ss:right-0 ss:left-[67%] sm:mx-0 sm:absolute sm:right-0 sm:left-[67%]'
    />

    <div className='mx-auto flex flex-col items-center ss:flex-wrap ss:flex-row ss:w-[100%] ss:justify-center md:justify-normal'>
    <div className='mb-[55px] sm:mb-[30px] ss:w-[43.33%] sm:w-[34.33%] md:w-[27.33%] block'>
          <a href='#' className='border border-[#AC1216] rounded-xl  text-white hover:text-[#ff7849] text-[19px]  font-bold hover:border-white items-center text-center px-[70px] ss:px-[50px] py-[20px] bg-[#AC1216] '>Join Community</a>
        </div>
        <div className='mb-[55px] sm:mb-[30px] ss:w-[43.33%] sm:w-[34.33%] md:w-[27.33%] block'>
          <a href='#' className='border border-[#FFFFFF0D] rounded-[10px]  text-white text-[18px] font-medium items-center text-center px-[45px] ss:px-[15px] py-[21px] bg-[#FFFFFF0D]'>More about SpiderShiba Inu</a>
        </div>
        <div className='border border-[#FFFFFF0D] rounded-[10px]  text-white text-[14px] font-medium items-center text-center bg-[#FFFFFF0D] mb-[34px] ss:w-[66.33%] sm:w-[56.33%] md:w-[54.33%] md:py-[5px] block'>
          <p className='md:block md:text-start md:opacity-40 md:pl-[20px] md:text-[19px]' href='#'>
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