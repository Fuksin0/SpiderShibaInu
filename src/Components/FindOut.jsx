import React from 'react'
import { partners } from '../constants';
import { planet, smallCircle, middleCircle, bigCircle,bigSpiderNet, shibaPlanet, earth, triangleCircle, tabsCircle,reloadCircle } from '../assets';
import Button from './Button';
import { IoPlanetSharp } from "react-icons/io5";

const FindOut = () => {
  return (
    <div className='mb-[150px]'>
    <div className=' mb-[60px] pt-[20px] flex flex-wrap px-[10px]'>
        {partners.map((img, index) => (
            <img  className='mx-auto px-2 pb-4 opacity-30 w-[30%] sm:w-[25.3%] lg:w-[16.6%]' key={img.icon} src={img.icon} alt="" />
        ))}
    </div>

    <div className='flex container text-white  text-center text-[27px] font-bold  leading-[30px] mb-[120px] z-50 mx-auto'>
        <h2>Yes you read that right, SpiderShib Inu officially enters the game to conquer the world</h2>
    </div>

            <div className='flex items-center justify-center mb-[170px] '>
                <img className='relative z-50' src={shibaPlanet} alt="" />
            <img className='z-40 w-[140px] absolute' src={planet} alt="" />
            <img className='z-30 absolute w-[190px]' src={smallCircle} alt="" />
            <img className=' z-30 absolute w-[270px]' src={middleCircle} alt="" />
            <img className='z-30 absolute w-[330px]' src={bigCircle} alt="" />
            <img className='z-40 absolute w-[320px] h-[330px] ' src={bigSpiderNet} alt="" />
            <div className='sm:hidden'>
            <img className='z-40 absolute w-[40px]  left-[30%] top-[140%] ss:top-[107%] ss:left-[35%] sm:left-[38%] ' src={triangleCircle} alt="" />
            <img className='z-40 absolute w-[40px] left-[65%] top-[145%] ss:top-[110%] sm:left-[60%]  ' src={tabsCircle} alt="" />
            <img className='z-40 absolute w-[40px] left-[45%] top-[165%] ss:top-[130%] sm:left-[50%] ' src={reloadCircle} alt="" />
            </div>
        </div>
            <div className='flex justify-center '>
                <Button/>
                </div>
    </div>
)
}

export default FindOut