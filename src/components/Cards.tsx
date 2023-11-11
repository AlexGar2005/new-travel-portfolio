import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='flex 2xl:py-4 xl:mx-[7rem] lg:p-0 md:p-2  gap-6 items-center justify-center overflow-y-hidden md:flex-nowrap pad:flex-wrap mob:flex-wrap sm:gap-8 pad:gap-4 mob:gap-4'>
      <Card address={'icon-1.png'} title={'Choose Destination'} text={'Lorem Ipsum is simply dummy text of the printing setting'} />
      <Card address={'binocular 1.png'} title={'Explore The Place'} text={'Lorem Ipsum is simply dummy text of the printing setting'} />
      <Card address={'backpack 1.png'} title={'Start Your Journey'} text={'Lorem Ipsum is simply dummy text of the printing setting'} />
      <Card address={'ukelele 1.png'} title={"Let's Enjoy Bro"} text={'Lorem Ipsum is simply dummy text of the printing setting'} />
    </div>
  )
}

export default Cards