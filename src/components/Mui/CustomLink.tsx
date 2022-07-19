import {Typography} from "@mui/material"
import Link from 'next/link'
import {ICustomLink} from "../../Types/Types"

const CustomLink = ({
    fontWeight = '300',
    text,
    href,
    handleClick,
    color = 'white'
} : ICustomLink) => {

    return (
        <Link href={href}>
            <Typography
                onClick={handleClick && handleClick}
                sx={{
                cursor: 'pointer',
                color,
                fontWeight
            }}>
                {text}
            </Typography>
        </Link>
    )
}

export default CustomLink