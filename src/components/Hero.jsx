import React from 'react'

const Hero = () => {
  return (
    <div className='text-neutral-500 text-sm text-justify font-light border-b border-neutral-800 mb-10 pb-8 flex flex-col gap-3'>
      {/* <span className='font-medium text-neutral-50'>Biography</span> */}
      <div>
        <span className='text-indigo-400 font-medium'>{`[Firstname] [Lastname]`}</span> was born in {`[Firstname] [Lastname]`} in 1998. With the support and encouragement of his family, he developed a curious and inquisitive personality from an early age. He started his education at {`[Primary School]`} and was recognized as a successful student there. He continued his education at {`[Highschool]`} and developed his skills, especially in software during this period.
      </div>
    </div>
  )
}

export default Hero