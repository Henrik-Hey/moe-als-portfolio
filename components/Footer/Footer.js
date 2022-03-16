import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

const Footer = ({ backgroundColor = "#000", textColor = "#fff" }) => {
  return (
    <Box backgroundColor={backgroundColor} py={8} position="relative">
      <Container maxWidth="md">
        <Grid container spacing={3} columns={10}>
          <Grid item xs={10} md={4}>
            <Typography variant="body1" color={textColor} fontWeight={700}>
              MOE ALS
            </Typography>
            <Typography variant="body1" color={textColor}>
              Visual Designer
            </Typography>
          </Grid>
          <Grid item xs={10} md={2}>
            <Typography variant="body1" color={textColor} fontWeight={700}>
              NAVIGATION
            </Typography>
            <Link href="/" passHref>
              <StyledNextLink variant="body2" color={textColor}>
                Home
              </StyledNextLink>
            </Link>
            <Link href="/shiba" passHref>
              <StyledNextLink variant="body2" color={textColor}>
                Shiba
              </StyledNextLink>
            </Link>
            <Link href="/pochui" passHref>
              <StyledNextLink variant="body2" color={textColor}>
                Pochui
              </StyledNextLink>
            </Link>
          </Grid>
          <Grid item xs={10} md={2}>
            <Typography variant="body1" color={textColor} fontWeight={700}>
              SOCIALS
            </Typography>
            <StyledLink
              href="https://www.linkedin.com/in/moe-als-508908193/"
              target="_blank"
            >
              <Typography variant="body2" color={textColor}>
                linkedIn
              </Typography>
            </StyledLink>
            <StyledLink
              href="https://www.instagram.com/design.moexls/"
              target="_blank"
            >
              <Typography variant="body2" color={textColor}>
                design
              </Typography>
            </StyledLink>
            <StyledLink
              href="https://www.instagram.com/moe.xls/"
              target="_blank"
            >
              <Typography variant="body2" color={textColor}>
                photography
              </Typography>
            </StyledLink>
          </Grid>
          <Grid item xs={10} md={2}>
            <Typography variant="body1" color={textColor} fontWeight={700}>
              CONTACT
            </Typography>
            <Typography variant="body2" color={textColor}>
              design.moexls@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const StyledNextLink = styled(Typography)`
  text-decoration: none;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

export default Footer;
