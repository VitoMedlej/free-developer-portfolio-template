import { Box, Container, Drawer, IconButton } from "@mui/material";
import  Head  from "next/head";
import { useState } from "react";
import CustomLink from "../src/components/Mui/CustomLink";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";



const Layout = ({ title ,children } : ILayout) => {
  const [isOpen,setOpen] = useState(false)
    const toggleDrawer = (state?:boolean) => {
      setOpen(state ? state : !isOpen)
    }

  return (

    <>
    <Head>
        <title>{title || 'My page title'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href={`https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap`} rel="stylesheet" />
    </Head>
    <Navbar toggleDrawer={toggleDrawer}/>
    <CustomDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}/>
    <Box 
    // sx={{background:'#232323'}} 
     className="site-content">
      {children}
    </Box>
    <Footer />
  </>
  )


}
 
 
  



export default Layout; 