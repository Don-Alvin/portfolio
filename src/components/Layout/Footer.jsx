import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const Footer = () => {
    const date = new Date().getFullYear()
  return (
    <footer className='bg-blue-500 p-5 flex flex-col items-center gap-4 mt-8'>
        <span className='text-white text-xl text-center'>
            &copy; Don Alvin. <br></br> All Rights Reserved. {date}
        </span>
    </footer>
  )
}

export default Footer