import { Box, Typography } from "@mui/material"
import { centeredStyles } from "../Sections/Perks/Perks"
import Image from 'next/image'
import { ISocialMedia } from "../../Types/Types"

const SocialMediaIcon = ({title, svg, href, filter} : ISocialMedia) => {
    return (
        <Box
            sx={{
            my: '.5em',
            maxWidth: '150px',
            transition: '.2s ease',
            ...centeredStyles,
            width: {
                xs: '50%',
                sm: '25%'
            },
            margin: '0 auto',
            
        }}>
            <a target="_blank" rel="noreferrer" href={href}>

                <Box
                    sx={{
                    ...centeredStyles,
                    width: {
                        xs: '35px'
                    },
                    height: {
                        xs: '35px'
                    },
                  
                }}>

                    <Image
                        alt='Icon'
                        className={`${filter
                        ? 'filter '
                        : ''} icon`}
                        width='100%'
                        height='100%'
                        src={svg || ''}/>
                </Box>
                <Typography
                    variant='h3'
                    sx={{
                    pt: '.25em',
                    fontSize: {
                        xs: '.75em'
                    }
                }}>{title}</Typography>
            </a>

        </Box>
    )
}

export default SocialMediaIcon