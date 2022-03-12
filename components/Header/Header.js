import React from "react";
import Link from "next/link";
import { Box, Container, Grid, IconButton } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";
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
            <Box height="164px" display="flex" alignItems="center">
              <Link passHref href="/">
                <IconButton>
                  <ArrowBackIosNew sx={{ fill: "#fff" }} fontSize="large" />
                </IconButton>
              </Link>
            </Box>
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
            <Grid container spacing={0} minHeight="216px" height="fit-content">
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
  width: 80%;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Headline = styled.h2`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  font-family: "Epilogue", sans-serif;
`;

const SubHeadline = styled.h3`
  font-size: 16px;
  font-weight: 100;
  color: #fff;
  font-family: "Epilogue", sans-serif;
`;

export default Header;
