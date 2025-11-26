import React from 'react'
type Props = {
    number: string;
    title: string;
    isExtraClass?: boolean;
}

const WorkProcessCard = ({number, title, isExtraClass}:Props) => {
    return (
        <div data-aos="fade-up" data-aos-delay="0" data-aos-anchor-placement="top-center" className={`flex items-center gap-3 ${isExtraClass ? 'lg:border-r-2 lg:border-gray-300' : ''}`}>
            <div className={'text-[40px] md:text-[60px] lg:text-[80px] font-bold mr-5 leading-none text-amber-600'}>
                {number}
            </div>
            <div>
                <h1 className={'text-[#252525] font-semibold text-xl'}>{title}</h1>
                <p className={'lg:w-[90%] mt-3 leading-8 font-medium text-gray-700'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    )
}
export default WorkProcessCard
