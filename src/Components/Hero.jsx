import React from 'react'
import RunningString from './RunningString'

import { herobg, herobigshiba } from '../assets'

function Hero() {
  return (
    <div>
    <div className='text-white container font-sf-display flex flex-col z-10'>
      <h1 className=' font-extrabold text-[50px] leading-[50px] mb-[10px]'>
      <span className='text-[#E11D2E]'>Who is <span className='text-white'>mr.</span>
      <br/>
      </span>Spidershiba<br/> Inu?</h1>
      <span className='text-[#71768E] text-[15px] mb-[40px]'>It's a hybrid of Shiba and Spiderman.... but</span>
      <span className='text-[#A0A3B5] text-[22px] mb-[30px]'>It's not only for pump and dump by Elon tweets. 
This is real NFT game with Achiements, Goals and nice gameplay with tokenization</span>

    <img 
    src={herobigshiba} 
    alt="heroShiba"
    className='mb-[50px] w-[200px] h-[180px] mx-auto'
    />
    <div className='mx-auto mb-[55px] '>
          <a href='#' className='border border-[#AC1216] rounded-xl  text-white hover:text-[#ff7849] text-[19px]  font-bold hover:border-white items-center text-center px-[70px] py-[20px] bg-[#AC1216] '>Join Community</a>
        </div>
        <div className='mx-auto mb-[55px]'>
          <a href='#' className='border border-[#FFFFFF0D] rounded-[10px]  text-white text-[18px] font-medium items-center text-center px-[45px] py-[20px] bg-[#FFFFFF0D]'>More about SpiderShiba Inu</a>
        </div>
        <div className='mx-auto border border-[#FFFFFF0D] rounded-[10px]  text-white text-[14px] font-medium items-center text-center bg-[#FFFFFF0D] mb-[34px]'>
          <a href='#'>
            <span>Contract address:</span><br/>
            0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc</a>
        </div>
    </div>

    <div className='bg-[#5A4039]'>
    <RunningString/>
    </div>

    </div>
    
  )
}

export default Hero