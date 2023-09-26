import { Link } from 'react-router-dom'
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMenu } from 'react-icons/ai'
import { GiCancel } from 'react-icons/gi'
import { useState } from 'react'


const Header = () => {
    const [isAuthMenuOpen, setIsAuthMenuOpen] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)


    const handleAuthMenu = () => {
        setIsAuthMenuOpen(!isAuthMenuOpen)
    }

    const handleMobileMenu = () => {
        setIsMobileMenuOpen(true)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }


  return (
    <header className='p-4 px-4 md:px-8 lg:px-16 flex fixed top-0 left-0 w-full z-20 border-b shadow bg-white opacity-90'>
        <nav className='flex items-center justify-between w-full'>
            <div className='flex md:gap-3 items-center'>
                <div className="">
                    <Link to='/'>
                        <img
                            className='h-[35px] md:h-[40px] '
                            src='/images/logo.png'
                            alt='logo'
                        />
                    </Link>
                </div>
            </div>

             {/* Navbar menu Icon */}
             <AiOutlineMenu
                className='text-gray-700 text-xl lg:hidden' 
                onClick={handleMobileMenu}
            />

            {/* Mobile menu */}
            {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-0 right-0 h-[100vh] w-[70%] bg-white z-40">
                <GiCancel 
                    className='text-gray-700 text-xl absolute top-8 right-[45%]'
                    onClick={closeMobileMenu}
                />
                    <ul className='flex flex-col mt-20 gap-4 ml-6'>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='/' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <a href='#projects' onClick={closeMobileMenu}>Projects</a>
                        </li>
                        <li className='px-2 text-gray-700 font-medium '>
                            <Link to='#blogs' onClick={closeMobileMenu}>Blogs</Link>
                        </li>
                        <li className='px-2'>
                            <div className='flex gap-2 items-center'>
                                <img src="images/email.png" alt="email logo" className='h-[25px]' />
                                <span>alvindon41@gmail.com</span>
                            </div>
                        </li>
                        <li className='px-2'>
                            <div className='flex gap-2 items-center'>
                                <img src="images/mobile.png" alt="email logo" className='h-[25px]' />
                                <span>0703287601</span>
                            </div>
                        </li>
                        <li className='px-2 flex gap-2 items-center'>
                            <a href="https://github.com/Don-Alvin" target='_blank' >
                                <AiOutlineGithub className='h-[25px] w-[25px]' />
                            </a>
                            <span>Github</span>
                        </li>
                        <li className='px-2 flex gap-2 items-center'>
                            <a href="https://www.linkedin.com/in/donux/" target='_blank' >
                                <AiOutlineLinkedin className='h-[25px] w-[25px]' />
                            </a>
                            <span>LinkedIn</span> 
                        </li>
                    </ul>
             
            </div>
            )}

            {/* backdrop  for small screens */}
            {isMobileMenuOpen && (
            <div 
                className='lg:hidden absolute top-0 h-[100vh] w-full left-0 bg-black opacity-90 z-30'
                onClick={closeMobileMenu}
            >
            </div>
            )}

            <div className="hidden lg:flex items-center gap-4">
                <div className='hidden lg:flex gap-3'>
                    
                    <ul className='flex'>
                        <li className='px-2 text-gray-700 font-medium border-b-2 border-white hover:border-[#ff9800]'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='px-2 text-gray-700 font-medium border-b-2 border-white hover:border-[#ff9800]'>
                            <a href='#projects'>Projects</a>
                        </li>
                        <li className='px-2 text-gray-700 font-medium border-b-2 border-white hover:border-[#ff9800]'>
                            <Link to='/blogs'>Blog</Link>
                        </li>
                    </ul>
                    <div className='h-[25px] w-[1px] bg-black'></div>
                    <div className='flex items-center gap-3'>
                        <div className='flex gap-2 items-center'>
                            <img src="images/email.png" alt="email logo" className='h-[25px]' />
                            <span>alvindon41@gmail.com</span>
                        </div>
                        <div className='h-[25px] w-[1px] bg-black'></div>
                        <div className='flex gap-2 items-center'>
                            <img src="images/mobile.png" alt="email logo" className='h-[25px]' />
                            <span>0703287601</span>
                        </div>
                    </div>
                    <div className='h-[25px] w-[1px] bg-black'></div>
                    <div className='flex gap-3'>
                        <a href="https://github.com/Don-Alvin" target='_blank' >
                            <AiOutlineGithub className='h-[25px] w-[25px]' />
                        </a>
                        <a href="https://www.linkedin.com/in/donux/" target='_blank' >
                            <AiOutlineLinkedin className='h-[25px] w-[25px]' />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header