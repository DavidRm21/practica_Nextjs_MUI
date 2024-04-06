'use client'

import { createTheme } from '@mui/material'

export const theme = createTheme({
    
    palette:{
        primary: {
            main: "#1D5E69",
        },
        secondary: {
            main: "#FA3419",
        },
        grey_text: {
            main: "#778089",
        },
        grey: {
            main: "#EAEAEA",
        },
    },

    typography: {
        h1: {
            fontSize: "20px",
            color: "black"
        },
        h2: {
            fontSize: "18px",
            color: "black"
        },
        h3: {
            fontSize: "16px",
            color: "black"
        },
        h4: {
            fontSize: "14px",
            color: "black"
        },
        h5: {
            fontSize: "12px",
            color: "black"
        },
    },
})
