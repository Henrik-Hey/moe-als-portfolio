import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#1E88E5",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
