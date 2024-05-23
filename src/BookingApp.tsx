import { AppRouter } from "./router/AppRouter";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";

export const BookingApp = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </>
  );
};
