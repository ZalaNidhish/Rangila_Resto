import React from 'react'
import { Link } from "react-router-dom";
import icon from "../assets/icon.jpg"

const Navbar = () => {
  return (
    <div className='z-2 h-16 text-black flex items-center justify-between px-18 sticky top-0 left-0 right-0 bg-slate-300'>
      <div className='h-10 w-20 text-lg font-bold flex items-center justify-center gap-3'><img src={icon} alt="" className='h-full w-full object-contain rounded-2xl'/><h1 className=' text-nowrap'>Rangila Resto</h1></div>
      <nav>
        <ul className='flex space-x-7'>
          <li className='hover:underline cursor-pointer text-[14px]'><a href='#Hero'>Home</a></li>
          <li className='hover:underline cursor-pointer text-[14px]'><a href='#TrendingSlider'>Exclusive Offers</a></li>
          <li className='hover:underline cursor-pointer text-[14px]'><a href='#MenuPage'>Menu</a></li>
          <li className='hover:underline cursor-pointer text-[14px]'><a href='#'>Book Table</a></li>
          <li className='hover:underline cursor-pointer text-[14px]'><a href='#AboutUs'>About Us</a></li>
          <li className='hover:underline cursor-pointer text-[14px]'><a href='#'>Contact Us</a></li>

        </ul>
      </nav>
    </div>
  )
}

export default Navbar
