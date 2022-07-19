import {Box, Container, Divider, Drawer, IconButton} from '@mui/material'
import {useState} from 'react'
import {ICustomDrawer} from '../../Types/Types'
import CustomLink from '../Mui/CustomLink'
import CloseIcon from '@mui/icons-material/Close';

const CustomDrawer = ({isOpen, toggleDrawer} : ICustomDrawer) => {

    return (

        <Drawer 
        anchor={'right'} open={isOpen} onClose={() => toggleDrawer(false)}>
            <Container
                sx={{
        zIndex:'555555',
                    color: 'white',
                background: '#1f1f1f',
                display: 'flex',
                width: '290px',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto'
            }}>

                <CustomLink handleClick={()=>toggleDrawer(false)}color='#0092ff' fontWeight='600' text='LOGO' href='/'/>
                <IconButton
                    onClick={() => toggleDrawer(false)}
                    size="large"
                    sx={{
                    color: 'red',
                    padding : '.5em 0'
                }}
                    edge="start"
                    aria-label="menu">
                    <CloseIcon/>
                </IconButton>
            </Container>

            <Container
                sx={{
                pt: '1.5em',
                background: '#232323',
                color: 'white',
                height: '100%'
            }}>
                fasfasf asfasfasf
            </Container>
        </Drawer>

    )
}

export default CustomDrawer