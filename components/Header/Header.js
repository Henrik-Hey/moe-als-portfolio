import React from "react";
import { Box, Container, Grid } from "@mui/material";
import styled from "styled-components";

const Header = ({
  logoURL,
  brand,
  responsibilities,
  timeline,
  theme,
  color,
}) => {
  return (
    <Box
      position="relative"
      width="100%"
      minHeight="585px"
      backgroundColor={color}
    >
      <Content>
        <Container maxWidth="md">
          <Box width="100%" minHeight="585px">
            <Box height="164px"></Box>
            <Container maxWidth="md">
              <Box
                width="100%"
                height="216px"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <BrandLogo src={logoURL} alt="Logo" />
              </Box>
            </Container>
            <Grid container spacing={6} minHeight="216px" height="fit-content">
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Box mb={2}>
                  <Headline>Project:</Headline>
                  <SubHeadline>{brand}</SubHeadline>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Box mb={2}>
                  <Headline>My Responsibilities:</Headline>
                  <SubHeadline>{responsibilities}</SubHeadline>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Box mb={2}>
                  <Headline>Timeline:</Headline>
                  <SubHeadline>{timeline}</SubHeadline>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Box mb={2}>
                  <Headline>App theme:</Headline>
                  <SubHeadline>{theme}</SubHeadline>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Content>
    </Box>
  );
};

const BrandLogo = styled.img`
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Headline = styled.h2`
  font-size: 1rem;
  font-weight: 900;
  color: #fff;
  font-family: "Epilogue", sans-serif;
`;

const SubHeadline = styled.h3`
  font-size: 1rem;
  font-weight: 100;
  color: #fff;
  font-family: "Epilogue", sans-serif;
`;

export default Header;
