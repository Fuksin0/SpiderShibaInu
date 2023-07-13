import React from 'react'
import Swiper from './SwiperJs/Swiper'
import SwiperSlider from './SwiperJs/Swiper'

import { person1,person2,person3,person4 } from '../assets'
import { team } from '../constants'

const Team = () => {
  return (
    <div className='mb-[165px]'>
       <h2 className='text-white font-bold text-[40px] text-center leading-[47px] mb-[35px]'>Team</h2>
       <SwiperSlider/>
    </div>
  )
}

export default Team