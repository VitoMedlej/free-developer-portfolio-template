import type {AppProps}
from 'next/app'
import Layout from '../Layout/Layout'
import '../styles/styles.css'
import '../styles/buttonStyles.css'
import {ThemeProvider} from '@emotion/react'
import {createTheme} from "@mui/material"
import {createContext, useMemo, useState} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import ThemeHook from '../src/Hooks/ThemeHook'
export const ColorModeContext = createContext({
    mode: 'dark',
    toggleColorMode: () => {}
});

function MyApp({Component, pageProps} : AppProps) {
    const [mode,
        setMode] = useState < 'light' | 'dark' > ('dark');
    const getDesignTokens = ThemeHook(mode, setMode);
    const Theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    const colorMode = useMemo(() => ({
        mode,
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light'
                ? 'dark'
                : 'light'));
        }
    }), [mode]);

    return <ColorModeContext.Provider value={colorMode}>

        <ThemeProvider theme={{
            ...Theme
        }}>
            <CssBaseline/>

            <Layout title=''>

                <Component {...pageProps}/>
            </Layout>
        </ThemeProvider>
    </ColorModeContext.Provider>
}

export default MyApp
