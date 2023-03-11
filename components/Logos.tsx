import Image from "next/image";

const Logos = () =>{
    return(
        <section className="w-full mt-8">
            <div className="m-auto px-[20px] py-4 max-w-[1224px] flex flex-wrap items-center justify-center">
                <div className="h-[100px] w-[120px] justify-center items-center">
                    <Image src="/bolt.png" alt="icons" height={100} width={120}/>
                </div>
                <div className="h-[100px] w-[120px] justify-center items-center">
                    <Image src="/nb.png" alt="icons" height={100} width={120}/>
                </div>
                <div className="h-[100px] w-[120px] justify-center items-center">
                    <Image src="/adidas.png" alt="icons" height={100} width={120}/>
                </div>
                <div className="h-[100px] w-[120px] justify-center items-center">
                    <Image src="/spotify.png" alt="icons" height={100} width={120}/>
                </div>
                <div className="h-[100px] w-[120px] justify-center items-center">
                    <Image src="/skype.png" alt="icons" height={100} width={120}/>
                </div>
                <div className="h-[100px] w-[120px] justify-center items-end">
                    <Image src="/amazon.png" alt="icons" height={100} width={120}/>
                </div>
            </div>
        </section>
    )
}

export default Logos;