import React from 'react'
import { roadmapCards } from '../constants'
import { roadmapEnd } from '../assets'

const Roadmap = () => {
  return (
    <div>
        <h2 className=' text-white font-bold text-[40px] text-center leading-[47px] mb-[50px]'>Roadmap</h2>
          {roadmapCards.map((card) => (
    <div className='bg-[#384D7033] rounded-[30px] mx-[20px] mb-[40px]'>
        <div className='px-[35px] pt-[35px] opacity-60'>
                <p className='text-center bg-[#384D70] rounded-[30px]  text-[65px] font-bold   text-white  mb-[30px] leading-[77px] w-[110px] h-[95px] py-[11px]'>{card.number}</p>  
              <p className='text-[30px] font-medium leading-[35px] text-white mb-[15px] '>{card.date}</p>
              <ul>
                <li className=' text-white text-[18px] leading-[28px] font-normal pb-[50px]' dangerouslySetInnerHTML={{__html: card.content}}/>
              </ul>  
        </div> 
    </div>
          ))}   
          <img className='w-full mb-[75px]' src={roadmapEnd}/>
    </div>
  )
}

export default Roadmap