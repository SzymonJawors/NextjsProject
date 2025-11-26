'use client';
import React, {useEffect} from 'react'
import Hero from "@/components/Home/Hero/Hero";
import About from "@/components/Home/About/About";
import Services from "@/components/Home/Services/Services";
import WorkProcess from "@/components/Home/WorkProcess/WorkProcess";
import Project from "@/components/Home/Project/Project";
import Blog from "@/components/Home/Blog/Blog";
import Contact from "@/components/Home/Contact/Contact";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Home = () => {
    useEffect(()=> {
        const initAOS = async()=> {
            await import('aos');
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
                anchorPlacement: "top-bottom",
            });
        }
        initAOS();
    },[])
    return (
        <div className={'overflow-hidden'}>
            <Hero/>
            <About/>
            <Services />
            <WorkProcess/>
            <Project/>
            <Blog/>
            <Contact/>
        </div>
    )
}
export default Home
