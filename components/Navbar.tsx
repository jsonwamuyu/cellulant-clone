"use client";

import React,{useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaCaretDown} from 'react-icons/fa'
import {HiX,HiMenu} from 'react-icons/hi';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () =>{
    setToggle(!toggle);
  }
  return (
    <nav className='fixed bg-white shadow-lg w-full z-50'>
        <div className='relative max-w-[1224px] px-[40px] mx-auto h-full flex justify-between items-center py-1 md:py-4'>
            <div>
              <Link href='/'>
                <Image src="/celullant.png" alt='Celullant' height={150} width={220} className="h-[40px] w-[90px] "/>
              </Link>
            </div>
            <ul className='hidden md:flex space-x-8 items-center justify-center'>
                <li><Link href='#' className='font-bold hover:text-[#00aeea]'>Our Story</Link></li>
                <li><Link href='#' className='font-bold hover:text-[#00aeea] flex items-center justify-center gap-1'>
                  Our Products <FaCaretDown size={20}/>
                  </Link></li>
                  <li><Link href='#' className='font-bold hover:text-[#00aeea] flex items-center justify-center gap-1'>
                  News & Insights <FaCaretDown size={20}/>
                  </Link></li>
                  <li><Link href='#' className='font-bold hover:text-[#00aeea] flex items-center justify-center gap-1'>
                  Our People <FaCaretDown size={20}/>
                  </Link></li>
                <li><Link href='#' className='font-bold hover:text-[#00aeea]'>Contact Us</Link></li>
            </ul>

            {/* Mobile devices */}
            <div className="md:hidden flex items-center justify-center cursor-pointer" onClick={handleToggle}>
              {toggle ? <HiX size={28} className="cursor-pointer"/> : <HiMenu size={28} className="cursor-pointer"/> }
            </div>
            {toggle && (
              <div className='md:hidden duration-200 ease-out bg-blue-700 pt-8 text-white top-[3.05rem] z-50 absolute left-0 right-0 bottom-0 h-screen'>
                <ul className='md:hidden flex space-y-8 items-start pl-10 flex-col'>
                  <li onClick={handleToggle}><Link href='#' className='font-bold hover:text-[#00aeea]'>Our Story</Link></li>
                  <li onClick={handleToggle}><Link href='#' className='font-bold hover:text-[#00aeea] flex items-center justify-center gap-1'>
                    Our Products <FaCaretDown size={20}/>
                    </Link></li>
                    <li onClick={handleToggle}><Link href='#' className='font-bold hover:text-[#00aeea] flex items-center justify-center gap-1'>
                    News & Insights <FaCaretDown size={20}/>
                    </Link></li>
                    <li onClick={handleToggle}><Link href='#' className='font-bold hover:text-[#00aeea] flex items-center justify-center gap-1'>
                    Our People <FaCaretDown size={20}/>
                    </Link></li>
                  <li onClick={handleToggle}><Link href='#' className='font-bold hover:text-[#00aeea]'>Contact Us</Link></li>
              </ul>
              </div>
              )
            }
        </div>
    </nav>
  )
}

export default Navbar