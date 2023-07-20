import React from 'react'
import {bgJoin,shibaJoin} from '../assets'
import {communityLinks} from '../constants'

const JoinCommunity = () => {
  return (
        <section className="bg-[#162758]" style={{backgroundImage:{bgJoin}}}>
        <h2 className='text-white font-bold text-[40px] text-center leading-[47px] pb-[50px] pt-[60px] px-[10px]'>Join our SpiderShib Inu Community</h2>
        <div className='flex flex-wrap  justify-center pb-[70px]'>
        {communityLinks.map((item) => (
              <img key={item.id} className='px-[15px] w-[90px] py-[15px]' src={item.icon} alt="" />
              ))}
              </div>
              <img className='mx-auto pb-[50px]' src={shibaJoin} alt="" />
              <div className='border border-[#FFFFFF0D] rounded-[20px]  text-white items-center text-start bg-[#0000004D] mb-[175px] mx-[15px] px-[15px]'>
          <p className='pb-[15px] text-[13px] leading-[14px] font-normal opacity-80'>
            <p className='pt-[15px] pb-[10px] font-medium text-[15px] leading-[18px] opacity-40'>SpiderShiba Inu’s Contract address:</p>
            0xe4C6E7a0F696Fb2356A187020eb13E742792Fdcc
          </p>
        </div>
        <div className='border border-[#FFFFFF0D] text-white items-center text-center bg-[#0D1428] mb-[175px] '>
          <p className='py-[15px] text-[20px] leading-[24px] font-normal opacity-40'>Copyright © 2021 SpiderShiba Inu. All Rights Reserved.
          </p>
        </div>
        </section>
  )
}

export default JoinCommunity