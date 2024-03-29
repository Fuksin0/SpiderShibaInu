import {React, useState} from 'react'

import {logo,close,menu, mobileClose, mobileMenu } from '../assets'
import { navLinks } from '../constants'
const Navbar = ()  => {
  const [toggle, setToggle] = useState(false);

    toggle?document.body.style.overflow = 'hidden':document.body.style.overflow = 'auto'; //prevent scrolling when burger menu toggled(opened)
  

  return (
    <nav className='flex pt-[16.5px] xl:container justify-between items-center xl:mx-auto xl:px-4 lg:mx-2 md:mx-2 container mb-[50px]'>
      <img className='w-[135px] md:w-[100px] lg:w-[130px] xl:w-[250px]' src={logo} alt={logo} />

      <ul className='sm:flex hidden justify-evenly items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key={nav.id}
            className=' text-white font-sf-display text-[12px] font-semibold leading-5 xl:mr-[25px] xl:text-[15px] lg:mr-[10px]
            md:text-[8px] md:mr-[1px] lg:text-[12px]
            '
          >
            <a href={`#${nav.id}`}>
            {nav.title}
            </a>
          </li>
        ))}
        <div>
          <a href='#' className='border border-[#AC1216] rounded-xl  text-white hover:text-[#ff7849] text-[15px] font-semibold hover:border-white items-center text-center px-5 py-2 bg-[#AC1216] hover:bg-white lg:px-3 lg:py-3 lg:text-[12px] md:text-[10px]'>Join Community</a>
        </div>
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center z-20'>

          <img src={toggle ? mobileClose : mobileMenu}
          className='w-[30px] h-[40px] object-contain z-10'
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
          />
          <div className={`${toggle ? 'flex' : 'hidden'} pt-[23px] pl-[8px] bg-[#384D70] absolute w-full h-screen top-0 left-0 right-0 bottom-0 place-items-baseline min-w-[140px] rounded-xl`}>
          <ul className='flex justify-end  flex-col flex-1'>
          <img className='w-[135px] mb-[53px]' src={logo} alt={logo} />
        {navLinks.map((nav, index) => (
          <li key={nav.id}
            className=' text-white font-sf-display text-[19px] font-semibold leading-5 mb-8'
          >
            <a href={`#${nav.id}`}>
            {nav.title}
            </a>
          </li>
        ))}
        <div className='mx-auto pt-[35px]'>
          <a href='#' className='border border-[#AC1216] rounded-xl  text-white hover:text-[#ff7849] text-[15px] font-semibold hover:border-white items-center text-center px-[60px] py-[14px] bg-[#AC1216] hover:bg-white lg:px-3 lg:py-3 lg:text-[12px] md:text-[10px]'>Join Community</a>
        </div>
      </ul>
          </div>
      </div>
    </nav>
    )
}

export default Navbar;
