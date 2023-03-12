"use client";


import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import {FaArrowRight} from 'react-icons/fa';
import {easeInOut, motion} from 'framer-motion'


const Accelerate = () => {
  return (
    <section className='w-full my-12'>
        <div className='flex flex-col md:flex-row max-w-[1224px] m-auto px-[20px] py-4 items-center'>
            <motion.div 
            whileInView={{x:[-100, 0]}}
            transition={{duration:0.5, ease:easeInOut}}
            className='space-y-8 w-full md:w-1/2'>
                <h2 className='text-5xl'>Accelerating Economic Growth for Africa through Payments</h2>
                <p className='text-black/40 text-[18px]'>Cellulant is a leading Pan African payments company that provides locally relevant and alternative payment methods for global, regional and local merchants.</p>
                <Link href="" className='flex gap-2 items-center text-[#294383] '>
                    <FaArrowRight />
                    <p className='text-xl font-bold hover:translate-x-1 duration-200'>See how we are leading rapid transformation</p>
                </Link>
            </motion.div>
            <motion.div whileInView={{opacity:[0,1]}}
            transition={{duration:0.5, ease: easeInOut}}
             className=' w-full md:w-1/2 bg-[#00aeeae]'>
                <Image src="/lady.png" height={500} width={500} className="z-50 h-[500px] w-[500px] hover:scale-110 duration-300 ease-in-out" alt=''/>
            </motion.div>
        </div>
    </section>
  )
}

export default Accelerate