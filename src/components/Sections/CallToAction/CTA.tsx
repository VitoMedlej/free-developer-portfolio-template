import {Box, Button, Container} from "@mui/material"
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";

const CTA = () => {
    const router = useRouter()
    return (
        <Box sx={{
            background: '#0092ff',
            my: '6em'
        }}>

            <Container
                maxWidth='lg'
                sx={{
                margin: '0 auto',
                py: '3em'
            }}>

                <Typography
                   
                    sx={{
                    textAlign: 'center',
                    fontSize: {
                        xs: '1.5em',
                        sm: '2em',
                        md: '2.5em'
                    }
                }}
                    fontWeight='600'>
                    What's holding you back? Send me a message!
                </Typography>
                <Box
                    sx={{
                  
                    margin: '1.5em 0  auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <Button
                    onClick={()=>router.push('/contact')}
                        sx={{
                        border: '1px solid',
                        ':hover': {
                            background: '#0384e4'
                        }
                    }}
                        className="button br2 explore">
                        Contact Me
                        <span className="icon-right"></span>
                        <span className="icon-right after"></span>
                    </Button>
                </Box>

            </Container>
        </Box>

    )
}

export default CTA