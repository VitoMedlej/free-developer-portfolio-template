import {Box, Container, Divider, Drawer, IconButton} from '@mui/material'
import {useState} from 'react'
import {ICustomDrawer} from '../../Types/Types'
import CustomLink from '../Mui/CustomLink'
import CloseIcon from '@mui/icons-material/Close';
import {Links} from '../Navbar/Navbar';
import DrawerItem from './DrawerItem';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import gsap from 'gsap'



const CustomDrawer = ({isOpen, toggleDrawer} : ICustomDrawer) => {
    gsap.registerPlugin(ScrollToPlugin);

    return (

        <Drawer anchor={'right'} open={isOpen} onClose={() => toggleDrawer(false)}>
            <Container
                sx={{
                zIndex: '555555',
                display: 'flex',
                width: '290px',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto'
            }}>

                <CustomLink
                    handleClick={() => toggleDrawer(false)}
                    fontWeight='600'
                    text='LOGO'
                    href='/'
                    color='#0092ff'/>
                <IconButton
                    onClick={() => toggleDrawer(false)}
                    size="large"
                    sx={{
                    padding: '.5em 0'
                }}
                    edge="start"
                    aria-label="menu">
                    <CloseIcon/>
                </IconButton>
            </Container>
            <Divider/>

            <Box
                sx={{
                pt: '1em',
                height: '100%'
            }}>
                {Links.map(link => {
                    return <DrawerItem 
                    onClick={ link.onClick }
                    toggleDrawer={toggleDrawer} 
                    key={link.text} url={link.url} Icon={link.Icon} text={link.text}/>
                })}
            </Box>
        </Drawer>

    )
}

export default CustomDrawer