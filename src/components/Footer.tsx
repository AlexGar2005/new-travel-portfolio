import React from 'react'
import Button from './Button'

const Footer = () => {
  return (
    <div id='blog' className='my-8 xl:mx-[6rem] lg:mx-[2rem] mx-6 md:mx-[4rem]'>
      <div className='flex items-start 2xl:justify-center lg:justify-around 2xl:gap-[10%] lg:gap-[5%] pad:gap-[5%] mob:gap-[5%] md:flex-row md:justify-start pad:flex-wrap mob:flex-wrap '>
        <div className='2xl:w-auto md:w-[40%] sm:w-full'>
          <img src="logo.png" alt="" />
          <p className='md:mt-6 sm:my-3 text-[#A79997]'>You can dream, create, design, and build the most wonderful place.</p>
          <div className='my-6 sm:my-3 flex gap-4'>
            <img src="Phone1.png" alt="" className='lg:w-auto md:w-[12%] lg:h-auto md:h-[12%]'/>
            <span className=' text-[#A79997]'>+0123 456 987, +0123 456 987</span>
          </div>
          <div className='my-6 sm:my-3 flex gap-4'>
            <img src="email.png" alt=""  className='lg:w-auto md:w-[12%] lg:h-auto md:h-[12%]'/>
            <span className=' text-[#A79997]'>yourmailaddress@gmail.com</span>
          </div>
          <div className='my-6 sm:my-3 flex gap-4'>
            <img src="map.png" alt=""  className='lg:w-auto md:w-[12%] lg:h-auto md:h-[12%]'/>
            <span className=' text-[#A79997]'>www.yourwebsitename.com</span>
          </div>
        </div>
        <div className='mt-4'>
          <h1 className='text-2xl font-bold'>Quick Links</h1>
          <ul className='md:my-6 sm:my-3'>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>About Us</a>
            </li>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>Destinations</a>
            </li>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>Latest Blog</a>
            </li>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>Our Team</a>
            </li>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className='mt-4'>
          <h1 className='text-2xl font-bold'>Support</h1>
          <ul className='md:my-6 sm:my-3'>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>Customer Support</a>
            </li>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>Privacy & Policy</a>
            </li>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>Forum</a>
            </li>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>Tour Guid</a>
            </li>
            <li className='my-2'>
              <a href="" className=' text-[#A79997] transition-all duration-300 hover:text-[#ff715b] cursor:pointer'>Terms & Condition</a>
            </li>
          </ul>
        </div>
        <div className='mt-4 flex flex-col'>
          <h1 className='md:mb-10 sm:mb-6 text-2xl font-bold'>Newsletter</h1>
          <input type="text" className='bg-[#F8F8F8] border-[#F5EBE9] py-3 px-8 mb-4'/>
          <Button type={'button'} title={'Subscribe Now'} />
        </div>
      </div>
    </div>
  )
}

export default Footer