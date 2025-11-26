import React from 'react'
import BlogCard from "@/components/Home/Blog/BlogCard";

const Blog = () => {
    return (
        <div className={'pt-16 pb-16 bg-white'}>
            <h2 className={'text-[#b69974] text-lg text-center font-medium tracking-widest'}>Blog</h2>
            <h1 className={'text-3xl md:text-5xl mt-4 text-black font-bold text-center'}>Latest news & articles <br/>From our Blog</h1>
            <div className={'w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20'}>
                <div data-aos="fade-left" data-aos-delay="0" data-aos-anchor-placement="top-center">
                    <BlogCard image={'/images/b1.png'} title={'Standard chunk of Lorem Ipsum Our Company'}/>
                </div>
                <div data-aos="fade-left" data-aos-delay="100" data-aos-anchor-placement="top-center">
                    <BlogCard image={'/images/b2.png'} title={'These lorem cases are so simple and easy'}/>
                </div>
                <div data-aos="fade-left" data-aos-delay="200" data-aos-anchor-placement="top-center">
                    <BlogCard image={'/images/b3.png'} title={'Standard chunk of Lorem Ipsum Our Company'}/>
                </div>
            </div>
        </div>
    )
}
export default Blog
