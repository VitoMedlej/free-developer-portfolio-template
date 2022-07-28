import { Box } from '@mui/material'
import CustomLink from '../Mui/CustomLink'

const Logo = ({toggleDrawer,colorMode,color} : any) => {
    return (
        <Box
            onClick={() => toggleDrawer(false)}
            sx={{
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center'
        }}>

            <img
                className={`${colorMode.mode === 'dark'
                ? 'logoImg '
                : ''}small`}
                src="https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"
                alt=""/>
            <CustomLink color={color} fontWeight='600' text='Medlej' href='/'/>
        </Box>
    )
}

export default Logo