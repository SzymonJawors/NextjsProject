import React from 'react'
import Logo from "@/components/Helper/Logo";
import {
    FaFacebook,
    FaInstagram,
    FaPaperPlane, FaPhone,
    FaYoutube
} from "react-icons/fa";
import {IoMailOpen} from "react-icons/io5";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import Image from "next/image";
import {BiCalendar} from "react-icons/bi";

const Footer = () => {
    return (
        <div className={'pt-16 pb-16'}>
            <div className={'w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'}>
                <div>
                    <Logo />
                    <p className={'mt-6 text-gray-300 leading-6 font-semibold'}>Conditions Terms Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className={'flex items-center space-x-4 mt-6'}>
                        <div className={'w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-blue-600 transition-all duration-300'}>
                            <FaFacebook className={'w-6 h-6 text-white'}/>
                        </div>
                        <div className={'w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-red-600 transition-all duration-300'}>
                            <FaYoutube className={'w-6 h-6 text-white'}/>
                        </div>
                        <div className={'w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-col cursor-pointer hover:bg-pink-600 transition-all duration-300'}>
                            <FaInstagram className={'w-6 h-6 text-white'}/>
                        </div>
                    </div>
                </div>
                <div className={'lg:mx-auto'}>
                    <h1 className={'text-lg font-bold text-white'}>Address</h1>
                    <div className={'mt-8'}>
                        <div className={'flex items-center space-x-5'}>
                            <FaPaperPlane className={'w-5 h-5 text-white'}/>
                            <p className={'font-medium text-sm text-white'}>Warszawska Street, <br/> PL, 0-001 Warszawa</p>
                        </div>
                        <div className={'flex mb-5 mt-5 items-center space-x-5'}>
                            <FaPhone className={'w-5 h-5 text-white'}/>
                            <p className={'font-medium text-sm text-white'}>+48 603 121 889</p>
                        </div><div className={'flex items-center space-x-5'}>
                        <IoMailOpen className={'w-5 h-5 text-white'}/>
                        <p className={'font-medium text-sm text-white'}>jawor12325@gmail.com</p>
                    </div>
                    </div>
                </div>
                <div className={'lg:mx-auto'}>
                    <h1 className={'text-lg font-bold text-white'}>More Services</h1>
                    <div className={'mt-8'}>
                        <div className={'flex items-center mb-2'}>
                            <MdKeyboardDoubleArrowRight className={'w-7 h-7 text-white'}/>
                            <p className={'font-medium text-sm text-white'}>Front End</p>
                        </div>
                        <div className={'flex items-center mb-2'}>
                            <MdKeyboardDoubleArrowRight className={'w-7 h-7 text-white'}/>
                            <p className={'font-medium text-sm text-white'}>Back End</p>
                        </div>                        <div className={'flex items-center mb-2'}>
                        <MdKeyboardDoubleArrowRight className={'w-7 h-7 text-white'}/>
                        <p className={'font-medium text-sm text-white'}>Full Stack</p>
                    </div>                        <div className={'flex items-center mb-2'}>
                        <MdKeyboardDoubleArrowRight className={'w-7 h-7 text-white'}/>
                        <p className={'font-medium text-sm text-white'}>Web Dev</p>
                    </div>                        <div className={'flex items-center mb-2'}>
                        <MdKeyboardDoubleArrowRight className={'w-7 h-7 text-white'}/>
                        <p className={'font-medium text-sm text-white'}>AI/ML</p>
                    </div>
                    </div>
                </div>
                <div className={'mx-auto'}>
                    <h1 className={'text-lg font-bold text-white'}>Newsletter</h1>
                    <div className={'mt-8'}>
                        <p className={'font-medium text-sm text-white'}>It is a long established fact that a reader will be distracted
                        </p>
                        <div className={'mt-5 flex items-center space-x-4'}>
                            <Image src={'/images/f.jpg'} alt={'img'} width={80} height={25}/>
                            <div className={'flex-1'}>
                                <div className={'flex items-center'}>
                                    <BiCalendar className={'text-amber-300 w-6 h-6 mr-2'}/>
                                    <p className={'mt-2 text-white text-sm font-semibold'}>
                                        25 October 2025
                                    </p>
                                </div>
                                <p className={'text-white font-bold'}>
                                    Chunk of Lorem Ipsum text
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'border-t-2 w-[80%] mx-auto border-gray-700 mt-8'}>
                <p className={'mt-8 text-gray-300'}>© Szymon Jaworski 2025 | All Rights Reserved</p>
            </div>
        </div>
    )
}
export default Footer
