import React, { useEffect, useState, useRef } from "react";
import Section from "../components/Section/Section";
import { createGlobalStyle } from "styled-components";
import NavContainer from "../components/NavContainer/navContainer";
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
    <>
      <Backdrop container={container} />
      <GlobalStyles />
      <NavContainer position="relative" />
      <Section ref={aboutRef} name="Intro">
        <AboutSection />
      </Section>
      <Section ref={about2Reft} name="SHIBA">
        <About2Section />
      </Section>
    </>
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
  }
`;
