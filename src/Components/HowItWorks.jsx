import React from 'react'
import { features } from '../constants'

const HowItWorks = () => {
  return (
  <div className='mb-[150px]'>
     <h2 className='font-sf-display font-bold text-[40px]  leading-[47px] text-white text-center mb-[50px]' >How it works?</h2> 
     
      <div className='px-[15px] md:flex md:flex-row'>
          {features.map((item) => (
            <section className='bg-[#384D70]  mb-[30px] rounded-[20px] px-[25px] text-white flex flex-col md:w-[33.3%]  md:mr-8  md:last:mr-0'>
            <img className='w-[220px] py-[20px]' key={item.id} src={item.icon} alt="" />
            <h3 className='font-sf-display text-[25px] font-semibold leading-[35px] pb-[15px]'>{item.title}</h3>
            <p className=' opacity-30 text-[15px] leading-[17px] pb-[15px]'>{item.description}</p>
            <p className='leading-[29px] font-sf-display font-medium text-[19px] opacity-70 mb-[40px]'>{item.content}</p>
            </section>
          ))}
      </div>
    </div>
  )
}

export default HowItWorks