import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#800080",
      light:'#8000807a'
    },
    secondary: {
      main: "#00004f",
      light:'#00004fb5'
    },
    info: {
      main: "#808080",
    },
    error: {
      main: "#ff1744",
    },
    success: {
      main: "#21B24B",
    },
    header: "#FFFFFF",
  },
});

export default responsiveFontSizes(theme);
