import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            lighter: '#c8e6c9',
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c',
            darker: '#1b5e20',
            contrastText: '#fff',
        },
    }
})