import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import {IToolCard} from '../../../Types/Types';
import {centeredStyles} from '../Perks/Perks';

const ToolCard = ({title, svg, filter} : IToolCard) => {
    return (
        <Box
            sx={{
            my: '1em',
            maxWidth: '250px',
            width: {
                xs: '50%',
                sm: '33%'
            }
        }}>
            <Box
                sx={{
                ...centeredStyles,
                width: {
                    xs: '35px',
                    sm: '60px'
                },
                height: {
                    xs: '40px',
                    sm: '60px'
                }
            }}>

                <Image
                    className={`${filter
                    ? 'filter '
                    : ''}  icon`}
                    width='100%'
                    height='100%'
                    src={`${svg}`}/>
            </Box>
            <Typography
                    variant='h3'

                sx={{
                fontSize: {
                    xs: '.86em',
                    sm: '1em'
                }
            }}>{title}</Typography>
        </Box>
    )
}

export default ToolCard
