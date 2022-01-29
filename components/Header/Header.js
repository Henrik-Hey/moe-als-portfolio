import React from "react";
import Image from "next/image";
import { Box, Container } from "@mui/material";
import styled from "styled-components";

const Header = () => {
  return (
    <Box position="relative" width="100%" height="585px">
      <Backdrop src="/images/Shiba1.png" role="presentation" />
      <Content>
        <Container maxWidth="lg">
          <Box
            width="100%"
            height="585px"
            display="flex"
            flexDirection="column"
          >
            <Box flex="1"></Box>
            <Box
              width="100%"
              height="216px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <BrandLogo src="/images/ShibaLogo.png" alt="Logo" />
            </Box>
            <Box display="flex" flex="1">
              <Box
                flex="1"
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Box mb={2}>
                  <Headline>Project:</Headline>
                  <SubHeadline>Shiba INU</SubHeadline>
                </Box>
              </Box>
              <Box
                flex="1"
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Box mb={2}>
                  <Headline>My Responsibilities:</Headline>
                  <SubHeadline>ux research, design, interviews</SubHeadline>
                </Box>
              </Box>
              <Box
                flex="1"
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Box mb={2}>
                  <Headline>Timeline:</Headline>
                  <SubHeadline>Sep – Nov 2021</SubHeadline>
                </Box>
              </Box>
              <Box
                flex="1"
                display="flex"
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Box mb={2}>
                  <Headline>App theme:</Headline>
                  <SubHeadline>Food delivery</SubHeadline>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Content>
    </Box>
  );
};

const Backdrop = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 585px;
  object-fit: cover;
`;

const BrandLogo = styled.img`
  height: 216px;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
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
