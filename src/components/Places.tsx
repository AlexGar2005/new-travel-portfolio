import React from 'react'
import PlaceCard from './PlaceCard'
import Button from './Button'

const Places = () => {
  return (
    <div id='tour' className='xl:mx-[6rem] lg:mx-[2rem] mx-2 my-6'>
        <h1 className='ultra:text-6xl 2xl:text-5xl md:text-4xl pad:text-3xl mob:text-3xl mob:mb-4 xl:mb-8 lg:mb-2 text-center font-bold overflow-y-hidden'>Choose Your Destination</h1>
        <div className='flex justify-center xl:gap-16 lg:gap-6 lg:mt-24 md:mt-12 pad:mt-6 lg:flex-row pad:flex-col mob:flex-col'>
          <div className='relative'>
            <div className='triangle mb-[25px] pad:hidden mob:hidden'></div>
            <PlaceCard address={'place-1 1.png'} title={'Jerusalem, Israel'} price={'$3000'} reviews={'1k Reviews'} />
          </div>
          <div className='relative'>
            <PlaceCard address={'place-2 1.png'} title={'Santorini, Old'} price={'$2000'} reviews={'2k Reviews'} />
            <Button type={'button'} title={'View All Pages'} margin='absolute bottom-0 2xl:left-[8.5rem] xl:left-[5.5rem] lg:left-[4rem] pad:hidden mob:hidden'/>
          </div>
          <div>
            <div className='triangle-2 mb-[25px] pad:hidden mob:hidden'></div>
            <PlaceCard address={'place-3 1.png'} title={'Klin, Russia'} price={'$1400'} reviews={'1 Review'} />
          </div>
        </div>
    </div>
  )
}

export default Places