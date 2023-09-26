import React from 'react'
import useProjects from '../../features/Projects/useProjects'
import { PropagateLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const Projects = () => {
  const {projects, isLoading, isError, error} = useProjects()

  let content 

  if(isLoading) content = <PropagateLoader />
  if(isError) toast.error(error)
  
  content = projects?.map(project => (
    <div key={project.id} className='p-4'>
      <h3 className='text-center text-xl font-semibold'>{project.name}</h3>
      <div className=' flex flex-col lg:flex-row gap-3 py-4'>
        <img src={project.image} alt={project.name} className='lg:w-[400px]' />
        <div className='flex flex-col gap-4'>
          <p>{project.description}</p>
          <div className='flex flex-wrap gap-2'>
          {project.technologies?.map(technology => (
              <div key={technology} className='rounded border p-2 '>
                <span key={technology}>{technology}</span>
              </div>
          ))}
          </div>
          <div>
            <a className='p-2 rounded bg-blue-500 text-white mr-4' href={project.link} target='_blank'>Live link</a>
            <a className='p-2 rounded bg-blue-500 text-white mr-4' href={project.github} target='_blank'>Source code</a>
          </div>
        </div>
      </div>
      <div className='h-[1px] bg-gray-500 w-full'></div>
    </div>
    
  ))


  return (
    <section className='border-b' id="projects">
      <h4 className='font-bold text-2xl text-center'>Projects</h4>
      <div>
        {content}
      </div>
    </section>
  )
}

export default Projects