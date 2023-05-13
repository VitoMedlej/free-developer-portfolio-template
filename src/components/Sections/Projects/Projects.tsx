import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Tooltip,
    Typography
} from "@mui/material"
import {centeredStyles} from "../Perks/Perks"
import ProjectCard from "./ProjectCard"
import {useEffect} from 'react';
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import gsap from 'gsap'
import {IProjects} from "../../../Types/Types";

const Projects = ({projectsArray} : IProjects[] | any) => {

    useEffect(() => {

        MainTitleAnimation('.title3', '.title4')
        if (!projectsArray) 
            return;
        setTimeout(() => {

            for (let i = 0; i < projectsArray.length; i++) {

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
                            Successful Projects I&apos;m Proud Of
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
                            No better way to get experience than real-life projects
                        </Typography>

                    </Grid>
                    <Box
                        sx={{
                        ...centeredStyles,
                        mt: '3em'
                    }}>

                        {projectsArray
                            ? projectsArray.map((project : any, index : number) => {
                                return <ProjectCard
                                    className={`p${index}`}
                                    isReversed={index % 2 === 0
                                    ? true
                                    : false}
                                    siteUrl={project.siteUrl}
                                    repoUrl={project.repoUrl}
                                    title={project.title}
                                    img={project.img}
                                    description={project.description}
                                    key={project.title}/>
                            })

                            : <Typography variant='h1' fontSize='1em' fontWeight='500' color='red'>There was an error loading the projects.</Typography>
}

                    </Box>
                    <Box
                        sx={{
                        margin: '0 auto',
                        mt: '3em'
                    }}>
                        <Tooltip title='More Projects Soon'>

                            <Button
                                className='loadMore'
                                variant='contained'
                                sx={{
                                opacity: 0,
                                padding: '.5em 3.5em',
                                background: 'transparent',
                                border: '1px solid',
                                color: '#0092ff',
                                ':hover': {
                                    border: '1px solid transparent'
                                }
                            }}>
                                Load More
                            </Button>
                        </Tooltip>

                    </Box>
                </Grid>

            </Container>
            < Divider className='divider'/>
        </Box>
    )
}

export default Projects