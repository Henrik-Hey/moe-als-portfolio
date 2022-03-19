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
import ContactMe from "../sections/contact";

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
      <Section name="Intro" style={{ marginBottom: "64px" }}>
        <Intro />
      </Section>
      <FadeIn>
        <Section name="SHIBA" style={{ marginBottom: "64px" }}>
          <Shiba />
        </Section>
      </FadeIn>
      <FadeIn>
        <Section name="POCHUI" style={{ marginBottom: "64px" }}>
          <Pochui />
        </Section>
      </FadeIn>
      <FadeIn>
        <Section name="APOLLO" style={{ marginBottom: "64px" }}>
          <Apollo />
        </Section>
      </FadeIn>
      <FadeIn>
        <Section name="CONTACT ME">
          <ContactMe />
        </Section>
      </FadeIn>
      <Footer backgroundColor="#F8F9FB" textColor="#1E88E5" maxWidth="lg" />
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
