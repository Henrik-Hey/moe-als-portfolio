import { createGlobalStyle, ThemeProvider } from "styled-components";
import NavContainer from "../components/NavContainer/navContainer";
import { DataProvider } from "../components/DataProvider/DataProvider";

const theme = {
  colors: {
    primary: "#1E88E5",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </DataProvider>
  );
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #__next {
    background: #F8F9FB;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    width: 100vw;
    height: 100vh;
    height: -moz-fit-content;
    height: 100vh;
    -webkit-scroll-snap-type: y mandatory;
    -moz-scroll-snap-type: y mandatory;
    -ms-scroll-snap-type: y mandatory;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
  }
`;

export default MyApp;
