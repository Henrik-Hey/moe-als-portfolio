import React from "react";
import styled from "styled-components";

const TextMessage = ({ children, background, isRight = false }) => {
  return (
    <TextMessageContent $background={background} $isRight={isRight}>
      {children}
    </TextMessageContent>
  );
};

const TextMessageContent = styled.div`
  background: ${({ $background }) => $background};
  margin-bottom: 16px;
  padding: 32px;
  border-radius: 55px;
  color: white;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    bottom: -16px;
    ${({ $isRight }) => ($isRight ? "right" : "left")}: 0%;
    width: 55px;
    height: 55px;
    background: ${({ $background }) => $background};
    clip-path: polygon(20% 0%, 100% 0, 100% 50%, 0% 100%);
    z-index: -1;
    transform: scaleX(${({ $isRight }) => ($isRight ? -1 : 1)});
  }
`;

export default TextMessage;
