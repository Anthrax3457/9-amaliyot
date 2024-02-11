import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [active, setActive] = useState('home')
  // const [show, setShow] = useState('home')
  return (
    <>
      <header className='flex items-center md:justify-start md:gap-[6.8rem] lg:gap-[20.6rem] xl:gap-[29em] h-[80px] md:pl-[2.2rem] bg-black justify-between pl-[1.5rem] pr-[1.5rem] lg:pl-[4.1rem] xl:pl-[7em]'>
        <p className='text-[25px] font-bold text-[#F1C50D] tracking-widest'><Link>HOLIDAY</Link></p>
        <ul className=' items-center hidden md:gap-[0.9rem] md:flex '>
          <li onClick={()=>setActive('home')} className={`flex pt-[29px] items-center justify-center text-[white] h-[90px] w-[110px] text-[0.9em] ${active ==='home' ? 'bg-[#f1c50d]' : 'bg-transparent'}`}>
            <Link to='/'>HOME</Link>
          </li>
          <li onClick={()=>setActive('about')} className={`flex pt-[29px] items-center justify-center text-[white] h-[90px] w-[100px] text-[0.9em] ${active ==='about' ? 'bg-[#f1c50d]' : 'bg-transparent'}`}>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li onClick={()=>setActive('tour')} className={`flex pt-[29px] items-center justify-center text-[white] h-[90px] w-[140px] text-[0.9em] ${active ==='tour' ? 'bg-[#f1c50d]' : 'bg-transparent'}`}>
            <Link to='/tour'>OUR TOURS</Link>
          </li>
          <li onClick={()=>setActive('contact')} className={`flex pt-[29px] items-center justify-center text-[white] h-[90px] w-[120px] text-[0.9em] ${active ==='contact' ? 'bg-[#f1c50d]' : 'bg-transparent'}`}>
            <Link to='/contact'>CONTACT</Link>
          </li>
        </ul>
        <p className='md:hidden text-white bg-[#151515] bg-opacity-[0.7] p-[10px] text-[3.4rem]'>
          <IoMenu />
        </p>
      </header>
    </>
  )
}

export default Header