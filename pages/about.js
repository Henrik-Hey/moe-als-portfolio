import React, { useEffect, useState, useRef } from "react";
import Section from "../components/Section/Section";
import { createGlobalStyle } from "styled-components";
import NavContainer from "../components/NavContainer/navContainer";
import { DataProvider } from "../components/DataProvider/DataProvider";
import Backdrop from "../components/Backdrop/Backdrop";

import AboutSection from "../sections/about";
import About2Section from "../sections/about2";

export default function About() {
  const aboutRef = useRef();
  const about2Reft = useRef();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(document.getElementById("__next"));
  }, []);

  return (
    <DataProvider sections={[aboutRef, about2Reft]} container={container}>
      <Backdrop container={container} />
      <GlobalStyles />
      <NavContainer />
      <Section ref={aboutRef} name="Intro">
        <AboutSection />
      </Section>
      <Section ref={about2Reft} name="SHIBA">
        <About2Section />
      </Section>
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
    position: relative;
    background: #F8F9FB;
    width: 100vw;
    height: 100vh;
    height: -moz-fit-content;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;

    @media (min-width: 764px) {
      -webkit-scroll-snap-type: y mandatory;
      -moz-scroll-snap-type: y mandatory;
      -ms-scroll-snap-type: y mandatory;
      scroll-snap-type: y mandatory;
      scroll-behavior: smooth;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
