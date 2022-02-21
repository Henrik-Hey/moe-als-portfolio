import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Typewriter from "../components/Typewriter/Typewriter";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroText1>
        Hello, my name is Moe — I’m a visual <br />
        <b>designer</b> based in Canada.
      </IntroText1>
      <IntroText2>
        I’m passionate about{" "}
        <b>
          <Typewriter
            contents={[
              "User experience",
              "Visual design",
              "designing for accessibility",
            ]}
          />
        </b>
        .
      </IntroText2>
      <ButtonContainer>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:d928f593-9bab-3423-b3b2-fd3d1eb0929c"
        >
          <Button1>Resumé</Button1>
        </a>
        <Link href="/about" passHref>
          <Button2>About me</Button2>
        </Link>
      </ButtonContainer>
    </IntroContainer>
  );
};

const IntroContainer = styled.div`
  max-width: 960px;
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0px 50px;
  width: calc(100% - 100px);

  @media (min-width: 764px) {
    padding: 0px;
    width: 100%;
  }
`;

const IntroText1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  font-family: "Epilogue", sans-serif;
`;

const IntroText2 = styled.h2`
  height: 8rem;
  font-size: 2.5rem;
  font-weight: 100;
  font-family: "Epilogue", sans-serif;

  & > b {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    height: 5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 764px) {
    flex-direction: row;
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
