import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className='xl:mx-[6rem] lg:mx-[2rem] mx-2 my-6 grid grid-cols-3'>
        <img src="logo.png" alt="" className='sm:w-[150px] w-[100px] flex items-center'/>
        <ul className='hidden sm:flex gap-8 sm:justify-center lg:col-1 sm:col-span-2'>
            <li>
                <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FF715B]'>Destination</a>
            </li>
            <li>
                <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FF715B]'>Offer</a>
            </li>
            <li>
                <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FF715B]'>Tour</a>
            </li>
            <li>
                <a href="/" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FF715B]'>Blog</a>
            </li>
        </ul>
        <div onClick={handleNav} className="flex sm:hidden col-start-3 justify-center">
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
        </div>
        <div className={nav ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#ebebeb]  ease-in-out duration-500 z-2" : 'z-2 fixed left-[-100%] h-full ease-in-out duration-500'}>
        <h1 className="w-full text-3xl font-bold text-[#FF715B] m-4">RAVEL</h1>
        <ul className='p-4 grid gap-6 text-xl'>
            <li>
                <a href="#destination" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FF715B]'>Destination</a>
            </li>
            <li>
                <a href="#offer" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FF715B]'>Offer</a>
            </li>
            <li>
                <a href="#tour" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FF715B]'>Tour</a>
            </li>
            <li>
                <a href="#blog" className='text-[#2C2C2C] transition-all duration-300 hover:text-[#FF715B]'>Blog</a>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar