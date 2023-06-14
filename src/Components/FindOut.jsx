import React from 'react'
import { partners } from '../constants';
import { planet, smallCircle, middleCircle, bigCircle,bigSpiderNet, shibaPlanet, earth, triangleCircle, tabsCircle,reloadCircle } from '../assets';
import Button from './Button';
import { IoPlanetSharp } from "react-icons/io5";

const FindOut = () => {
  return (
    <div className='mb-[150px]'>
    <div className='grid grid-rows-2 grid-flow-col gap-1 mb-[60px] pt-[20px]'>
        {partners.map((img, index) => (
            <img  className=' px-2 pb-2 opacity-30' key={img.icon} src={img.icon} alt="" />
        ))}
    </div>

    <div className='flex container text-white  text-center text-[27px] font-bold  leading-[30px] mb-[120px] z-50'>
        <h2>Yes you read that right, SpiderShib Inu officially enters the game to conquer the world</h2>
    </div>

            <div className='flex items-center justify-center mb-[170px] '>
                <img className='relative z-50' src={shibaPlanet} alt="" />
            <img className='z-40 w-[140px] absolute' src={planet} alt="" />
            <img className='z-30 absolute w-[190px]' src={smallCircle} alt="" />
            <img className=' z-30 absolute w-[270px]' src={middleCircle} alt="" />
            <img className='z-30 absolute w-[330px]' src={bigCircle} alt="" />
            <img className='z-40 absolute w-[320px] h-[330px] ' src={bigSpiderNet} alt="" />
            <img className='z-40 absolute w-[40px] left-[17%] top-[198%] ' src={triangleCircle} alt="" />
            <img className='z-40 absolute w-[40px] right-[25%] top-[225%] ' src={tabsCircle} alt="" />
            <img className='z-40 absolute w-[40px] right-[20%] top-[198%]' src={reloadCircle} alt="" />
        </div>
            <div className='flex justify-center '><Button/></div>
    </div>
)
}

export default FindOut