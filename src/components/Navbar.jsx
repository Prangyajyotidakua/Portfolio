import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose, AiFillGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineFacebook, AiOutlineMail } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { GrContactInfo } from "react-icons/gr";
import pjd from '../assets/pjd.png'
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='flex w-full text-gray-300 h-[80px] fixed justify-between items-center px-4 bg-[#0a192f]'>
            <div>
            <img src={pjd} alt="Logo" style={{ width: '50px' }} />
            </div>

            <div className='hidden md:flex'>
                <ul className='hidden md:flex'>
                    <li>
                        <Link to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link to='work' smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            <div onClick={handleClick} className='md:hidden z-10 right-0'>
                {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
            </div>

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0  w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl '> Home </li>
                <li className='py-6 text-4xl '> Skills </li>
                <li className='py-6 text-4xl '> Experience </li>
                <li className='py-6 text-4xl '> Language </li>
                <li className='py-6 text-4xl '> Contacts </li>
                <li className='py-6 text-4xl '> Work </li>
            </ul>

            <div className='hidden md:flex sm:flex fixed flex-col top-[25%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/prangya-jyoti-dakua-665a54228/'>
                            LinkedIn <AiOutlineLinkedin size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Prangyajyotidakua'>
                            Github <AiFillGithub size={30} />
                        </a>
                    </li>

                    {/* Update the href attribute with valid URLs */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.instagram.com'>
                            Instagram <FiInstagram size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='mailto:your.email@example.com'>
                            Gmail <AiOutlineMail size={30} />
                        </a>
                    </li>

                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://twitter.com'>
                            Twitter <AiOutlineTwitter size={30} />
                        </a>
                    </li>

                    {/* Add valid URLs */}
                    <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.example.com/resume.pdf'>
                            Resume <GrContactInfo size={30} />
                        </a>
                    </li>

                    {/* Update the href attribute with valid URLs */}
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.facebook.com'>
                            Facebook <AiOutlineFacebook size={30} />
                        </a>
                    </li>

                </ul>
            </div>
        </div>
    );
};


// rep create
// ==========================
// git init
// git remote add origin https://github.com/Prangyajyotidakua/Portfolio.git
// git checkout -b new-branch
// git add . 
// git commit -m "first commit"
// git push origin new-branch


// again push 
// =======================
// git add .
// git commit -m "Updated React project with new features"
// git push origin new-branch