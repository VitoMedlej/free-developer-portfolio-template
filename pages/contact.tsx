import {
    Box,
    Typography,
    Container,
    Button,
    FormControl,
    TextField
} from '@mui/material';
import {useRef, useEffect, useState, useContext} from 'react';
import HeroSectionAnimation from '../src/gsap/HeroSectionAnimation';
import gsap from 'gsap'
import {Divider} from '@mui/material';
import Input from '../src/components/Mui/Input';
import ContactBox from '../src/components/Contact/ContactBox';
import Layout from '../Layout/Layout';
import SocialMedia from '../src/components/Contact/SocialMedia';
import emailjs from '@emailjs/browser';
import {ColorModeContext} from './_app';

const Contact = () => {
    const colorMode = useContext(ColorModeContext)

    const ref = useRef();
    const form = useRef();
    const [status,
        setStatus] = useState(0)
    const [email,
        setEmail] = useState('')
        const color = status === 200
        ? 'green'
        : 'red';
        const inputColor = colorMode.mode === 'light'
        ? 'black'
        : 'white';
    const q = gsap
        .utils
        .selector(ref);
    useEffect(() => {
        gsap.to('.gradientBg2', {
            opacity: 1,
            duration: '.7',
            delay: '.75'
        })
        HeroSectionAnimation(q)

    }, [])

 
 



    const sendEmail = async(e : any) => {

        e.preventDefault();

        if (!form.current) 
            return;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email.match(regexEmail)) {
            setStatus(400)
            return;
        }

        const req = await emailjs.sendForm(`service_fvka279`, 'template_veigfx8', form.current, 'lbTdA9-5crCdl733u')
        const res = await req
        setStatus(res ? res.status : 400)
    };

    return (
        <Layout
            title='Vito Medlej contact page'
            desc='If you have questions or need help you can contact me at vito.medlej@gmail.com | Or Send a Message through the form.'>

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
                        className='gradientBg2'
                        sx={{
                        width: '90px',
                        height: '90px',
                        zIndex: '0',
                        position: 'absolute',
                        top: {
                            xs: '6%',
                            sm: '5%'
                        },
                        opacity: 0,
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
                            ref={form}
                            onSubmit={sendEmail}
                            component='form'
                            sx={{
                            mt: '6em',
                            justifyContent: 'space-between'
                        }}>
                            <Typography
                                sx={{
                                textAlign: 'center',
                                pb: '1em',
                                color
                            }}>

                                {status === 200
                                    ? 'Message sent. Expect a reply soon!'
                                    : ''}
                                {status > 200 && 'There was an error, make sure to fill all the inputs and try again.'}
                            </Typography>
                            <Box
                                sx={{
                                display: 'flex',
                                gap: '1em'
                            }}>
                                <Input name="user_name" label='Name'/>
                                <Input name="user_phone" type='number' label='Phone'/>
                            </Box>
                            {/* <Input name="user_email" type='email' label='Email' mt='1em'/> */}

                            <TextField
                                name={'user_email'}
                                type={'email'}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{
                                color: inputColor || 'black',
                                input: {
                                    color: inputColor || 'black'
                                },
                                width: '100%',
                                mt: '1em'
                            }}
                                label={'Email'}
                                variant="outlined"/>

                            <Input name="message" label='Subject' mt='1em' multi={true}/>

                            <Button
                                type='submit'
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

                        <Divider/>
                        <Box sx={{
                            my: '3em'
                        }}>

                            <ContactBox 
                            href='mailto:vito.medlej@gmail.com'
                            target='_blank'
                            t1='Get in touch' t2='Email Address' t3='vito.medlej@gmail.com'/>
                            <ContactBox 
                            href={`https://www.google.com/maps/place/Lebanon/data=!4m2!3m1!1s0x151f17028422aaad:0xcc7d34096c00f970?sa=X&ved=2ahUKEwiK1JSG9or9AhXfUaQEHdUJC40Q8gF6BAgIEAI`}
                            target='_blank'
                            t1='Location'
                             t2='Currently living in' t3='Lebanon/Beirut'/>
                            <ContactBox 
                            target='_blank'
                            href={'https://wa.me/96181826445'}
                            t1='Contact Directly ' t2='Phone Number' t3='+961/ 81826445'/>
                        </Box>
                    </Box>
                    <SocialMedia/>

                </Container>
            </Box>
        </Layout>

    )
}

export default Contact
