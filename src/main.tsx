import React from "react";
import ReactDOM from "react-dom/client";
import { BookingApp } from "./BookingApp";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BookingApp />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
