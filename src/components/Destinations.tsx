import React from 'react'
import Button from './Button'

const Destinations = () => {
  return (
    <div id='destination' className=' bg-gradient-to-r from-white from-60% md:to-[#c4c4c4] xl:mx-[6rem] lg:mx-[2rem] mx-2 mob:mx-0 my-16 flex justify-between gap-3 overflow-y-hidden min-h-[40vh] md:flex-nowrap pad:flex-wrap mob:flex-wrap sm:to-[#fff]'>
        <div className='xl:w-[45%] lg:w-[65%] md:w-[60%] lg:text-start pad:text-center mob:text-center'>
            <h1 className='text-3xl font-bold ultra:text-6xl 2xl:text-5xl lg:text-4xl overflow-y-hidden'>Top <span className='text-[#ff715b]'>Destinations </span> In The World</h1>
            <p className='text-[#A79997] text-[1rem] ultra:text-2xl ultra:my-6 xl:text-xl lg:text-base w-[90%] mt-4 md:text-start sm:w-full'>It is a long established fact that a reader will be the distracted by the readable content of a page when looking at its layout from it.</p>
            <Button type={'button'} title={'Discover More'} margin='my-4' />
        </div>
        <div className='flex pad:flex-row mob:flex-col mob:m-0 mob:w-full mob:h-full'>
          <img src="Cuba-city 1.png" alt="/" className='transition-all duration-300 hover:scale-105 object-cover cursor-pointer pad:w-auto mob:w-full pad:h-auto mob:h-full'/>
          <img src="Paris-City.png" alt="" className='transition-all duration-300 hover:scale-105 object-cover cursor-pointer pad:w-auto mob:w-full pad:h-auto mob:h-full'/>
          <img src="japan.png" alt="" className='transition-all duration-300 hover:scale-105 object-cover cursor-pointer pad:w-auto mob:w-full pad:h-auto mob:h-full'/>
        </div>
        
    </div>
  )
}

export default Destinations