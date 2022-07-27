import {Box} from '@mui/material'
import type {NextPage}
from 'next'
import Experience from '../src/components/Sections/TechTools/TechTools'
import Hero from '../src/components/Sections/Hero/Hero'
import Perks from '../src/components/Sections/Perks/Perks'
import Projects from '../src/components/Sections/Projects/Projects';
import About from '../src/components/Sections/About/About'
import CTA from '../src/components/Sections/CallToAction/CTA'
import {useEffect, useRef} from 'react';
import CursorAnimation from '../src/gsap/CursorAnimation';
const Home : NextPage = () => {
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Box sx={{
            margin: '0 auto',
            color: 'white'
        }}>

            <Hero/>
            <Perks/>
            <Experience/>
            <Projects/>
            <About/>
            <CTA/>

            <Box
                ref={ball}
                sx={{
                display: {
                    xs: 'none',
                    md: 'block'
                }
            }}
                className="ball"></Box>

        </Box>
    )
}

export default Home
