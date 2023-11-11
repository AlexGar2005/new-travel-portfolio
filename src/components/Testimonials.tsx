import React from 'react'
import Slider from './Slider'
import { motion } from 'framer-motion';
export const data = [
  {
    img: 'Ellipse 27.png',
    title: 'Md Shamim Hossain',
    career: 'UI/UX Designer',
    paragraph: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
  },
  {
    img: 'Ellipse 27.png',
    title: 'Md Shamim ',
    career: 'UI/UX Designer',
    paragraph: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
  },
  {
    img: 'Ellipse 27.png',
    title: ' Shamim Hossain',
    career: 'UI/UX Designer',
    paragraph: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
  },
  {
    img: 'Ellipse 27.png',
    title: 'Shaman',
    career: 'UI/UX Designer',
    paragraph: 'Jetrips Hotel is an excellent choice for anybody for considering hosting their events there. Top levela facilities and excellent staff make for a brilliantad environment within which to operate. The hotel is meticulous in its planning.',
  },
];

const Testimonials = () => {
  return (
    <div className='xl:mx-[6rem] lg:mx-[2rem] mx-6 xl:my-32 lg:my-16 lg:mb-0 grid xl:grid-cols-3 lg:grid-cols-test-images'>
      <div className='lg:block pad:hidden mob:hidden'>
        <motion.img src="image 7.png" alt="" className='relative xl:left-64 lg:left-16 cursor-pointer xl:w-auto xl:h-auto lg:w-[100px] lg:h-[100px]' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
        <motion.img src="image 5.png" alt="" className='relative ultra:left-52 2xl:left-32 lg:left-8 cursor-pointer xl:w-auto xl:h-auto lg:w-[125px] lg:h-[125px]' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
        <motion.img src="image 6.png" alt="" className='relative ultra:left-[24rem] 2xl:left-[16rem] xl:left-[12rem] lg:left-[0rem] xl:bottom-16 lg:bottom-8 cursor-pointer xl:w-auto xl:h-auto lg:w-[130px] lg:h-[130px]' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
        <motion.img src="image 8.png" alt="" className='relative xl:left-36 lg:left-16 bottom-[5rem] cursor-pointer xl:w-auto xl:h-auto lg:w-[110px] lg:h-[110px]' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
      </div>
      <Slider/>
      <div className='lg:block pad:hidden mob:hidden'>
        <motion.img src="image 01.png" alt="" className='relative xl:left-48 lg:left-16 xl:w-auto xl:h-auto lg:w-[115px] lg:h-[115px]' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
        <motion.img src="image 2.png" alt="" className='relative ultra:left-80 2xl:left-64 lg:left-20 xl:w-auto xl:h-auto lg:w-[135px] lg:h-[135px]' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
        <motion.img src="image 4.png" alt="" className='relative xl:left-36 lg:left-12 xl:w-auto xl:h-auto lg:w-[140px] lg:h-[140px]' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}/>
      </div>
    </div>
  )
}

export default Testimonials