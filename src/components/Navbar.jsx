import React from 'react'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-10p flex items-center justify-between py-1'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='text-bold ml-10 text-2xl'>Ak</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaTwitter />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar
