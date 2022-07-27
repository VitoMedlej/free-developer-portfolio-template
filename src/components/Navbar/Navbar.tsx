import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import {useContext, useState} from 'react';
import Link from 'next/link';
import CustomLink from '../Mui/CustomLink';
import {INavbar} from '../../Types/Types';
import {ColorModeContext} from '../../../pages/_app';
import InboxIcon from '@mui/icons-material/Inbox';



export const Links = [{text:'Home',Icon:InboxIcon,url:'/'}, {text:'Contact',Icon:InboxIcon,url:'/contact'}]

const Navbar = ({toggleDrawer} : INavbar) => {
    const colorMode = useContext(ColorModeContext)
    const color = colorMode.mode === 'light'
        ? 'black'
        : 'white'
    return (
        <AppBar
            sx={{
            background: 'transparent',
            boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
            py: '.25em',
            zIndex: '555',
            backdropFilter: 'blur(1px)',
            position: 'fixed'
        }}
            position="static">
            <Container
                sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto'
            }}
                maxWidth="lg">
                <CustomLink color='#0092ff' fontWeight='600' text='LOGO' href='/'/>

                <IconButton
                    sx={{
                    color,
                    ':hover': {
                        color
                    },
                    ":focus": {
                        color
                    }
                }}
                    onClick={() => toggleDrawer()}
                    size="large"
                    edge="start"
                    aria-label="menu">
                    <MenuIcon/>
                </IconButton>

            </Container>
        </AppBar>
    );
};
export default Navbar;