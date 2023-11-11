import React from 'react';
import Button from './Button';
type PlaceProps = {
    address: string;
    title: string;
    price:string;
    reviews: string;
}

const PlaceCard = ({address, title, price, reviews}:PlaceProps) => {
  return (
    <div className='relative overflow-y-hidden border-gray-400'>
        <img src={`${address}`} alt="" className='object-cover relative sm:w-full'/>
        <div className='xl:absolute bottom-0 right-0 xl:ml-[2rem] mr-0 gap-4 shadow-2xl lg:relative'>
            <div className='pad:p-4 mob:p-3 bg-gray-100 ultra:p-4 lg:p-3   grid ultra:grid-cols-places pad:grid-cols-places-md mob:grid-cols-places lg:justify-around w-full gap-0 z-3 relative right-0 object-cover lg:pb-1'>
                <div>
                    <h2 className='xl:text-lg lg:text-xl md:text-2xl pad:text-xl font-bold'>{title}</h2>
                    <div className='lg:grid 2xl:grid-cols-inCard xl:grid-cols-inCard-xl lg:grid-cols-inCard-lg pad:flex mob:flex sm:gap-4 pad:gap-3 ultra:gap-2 lg:gap-1 mob:gap-2 mt-1'>
                        <span className='text-[#FF715B] font-bold 2xl:text-base xl:text-sm lg:text-xs'>{price}</span>
                        <div className='grid grid-cols-5 items-center xl:mb-[0.1rem] lg:mb-[1.2rem] object-cover'>
                            <img src="Star 1.png" alt="" className='ultra:w-[17px] xl:w-[15px] ultra:h-[17px] xl:h-[15px] object-cover'/>
                            <img src="Star 1.png" alt="" className='ultra:w-[17px] xl:w-[15px] ultra:h-[17px] xl:h-[15px] object-cover'/>
                            <img src="Star 1.png" alt="" className='ultra:w-[17px] xl:w-[15px] ultra:h-[17px] xl:h-[15px] object-cover'/>
                            <img src="Star 1.png" alt="" className='ultra:w-[17px] xl:w-[15px] ultra:h-[17px] xl:h-[15px] object-cover'/>
                            <img src="Star 1.png" alt="" className='ultra:w-[17px] xl:w-[15px] ultra:h-[17px] xl:h-[15px] object-cover'/>
                        </div>
                        <span className='text-[#FF715B] font-bold object-cover flex-nowrap 2xl:text-base xl:text-sm lg:text-xs'>{reviews}</span>
                    </div>
                </div>
                <button className=" ml-3 w-[50px] h-[50px] p-3 py-2 md:py-1 gap-3 border-none transition-all bg-[#FF715B] duration-300 hover:bg-[#f2543c] text-white $ && 'w-full'">
                +
                </button>
            </div>
        </div>
    </div>
  )
}

export default PlaceCard