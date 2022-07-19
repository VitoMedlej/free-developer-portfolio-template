import {Box, Container, Typography, Divider} from '@mui/material';
import PerkCard from './PerkCard';

export const centeredStyles = {
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
}
const Perks = () => {
    return ( <> <Container
        maxWidth='lg'
        sx={{
        margin: '0 auto',
        my: '4em'
    }}>
        <Box sx={centeredStyles}>
            <Typography
            variant='h1'
                sx={{
                fontSize: {
                    xs: '2.2em',
                    sm: '2.5em',
                    md: '3em'
                }
            }}
                fontWeight='600'>
                Build up the whole picture
            </Typography>
            <Typography
            variant='h2'

                className='secondary'
                sx={{
                pt: '1.5em',
                maxWidth: '570px',
                fontSize: {
                    xs: '.8em',
                    sm: '1em'
                }
            }}>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam
                ut venenatis.
            </Typography>

            <Box
                sx={{
                mt: '3em',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5%',
                justifyContent: {
                    xs: 'center',
                    sm: 'space-between'
                }
            }}>
                {[1, 2, 3].map(n => {
                    return <PerkCard key={n}/>
                })}
            </Box>
        </Box>
    </Container> < Divider className = 'divider' /> </>)
}

export default Perks