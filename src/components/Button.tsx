import React from "react";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    full?: boolean;
    margin?: string;
}

const Button = ({type, title, full, margin}:ButtonProps) => {
    return (
      <button 
      className={`xl:py-3 cursor-pointer xl:px-8 lg:px-6 md:py-2 md:px-5 sm:py-[0.4rem] sm:px-4 pad:py-[0.2rem] mob:py-1 pad:px-3 mob:px-1  ${margin} gap-3 border-none transition-all bg-[#FF715B] duration-300 hover:bg-[#f2543c] text-white ${full && 'w-full'}`}
      type={type}>
        
          <label className="bold-16 whitespace-nowrap pad:text-base mob:text-sm">{title}</label>
      </button>
    )
  }

export default Button