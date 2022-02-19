import React, { useEffect, useState, useRef } from "react";
import Section from "../components/Section/Section";
import { createGlobalStyle } from "styled-components";
import NavContainer from "../components/NavContainer/navContainer";
import Backdrop from "../components/Backdrop/Backdrop";

import Intro from "../sections/intro";
import Shiba from "../sections/shiba";
import Pochui from "../sections/pochui";
import Apollo from "../sections/apollo";

export default function Home() {
  const [container, setContainer] = useState(null);

  useEffect(() => {
    setContainer(document.getElementById("__next"));
  }, []);

  return (
    <>
      <Backdrop container={container} />
      <GlobalStyles />
      <NavContainer position="absolute" />
      <Section name="Intro">
        <Intro />
      </Section>
      <Section name="SHIBA">
        <Shiba />
      </Section>
      <Section name="POCHUI">
        <Pochui />
      </Section>
      <Section name="APOLLO">
        <Apollo />
      </Section>
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

`;
