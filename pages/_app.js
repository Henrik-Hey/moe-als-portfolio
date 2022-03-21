import React from "react";
import Head from "next/head";
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
    <>
      <Head>
        <title>MOE.XLS</title>
        <meta
          property="og:title"
          content="Digital Design Portfolio By Moe Als"
        />
        <meta
          property="og:image"
          content="https://design.moexls.com/images/social_thumb.png"
        />
        <meta
          property="og:description"
          content="A brief showcase of a few user experience case 
          studies and visual designs created by me :)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <MUIThemeProvider theme={theme}>
          <Component {...pageProps} />
        </MUIThemeProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
