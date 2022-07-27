import { Container, Box, Grid, Divider } from '@mui/material';
import Image from 'next/image'
import Typography from '@mui/material/Typography';
import ReadMore from '../ReadMore/ReadMore';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';

const About = () => {
    const colorMode = useContext(ColorModeContext)
    return (
    <>
        <Container
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: '6em',
          
        }}>
            <Grid
                container
                sx={{
                justifyContent: {
                    sm: 'center',
                    md: 'space-between'
                }
            }}>

                <Grid item xs={12} sm={12} md={4} lg={5}>
                    <Box
                        sx={{
                        maxWidth: '400px',
                        width: '100%',
                        height: '450px',
                        margin: '0 auto',
                        boxShadow: {
                            xs: '-.5em 1.5em 0px #0092ff',
                            sm: '-1.5em 1.5em 0px #0092ff'
                        },
                        position: 'relative'
                    }}>
                        <Box
                            sx={{
                            width: '100px',
                            height: '100px',
                            zIndex: '0',
                            position: 'absolute',
                            right: {
                                xs: '-4%',
                                sm: '90%'
                            },
                            
                            bottom: {
                                xs: '-5%',
                                sm: '-10%'
                            },
                            background: 'transparent',
                            backgroundImage:colorMode.mode === 'dark' ? 'radial-gradient(white 2px, transparent 0)' : 'radial-gradient(black 2px, transparent 0)',
                            backgroundSize: '15px 13px'
                        }}></Box>
                        <Image
                            className='img1 '
                            layout='fill'
                            src={`https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80`}/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7.5} lg={7}>
                    <Box sx={{
                        pb: '.5em'
                    }}>
                        <Typography
                            variant='h1'
                            sx={{
                            fontSize: {
                                xs: '2.2em',
                                sm: '2.5em',
                                md: '3em'
                            },
                            py: '.5em',
                            pt: {
                                xs: '1.5em',
                                sm: '.5em'
                            }
                        }}
                            fontWeight='600'>
                            Hello My non boring friend
                        </Typography>
                        <Typography
                            variant='h2'
                            sx={{
                            maxWidth: '570px',
                            fontSize: {
                                xs: '.8em',
                                sm: '1em'
                            }
                        }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur corporis
                            consequatur, placeat praesentium odit expedita, tenetur velit eos magni
                            obcaecati dignissimos exercitationem hic ullam dicta, maiores veniam temporibus.
                            Provident dolor quos ad quidem. Aspernatur omnis eum molestiae odit deserunt
                            porro placeat. Ex molestiae odit ullam ipsa necessitatibus fugit quasi non.

                        </Typography>
                    </Box>
                    <ReadMore>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur corporis
                        consequatur, placeat praesentium odit expedita, tenetur velit eos magni
                        obcaecati dignissimos exercitationem hic ullam dicta, maiores veniam temporibus.
                        Provident dolor quos ad quidem. Aspernatur omnis eum molestiae odit deserunt
                        porro placeat. Ex molestiae odit ullam ipsa necessitatibus fugit quasi non.

                    </ReadMore>
                </Grid>
            </Grid>

        </Container>
    {/* <Divider/> */}
        </>
    
    )
}

export default About