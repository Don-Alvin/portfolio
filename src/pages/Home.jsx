import React from 'react'
import Hero from '../components/Home/Hero'
import Skills from '../components/Home/Skills'
import Projects from '../components/Home/Projects'
import Blogs from '../components/Home/Blogs'

const Home = () => {
  return (
    <main>
          <Hero />
          <Skills />
          <Projects />
          <Blogs />
    </main>
  )
}

export default Home