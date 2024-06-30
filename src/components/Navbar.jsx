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
        <a href="https://www.linkedin.com/in/aakash-kundu-020437261/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Aakash467" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://x.com/_AakashKundu" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/_aakashkundu/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar
