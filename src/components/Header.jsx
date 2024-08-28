import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa6'
import Links from './Links'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between border-b border-neutral-800 mb-10 py-6 lg:py-8'>

      {/* left side */}
      <div className='flex flex-col justify-center gap-2 text-neutral-50'>
        <div className='flex items-center gap-2'>
          <FaApple />
          <span>{`[Firstname] [Lastname]`}</span>
        </div>
        <span className='text-xs text-neutral-500 ml-6 hidden sm:block'>FULLSTACK WEB DEVELOPER</span>
      </div>

      {/* right side */}

      <div className='flex flex-row items-center gap-4'>
        <Links link={'#'}>
          <FaGithub />
        </Links>
        <Links link={'#'}>
          <FaInstagram />
        </Links>
        <Links link={'#'}>
          <FaLinkedin />
        </Links>
      </div>

    </div>
  )
}

export default Header