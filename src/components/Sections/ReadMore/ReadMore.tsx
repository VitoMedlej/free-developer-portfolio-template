import {Typography} from "@mui/material";
import {useState} from "react";

const ReadMore = ({children} : any) => {
    const text = children;
    const [isReadMore,
        setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <Typography
            variant='h2'
            sx={{
            maxWidth: '570px',
            fontSize: {
                xs: '.82em',
                sm: '1em'
            }
        }}>

            {isReadMore
                ? text.slice(0, 90)
                : text}
            <span
                style={{
                cursor: 'pointer',
                color: '#0092ff'
            }}
                onClick={toggleReadMore}>
                {isReadMore
                    ? "...read more"
                    : " show less"}
            </span>
        </Typography>
    );
};
export default ReadMore