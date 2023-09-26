import React from 'react'

const Hero = () => {
  return (
    <section id="home" className='bg-[url(/images/portfolioHero.jpg)] h-screen object-cover bg-no-repeat bg-center bg-cover'>
      <article className="bg-black w-full p-10 opacity-80 h-screen flex items-center justify-center">
        <h4 className='text-center text-white font-semibold text-2xl'>
          Hello, my name is Done Alvin
            <br></br>
          I am frontend developer with experience working with various frontend technologies
        </h4>
      </article>
    </section>
  )
}

export default Hero