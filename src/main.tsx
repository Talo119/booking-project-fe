import React from "react";
import ReactDOM from "react-dom/client";
import { BookingApp } from "./BookingApp";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BookingApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
