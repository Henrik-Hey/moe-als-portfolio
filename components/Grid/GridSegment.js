import React from "react";
import styled from "styled-components";

const GridSegment = ({ content, image }) => {
  return (
    <StyledContainer>
      <StyledContentBlock>{content}</StyledContentBlock>
      <ImageBlock>{image}</ImageBlock>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height: fit-content;

  @media (min-width: 764px) {
    flex-direction: row;
    min-height: 100vh;
  }
`;

const StyledContentBlock = styled.div`
  max-width: calc(600px - 200px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 50px;

  @media (min-width: 764px) {
    padding: 0px 100px;
    min-height: 100vh;
    width: 100%;
  }
`;

const ImageBlock = styled.div`
  flex: 1;
  min-height: 50vh;
  height: fit-content;
  position: relative;

  @media (min-width: 764px) {
    min-height: 100vh;
  }
`;

export default GridSegment;
