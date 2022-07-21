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
    const color = mode === 'light'
        ? '#000000'
        : '#ffffff'
    const getDesignTokens = (mode : PaletteMode) => ({
        typography: {
            "fontFamily": `'Montserrat', sans-serif`,
            "fontSize": 16,
            h1: {
                color
            },
            h2: {
                color: mode === 'light'
                    ? '#292929'
                    : '#b9b9b9',
                lineHeight: '1.3em'

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
        Drawer: {
            background: '#ffffff'
        },
        components: {
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: mode === 'light'
                            ? "#ffffff"
                            : '#232323',
                        color
                    }
                }
            }
        },
        palette: {

            mode,
            primary: {
                main: '#0092ff'
            },
            ...(mode === 'light'
                ? {

                    // palette values for light mode

                    divider: '#d6d6d6',
                    Drawer: '#ffffff',

                    background: {
                        default: '#ffffff'

                    },
                    MuiDrawer: {
                        styleOverrides: {
                            paper: {
                                backgroundColor: "pink",
                                color: "red"
                            }
                        }
                    }
                }
                : {
                    // palette values for dark mode
                    divider: '#353535',
                    background: {
                        default: '#232323'
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
