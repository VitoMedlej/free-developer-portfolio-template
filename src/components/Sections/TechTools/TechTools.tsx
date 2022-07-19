import {Container, Typography, Grid, Divider} from '@mui/material';
import { useContext, useMemo } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import {centeredStyles} from '../Perks/Perks';
import ToolCard from './ToolCard';
const FrontendTools = [
    {
        title: 'Reactjs',
        svg: 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9Ijc2IiB3aWR0aD0iODUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzYxZGFmYiIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iNDIuNSIgY3k9IjM4IiByeD0iNy42OSIgcnk9IjcuNzM2Ii8+PHBhdGggZD0iTTcxLjcxIDI1LjI0M2MtMS40ODQtLjU0My0zLjAzNS0xLjA4Ni00LjY1NC0xLjU2YTY4LjQxNyA2OC40MTcgMCAwMDEuMDExLTQuODE5YzEuNDE3LTguOTU3LS4xMzQtMTUuMjY4LTQuNDUyLTE3LjcxQzYyLjMzMy40MDcgNjAuOTE3LjA2OCA1OS4yOTguMDY4IDU0LjU3NS4wNjggNDguNTcgMy41OTYgNDIuNSA5LjUgMzYuNDI5IDMuNTk2IDMwLjQyNS4wNjggMjUuNzAyLjA2OGMtMS42MTkgMC0zLjAzNS4zNC00LjMxNyAxLjA4Ni00LjMxOCAyLjUxLTUuODcgOC44MjEtNC40NTIgMTcuNzEuMjcgMS41NjEuNjA3IDMuMTkgMS4wMTEgNC44MTgtMS42MTkuNDc1LTMuMTcuOTUtNC42NTQgMS41NkM0Ljg1NyAyOC41LjI3IDMyLjk4LjI3IDM4czQuNjU1IDkuNSAxMy4wMiAxMi43NTdjMS40ODQuNTQzIDMuMDM1IDEuMDg2IDQuNjU0IDEuNTZhNjguNDE3IDY4LjQxNyAwIDAwLTEuMDExIDQuODE5Yy0xLjQxNyA4Ljk1Ny4xMzQgMTUuMjY4IDQuNDUyIDE3LjcxIDEuMjgyLjc0NyAyLjY5OCAxLjA4NiA0LjMxNyAxLjA4NiA0Ljc5IDAgMTAuNzk0LTMuNTI4IDE2Ljc5OC05LjQzMiA2LjA3MSA1LjkwNCAxMi4wNzUgOS40MzIgMTYuNzk4IDkuNDMyIDEuNjE5IDAgMy4wMzUtLjM0IDQuMzE3LTEuMDg2IDQuMzE4LTIuNTEgNS44Ny04LjgyMSA0LjQ1Mi0xNy43MS0uMjctMS41NjEtLjYwNy0zLjE5LTEuMDExLTQuODE4IDEuNjE5LS40NzUgMy4xNy0uOTUgNC42NTQtMS41NkM4MC4xNDMgNDcuNSA4NC43MyA0My4wMiA4NC43MyAzOHMtNC41ODctOS41LTEzLjAyLTEyLjc1N3pNNjEuNzI2IDQuNTQ2YzIuNzY2IDEuNjI5IDMuNzEgNi42NSAyLjU2NCAxMy43NzUtLjIwMyAxLjQyNS0uNTQgMi45MTgtLjk0NSA0LjQ3OS0zLjUwOC0uODE0LTcuMjE4LTEuMzU3LTExLjEzLTEuNjk2YTk3LjgxIDk3LjgxIDAgMDAtNy4wMTctOC44MjJDNTAuMTkgNy4zMyA1NS4yNSAzLjkzNiA1OS4zNjUgMy45MzZjLjg3NyAwIDEuNjg3LjIwMyAyLjM2MS42MXptLTcuNTU1IDQwLjI0Yy0xLjIxNSAyLjE3MS0yLjYzMSA0LjM0My00LjExNSA2LjUxNC0yLjQ5Ni4yMDQtNC45OTMuMjcxLTcuNTU2LjI3MS0yLjYzMSAwLTUuMTI3LS4wNjctNy41NTYtLjI3MWE4NS41NjkgODUuNTY5IDAgMDEtNC4wNDctNi41MTRBMTA5LjU0NyAxMDkuNTQ3IDAgMDEyNy4zMiAzOGMxLjA4LTIuMjQgMi4yOTQtNC41NDYgMy41NzYtNi43ODYgMS4yMTQtMi4xNzEgMi42My00LjM0MyA0LjExNS02LjUxNCAyLjQ5Ni0uMjA0IDQuOTkyLS4yNzEgNy41NTUtLjI3MSAyLjYzMSAwIDUuMTI3LjA2NyA3LjU1Ni4yNzFhODUuNTY5IDg1LjU2OSAwIDAxNC4wNDggNi41MTRBMTA5LjU0NyAxMDkuNTQ3IDAgMDE1Ny43NDYgMzhjLTEuMTQ3IDIuMjQtMi4yOTQgNC40NzktMy41NzUgNi43ODZ6bTUuNTk5LTIuMjRjMS4wMTIgMi4zNzUgMS44MjEgNC42ODMgMi41NjMgNi45OS0yLjI5My41NDMtNC43MjIuOTUtNy4yODUgMS4yODkuODEtMS4yOSAxLjY4Ni0yLjY0NiAyLjQyOC00LjA3MS44MS0xLjQyNSAxLjU1Mi0yLjg1IDIuMjk0LTQuMjA4ek00Mi41IDYwLjkzNmMtMS42MTktMS43NjUtMy4xNy0zLjY2NS00LjY1NS01LjYzMiAxLjU1Mi4wNjcgMy4xMDMuMTM1IDQuNjU1LjEzNXMzLjEwMy0uMDY4IDQuNjU1LS4xMzVjLTEuNDg0IDEuOTY3LTMuMDM2IDMuODY3LTQuNjU1IDUuNjMyek0yOS45NTIgNTAuNzU3Yy0yLjU2My0uMzQtNC45OTItLjc0Ni03LjI4NS0xLjI5Ljc0Mi0yLjIzOCAxLjU1MS00LjYxMyAyLjU2My02Ljk4OC43NDIgMS4zNTcgMS40ODQgMi43ODIgMi4yOTQgNC4xMzkuODEgMS40OTMgMS42MTkgMi43ODIgMi40MjggNC4xNHpNMjUuMjMgMzMuNDU0Yy0xLjAxMi0yLjM3NS0xLjgyMS00LjY4My0yLjU2My02Ljk5IDIuMjkzLS41NDMgNC43MjItLjk1IDcuMjg1LTEuMjg5LS44MSAxLjI5LTEuNjg2IDIuNjQ2LTIuNDI4IDQuMDcxLS44MSAxLjQyNS0xLjU1MiAyLjg1LTIuMjk0IDQuMjA4em0xNy4yNy0xOC4zOWMxLjYxOSAxLjc2NSAzLjE3IDMuNjY1IDQuNjU1IDUuNjMyLTEuNTUyLS4wNjctMy4xMDMtLjEzNS00LjY1NS0uMTM1cy0zLjEwMy4wNjgtNC42NTUuMTM1YzEuNDg0LTEuOTY3IDMuMDM2LTMuODY3IDQuNjU1LTUuNjMyem0xNC45NzYgMTQuMjVsLTIuNDI4LTQuMDcxYzIuNTYzLjM0IDQuOTkyLjc0NiA3LjI4NSAxLjI5LS43NDIgMi4yMzgtMS41NTEgNC42MTMtMi41NjMgNi45ODgtLjc0Mi0xLjQyNS0xLjQ4NC0yLjg1LTIuMjk0LTQuMjA3ek0yMC43MSAxOC4zMjFjLTEuMTQ3LTcuMTI1LS4yMDItMTIuMTQ2IDIuNTY0LTEzLjc3NS42NzQtLjQwNyAxLjQ4NC0uNjEgMi4zNi0uNjEgNC4wNDkgMCA5LjEwOCAzLjMyNSAxNC4xNjggOC4zNDYtMi4zNjIgMi41NzktNC43MjMgNS41NjQtNy4wMTYgOC44MjItMy45MTMuMzM5LTcuNjIzLjk1LTExLjEzMSAxLjY5Ni0uNDA1LTEuNTYtLjY3NS0zLjA1NC0uOTQ1LTQuNDc5ek00LjA0OCAzOGMwLTMuMTkgMy44NDUtNi41ODIgMTAuNTktOS4wOTMgMS4zNS0uNTQzIDIuODM0LTEuMDE4IDQuMzE4LTEuNDI1YTk5LjI2NCA5OS4yNjQgMCAwMDQuMDQ4IDEwLjU4NmMtMS42MiAzLjU5Ni0zLjAzNiA3LjEyNS00LjA0OCAxMC41MThDOS42NDYgNDUuODcgNC4wNDggNDEuOCA0LjA0OCAzOHptMTkuMjI2IDMzLjQ1NGMtMi43NjYtMS42MjktMy43MS02LjY1LTIuNTY0LTEzLjc3NS4yMDMtMS40MjUuNTQtMi45MTguOTQ1LTQuNDc5IDMuNTA4LjgxNCA3LjIxOCAxLjM1NyAxMS4xMyAxLjY5NmE5Ny44MSA5Ny44MSAwIDAwNy4wMTcgOC44MjJjLTQuOTkyIDQuOTUzLTEwLjA1MiA4LjM0Ni0xNC4xNjcgOC4zNDYtLjg3NyAwLTEuNjg3LS4yMDMtMi4zNjEtLjYxek02NC4yOSA1Ny42NzljMS4xNDcgNy4xMjUuMjAyIDEyLjE0Ni0yLjU2NCAxMy43NzUtLjY3NC40MDctMS40ODQuNjEtMi4zNi42MS00LjA0OSAwLTkuMTA4LTMuMzI1LTE0LjE2OC04LjM0NiAyLjM2Mi0yLjU3OSA0LjcyMy01LjU2NCA3LjAxNi04LjgyMiAzLjkxMy0uMzM5IDcuNjIzLS45NSAxMS4xMzEtMS42OTYuNDA1IDEuNTYuNjc1IDMuMDU0Ljk0NSA0LjQ3OXptNi4wNzEtMTAuNTg2Yy0xLjM1LjU0My0yLjgzMyAxLjAxOC00LjMxNyAxLjQyNWE5OS4yNjQgOTkuMjY0IDAgMDAtNC4wNDgtMTAuNTg2YzEuNjItMy41OTYgMy4wMzYtNy4xMjUgNC4wNDgtMTAuNTE4Qzc1LjM1NCAzMC4xMyA4MC45NTIgMzQuMiA4MC45NTIgMzhjMCAzLjE5LTMuOTEyIDYuNTgyLTEwLjU5IDkuMDkzeiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjwvc3ZnPg=='
    }, {
        title: 'Nextjs',
        filter: true,
        svg: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1658045310/nextjs_l7vxuz.svg'
    }, {
        title: 'Webpack',
        svg: 'https://www.svgrepo.com/show/354552/webpack.svg'
    }, {
        title: 'Cypress',
        filter: true,
        svg: 'https://www.svgrepo.com/show/305923/cypress.svg'
    }, {
        title: 'Git',
        svg: 'https://www.svgrepo.com/show/353782/git-icon.svg',
        filter: false
    }, {
        title: 'Typescript',

        svg: 'https://www.svgrepo.com/show/349540/typescript.svg'
    }, {
        title: 'Javascript',
        svg: 'https://www.svgrepo.com/show/355081/js.svg'
    }, {
        title: 'Tailwindcss',
        svg: 'https://www.svgrepo.com/show/374118/tailwind.svg'
    }
]
const OtherTools = [
    {
        title: 'Nodejs',
        filter: false,
        svg: 'https://www.svgrepo.com/show/354119/nodejs-icon.svg'
    }, {
        title: 'Expressjs',
        svg: 'https://www.svgrepo.com/show/330398/express.svg',
        filter: true
    }, {
        title: 'Redis DB',
        svg: 'https://www.svgrepo.com/show/303460/redis-logo.svg'
    }, {
        title: 'MySQL',
        svg: 'https://www.svgrepo.com/show/355133/mysql.svg'
    },
    {title:'GraphQl',svg:'https://www.svgrepo.com/show/373644/graphql.svg'},
    {title:'Serverless',svg:'https://www.svgrepo.com/show/374073/serverless.svg'}
]
const TechTools = () => {
    const colorMode = useContext(ColorModeContext)
    // turn off "filter" mode when the theme is set to dark mode
    const isfilterMode =(item : any) => colorMode?.mode === 'light' ? false : item?.filter
    return (
        <>

        <Container
            maxWidth='lg'
            sx={{
            margin: '0 auto',
            py: {
                xs: '6em'
            }
        }}>

            <Grid container>

                <Grid item sx={centeredStyles}>
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
                        Frontend technologies and tools
                    </Typography>

                </Grid>
                <Grid
                    sx={{
                    ...centeredStyles,
                    flexDirection: 'row',
                    justifyContent: {
                        xs: "center"
                    },
                    mt: '3em',
                    flexWrap: 'wrap'
                }}
                    xs={12}
                    item>

                    {FrontendTools.map(item => {
                        return <ToolCard
                            filter={isfilterMode(item)}
                            svg={item.svg}
                            title={item.title}
                            key={item.title}/>
                    })}

                </Grid>

                <Grid item sx={centeredStyles}>

                    <Typography
                    variant='h2'

                        className='secondary'
                        sx={{
                        pt: '3.5em',
                        maxWidth: '570px',
                        fontSize: {
                            xs: '.8em',
                            sm: '1em'
                        }
                    }}>
                       Other technologies 
                    </Typography>

                </Grid>
                <Grid
                    sx={{
                    ...centeredStyles,
                    flexDirection: 'row',
                    justifyContent: {
                        xs: "center"
                    },
                    mt: '3em',
                    flexWrap: 'wrap'
                }}
                    xs={12}
                    item>

                    {OtherTools.map(tool => {
                        return <ToolCard
                            filter={isfilterMode(tool)}
                            svg={tool.svg}
                            title={tool.title}
                            key={tool.title}/>
                    })}

                </Grid>

            </Grid>

        </Container>
        <Divider className='divider'/>
        </>
    )
}

export default TechTools