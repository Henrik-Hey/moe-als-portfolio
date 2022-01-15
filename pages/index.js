import React, { useEffect, useState, useRef } from "react";
import Section from "../components/Section/Section";
import { createGlobalStyle } from "styled-components";
import NavContainer from "../components/NavContainer/navContainer";
import Backdrop from "../components/Backdrop/Backdrop";

import Intro from "../sections/intro";
import Shiba from "../sections/shiba";
import Apollo from "../sections/apollo";

export default function Home() {
  const introRef = useRef();
  const shibaRef = useRef();
  const apolloRef = useRef();
  const sk8Ref = useRef();
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(document.getElementById("__next"));
  }, []);

  return (
    <>
      <Backdrop container={container} />
      <GlobalStyles />
      <NavContainer position="absolute" />
      <Section ref={introRef} name="Intro">
        <Intro />
      </Section>
      <Section ref={shibaRef} name="SHIBA">
        <Shiba />
      </Section>
      <Section ref={apolloRef} name="APOLLO">
        <Apollo />
      </Section>
      <Section ref={sk8Ref} name="sk8"></Section>
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
