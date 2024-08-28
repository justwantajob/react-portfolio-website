import React from 'react'
import { projects } from '../projects'

const Projects = () => {
  return (
    <div className='text-neutral-500 text-sm font-light mb-10 pb-8 flex flex-col justify-center gap-6'>
      {projects.map((project, index) => {
        return (
          <div key={index} className='flex flex-col justify-center gap-2 border-b border-neutral-950 pb-8'>
            <h2 className='text-neutral-300 font-medium'>{project.title}</h2>
            <p>{project.description}</p>
            <div className='flex flex-row gap-4 items-center'>
              {project.technologies.map((technology, index) => {
                return (
                      <span key={index} className='p-1 bg-neutral-900 text-indigo-400 rounded-sm text-xs font-light'>{technology}</span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Projects