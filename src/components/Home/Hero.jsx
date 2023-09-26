import React from 'react'

const Hero = () => {

  const downloadClick = async () => {
    const response = await fetch('/documents/updatedDev.pdf')
    const newBlob = await response.blob()

    const fileUrl = window.URL.createObjectURL(newBlob)

    let alink = document.createElement('a')
    alink.href = fileUrl
    alink.download = 'updatedDev.pdf'
    alink.click()
  }


  return (
    <section id="home" className='bg-[url(/images/portfolioHero.jpg)] h-screen object-cover bg-no-repeat bg-center bg-cover'>
      <article className="bg-black w-full p-10 opacity-80 h-screen flex items-center justify-center flex-col gap-4">
        <h4 className='text-center text-white font-semibold text-2xl'>
          Hello, my name is Done Alvin
            <br></br>
          I am frontend developer with experience working with various frontend technologies
        </h4>
        <button className='p-2 bg-yellow-600 text-white font-bold rounded' onClick={downloadClick}>
          Download Resume
        </button>
      </article>
    </section>
  )
}

export default Hero