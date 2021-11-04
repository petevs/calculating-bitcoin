import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            lighter: "#FFF2CC",
            light: "#FFCD66",
            main: "#FF9800",
            dark: "#B75E00",
            darker: "#7A3400",
            contrastText: '#fff',
        },
        success: {
            lighter: "#F3FDDE",
            light: "#CDF59C",
            main: "#94E059",
            dark: "#52A12C",
            darker: "#246B11"
        },
        info: {
            lighter: "#D6FBFE",
            light: "#85E4FE",
            main: "#35B9FC",
            dark: "#1A6DB5",
            darker: "#0A3778"
        },
        warning: {
            lighter: "#FEFCD5",
            light: "#FEF282",
            main: "#FCE42F",
            dark: "#B59F17",
            darker: "#786609"
        },
        danger: {
            lighter: "#FFEDD8",
            light: "#FFB98A",
            main: "#FF703D",
            dark: "#B7311E",
            darker: "#7A0B0D"
        }
    }
})