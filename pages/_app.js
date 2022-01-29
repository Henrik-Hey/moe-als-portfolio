import { ThemeProvider } from "styled-components";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

// const theme = {
//   colors: {
//     primary: "#1E88E5",
//   },
// };

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E88E5",
    },
  },
  colors: {
    primary: "#1E88E5",
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MUIThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MUIThemeProvider>
    </>
  );
}

export default MyApp;
