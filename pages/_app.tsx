import type {AppProps}
from 'next/app'
import Layout from '../Layout/Layout'
import '../styles/styles.css'
import '../styles/buttonStyles.css'
import {ThemeProvider} from '@emotion/react'
import {createTheme, PaletteMode} from "@mui/material"
import {createContext, useMemo, useState} from 'react'

export const ColorModeContext = createContext({
    mode: 'dark',
    toggleColorMode: () => {}
});

function MyApp({Component, pageProps} : AppProps) {
    const [mode,
        setMode] = useState < 'light' | 'dark' > ('light');

    const getDesignTokens = (mode : PaletteMode) => ({
        typography: {
            "fontFamily": `'Montserrat', sans-serif`,
            "fontSize": 16,
            h1: {
                color: mode === 'light'
                    ? '#000000'
                    : '#ffffff'
            },
            h2: {
                color: mode === 'light'
                    ? '#292929'
                    : '#b9b9b9'
            },
            h3: {
                color: mode === 'light'
                    ? '#737373'
                    : '#a7a7a7',
                lineHeight: '1.3em'

            }
        },
        button: {
            'borderRadius': '5000px'
        },
        palette: {

            mode,
            ...(mode === 'light'
                ? {

                    // palette values for light mode
                    primary: {
                        main: '#0092ff'
                    },
                    divider: '#d6d6d6',
                    text: {
                        primary: '#000000'
                    },
                    background: {
                        default: '#ffffff'

                    }
                }
                : {
                    // palette values for dark mode
                    divider: '#353535',
                    background: {
                        default: '#232323'
                    },
                    primary: {
                        main: '#0092ff'
                    },
                    text: {
                        primary: '#000000'
                    }
                })
        }
    });

    const Theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    const colorMode = useMemo(() => ({
        mode,
        toggleColorMode: () => {
            setMode((prevMode) => (prevMode === 'light'
                ? 'dark'
                : 'light'));
        }
    }), [],);

    return <ColorModeContext.Provider value={colorMode}>

        <ThemeProvider theme={{
            ...Theme
        }}>

            <Layout title=''>

                <Component {...pageProps}/>
            </Layout>
        </ThemeProvider>
    </ColorModeContext.Provider>
}

export default MyApp
