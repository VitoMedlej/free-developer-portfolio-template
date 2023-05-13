import {Box} from '@mui/material'
import type {NextPage}
from 'next'
import Experience from '../src/components/Sections/TechTools/TechTools'
import Hero from '../src/components/Sections/Hero/Hero'
import Perks from '../src/components/Sections/Perks/Perks'
import Projects from '../src/components/Sections/Projects/Projects';
import CTA from '../src/components/Sections/CallToAction/CTA'
import {useEffect, useRef} from 'react';
import CursorAnimation from '../src/gsap/CursorAnimation';
import About from '../src/components/Sections/About/About';
import Layout from '../Layout/Layout'

const Home : NextPage = ({projectsArray, iconsArray} : any) => {
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Layout desc={`Vito Medlej, A lebanese professional software engineer in Beirut, Can develop all kinds of websites and web/mobile applications according to your needs`} title='Vito Medlej Fullstack Developer Personal Portfolio Website'>

            <Box
                sx={{
                margin: '0 auto',
                color: 'white'
            }}>

                <Hero/>
                <Perks/>
                <Experience iconsArray={iconsArray}/>
                <Projects projectsArray={projectsArray}/>
                <About/>
                <CTA/>

                <Box
                    ref={ball}
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'block'
                    }
                }}
                    className="ball"></Box>

            </Box>
        </Layout>

    )
}

export default Home

export async function getStaticProps() {
    function removeEmpty(obj : any) {
        return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v != false));
    }
    try {
        // first, grab our Contentful keys from the .env file
        const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
        const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

        // then, send a request to Contentful (using the same URL from GraphiQL)
        const res =    await fetch(`https://graphql.contentful.com/content/v1/spaces/${space}`, {
            method: 'POST', // GraphQL *always* uses POST requests!
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${accessToken}`, // add our access token header
            },
            // send the query we wrote in GraphiQL as a string
            body: JSON.stringify({
                // all requests start with "query: ", so we'll stringify that for convenience
                query: `
                {
                  projectCollection {
                    items {
                      title
                      repoUrl
                      siteUrl
                      description
                      img
                    }
                  }
                  iconsCollection {
                    items {
                      filter
                      svg
                      title
                      isBackend
                    }
                  }
                }
                
                  `
            })
        },);

        // grab the data from our response
        const {data} = await res.json()
        // const data :any = {}
        if (!data || data?.length < 1) {
            throw 'Error fetching data'
        }
        let iconsArray = []
        for (let i = 0; i < data?.iconsCollection?.items.length; i++) {
            let clearedIcon = removeEmpty(data?.iconsCollection.items[i])
            iconsArray.push(clearedIcon)
        }
        return {
            props: {
                projectsArray: data?.projectCollection.items,
                iconsArray
            }
        }
    } catch (err) {
        console.log('err: ', err);
        return {
            props: {
                data: null
            }
        }
    }
}
