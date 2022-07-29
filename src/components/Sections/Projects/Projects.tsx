import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Typography
} from "@mui/material"
import {centeredStyles} from "../Perks/Perks"
import ProjectCard from "./ProjectCard"
import {useEffect} from 'react';
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import gsap from 'gsap'

const projects = [
    {
        img: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1658233071/photo-151729298771' +
                '9-0369a794ec0f_qexfcf.jpg',
        title: 'El-Vito Ecommerce shop',
        siteUrl: 'https://el-vito.netlify.app/',
        repoUrl: 'https://github.com/VitoMedlej/FullStack-Ecom',
        description: `lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20`
    }, {
        img: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1658232753/photo-158870254792' +
                '3-7093a6c3ba33_nxjka5.jpg',
        siteUrl: 'https://elvito-property.netlify.app/',
        repoUrl: 'https://github.com/VitoMedlej/elvito-property',
        title: 'Elvito real-estate buy/sell project',
        description: ''
    }
]
const Projects = () => {

    useEffect(() => {

        MainTitleAnimation('.title3', '.title4')

        setTimeout(() => {

            for (let i = 0; i < projects.length; i++) {

                gsap.to(`.p${i}`, {
                    duration: .8,
                    transform: 'translateX(0%)',
                    ease: 'easeIn',
                    scrollTrigger: {
                        trigger: `.p${i}`,
                        start: 'top 60%'
                    }
                })
            }
        }, 100)
    }, [])

    return (
        <Box sx={{
            overflowX: 'hidden'
        }}>
            <Container
                id='ProjectSection'
                maxWidth='lg'
                sx={{
                margin: '0 auto',
                py: '6em'
            }}>
                <Grid container>

                    <Grid item sx={centeredStyles}>
                        <Typography
                            className='title3 t25o0'
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.2em',
                                sm: '2.5em',
                                md: '3em'
                            }
                        }}
                            fontWeight='600'>
                            Successful projects im proud of
                        </Typography>
                        <Typography
                            className='title4 t25o0'
                            variant='h2'
                            sx={{
                            pt: '1.5em',
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            }
                        }}>
                            Here are some of my projects that I&apos;ve built.
                        </Typography>

                    </Grid>
                    <Box
                        sx={{
                        ...centeredStyles,
                        mt: '3em'
                    }}>

                        {projects.map((project, index) => {
                            return <ProjectCard
                                className={`p${index}`}
                                isReversed={index % 2 === 0
                                ? true
                                : false}
                                siteUrl={project.siteUrl}
                                repoUrl={project.repoUrl}
                                title={project.title}
                                img={project.img}
                                key={project.title}/>
                        })}

                    </Box>
                    <Box
                        sx={{
                        margin: '0 auto',
                        mt: '3em'
                    }}>

                        <Button
                            className='loadMore'
                            variant='contained'
                            sx={{
                            opacity: 0,
                            padding: '.5em 3.5em',
                            background: 'transparent',
                            border: '1px solid',
                            color: '#0092ff'
                        }}>
                            Load More
                        </Button>
                    </Box>
                </Grid>

            </Container>
            < Divider className='divider'/>
        </Box>
    )
}

export default Projects