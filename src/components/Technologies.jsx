import React from 'react'
import { FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiVitess } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className='flex items-center justify-center mb-10 w-full border-b border-neutral-800 pb-8'>
      {/* <span className='font-medium text-sm text-center'>Technologies</span> */}
      <div className='flex flex-row items-center gap-4 md:gap-20 lg:gap-32 md:flex text-xl text-neutral-500 md:text-3xl'>
        <div className=' flex items-center justify-center border-neutral-500 rounded-md p-3 hover:text-cyan-300 transition-all duration-300'>
          <FaReact />
        </div>
        <div className=' flex items-center justify-center border-neutral-500 rounded-md p-3 hover:text-yellow-300 transition-all duration-300'>
          <SiVitess />
        </div>
        <div className=' flex items-center justify-center border-neutral-500 rounded-md p-3 hover:text-teal-500 transition-all duration-300'>
          <RiTailwindCssFill />
        </div>
        <div className=' flex items-center justify-center border-neutral-500 rounded-md p-3 hover:text-orange-300 transition-all duration-300'>
          <SiJavascript />
        </div>
        <div className=' flex items-center justify-center border-neutral-500 rounded-md p-3 hover:text-blue-800 transition-all duration-300'>
          <SiTypescript />
        </div>
        <div className=' flex items-center justify-center border-neutral-500 rounded-md p-3 hover:text-amber-700 transition-all duration-300'>
          <FaGitAlt />
        </div>
      </div>
    </div>
  )
}

export default Technologies