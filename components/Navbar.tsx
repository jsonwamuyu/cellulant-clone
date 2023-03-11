import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {FaCaretDown} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='fixed bg-white shadow-lg w-full z-50'>
        <div className='max-w-[1224px] px-[20px] mx-auto h-full flex justify-between items-center py-4'>
            <div>
              <Link href='/'>
                <Image src="/celullant.png" alt='Celullant' height={150} width={190}/>
              </Link>
            </div>
            <ul className='flex space-x-8 items-center justify-center'>
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
        </div>
    </nav>
  )
}

export default Navbar