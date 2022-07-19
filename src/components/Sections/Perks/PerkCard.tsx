import {Box, Typography, IconButton} from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
const PerkCard = () => {
    return (
        <Box
            sx={{
            width: {
                xs: '90%',
                sm: '45%',
                md: '30%'
            },
            my: '2em'
        }}>
            <AddTaskIcon
                sx={{
                boxSizing: 'content-box',
                background: '#0092ff',
                color: 'white',
                padding: '.55em',
                borderRadius: '50%'
            }}
                fontSize='medium'/>
            <Typography
                variant='h2'
                sx={{
                pt: '.5em'
            }}
                fontWeight='400'
                fontSize='1.4em'>
                Hello world
            </Typography>
            <Typography
                variant='h3'
                sx={{
                pt: '1em'
            }}
                fontWeight='300'
                fontSize='.9em'
                className='secondary'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat.
            </Typography>

        </Box>
    )
}

export default PerkCard