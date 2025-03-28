import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1687A7" },
    secondary: { main: "#dc004e" },
    background: { default: "#f4f6f8" },
  },
  typography: {
    fontFamily: "'Rubik', sans-serif",
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontSize: "1rem",
          padding: "10px 20px",
        },
      },
    },
},
});

export default theme;
