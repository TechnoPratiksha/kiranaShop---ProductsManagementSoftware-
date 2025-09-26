import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#1976d2" }, // blue
    secondary: { main: "#f50057" }, // pink
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);
