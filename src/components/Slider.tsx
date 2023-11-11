import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { data } from './Testimonials';



const Slider = ({}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [images, setImages] = useState(data);
  const slideVariants = {
    hiddenRight: {
      x: "100%",
      opacity: 0,
      display: 'none',
    },
    hiddenLeft: {
      x: "-100%",
      opacity: 0,
      display: 'none',
    },
    visible: {
      x: "0",
      opacity: 1,
      display: 'block',
      transition: {
        duration: 1,
      },
      backgroundColor: 'white',
      padding: '5%',

      borderTop: '#FF715B solid 10px',
      borderLeft: '#FF715B solid 10px',
    },
    exit: {
      opacity: 0,
      display: 'none',
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };
  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };
  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      y: -10,
      scale: 1.2,
      transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.2 },

    },
  };



  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

    return (
        <div className='text-center'>
            <h1 className='ultra:text-[3.75rem] 2xl:text-[2.75rem] xl:text-[2.2rem] md:text-[1.8rem] sm:text-[1.6rem] pad:text-[1.4rem] mob:text-[1.3rem] lg:leading-[2.25rem] font-bold overflow-y-hidden 2xl:leading-[4.25rem] xl:leading-[2.75rem]'>What Our Happy Customers Say About Us</h1>
            <div className="carousel lg:my-8 md:my-4 pad:my-3">
                <div className="carousel-images shad">
                    <AnimatePresence>
                        <motion.div
                            key={currentIndex}
                            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
                            animate="visible"
                            exit="exit"
                            variants={slideVariants}
                        >
                            <div key={currentIndex}>
                                <div className='grid 2xl:grid-cols-test xl:grid-cols-test-xl lg:grid-cols-test-lg md:grid-cols-test-md pad:grid-cols-test-lg g mob:grid-cols-test-lg grid-rows-1 mb-4'>
                                    <img src={images[currentIndex].img} className='w-[50px] h-[50px] row-span-2 ml-[80%] ultra:ml-[75%] mt-[5px] ultra:w-[65px] ultra:h-[65px]'/>
                                    <h2 className='text-left ultra:text-2xl text-xl font-bold 2xl:ml-6 xl:ml-12 lg:ml-10 pad:ml-12 mob:ml-12 mob:text-[1rem]'>{images[currentIndex].title}</h2>
                                    <span className='text-left ultra:text-2xl text-xl font-bold 2xl:ml-6 xl:ml-12 lg:ml-10 pad:ml-12 mob:ml-12 mob:text-[1rem]'>{images[currentIndex].career}</span>
                                </div> 
                                <div>
                                    <p className="text-[#A79997] 2xl:text-base xl:text-xs pad:text-[.7rem] mob:text-[.8rem] ">{images[currentIndex].paragraph}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            <div className="carousel-indicator sm:mt-[20px] pad:mt-[10px] mob:mt-[10px]">
                {images.map((_, index) => (
                <motion.div
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    initial="initial"
                    animate={currentIndex === index ? "animate" : ""}
                    whileHover="hover"
                    variants={dotsVariants}
                ></motion.div>
                ))}
            </div>
    </div>
        </div>
  )
}

export default 
Slider