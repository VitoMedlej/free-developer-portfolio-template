import {Box, Button, Container} from "@mui/material"
import Typography from '@mui/material/Typography';
import {useRouter} from "next/router";
import {useEffect} from "react";
import gsap from 'gsap'
const CTA = () => {
    const router = useRouter()

    useEffect(() => {

        gsap.to(".CTAbox", {
            left: '0%',
            duration: .8,
            scrollTrigger: {
                trigger: '.CTAbox',
                start: 'top 65%'
            }
        });
        gsap.to(".CTAcontainer p", {
            delay: .8,
            opacity: 1,
            scrollTrigger: {
                trigger: '.CTAbox',
                start: 'top 65%'
            }
        });
        gsap.to(".ctabtn", {
            delay: .95,
            opacity: 1,
            scrollTrigger: {
                trigger: '.CTAbox',
                start: 'top 65%'
            }
        });

    }, [])
    return (
        <Box
            sx={{
            width: '100%',
            height: '300px',
            my: '6em',
            position: 'relative'
        }}>

            <Box
                className='CTAbox'
                sx={{
                width: "100%",
                top: 0,
                left: '-100%',
                position: 'absolute',
                background: '#0092ff'
            }}>

                <Container
                    className='CTAcontainer '
                    maxWidth='lg'
                    sx={{
                    margin: '0 auto',
                    py: '3em'
                }}>

                    <Typography
                        className='t25o0'
                        sx={{
                        textAlign: 'center',
                        fontSize: {
                            xs: '1.5em',
                            sm: '2em',
                            md: '2.5em'
                        }
                    }}
                        fontWeight='600'>
                        What&apos;s holding you back? Send me a message!
                    </Typography>
                    <Box
                        sx={{
                        margin: '1.5em 0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                     
                        <Button
                            onClick={()=>router.push('/contact')}
                            className='ctabtn'
                            sx={{
                            color: 'white',
                            opacity:0,
                            border: '1px solid white',
                            mt: '.5em',
                            ':hover': {
                                background: 'white',
                                color: '#0092ff'
                            },
                            padding: '.5em 3.5em'
                        }}
                            variant='outlined'>
                            Contact
                        </Button>
                    </Box>

                </Container>
            </Box>
        </Box>

    )
}

export default CTA