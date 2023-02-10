import React from 'react'
import Layout from '../../Layout/Layout'
import {Box, Button, TextField, Typography} from '@mui/material'

const Index = () => {
    return (
        <Layout
            navbarSx={{
            opacity: 1,
            // background: '#000000eb',
        }}
            title='Vito Medlej | Blog '>
            <main>

                <Box
                    sx={{
                      backgroundSize:'cover',
                      backgroundRepeat:'no-repeat',
                    backgroundImage: 'url(https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
                    height: '500px',
                    width: '100%'
                }}>
                  <Box sx={{alignItem:'center',flexDirection:'column',maxWidth:'md',textAlign:'center',display:'flex',justifyContent:'center',margin:'0 auto',height:'100%'}}>

                  <Typography component='h1' sx={{color:'black',fontSize:{xs:'1.5em',md:'2em',lg:'2.5em'},fontWeight:'bold',py:'.5em'}}>
                          Best Articles From Experienced Devs To The World
                  </Typography>
                  <Typography component='h4' sx={{color:'gray',fontWeight:'300',maxWidth:'sm',margin:'0 auto',textAlign:'center'}}>
                      The more you learn the more you earn. Regardless of if you are just starting out or already in the tech industry, there is an article just for you.  
                  </Typography>
                  <Box sx={{margin:'0 auto',pt:1,display:'flex'}}>
                  <TextField placeholder='Email Address'/>
                  <Button sx={{color:'black'}}>
                    Subscribe
                  </Button>
                  </Box>
                  </Box>
                    {/* <img className='img' src='' alt='Intro Section background Image'/> */}

                </Box>
            </main>
        </Layout>
    )
}

export default Index