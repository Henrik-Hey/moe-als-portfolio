import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

import { useMediaQuery } from "@mui/material";

const lineNum = 10;

const Backdrop = ({ container }) => {
  const isDesktop = useMediaQuery("(min-width:764px)", { noSsr: true });
  const linesRef = React.useRef([]);

  useEffect(() => {
    if (!linesRef) return;

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);

    const lines = linesRef.current;
    const timeline = gsap.timeline();
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

      const rand3 = Math.random() * 100;
      const rand4 = Math.random() * 100;
      const _timeline = gsap.timeline();
      _timeline.fromTo(
        line,
        {
          y: `${rand1}vh`,
          x: `-150vw`,
          rotationX: `${rand2}`,
          rotationY: `${rand2}`,
          rotationZ: `${rand2}`,
        },
        {
          y: `${rand3}vh`,
          x: `-150vw`,
          rotationX: `${rand4}`,
          rotationY: `${rand4}`,
          rotationZ: `${rand4}`,
        }
      );
      timeline.add(_timeline);
    });
    const trigger = ScrollTrigger.create({
      trigger: "#__next",
      start: "top top",
      end: "bottom 50%+=100px",
      animation: timeline,
      scrub: true,
    });
    return () => {
      trigger.kill();
    };
  }, []);

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
