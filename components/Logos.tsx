'use client'
import Image from "next/image";
import {motion} from 'framer-motion'

const Logos = () =>{
    return(
        <section className="w-full my-8">
            <motion.div
                whileInView={{x:[-100,0]}}
                transition={{duration:0.5, delayChildren:0.5}} 
            className="m-auto px-[20px] py-8 max-w-[1224px] flex flex-wrap items-center justify-center">
                <div className="h-[90px] w-[120px] justify-center items-center">
                    <Image src="/bolt.png" alt="icons" height={90} width={120}/>
                </div>
                <div className="h-[90px] w-[120px] justify-center items-center">
                    <Image src="/nb.png" alt="icons" height={90} width={120}/>
                </div>
                <div className="h-[90px] w-[120px] justify-center items-center">
                    <Image src="/adidas.png" alt="icons" height={90} width={120}/>
                </div>
                <div className="h-[90px] w-[120px] justify-center items-center">
                    <Image src="/spotify.png" alt="icons" height={90} width={120}/>
                </div>
                <div className="h-[90px] w-[120px] justify-center items-center">
                    <Image src="/skype.png" alt="icons" height={90} width={120}/>
                </div>
                <div className="h-[90px] w-[120px] justify-center items-end">
                    <Image src="/amazon.png" alt="icons" height={90} width={120}/>
                </div>
            </motion.div>
        </section>
    )
}

export default Logos;