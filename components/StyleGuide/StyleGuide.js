import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";

const StyleGuide = ({
  color = "#000",
  logoURL = "",
  logoWidth,
  logoHeight,
  colors = [],
  fonts = [],
}) => {
  return (
    <Box position="relative" width="100%">
      <Row>
        <RowLabel>
          <Typography variant="h6" fontWeight={700} color={color}>
            Colors
          </Typography>
        </RowLabel>
        <RowData>
          <Grid container spacing={0} minHeight={240} alignItems="center">
            {colors.map((color, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <ColorBox>
                  <ColorTile color={color} my={2} />
                  <Typography variant="body1">{color.toUpperCase()}</Typography>
                </ColorBox>
              </Grid>
            ))}
          </Grid>
        </RowData>
      </Row>
      <Row my={4}>
        <RowLabel>
          <Typography variant="h6" fontWeight={700} color={color}>
            Type
          </Typography>
        </RowLabel>
        <RowData>
          <Grid container spacing={0} minHeight={240} alignItems="center">
            {fonts.map((font, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <FontBox my={2}>
                  <Typography variant="body1" color="#422100">
                    {font.heading}
                  </Typography>
                  <Typography variant="h6" sx={font.style} color="#422100">
                    AaBbCc
                  </Typography>
                  <Typography variant="body1" color="#422100">
                    {font.size}
                  </Typography>
                </FontBox>
              </Grid>
            ))}
          </Grid>
        </RowData>
      </Row>
      <Row>
        <RowLabel>
          <Typography variant="h6" fontWeight={700} color={color}>
            Logo
          </Typography>
        </RowLabel>
        <RowData>
          <Grid container spacing={0} minHeight={240} alignItems="center">
            <Grid item xs={12} md={9}>
              <Image
                src={logoURL}
                alt="App Logo"
                layout="responsive"
                width={logoWidth}
                height={logoHeight}
              />
            </Grid>
          </Grid>
        </RowData>
      </Row>
    </Box>
  );
};

const ColorBox = styled(Box)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    text-align: left;
    display: block;
  }
`;

const ColorTile = styled(Box)`
  width: 128px;
  height: 128px;
  border-radius: 164px;
  position: relative;
  background: ${(props) => props.color};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 50%;
    background: ${(props) => props.color};
  }
`;

const FontBox = styled(Box)`
  text-align: center;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    text-align: left;
  }
`;

const Row = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 240px;
  height: fit-content;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-direction: row;
  }
`;

const RowLabel = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;

  & > * {
    transform: rotate(0deg);
  }

  ${({ theme }) => theme.breakpoints.up("sm")} {
    height: 240px;
    width: fit-content;
    margin-top: 0px;
    margin-bottom: 0px;

    & > * {
      transform: rotate(-90deg);
    }
  }
`;

const RowData = styled(Box)`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-direction: row;
    margin-left: ${({ theme }) => theme.spacing(4)};
  }
`;

export default StyleGuide;
