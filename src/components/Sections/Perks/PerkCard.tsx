import {Box, Typography, IconButton} from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import gsap from 'gsap'
import {useEffect} from 'react';

const PerkCard = () => {
    useEffect(() => {

   
        gsap.to('.perkCard ', {
            opacity: 1,
            y: 0,
            delay:.25,
            stagger: .25,
            scrollTrigger: {
                trigger: '.perkCard h2',
                start: 'top 80%'
            }
        })

    }, [])
    return (
        <Box
            className='perkCard'
            sx={{
                opacity:0,
                transform: 'translateY(15px)',
            width: {
                xs: '90%',
                sm: '45%',
                md: '30%'
            },
            my: '2em'
        }}>
            <AddTaskIcon
            className='cardIcon'
                sx={{
              
                boxSizing: 'content-box',
                background: '#0092ff',
                color: 'white',
                padding: '.55em',
                borderRadius: '50%'
            }}
                fontSize='medium'/>
            <Typography
                variant='h2'
                sx={{
                pt: '.5em',
             
            }}
                fontWeight='400'
                fontSize='1.4em'>
                Hello world
            </Typography>
            <Typography
                variant='h3'
                sx={{
                pt: '1em'
            }}
                fontWeight='300'
                fontSize='.9em'
                className='secondary'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
            </Typography>

        </Box>
    )
}

export default PerkCard