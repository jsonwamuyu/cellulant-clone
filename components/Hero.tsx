import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Hero = () => {
  return (
    <section className='w-full'>
        <div className='max-w-[1224px] px-[20px] mx-auto flex py-4 flex-col items-center md:justify-center gap-8 md:flex-row'>
            <div className='space-y-8 w-full md:max-w-1/2'>
                <h1 className='text-[52px] leading-[1.1] md:max-w-sm'><span className='text-[#00aeea] font-semibold'>One-stop-shop</span> payments for business across Africa</h1>
                <Link href="#" className='bg-[#00aeea] text-white py-2 px-4 flex items-center justify-center font-semibold rounded-sm'>Find out more</Link>
            </div>
            <div className='flex w-full md:max-w-1/2'>
                <Image src="/hero.png" alt='one stop shop' height={600} width={800}/>
            </div>
        </div>
    </section>
  )
}

export default Hero