import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Box } from "@mui/material";
import Typewriter from "../components/Typewriter/Typewriter";

const Intro = () => {
  return (
    <IntroContainer maxWidth="lg">
      <IntroTextContainer>
        <IntroText1>
          Hey, my name is Moe — I’m a visual UX designer based in Canada, and
          I’m passionate about <br />
          <Typewriter
            contents={[
              "User experience.",
              "Visual design.",
              "designing for accessibility.",
            ]}
          />
        </IntroText1>
      </IntroTextContainer>
    </IntroContainer>
  );
};

const IntroContainer = styled(Container)`
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const IntroText1 = styled.h1`
  font-size: 24px;
  font-weight: 500;
  font-family: "Epilogue", sans-serif;
  margin-block-start: 0em;
  margin-block-end: 0em;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    font-size: 42px;
  }
`;

const IntroTextContainer = styled.div`
  border-left: 6px solid ${({ theme }) => theme.palette.primary.main};
  padding-left: 20px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    border-left: 12px solid ${({ theme }) => theme.palette.primary.main};
    font-size: 42px;
  }
`;

const Button1 = styled.button`
  background: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  color: white;
  font-size: 1.5rem;
  width: 335px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  margin: 8px 0px;

  &:hover {
  }

  @media (min-width: 764px) {
    margin-right: 10px;
  }
`;

const Button2 = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  border-radius: 10px;
  color: ${({ theme }) => theme.palette.primary.main};
  font-size: 1.5rem;
  width: 335px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  margin: 8px 0px;

  &:hover {
  }

  @media (min-width: 764px) {
    margin-left: 10px;
  }
`;

export default Intro;
