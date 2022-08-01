import {Box, Typography, Container, Button} from '@mui/material';
import {useRef, useEffect} from 'react';
import HeroSectionAnimation from '../../src/gsap/HeroSectionAnimation';
import gsap from 'gsap'
import {Divider} from '@mui/material';
import Input from '../../src/components/Mui/Input';
import ContactBox from '../../src/components/Contact/ContactBox';

const index = () => {
    const ref = useRef();
    const q = gsap
        .utils
        .selector(ref);
    useEffect( () => {
        gsap.to('.st',{opacity:1,duration:'.7'})
        HeroSectionAnimation(q)

    }, [])

    return (
        <Box sx={{
            overflowX: 'hidden'
        }}>

            <Container
                id='hero'
                maxWidth='lg'
                sx={{
                margin: '0 auto',
                pt: {
                    xs: '7.5em',
                    sm: '8.5em'
                },
                position: 'relative'
            }}>
                <Box
                    className='gradientBg st'
                    sx={{
                    width: '150px',
                    height: '150px',
                    zIndex: '0',
                    position: 'absolute',
                    top: {
                        xs: '60%',
                        sm: ' 75%'
                    },
                    transform: 'rotate(15deg)',
                    right: {
                        xs: '80%',
                        sm: '86%'
                    },
                    background: 'transparent',
                    backgroundImage: 'radial-gradient(#0092ff 2px, transparent 0)',
                    backgroundSize: '15px 13px'
                }}></Box>
                <Box
                    className='gradientBg'
                    sx={{
                    width: '90px',
                    height: '90px',
                    zIndex: '0',
                    position: 'absolute',
                    top: {
                        xs: '6%',
                        sm: '5%'
                    },
                    opacity:0,
                    right: '-4%',
                    background: 'transparent',
                    backgroundImage: 'radial-gradient(#0092ff 2px, transparent 0)',
                    backgroundSize: '15px 13px'
                }}></Box>
                <Box ref={ref}>

                    <Typography
                        className='t1'
                        variant='h1'
                        sx={{
                        fontSize: {
                            xs: '2.4em',
                            sm: '3.4em',
                            md: '3.8em'
                        },
                        textAlign: 'center',
                        transform: 'translateY(40px)',
                        opacity: 0,
                        pt: '1em',
                        fontWeight: '600'
                    }}>
                        Let&apos;s achieve the impossible together
                    </Typography>
                    <Typography
                        variant='h2'
                        className='secondary t2 t25o0'
                        sx={{
                        textAlign: 'center',
                        pt: '1.5em',
                        margin: '0 auto',
                        fontSize: {
                            xs: '.9em',
                            sm: '1em'
                        },
                        maxWidth: '570px',
                        fontWeight: '300'
                    }}>
                        If you need help or have some questions, I&apos;ll be there ready and happy to
                        help.
                    </Typography>
                </Box>
                <Box
                    sx={{
                    justifyContent: 'center',
                    display: 'flex',
                    margin: '0 auto',
                    flexDirection: 'column',
                    width: {
                        xs: '100%',
                        md: '600px'
                    }
                }}>

                    <Box
                        sx={{
                        mt: '6em',
                        justifyContent: 'space-between'
                    }}>
                        <Box
                            sx={{
                            display: 'flex',
                            gap: '1em'
                        }}>
                            <Input label='Name'/>
                            <Input type='number' label='Phone'/>
                        </Box>
                        <Input type='email' label='Email' mt='1em'/>

                        <Input label='Subject' mt='1em' multi={true}/>

                        <Button
                            className='loadMore'
                            variant='contained'
                            sx={{
                            display: 'flex',
                            margin: '4em auto ',
                            padding: '.5em 3.5em',
                            width: {
                                xs: '100%',
                                sm: '250px'
                            },
                            background: 'transparent',
                            border: '1px solid',
                            color: '#0092ff',
                            ':hover': {
                                border: '1px solid transparent'
                            }
                        }}>
                            Send
                        </Button>

                    </Box>
                    <Divider></Divider>
                    <Box sx={{
                        my: '3em'
                    }}>

                        <ContactBox t1='Get in touch' t2='Email Address' t3='vito.medlej@gmail.com'/>
                        <ContactBox t1='Location' t2='Currently living in' t3='Lebanon/Beirut'/>
                        <ContactBox t1='Contact Directly ' t2='Phone Number' t3='+961/ 81826445'/>
                    </Box>

                </Box>

            </Container>
        </Box>

    )
}

export default index
