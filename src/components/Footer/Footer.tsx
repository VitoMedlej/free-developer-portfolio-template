import CssBaseline from '@mui/material/CssBaseline';
import {Box, Container, Typography} from '@mui/material';
import Link from '@mui/material/Link';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '} {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Footer() {
    return (
        <Box >

            <Box
                sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '150px',
                justifyContent: 'center',
                margin: '0 auto'
            }}>
                <CssBaseline/>

                <Box
                    component="footer"
                    sx={{
                    pb: 3,
                    px: 2,
                    backgroundColor: (theme) => theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800]
                }}>
                    <Container maxWidth="sm">
                        <Typography variant="body1">
                            My sticky footer can be found here.
                        </Typography>
                        <Copyright/>
                    </Container>
                </Box>
            </Box>
        </Box>

    );

}
export default Footer