import React from 'react'
import { partners } from '../constants';
import { planet, smallCircle, middleCircle, bigCircle,bigSpiderNet, shibaPlanet } from '../assets';

function FindOut() {
  return (
    <div className='bg-[#101932] bg-cover'>
    <div className='grid grid-rows-2 grid-flow-col gap-1 mb-[60px] pt-[20px]'>
        {partners.map((img, index) => (
            <img  className=' px-2 pb-2 opacity-30' key={img.icon} src={img.icon} alt="" />
        ))}
    </div>

    <div className='flex container text-white  text-center text-[27px] font-bold  leading-[30px] mb-[45px] z-50'>
        <h2>Yes you read that right, SpiderShib Inu officially enters the game to conquer the world</h2>
    </div>

            <div className='flex items-center justify-center '>
                <img className='relative z-40' src={shibaPlanet} alt="" />
            <img className='z-30 w-1/2 absolute' src={planet} alt="" />
            <img className='z-30 absolute' src={smallCircle} alt="" />
            <img className=' z-30 absolute' src={middleCircle} alt="" />
            <img className='z-40 absolute' src={bigCircle} alt="" />
            <img className='z-40 absolute ' src={bigSpiderNet} alt="" />
        </div>
    </div>
)
}

export default FindOut