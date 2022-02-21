import React, { useEffect, useState, useRef } from "react";
import Section from "../components/Section/Section";
import { createGlobalStyle } from "styled-components";
import NavContainer from "../components/NavContainer/navContainer";
import Backdrop from "../components/Backdrop/Backdrop";
import FadeIn from "../components/FadeIn/FadeIn";
import Footer from "../components/Footer/Footer";

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
      <FadeIn>
        <Section name="SHIBA">
          <Shiba />
        </Section>
      </FadeIn>
      <FadeIn>
        <Section name="POCHUI">
          <Pochui />
        </Section>
      </FadeIn>
      <FadeIn>
        <Section name="APOLLO">
          <Apollo />
        </Section>
      </FadeIn>
      {/* <Footer backgroundColor="#1E88E5" /> */}
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
