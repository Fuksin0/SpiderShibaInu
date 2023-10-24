import React from 'react'
import { roadmapCards } from '../constants'
import { roadmapEnd } from '../assets'

const Roadmap = () => {
  return (
    <div className='sm:flex sm:flex-1 sm:flex-col sm:self-center'>
        <h2 className=' text-white font-bold text-[40px] text-center leading-[47px] mb-[50px]'>Roadmap</h2>
          {roadmapCards.map((card) => (
    <div className='bg-[#384D7033] rounded-[30px] mx-[20px] mb-[40px]  sm:flex sm:max-h-[450px] sm:max-w-[50%] sm:w-[45%] sm:odd:place-self-end md:odd:items-end sm:mx-[25px] md:mx-[75px] xl:mx-[100px] xl:w-[50rem] xl:even:w-[50rem] xl:even:max-w-[50rem] md:w-[35rem] md:even:max-w-[30rem] md:odd:place-self-end xl:justify-start md:nth-[1n+5]:bg-[#384D70]'>
        <div className=' md:flex px-[35px] pt-[35px] opacity-60 md:opacity-90'>
          <div className='md:pr-[30px] lg:pr-[35px]'>
            <p className='text-center bg-[#384D70] rounded-[30px]  text-[65px] font-bold   text-white  mb-[30px] leading-[77px] w-[110px] h-[95px] py-[11px]  md:bg-[#fff] md:bg-opacity-10 md:text-opacity-70'>{card.number}</p> 
          </div>
          <div>
            <p className='text-[30px] font-medium leading-[35px] text-white mb-[15px] '>{card.date}</p>
              <ul>
                <li className=' text-white text-[18px] leading-[28px] font-normal pb-[50px]' dangerouslySetInnerHTML={{__html: card.content}}/>
              </ul> 
              </div>     
        </div> 
    </div>
          ))}   
          <img className='w-full mb-[75px]' src={roadmapEnd}/>
    </div>
  )
}

export default Roadmap