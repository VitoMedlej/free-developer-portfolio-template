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
import { IProjects } from '../src/Types/Types'



const Home : NextPage = ({data} : any) => {
    let projectsArray  = data
    console.log('projectsArray: ', projectsArray);
    const ball = useRef()

    useEffect(() => {
        if (ball && ball.current) {
            CursorAnimation(ball.current)
        }

    }, [])
    return (
        <Box sx={{
            margin: '0 auto',
            color: 'white'
        }}>

            <Hero/>
            <Perks/>
            <Experience/>
            <Projects projectsArray={ projectsArray}/>
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
    )
}

export default Home

export async function getStaticProps() {
    // first, grab our Contentful keys from the .env file
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    console.log('space: ', space);
      const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
      console.log('accessToken: ', accessToken);
    
    // then, send a request to Contentful (using the same URL from GraphiQL)
    const res = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${space}`,
        {
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
            }
                  `,
          }),
        },
      );
      // grab the data from our response
      const { data } = await res.json()
      if (!data) return null
        return {props:{data:data.projectCollection.items}}
  }