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
  flex-direction: row;
  width: 100%;
  min-height: 100vh;
  height: fit-content;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const StyledContentBlock = styled.div`
  max-width: calc(600px - 200px);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 100px;
`;

const ImageBlock = styled.div`
  flex: 1;
  background: red;
  position: relative;
`;

export default GridSegment;
