import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
    // palette:{
    //     // mode: 'dark',
    //     primary: {
    //         main: purple[700],
    //         dark: '#ab47bc'
    //     },
    //     secondary: {
    //         main: '#DEFFF2',
    //         dark: '#d32f2f'
    //     },
    //     error: {
    //         main: '#0FF4C6'
    //     }

    // }
    palette:{
        mode: 'dark',
        primary: {
            main: purple[700],
        },
        secondary: {
            main: '#40ff00',
        }
    }
})

export default theme