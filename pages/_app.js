import React from "react";
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
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          background: "#FFFFFF",
          overflow: "hidden",
          boxSizing: "border-box",
          boxShadow: "none",
          borderRadius: "10px",
          overflow: "hidden",
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          "& .MuiTableCell-head": {
            fontWeight: 600,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "8px",
          fontSize: "12px",
          borderBottom: "none",
        },
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <MUIThemeProvider theme={theme}>
        <Component {...pageProps} />
      </MUIThemeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
