import React from 'react'
import { partners } from '../constants';

const Partners = () => {
  return (
    <div>
      <h2 className='text-white font-bold text-[40px] text-center leading-[47px] mb-[25px] '>Partners &<br/>Investors</h2>
      <div className='grid grid-rows-2 grid-flow-col gap-1 mb-[75px] pt-[20px]'>
        {partners.map((img, index) => (
            <img  className=' px-2 pb-2 opacity-30' key={img.icon} src={img.icon} alt="" />
        ))}
    </div>
    </div>
  )
}

export default Partners