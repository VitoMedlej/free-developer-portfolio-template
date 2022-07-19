import {Box} from '@mui/material'
import type {NextPage}
from 'next'
import Experience from '../src/components/Sections/TechTools/TechTools'
import Hero from '../src/components/Sections/Hero/Hero'
import Perks from '../src/components/Sections/Perks/Perks'
import Projects from '../src/components/Sections/Projects/Projects';

const Home : NextPage = () => {
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
        </Box>
    )
}

export default Home

