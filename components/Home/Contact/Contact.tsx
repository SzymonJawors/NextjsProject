import React from 'react'
import {FaArrowRight} from "react-icons/fa";

const Contact = () => {
    return (
        <div className={'pt-16 pb-16 bg-gray-200'}>
            <div className={'grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] lg:w-[80%] items-center mx-auto mt-16'}>
                <div data-aos="zoom-in" data-aos-delay="0" data-aos-anchor-placement="top-center" className={'lg:col-span-2 bg-gray-900 rounded-xl p-6'}>
                    <input type="text" placeholder={'Name'} className={'border-2 mt-6 border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white outline-none text-white'}/>
                    <input type="email" placeholder={'Email'} className={'border-2  border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white outline-none text-white'}/>
                    <input type="text" placeholder={'Subject'} className={'border-2  border-gray-600 w-full px-6 py-3 rounded-full mb-6 placeholder:text-white outline-none text-white'}/>
                    <textarea rows={5} placeholder={'Comments'} className={'border-2  border-gray-600 w-full px-6 py-3 rounded-3xl mb-6 placeholder:text-white outline-none text-white'}/>
                    <button type={"submit"} className={'w-full px-6 py-3 bg-[#b69974] uppercase cursor-pointer rounded-full text-white'}>Submit</button>
                </div>
                <div data-aos="fade-out" data-aos-delay="100" data-aos-anchor-placement="top-center" className={'lg:col-span-1'}>
                    <div className={'p-6 bg-blue-800 flex items-center space-x-4'}>
                        <div className={'w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-col'}>
                            <FaArrowRight className={'text-blue-800'}/>
                        </div>
                        <div>
                            <h1 className={'text-white text-sm font-semibold'}>Call now</h1>
                            <h1 className={'text-[20px] font-bold text-white'}>+48 312 132 512</h1>
                        </div>
                    </div>
                    <div className={'p-6 bg-blue-800 mt-4 mb-4 flex items-center space-x-4'}>
                        <div className={'w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-col'}>
                            <FaArrowRight className={'text-blue-800'}/>
                        </div>
                        <div>
                            <h1 className={'text-white text-sm font-semibold'}>Email now</h1>
                            <h1 className={'text-[20px] font-bold text-white'}>jawor12325@gmail.com</h1>
                        </div>
                    </div>
                    <div className={'p-6 bg-blue-800 flex items-center space-x-4'}>
                        <div className={'w-15 h-15 rounded-full bg-[#d8ff36] flex items-center justify-center flex-col'}>
                            <FaArrowRight className={'text-blue-800'}/>
                        </div>
                        <div>
                            <h1 className={'text-white text-sm font-semibold'}>Address</h1>
                            <h1 className={'text-[20px] font-bold text-white'}>Warsaw, Poland</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
