import { Box,  } from "@mui/material";
import  Head  from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";



const Layout = ({ title ,children ,desc } : ILayout) => {
  const [isOpen,setOpen] = useState(false)
    const toggleDrawer = (state?:boolean) => {
      setOpen(state !== undefined ? state : !isOpen)
    }

  return (

    <>
    <Head>
        <title>{title || 'My page title'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap`} rel="stylesheet" />
   
    
<meta name="description" content={`${desc || 'Vito Medlej personal portfolio website, A Lebanese web developer an expert in UI/UX and building complex web applications.'}`} />


<meta property="og:title" content="Vito Medlej Personal Portfolio | Web Developer To Hire" />


<meta property="og:url" content="https://elvito.netlify.app" />


<meta property="og:description" content="Vito Medlej is a Web Developer based in Lebanon. And this is my personal Portfolio. "/>


<meta property="og:image" content="https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"/>

{/* <!-- Og Type -->
<meta property="og:type" content="article" /> */}
   
   
   
   
   
   
    </Head>
    <Navbar toggleDrawer={toggleDrawer}/>
    <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    <Box 
     className="site-content">
      {children}
    </Box>
    <Footer />
  </>
  )


}
 
 
  



export default Layout; 