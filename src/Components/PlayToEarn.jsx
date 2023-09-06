import React from 'react'
import { PlayAndEarnLogo } from '../assets'
import { play } from '../constants'


const PlayToEarn = () => {
  return (
    <div className='text-white font-sf-display text-center mb-[145px]'>
        <h2 className='text-[40px] leading-[47px] font-bold'>Play To Earn</h2>
        <p className='leading-[42px] text-[21px] opacity-50 font-normal mb-[50px]'>Many ways to earn tokens and NFTs</p>

        <div className='bg-[#071022] mx-[15px]  rounded-[30px] mb-[30px] md:flex'>
            <img className='mx-auto px-[10px] pt-[20px] md:pt-[36px] md:pr-[25px] pb-[30px] w-[345px] ss:w-[75%] sm:w-[70%] md:w-[85%] mb-[30px]' src={PlayAndEarnLogo} alt="" />
            <div className='md:text-left md:pr-[25px]'>
            <h4 className='text-[24px] leading-[28px] font-bold mb-[10px] md:pt-[35px]'>Game plot and goal</h4>

            <p className='px-[15px] md:px-[0px] pb-[15px] 
            opacity-60 md:text-[18x] text-[16px]'>Mary Jane has been kidnapped by Green Goblin, who has no intention of letting her escape, so she flees to New York City, going through different scenarios that will be part of the game!
      </p>
      <p className='px-[15px] md:px-[0px] pb-[15px] opacity-60 text-[16px] md:text-[18px]'>
            The goal is to accumulate as many game coins and points as possible, which will then be transformed into the game token based also on the attempts used to complete the level.
            </p>
            <p className='px-[15px] md:px-[0px] pb-[15px] opacity-60 text-[16px] md:text-[18px]'>
            Once the Green Goblin is defeated and Mary Jane is safed, the game is over, but we don't stop there!</p>
            </div>
        </div>

        <div className='md:flex md:flex-row md:mx-[15px]'>
        {play.map((index) => (
            <div className='mb-[30px] mx-[20px] rounded-[30px] md:w-[50%] md:flex md:flex-row md:px-[15px] md:pt-[40px]' style={{ backgroundColor: index.bg }}>
            <img className='mx-auto w-[135px] h-[135px] pt-[20px] mb-[20px] md:pr-[15px]' key={index.id} src={index.icon} alt="" />
            <div className=''>
            <h4 className='mb-[15px] text-[30px] font-sf-display font-bold text-center leading-[35px]' >{index.title}</h4>
            <p className='pb-[50px] text-[22px] font-normal leading-[26px]  opacity-80 px-[20px] md:px-[0px]' >{index.content}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default PlayToEarn