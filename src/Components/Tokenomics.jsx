import React from 'react'
import { GraphicTokenomics, roadmapEnd } from '../assets'

const Tokenomics = () => {
  return (
    <div className='bg-[#101D3F] font-sf-display'>
        <h2 className='text-white font-bold text-[40px] text-center leading-[47px] pb-[50px] pt-[70px]'>Tokenomics</h2>
        <img className='m-auto mb-[50px]' src={GraphicTokenomics} alt="" />
        <div className=' bg-[#000000] rounded-[15px] bg-opacity-30 mx-[15px] px-[25px] mb-[60px]'>
          {/*Внутри этого коммента зелёная полоска*/}
          <div className='pt-[25px]'>
            <div className="mb-[10px] h-1 w-[12.5%] bg-neutral-200 dark:bg-neutral-600 rounded-[12px]">
  <div className="h-1 bg-violet-900 rounded-[12px]"></div>
</div>
</div>
{/*Это зелёная полоска*/}
          <p className='text-[27px] leading-[32px] font-semibold text-[#FFFFFF] mb-[10px] '>19% on marketing</p>
          <p className='leading-[21px] text-[18px] font-normal text-[#FFFFFF] opacity-30 pb-[20px]'>Thanks to our ecosystem you will be able to earn passively and actively</p>
        </div>
        <img className='w-full mb-[70px]' src={roadmapEnd} alt="" />
        </div>
  )
}

export default Tokenomics