import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2cb67d",
    },
    secondary: {
      main: "#72757e",
    },
  },

  typography: {
    fontFamily: ["Open Sans", "Noto Sans Arabic"].join(","),
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
