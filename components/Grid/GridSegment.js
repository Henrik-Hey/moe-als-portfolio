import React from "react";
import { Container, Grid, Box } from "@mui/material";
import styled from "styled-components";

const GridSegment = ({
  content,
  image,
  title,
  contentOrder,
  imageOrder,
  align = "flex-end",
}) => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12} sm={6} md={6} display="flex" order={contentOrder}>
          <ImageBlock mt={4} mb={4} flex={1}>
            {image}
          </ImageBlock>
        </Grid>
        <Grid item xs={12} sm={6} md={6} order={imageOrder}>
          <StyledContentBlock my={4} alignItems={align}>
            <Title>{title}</Title>
            <Box flex="1" display="flex" alignItems="center">
              {content}
            </Box>
          </StyledContentBlock>
        </Grid>
      </Grid>
    </Container>
  );
};

const StyledContentBlock = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    /* padding: 0px 100px; */
    min-height: 90vh;
    width: 100%;
  }
`;

const Title = styled.div`
  font-family: Epilogue;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 122%;
  /* or 20px */

  letter-spacing: 0.025em;

  color: rgba(20, 20, 20, 0.6);
`;

const ImageBlock = styled(Box)`
  flex: 1;
  min-height: 50vh;
  position: relative;
`;

export default GridSegment;
