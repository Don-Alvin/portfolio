import skills from '../../skills'

const Skills = () => {

  const renderedSkills = skills.map(skill => {
    return ( 
      <div key={skill.name} >
        <div className='flex flex-col items-center'>
          <img className="w-[200px] lg:h-[200px]" src={skill.src} alt={skill.name} />
          <span>{skill.name}</span>
        </div>
      </div>
  )})

  return (
    <section className='p-4 flex flex-col mb-6 border-b'>
        <h4 className='text-center p-4 text-2xl'>I am skilled in the following<br></br>technologies</h4>
        <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-8'>
          {renderedSkills}
        </div>
    </section>
  )
}

export default Skills