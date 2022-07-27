import { PaletteMode, createTheme } from '@mui/material';
import {  Dispatch, SetStateAction, useMemo, useState } from 'react'





const ThemeHook = (mode : 'light' | 'dark',setMode :  Dispatch<SetStateAction<"light" | "dark">>) => {
  
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

        palette: {
      
            mode,
         
            ...(mode === 'light'
                ? {
                    primary: {
                        main: '#0092ff'
                    },

                    // palette values for light mode

                    divider: '#d6d6d6',
                    Drawer: '#ffffff',

                    background: {
                        default: '#ffffff'
                    },
             
                    text: {
                        primary: '#000000'
                    },
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

  
    return getDesignTokens
}

export default ThemeHook