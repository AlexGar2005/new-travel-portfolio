import React from 'react'

const GetApp = () => {
  return (
    <div className='xl:mx-[6rem]  xl:my-12 lg:my-0 md:my-4 pad:my-8 relative overflow-y-hidden pad:mx-0 mob:my-6'>
        <img src="download apps.png" alt="" className='w-full'/>
        <div className='absolute ultra:top-[16rem] 2xl:top-[10rem] xl:top-[8rem] xl:ml-[6rem] lg:top-[6rem] lg:ml-[4rem] sm:top-[5rem] sm:ml-[4rem] pad:top-[2.5rem] pad:ml-[2rem] mob:top-[2.5rem] mob:ml-[2rem] '>
            <h1 className='2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl font-bold w-[70%] 2xl:leading-[4.25rem] xl:leading-[3.5rem] mob:leading-[1.25rem] pad:w-[60%] overflow-y-hidden'>Download Now Travel Community Apps</h1>
            <div className='lg:my-8 md:my-4 pad:my-3 mob:my-2  flex lg:gap-8 md:gap-6 pad:gap-2 mob:gap-1'>
                <img src='google play.png' className='cursor-pointer 2xl:w-auto 2xl:h-auto xl:w-[20%] xl:h-[20%] lg:h-[18%] lg:w-[18%] md:h-[17%] md:w-[17%] pad:h-[17%] pad:w-[17%] mob:h-[16%] mob:w-[16%] '/>
                <img src='apple store.png' className='cursor-pointer 2xl:w-auto 2xl:h-auto xl:w-[20%] xl:h-[20%] lg:h-[18%] lg:w-[18%] md:h-[17%] md:w-[17%] pad:h-[17%] pad:w-[17%] mob:h-[16%] mob:w-[16%]'/>
            </div>
        </div>
    </div>
  )
}

export default GetApp