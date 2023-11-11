import React from 'react'
import Button from './Button'



const Hero = () => {
  return (
    <div className='xl:mx-[6rem] lg:mx-[2rem] mx-2 my-6'>
      <div className='relative z-[-1]'>
        <img src="hero-banner.png" alt="" className='w-full object-cover max-h-[95vh]'/>
        <div className='absolute ultra:top-96 2xl:top-96 xl:top-72 lg:top-44 sm:top-36 pad:top-20 mob:top-16 sm:mx-[4rem] pad:mx-[2rem] mob:mx-[2rem] mx-2 gap-4'>
          <h1 className='text-[#2C2C2C] 2xl:text-8xl xl:text-7xl lg:text-5xl md:text-4xl pad:text-3xl mob:text-2xl flex-wrap 2xl:w-[80%] xl:w-[70%] sm:w-[65%] mob:w-[70%] overflow-hidden font-bold'>It's Time To Explore The World</h1>
          <Button type={'button'} title={'Plan Your Trip'} margin='md:mt-8 sm:mt-4 pad:mt-2 mob:mt-2'/>
        </div>
        <div className='bg-[#f6f6f6] m-3 md:ml-[30%] pad:ml-0 sm:mt-3 sm:flex p-6 pad:hidden mob:hidden justify-around md:w-[72%] pad:w-full gap-0 z-3 bottom-16 relative right-0 object-cover shadow-lg'>
          <div className='grid gap-2'>
            <span className='xl:text-base lg:text-sm'>Destinations</span>
            <h3 className='text-[#FF715B] font-bold xl:text-xl lg:text-base'>Arab Egypt</h3>
          </div>
          <div className='grid gap-2'>
            <span className='xl:text-base lg:text-sm'>Check In</span>
            <h3 className='text-[#FF715B] font-bold xl:text-xl lg:text-base'>01 Feb, 2021</h3>
          </div>
          <div className='grid gap-2'>
            <span className='xl:text-base lg:text-sm'>Price Range</span>
            <h3 className='text-[#FF715B] font-bold xl:text-xl lg:text-base'>$500-$10,000</h3>
          </div>
          <Button type={'button'} title={'Discover Now'} />
        </div>
      </div>
    </div>
  )
}

export default Hero