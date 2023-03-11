import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


const Hero = () => {
  return (
    <section className='w-full pt-[8rem]'>
        <div className='max-w-[1224px] px-[20px] m-auto flex py-4 flex-col gap-8 md:flex-row items-center'>
            <div className=' flex flex-col space-y-10 w-full items-center md:items-start justify-start md:max-w-1/2'>
                <h1 className='text-[52px] leading-[1.1] md:max-w-lg'><span className='text-[#00aeea] font-semibold'>One-stop-shop</span> payments platforms for business across Africa</h1>
                <Link href="#" className='active:scale-[0.95] duration-200 btn hover:shadow-md bg-[#00aeea] text-white py-[1rem] hover:opacity-[0.9] px-[60px] font-semibold rounded-sm'>Find out more</Link>
           
            </div>
            <div className='flex w-full md:max-w-1/2 items-center justify-center'>
                <Image src="/hero.png" alt='one stop shop' height={300} width={500}/>
            </div>
        </div>
    </section>
  )
}

export default Hero;