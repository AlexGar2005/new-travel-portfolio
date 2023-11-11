import React from "react";

type CardProps = {
    address: string;
    title: string;
    text: string;
}

const Card = ({address, title, text}:CardProps) => {
  return (
    <div className="px-6 py-8 bg-[#F8F8F8] transition-all duration-300 hover:bg-white hover:scale-105 cursor-pointer flex flex-col items-center xl:gap-3 lg:gap-1 shadow-xl rounded-xl">
        <img src={`${address}`} alt="/" className="w-[90px]"/>
        <h2 className="text-[#2C2C2C] font-bold text-xl md:mt-0 sm:mt-3 text-center">{title}</h2>
        <p className="text-[#A79997] xl:text-sm md:text-xs md:mt-0 sm:mt-3 text-center">{text}</p>
    </div>
  )
}

export default Card