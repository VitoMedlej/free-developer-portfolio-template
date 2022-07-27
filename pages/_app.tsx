import type {AppProps}
from 'next/app'
import Layout from '../Layout/Layout'
import '../styles/styles.css'
import '../styles/buttonStyles.css'
import {ThemeProvider} from '@emotion/react'
import {createTheme, PaletteMode} from "@mui/material"
import {createContext, useMemo, useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import ThemeHook from '../src/Hooks/ThemeHook'
export const ColorModeContext = createContext({
    mode: 'dark',
    toggleColorMode: () => {}
});

function MyApp({Component, pageProps} : AppProps) {
    const  {colorMode,Theme} = ThemeHook()

    return <ColorModeContext.Provider value={colorMode}>

        <ThemeProvider theme={{
            ...Theme
        }}>
             <CssBaseline />

            <Layout title=''>

                <Component {...pageProps}/>
            </Layout>
        </ThemeProvider>
    </ColorModeContext.Provider>
}

export default MyApp
