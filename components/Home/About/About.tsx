import React from 'react'
import Image from "next/image";
import AboutProgress from "@/components/Home/About/AboutProgress";

const About = () => {
    return (
        <div className={'pt-16 pb-16 bg-white'}>
            <div className={'w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6'}>
                <div data-aos="zoom" data-aos-anchor-placement="top-center" className={'relative flex justify-center items-center'}>
                    <Image src={'/images/a3.png'} alt={'img'} width={500} height={500} className={'animate-spin [animation-duration:20s]'}/>
                    <Image src={'/images/a4.png'} alt={'img'} width={350} height={350} className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:ml-4 w-[200px] h-[200px] md:w-[350px] md:h-[350px]'}/>
                </div>
                <div>
                    <h1 data-aos="fade-up" data-aos-delay="150" data-aos-anchor-placement="top-center" className={'text-blue-700 text-lg font-medium tracking-widest'}>About Us</h1>
                    <h1 data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-center" className={'text-3xl md:text-5xl font-bold mt-4'}>Innovative solutions for digital success</h1>
                    <p data-aos="fade-up" data-aos-delay="450" data-aos-anchor-placement="top-center" className={'ml-0 md:ml-12 md:mt-10 mt-5 text-black text-sm md:text-base font-semibold leading-loose'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <AboutProgress/>
                </div>
            </div>
        </div>
    )
}
export default About
