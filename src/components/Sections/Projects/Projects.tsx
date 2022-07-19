import {Container, Grid, Typography} from "@mui/material"
import {centeredStyles} from "../Perks/Perks"
import ProjectCard from "./ProjectCard"

const Projects = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: {
                xs: '6em'
            }
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
                <Grid item sx={{...centeredStyles,mt:'3em'}}>
                    <ProjectCard/>
                    <ProjectCard isReversed={true}/>
                    <ProjectCard/>
                </Grid>
            </Grid>

        </Container>
    )
}

export default Projects