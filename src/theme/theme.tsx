import { createTheme } from "@mui/material";
import { orange, red } from "@mui/material/colors";


const theme = createTheme({
    palette: {
      primary:{
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2'
      },
      secondary:{
        light: '#4dd0e1',
        main: '#00bcd4',
        dark: '#0097a7'
      },
      error:{
        main: red.A400,
      },
      warning:{
        main: orange.A400,
      },
    },
});

export default theme;