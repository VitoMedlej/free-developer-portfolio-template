import {Box, Typography, Button, Divider} from '@mui/material';
import Image from 'next/image'
import {btnStyles} from '../Hero/Hero';
const ProjectCard = ({isReversed,img,repoUrl,siteUrl,title,description} : any) => {
    return (
        <Box
            sx={{
            display: 'flex',
            my:{xs:'0em',sm:'1em',md:'3em'},
            flexDirection: {
                xs: 'column',
                md: `${isReversed ? 'row':'row-reverse'}`
            },
            alignItems: 'center',
        }}>
            <Box
                sx={{
                    width: {xs:'100%',sm:'600px'},
                    minWidth:{xs:'auto',sm:'250px',md:'390px'},
                    height: '400px',
                    position: 'relative'
                }}>

                <Image
                    className='img1 '
                    layout='fill'
                    src={`${img}`}/>
            </Box>
            <Box
                sx={{
                    // boxShadow:'1.5em 1em 1px #0092ff',
                borderRadius: '6px',
                width: {
                    xs: '94%',
                    md: 'auto'
                },
                transform: {
                    xs: 'translateY(-25%)',
                    md: `${isReversed ? 'translateX(-25%)':'translateX(25%)'}`
                },
                maxWidth: '600px',
                padding: '2em 1.5em',
                textAlign: 'left',
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                background: 'white',
                color: 'black',
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center'
            }}>
           
                <Box >

                    <Typography
                        color='black'
                        sx={{
                        fontSize: '1.4em',
                        fontWeight: '500',
                        pb: '.25em'
                    }}>
                       {title}
                    </Typography>
                    <Typography
                        color='black'
                        variant='h3'
                        sx={{
                        fontSize: '.9em',
                        fontWeight: '300'
                    }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo, voluptate
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo, voluptate
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit illo, voluptate
                        culpa ad perferendis, nostrum est totam voluptatum minima corporis vero
                        necessitatibus rerum, sit veritatis?
                    </Typography>
                    <Box
                        sx={{
                        gap: '.5em',
                        display: 'flex',
                        flexWrap: 'wrap',
                        mt:'1em',
                    }}>
                        <a href={`${siteUrl}`} target="_blank">

                        <Button
                            variant='contained'
                            sx={{
                                ...btnStyles,
                                padding: '.5em .8em',
                                color: 'white',
                                border: '1px solid #0092ff'
                            }}>
                            <Typography fontSize='12px'>
                                Live Site
                            </Typography>
                        </Button>
                            </a>
                        <a href={`${repoUrl}`} target="_blank">

                        <Button
                            variant='text'
                            sx={{
                                ...btnStyles,
                                padding: '.5em .8em',
                                color: '#0092ff',
                                
                            }}>
                            <Typography fontSize='12px'>
                               Check Code
                            </Typography>
                        </Button>
                            </a>

                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default ProjectCard