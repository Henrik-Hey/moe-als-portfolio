import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import Link from "next/link";
import styled from "styled-components";

const Footer = ({ backgroundColor = "#000" }) => {
  return (
    <Box backgroundColor={backgroundColor} py={8}>
      <Container maxWidth="md">
        <Grid container spacing={3} columns={10}>
          <Grid item xs={10} md={4}>
            <Typography variant="body1" color="white" fontWeight={700}>
              MOE ALS
            </Typography>
            <Typography variant="body1" color="white">
              Visual Designer
            </Typography>
          </Grid>
          <Grid item xs={10} md={2}>
            <Typography variant="body1" color="white" fontWeight={700}>
              NAVIGATION
            </Typography>
            <Link href="/" passHref>
              <Typography variant="body2" color="white">
                Home
              </Typography>
            </Link>
            <Link href="/shiba" passHref>
              <Typography variant="body2" color="white">
                Shiba
              </Typography>
            </Link>
            <Link href="/pochui" passHref>
              <Typography variant="body2" color="white">
                Pochui
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={10} md={2}>
            <Typography variant="body1" color="white" fontWeight={700}>
              SOCIALS
            </Typography>
            <StyledLink
              href="https://www.linkedin.com/in/moe-als-508908193/"
              target="_blank"
            >
              <Typography variant="body2" color="white">
                linkedIn
              </Typography>
            </StyledLink>
            <StyledLink
              href="https://www.instagram.com/design.moexls/"
              target="_blank"
            >
              <Typography variant="body2" color="white">
                Instagram (design)
              </Typography>
            </StyledLink>
            <StyledLink
              href="https://www.instagram.com/moe.xls/"
              target="_blank"
            >
              <Typography variant="body2" color="white">
                instagram (photography)
              </Typography>
            </StyledLink>
          </Grid>
          <Grid item xs={10} md={2}>
            <Typography variant="body1" color="white" fontWeight={700}>
              CONTACT
            </Typography>
            <Typography variant="body2" color="white">
              design.moexls@gmail.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const StyledLink = styled.a`
  text-decoration: none;
`;

export default Footer;
