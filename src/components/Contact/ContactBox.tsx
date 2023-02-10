import { Box, Typography } from "@mui/material";
import { IContactBox } from "../../Types/Types";


const ContactBox = ({t1, t2, t3,target,href} : IContactBox) => {
    return (
        <Box
            sx={{
            my: '2em',
            display: 'flex',
       
            justifyContent: 'space-between',
            flexDirection: {
                xs: 'column',
                sm: 'row'
            }
        }}>
            <Typography
                variant='h1'
                sx={{
                fontSize: {
                    xs: '1.4em'
                },
                textAlign: {
                    xs: 'center',
                    sm: 'left'
                },
                fontWeight: '600'
            }}>
                <a href={`${href}`} target={target || '_self'} >

                {t1}
                </a>
            </Typography>
            <Box
                sx={{
                pt: {
                    xs: '1em',
                    sm: 0
                },
                width: '250px',
                margin: {
                    xs: '0 auto',
                    sm: 0
                }
            }}>
                <Typography
                    variant='h2'
                    sx={{
                    fontSize: {
                        xs: '1em'
                    },
                    cursor:'pointer',
                    textAlign: {
                        xs: 'center',
                        sm: 'revert'
                    },
                    fontWeight: '400'
                }}>
                    {t2}
                </Typography>
                <Typography
                    variant='h3'
                    sx={{
                    fontSize: {
                        xs: '1em'
                    },
                    textAlign: {
                        xs: 'center',
                        sm: 'revert'
                    },
                    fontWeight: '300'
                }}>
                    {t3}
                </Typography>
            </Box>

        </Box>
    )
}
export default ContactBox