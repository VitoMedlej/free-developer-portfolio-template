import {Box, Button, Container, Divider, Grid, Typography} from "@mui/material"
import { btnStyles } from "../Hero/Hero"
import {centeredStyles} from "../Perks/Perks"
import ProjectCard from "./ProjectCard"

const projects = [
    {
        img: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1658233071/photo-151729298771' +
        '9-0369a794ec0f_qexfcf.jpg',
        title: 'El-Vito Ecommerce shop',
        siteUrl : 'https://el-vito.netlify.app/',
        repoUrl : 'https://github.com/VitoMedlej/FullStack-Ecom',
        description: `lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20 lorem20`
    }, {
        img:  'https://res.cloudinary.com/dwcu3wcol/image/upload/v1658232753/photo-158870254792' +
        '3-7093a6c3ba33_nxjka5.jpg',
        siteUrl : 'https://elvito-property.netlify.app/',
        repoUrl : 'https://github.com/VitoMedlej/elvito-property',
        title: 'Elvito real-estate buy/sell project',
        description: ''
    }
]
const Projects = () => {
    return (
        <>
       
       <Container
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            pt: 
             '6em',
             pb:'3em'
            
        }}>
            <Grid container>

                <Grid item sx={centeredStyles}>
                    <Typography
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
                        variant='h2'
                        sx={{
                        pt: '1.5em',
                        maxWidth: '570px',
                        fontSize: {
                            xs: '.8em',
                            sm: '1em'
                        }
                    }}>
                        Here are some of my projects that I've built.
                    </Typography>

                </Grid>
                <Grid
                    item
                    sx={{
                    ...centeredStyles,
                    mt: '3em'
                }}>

                    {projects.map((project, index) => {
                        return <ProjectCard
                            isReversed={index % 2 === 0
                            ? true
                            : false}
                            siteUrl={project.siteUrl}
                            repoUrl={project.repoUrl}
                            title={project.title}
                            img={project.img}
                            key={project.title}/>
                    })}

                </Grid>
                <Box sx={{
                    margin: '0 auto',
                    mt:'3em'
                }}>

                    <Button sx={btnStyles} variant='outlined'>
                        <Typography fontSize='14px'>
                           Load More
                        </Typography>
                    </Button>
                </Box>
            </Grid>

        </Container>
            < Divider className = 'divider' /> 
            </>

    )
}

export default Projects