import {Box, Container, Divider, Drawer, IconButton} from '@mui/material'
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
            <Box

                sx={{
            px:'1em',
                    zIndex: '555555',
                display: 'flex',
                width: '300px',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto'
            }}>

                {/* <CustomLink
                    handleClick={() => toggleDrawer(false)}
                    fontWeight='600'
                    text='VITO'
                    href='/'
                    color='#0092ff'/> */}
                <Box
                onClick={() => toggleDrawer(false)}
                    sx={{
                    display: 'flex',
                    alignItems: 'center'
                }}>

                    <img
                        className='logoImg small'
                        src="https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"
                        alt=""/>
                    <CustomLink color='white' fontWeight='600' text='Medlej' href='/'/>
                </Box>


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
            </Box>
            <Divider/>

            <Box
                sx={{
                pt: '1em',
                height: '100%'
            }}>
                {Links.map(link => {
                    return <DrawerItem
                        isToggleTheme={link
                        ?.isToggleTheme}
                        toggleDrawer={toggleDrawer}
                        key={link.text}
                        url={link.url}
                        Icon={link.Icon}
                        text={link.text}/>
                })}
            </Box>
        </Drawer>

    )
}

export default CustomDrawer