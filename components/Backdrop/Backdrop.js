import React from "react";
import { useDataContext } from "../DataProvider/DataProvider";
import styled from "styled-components";
import gsap from "gsap";
import { useEffect } from "react/cjs/react.development";
import { useMediaQuery } from "@mui/material";

const lineNum = 10;

const Backdrop = ({ container }) => {
  const isDesktop = useMediaQuery("(min-width:764px)", { noSsr: true });
  const linesRef = React.useRef([]);
  const {
    data: { currentSection },
  } = useDataContext();

  useEffect(() => {
    if (!linesRef) return;
    const lines = linesRef.current;
    lines.forEach((line, i) => {
      const rand1 = Math.random() * 100;
      const rand2 = Math.random() * 100;
      gsap.set(line, {
        y: `${rand1}vh`,
        x: `-150vw`,
        rotationX: `${rand2}`,
        rotationY: `${rand2}`,
        rotationZ: `${rand2}`,
      });
    });
  }, []);

  useEffect(() => {
    if (!linesRef || !container || !isDesktop) return;
    const lines = linesRef.current;
    lines.forEach((line, i) => {
      const rand1 = Math.random() * 100;
      const rand2 = Math.random() * 100;
      gsap.to(line, {
        y: `${rand1}vh`,
        rotationX: `${rand2}`,
        rotationY: `${rand2}`,
        rotationZ: `${rand2}`,
        ease: "power3.inOut",
      });
    });
    container.scrollTo(0, window.innerHeight * currentSection);
  }, [container, currentSection, isDesktop]);

  return (
    <LineContainer>
      {Array.from({ length: lineNum }).map((_, i) => (
        <Line key={i} ref={(el) => (linesRef.current[i] = el)} />
      ))}
    </LineContainer>
  );
};

const LineContainer = styled.div`
  position: fixed;
  pointer-events: none;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
`;

const Line = styled.div`
  position: absolute;
  width: 400vw;
  height: 1px;
  background: #141414;
  opacity: 0.1;
`;

export default Backdrop;
