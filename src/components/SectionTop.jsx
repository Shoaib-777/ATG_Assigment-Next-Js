'use client'
import React from 'react'
import { CiCircleChevUp } from "react-icons/ci";


const SectionTop = () => {
    const handleScrollTop=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  return (
    <div className="absolute top-[36.5rem] right-[5rem]  lg:hidden">
        <CiCircleChevUp className="w-8 h-8 text-white bg-[#8064A2] fixed rounded-full border-none cursor-pointer" onClick={handleScrollTop}/>
    </div>
  )
}

export default SectionTop