import Section from "../components/Section/Section";
import { createGlobalStyle } from "styled-components";
import NavContainer from "../components/NavContainer/navContainer";
import { DataProvider } from "../components/DataProvider/DataProvider";
import { useEffect, useState, useRef } from "react";
import Backdrop from "../components/Backdrop/Backdrop";

import Intro from "../sections/intro";
import Shiba from "../sections/shiba";

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
    <DataProvider
      sections={[introRef, shibaRef, apolloRef, sk8Ref]}
      container={container}
    >
      <Backdrop />
      <GlobalStyles />
      <NavContainer />
      <Section ref={introRef} name="Intro">
        <Intro />
      </Section>
      <Section ref={shibaRef} name="SHIBA">
        <Shiba />
      </Section>
      <Section ref={apolloRef} name="APOLLO"></Section>
      <Section ref={sk8Ref} name="sk8"></Section>
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
    width: 100vw;
    height: 100vh;
    height: -moz-fit-content;
    height: 100vh;
    -webkit-scroll-snap-type: y mandatory;
    -moz-scroll-snap-type: y mandatory;
    -ms-scroll-snap-type: y mandatory;
    scroll-snap-type: y mandatory;
    overflow-y: auto;
    scroll-behavior: smooth;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
