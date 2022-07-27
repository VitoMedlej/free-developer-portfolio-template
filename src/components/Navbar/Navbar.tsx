import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import {useContext,} from 'react';
import CustomLink from '../Mui/CustomLink';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import gsap from 'gsap'
import { INavbar } from '../../Types/Types';
import { ColorModeContext } from '../../../pages/_app';

export const Links = [
    {
        text: 'Home',
        Icon: HomeIcon,
        url: '/'
    }, {
        text: 'Contact',
        Icon: AlternateEmailIcon,
        url: '/contact'
    },
    {
        text: 'Projects',
        Icon: AccountTreeIcon,
        url: '/',
        onClick: true
    },
    {
        text: 'Theme',
        Icon: WbSunnyIcon,
        url: '/'
    }
]

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