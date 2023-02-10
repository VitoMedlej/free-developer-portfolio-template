import {Box} from '@mui/material'
import CustomLink from '../Mui/CustomLink'
import {useRouter} from 'next/router';
import gsap from 'gsap';

const Logo = ({toggleDrawer, colorMode, color} : any) => {
    const router = useRouter()
    return (
        <Box
            onClick={() => {
            toggleDrawer(false);
            if (router.pathname !== '/') 
         {   console.log('pathname: ', router);
         router.push('/');
        }
                gsap.to(window, {
                    duration: 1,
                    scrollTo: `#hero`
                });
            }}
            sx={{
                flex:1,
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