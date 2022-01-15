import React from "react";
import { Container, Grid, Box } from "@mui/material";
import styled from "styled-components";

const GridSegment = ({ content, image }) => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sm={8} md={6}>
          <StyledContentBlock>{content}</StyledContentBlock>
        </Grid>
        <Grid item xs={12} sm={8} md={6} display="flex">
          <ImageBlock mr={4} mt={4} mb={4} flex={1}>
            {image}
          </ImageBlock>
        </Grid>
      </Grid>
    </Container>
  );
};

const StyledContentBlock = styled(Box)`
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

const ImageBlock = styled(Box)`
  flex: 1;
  min-height: 50vh;
  position: relative;
`;

export default GridSegment;
