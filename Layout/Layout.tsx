import { Box,  } from "@mui/material";
import  Head  from "next/head";
import { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import { ILayout } from "../src/Types/Types";
import CustomDrawer from "../src/components/Drawer/Drawer";
import Footer from "../src/components/Footer/Footer";



const Layout = ({navbarSx, title ,children ,desc } : ILayout) => {
  const [isOpen,setOpen] = useState(false)
    const toggleDrawer = (state?:boolean) => {
      setOpen(state !== undefined ? state : !isOpen)
    }

  return (

    <>
    <Head >
        <title>{title || "Vito Medlej Personal Portfolio | Lebanese Web Developer"}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg" />
  
   
    
<meta name="description" content={`${desc || 'Vito Medlej personal portfolio, An expert in UI/UX and building complex websites and applications'}`} />


<meta property="og:title" content="Vito Medlej Personal Portfolio | Lebanese Web Developer" />


<meta property="og:url" content="https://elvito.netlify.app" />


<meta property="og:description" content="Vito Medlej | Web Developer based in Lebanon. And this is my Portfolio and my blog "/>


<meta property="og:image" content="https://res.cloudinary.com/dwcu3wcol/image/upload/v1658929513/log-removebg-preview_fygpsd.png"/>

{/* <!-- Og Type -->
<meta property="og:type" content="article" /> */}
   
   
   <meta httpEquiv="content-language" content="en"/>
    <meta charSet="UTF-8"/>
    <meta name="robots" content="index, follow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    {/* <meta name="description" content="Site Meta Description" /> */}
    <meta name="keywords" content="Personal Portfolio" />
    <meta name="author" content="Vito Medlej" />
    <meta name="publisher" content="publisher"/>
    <meta name="copyright" content="copyright"/>
    <meta name="page-topic" content="Web Development | Blog"/>
    <meta name="page-type" content="Blogging"/>
    <meta name="audience" content="Everyone"/>
    {/* <!-- Facebook, whatsapp, instagram, twitter and other popular social media --> */}
    {/* <meta property="og:title" content={title}/> */}
    {/* <meta property="og:description" content="Site Content short description"/> */}
    {/* <meta property="og:image" content="http://example.com/thumbnail.jpg"/> */}
    {/* <meta property="og:url" content="http://example.com"/> */}
    {/* <meta name="twitter:card" content="summary_large_image"/> */}

    {/* <!-- Some Non-essential but recommended --> */}
    {/* <meta property="og:site_name" content="Website Name"> <!-- Optional --> */}
    {/* <meta name="twitter:image:alt" content="Alt text for image"> <!-- Optional --> */}

    {/* <!-- If has need analytics for facebook and twitter --> */}
    {/* <meta property="fb:app_id" content="your_app_id" /> */}
    {/* <meta name="twitter:site" content="@website-username"/> */}
   
  
    </Head> 
    <Navbar toggleDrawer={toggleDrawer} navbarSx={navbarSx}/>
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