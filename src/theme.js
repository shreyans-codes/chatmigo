import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3a98b9",
      contrastText: "#ffebee",
    },
    secondary: {
      main: "#b3d5d6",
    },
    background: {
      default: "#E8E3E0",
      paper: "#f9f2ed",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});
