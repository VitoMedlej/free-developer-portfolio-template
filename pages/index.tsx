import {Box} from '@mui/material'
import type {NextPage}
from 'next'
import Experience from '../src/components/Sections/TechTools/TechTools'
import Hero from '../src/components/Sections/Hero/Hero'
import Perks from '../src/components/Sections/Perks/Perks'
import Projects from '../src/components/Sections/Projects/Projects';
import About from '../src/components/Sections/About/About'
import CTA from '../src/components/Sections/CallToAction/CTA'
import gsap from 'gsap'
import { useEffect } from 'react';
const Home : NextPage = () => {

    useEffect(() => {

        gsap.set(".ball", {xPercent: -50, yPercent: -50});

        const ball = document.querySelector(".ball");
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = .1;
        
        const xSet = gsap.quickSetter(ball, "x", "px");
        const ySet = gsap.quickSetter(ball, "y", "px");
        
        window.addEventListener("mousemove", e => {    
          mouse.x = e.x;
          mouse.y = e.y;  
        });
        
        gsap.ticker.add(() => {
          
          // adjust speed for higher refresh monitors
          const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
          
          pos.x += (mouse.x - pos.x) * dt;
          pos.y += (mouse.y - pos.y) * dt;
          xSet(pos.x);
          ySet(pos.y);
        });
},[])
    return (
        <Box
            sx={{
            margin: '0 auto',
            color: 'white',
          
        }}>



           <Hero/>
           <Perks/>
           <Experience/>
           <Projects/>
           <About/>
           <CTA />

           <Box sx={{display:{xs:'none',md:'block'}}} className="ball"></Box>


        </Box>
    )
}

export default Home

