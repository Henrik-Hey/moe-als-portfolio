import React from "react";
import styled from "styled-components";

const Intro = () => {
  return (
    <IntroContainer>
      <IntroText1>
        Hello, my name is Moe — I’m a visual <br />
        <b>designer</b> based in Canada.
      </IntroText1>
      <IntroText2>
        I’m passionate about <b>User Experience</b>
      </IntroText2>
      <ButtonContainer>
        <Button1>Resume</Button1>
        <Button2>About me</Button2>
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
`;

const IntroText1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 100;
  font-family: "Epilogue", sans-serif;
`;

const IntroText2 = styled.h2`
  font-size: 2.5rem;
  font-weight: 100;
  font-family: "Epilogue", sans-serif;

  & > b {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Button1 = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: white;
  font-size: 1.5rem;
  width: 335px;
  text-align: center;
  padding: 10px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
  }
`;

const Button2 = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  width: 335px;
  text-align: center;
  padding: 10px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
  }
`;

export default Intro;
