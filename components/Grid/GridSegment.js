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
  max-width: 600px;
  width: 100%;
  height: 100%;
`;

const ImageBlock = styled.div`
  flex: 1;
  background: red;
`;

export default GridSegment;
