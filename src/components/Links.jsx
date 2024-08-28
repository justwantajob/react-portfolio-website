import React from 'react'

const Links = ({ children, link }) => {
  return (
    <a href={link} target='blank' className='text-neutral-500 hover:text-neutral-50 transition-all duration-300 cursor-pointer'>{children}</a>
  )
}

export default Links