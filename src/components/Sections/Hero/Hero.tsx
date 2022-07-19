import {Box, Button, Container, Grid, Typography} from '@mui/material';

export const btnStyles = {
    padding: '.77em 1.5em',
    borderRadius: '3px',
    
}
const Hero = () => {
    return (
        <Container
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: {
                xs: '7.5em',
                sm: '8.5em',
               
            }
        }}>
            <Grid
                container
                sx={{
                justifyContent: 'space-between'
            }}>

                <Grid item xs={12} sm={10} md={8} lg={7}>
                    <Typography
                    variant='h1'
                        sx={{
                        fontSize: {
                            xs: '2.4em',
                            sm: '3.4em',
                            md: '3.8em'
                        },
                        pt: '1em',
                        fontWeight: '600'
                    }}>
                        Better, Faster and Cheaper Websites.
                    </Typography>
                    <Typography
                    variant='h2'

                        className='secondary'
                        sx={{
                        pt: '1.5em',
                        fontSize: {
                            xs: '.9em',
                            sm: '1em'
                        },
                        maxWidth: '570px',
                        fontWeight: '300'
                    }}>
                        Whether it's a mobile application or web application, we are a team of
                        high-performing app developers Lebanese that turn your idea into reality.
                    </Typography>
                    <Box
                        sx={{
                        my: '2.5em',
                        gap: '.8em',
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                        {/* <Button
                            className="offset"
                            sx={{
                            ...btnStyles,
                            background: 'transparent',
                            border: '1.5px solid #0092ff',
                            color: '#0092ff',
                            ':hover': {
                                color: 'white'
                            }
                        }}
                            variant='contained'>
                            <Typography fontSize='14px'>
                                View Projects

                            </Typography>
                        </Button> */}
           <Button sx={{':hover' : {background:'#0384e4'}}} className="button explore">
            Explore
           <span className="icon-right"></span>
           <span className="icon-right after">

           </span>
           </Button>
                        <Button sx={btnStyles} variant='outlined'>
                            <Typography fontSize='14px'>
                                DOWNLOAD CV
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid
                    sx={{
                     
                      
                    
                    mb: {
                        xs: '3.5em',
                        sm: '4em',
                        lg: '1em'
                    },
                    mr: {
                        sm: '1em',
                        md: '2em',
                        lg: '0em'
                    },
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'flex-end'
                }}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={5}>
                    <Box
                        sx={{
                        borderRadius: '6px',
                        width: {
                            xs: '100%',
                            sm: '350px',
                            md: '400px'
                        }
                    }}>
                        <Box
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            height: '460px',
                            boxShadow: {
                                xs: '.5em 3em 0 #313131 ',
                                sm: '2em 3em 0px #313131'
                            }
                        }}>

                            <img
                                style={{
                                borderRadius: '6px',
                                zIndex: '2'
                            }}
                                className='img1'
                                src={`https://vitomedl.netlify.app/static/media/ane.3273a2f2.png`}
                                alt=""/>
                            <Box
                                sx={{
                                width: '100px',
                                height: '100px',
                                zIndex: '0',
                                position: 'absolute',
                                right: {
                                    xs: '-1%',
                                    sm: '-5%'
                                },
                                bottom: '-5%',
                                background: 'transparent',
                                backgroundImage: 'radial-gradient(white 2px, transparent 0)',
                                backgroundSize: '15px 13px'
                            }}></Box>
                            <Box
                                sx={{
                                zIndex: '2',
                                position: 'absolute',
                                bottom: {
                                    xs: '0%',
                                    lg: '-5%'
                                },
                                width: '100%',
                                right: {
                                    sm: '25%'
                                },
                                background: '#0092ff'
                            }}>
                                <Typography
                                    sx={{
                                    fontWeight: '300',
                                    fontSize: '1em',
                                    padding: '1em'
                                }}>
                                    Whether it's a mobile application or web application, we are a team.
                                </Typography>

                            </Box>

                        </Box>

                    </Box>
                </Grid>

            </Grid>

        </Container>
    )
}

export default Hero