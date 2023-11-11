import React, { useState } from 'react'

const Offer = () => {
    const [featureFirst, setFeatureFirst] = useState(true);
    const [featureSecond, setFeatureSecond] = useState(false);
    const [featureThird, setFeatureThird] = useState(false);

    const handleFeatureFirst = () => {
        setFeatureFirst(!featureFirst);
        setFeatureSecond(false);
        setFeatureThird(false);
    }
    const handleFeatureSecond = () => {
        setFeatureSecond(!featureSecond);
        setFeatureFirst(false);
        setFeatureThird(false);
    }
    const handleFeatureThird = () => {
        setFeatureThird(!featureThird);
        setFeatureSecond(false);
        setFeatureFirst(false);
    }
  return (
    <div id='offer' className='flex xl:mx-[6rem] lg:mx-[2rem] mx-2 my-16 xl:gap-[6rem] lg:gap-[3rem] md: gap-[2rem] justify-between'>
        <img src="lighthouse 1.png" alt="" className=' shadow-2xl shadow-[#18A0FB] object-cover md:block pad:hidden mob:hidden'/>
        <div>
            <h1 className='text-4xl ultra:text-6xl 2xl:text-5xl xl:text-4xl pad:text-3xl md:text-start pad:text-center md:w-auto pad:w-full mob:w-full font-bold w-[70%] overflow-y-hidden'>We Offer In Total 888 Tours Out The World</h1>
            <ul className='my-8'>
                <li className='grid grid-cols-features 2xl:grid-cols-features-2xl'>
                    <img src="red.png" alt="" className=' cursor-pointer' onClick={handleFeatureFirst}/>
                    <div className='xl:pl-0 lg:pl-4 sm:pl-3 pad:w-[80%] pad:pl-2 mob:pl-2'>
                        <h2 className={!featureFirst ? 'relative sm:top-2 pad:top-[-0.5rem] pad:text-2xl mob:text-xl font-bold lg:w-autp transition-all ease-in-out duration-300' : 'relative top-0 text-2xl font-bold transition-all ease-in-out duration-300'}>Best Travel Guide Always For Your Services</h2>
                        <p className={featureFirst ? 'w-100 my-4 text-[#A79997] sm:text-[1rem] pad:text-[0.75rem] mob:text-[0.65rem] relative top-0 transition-all ease-in-out duration-300 opacity-100 ultra:w-[70%]': 'relative sm:text-[1rem] pad:text-[0.75rem] top-[-100%] transition-all ease-in-out duration-300 opacity-0 mob:opacity-100 mob:top-0 mob:text-[#A79997]'}>Travel has helped us to understandsa the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life</p>
                    </div>
                </li>
                <li className='grid grid-cols-features my-8 2xl:grid-cols-features-2xl'>
                <img src="Group 3.png" alt="" className=' cursor-pointer' onClick={handleFeatureSecond}/>
                    <div className='xl:pl-0 lg:pl-4 sm:pl-3 pad:w-[80%] pad:pl-2 mob:pl-2'>
                        <h2 className={!featureSecond ? 'relative sm:top-2 pad:top-[-0.5rem] text-2xl font-bold transition-all ease-in-out duration-300' : 'relative top-0 text-2xl font-bold transition-all ease-in-out duration-300'}>World Class Services Provide For You</h2>
                        <p className={featureSecond ? 'w-100 my-4 text-[#A79997] sm:text-[1rem] pad:text-[0.75rem] relative top-0 transition-all ease-in-out duration-300 opacity-100 ultra:w-[70%]': 'relative sm:text-[1rem] pad:text-[0.75rem] top-[-100%] transition-all ease-in-out duration-300 opacity-0 mob:opacity-100 mob:top-0 mob:text-[#A79997]'}>Travel has helped us to understandsa the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life</p>
                    </div>
                </li>
                <li className='grid grid-cols-features my-8 2xl:grid-cols-features-2xl' onClick={handleFeatureThird}>
                <img src="Group 4.png" alt="" className='cursor-pointer'/>
                    <div className='xl:pl-0 lg:pl-4 sm:pl-3 pad:w-[80%] pad:pl-2 mob:pl-2'>
                        <h2 className={!featureThird ? 'relative sm:top-2 pad:top-[-0.5rem] text-2xl font-bold transition-all ease-in-out duration-300' : 'relative top-0 text-2xl font-bold transition-all ease-in-out duration-300'}>24/7 Strong Customer Support</h2>
                        <p className={featureThird ? 'w-100 my-4 text-[#A79997] sm:text-[1rem] pad:text-[0.75rem] relative top-0 transition-all ease-in-out duration-300 opacity-100 ultra:w-[70%]': 'relative sm:text-[1rem] pad:text-[0.75rem] top-[-100%] transition-all ease-in-out duration-300 opacity-0 mob:opacity-100 mob:top-0 mob:text-[#A79997]'}>Travel has helped us to understandsa the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes. Travel has helped us to understand the meaning of life</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Offer