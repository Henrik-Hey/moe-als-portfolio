import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Section from "../components/Section/Section";
import { createGlobalStyle } from "styled-components";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../components/Header/Header";
import styled from "styled-components";

export default function Shiba() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Box my={10}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            textAlign="center"
            fontWeight={600}
            mb={10}
          >
            Goals and Challenges
          </Typography>
          <Grid container>
            <Grid item xs={12} md={5}>
              <Typography component="p" mb={3}>
                Shiba Inu is an Asian food delivery app that is targeted towards
                college and university students / Busy young adults who don’t
                have enough time to cook.
              </Typography>
              <Typography component="p">
                Shiba’s goal is to create a stress-free experience for users who
                enjoy Asian cuisine. It’s a one-stop-shop for users who don’t
                want to spend time looking at hundreds of options, when they can
                be presented with a handful of good ones.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={5}>
              <Typography>
                Challenges:
                <ul>
                  <li>
                    Create a unique identity for a new food delivery
                    application.
                  </li>
                  <li>
                    Present a user -friendly interface that makes it even easier
                    to pick what you’re craving.
                  </li>
                  <li>
                    Think of ways to make the user journey simple and rewarding.
                  </li>
                  <li>
                    Offer quick, real time solutions for users who are having
                    trouble choosing.
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <DarkGrey py={10}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            textAlign="center"
            fontWeight={600}
            mb={10}
          >
            Empathize
          </Typography>
          <Typography variant="body1" component="p" textAlign="center" mb={10}>
            Creating Shiba Inu from scratch, I had to ask myself a few
            questions, who is the user, why would use this application, how
            large is this project going to be, and how much of my time will I be
            spending conducting user interviews and research before the deadline
            is up. After gathering my ideas on paper, and creating some user
            personas and Empathy maps — I Figured out the project scope.
          </Typography>
          <Typography variant="body2" component="p" my={4}>
            1. User Personas
          </Typography>
          <Grid container>
            <Grid item xs={12} md={5.5}>
              <Box display="flex" mb={4}>
                <Box position="relative">
                  <Image
                    src="/images/shiba/KendrickHey.png"
                    alt="Picture of Kendrick Hey"
                    layout="intrinsic"
                    width="128px"
                    height="148px"
                  />
                </Box>
                <Box
                  flex={1}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  p={2}
                >
                  <Typography>
                    Name: Kendrick Hey <br />
                    Age: 23 years old <br />
                    Occupation: University student
                  </Typography>
                </Box>
              </Box>
              <Typography component="p">
                Kendrick is a college student with a busy schedule, he often
                studies from home and doesn&apos;t have much time to get out.
                When his family isn&apos;t home he likes ordering traditional
                Korean or Japanese food delivery.
              </Typography>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={5.5}>
              <Box display="flex" mb={4}>
                <Box position="relative">
                  <Image
                    src="/images/shiba/SyraRye.png"
                    alt="Picture of Kendrick Hey"
                    layout="intrinsic"
                    width="128px"
                    height="148px"
                  />
                </Box>
                <Box
                  flex={1}
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  p={2}
                >
                  <Typography>
                    Name: Kendrick Hey <br />
                    Age: 23 years old <br />
                    Occupation: University student
                  </Typography>
                </Box>
              </Box>
              <Typography component="p">
                Syra is a Marketing lead at a design firm, a slight vision
                problem that makes her unable to read small text, she uses
                glasses when needed. Syra has a freelance gig on the side, so
                she doesn&apos;t like cooking over the weekends, she would like
                to save time cooking by ordering.
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body2" component="p" my={4}>
            2. Empathy Maps
          </Typography>
          <Grid container>
            <Grid item xs={12} md={5.5}>
              <Box>
                <EmpathyMap
                  title="Kendrick"
                  square1={
                    <Typography variant="body2">
                      Says
                      <ul>
                        <li>I like ordering food</li>
                        <li>Ordering food is good for the environment</li>
                      </ul>
                    </Typography>
                  }
                  square2={
                    <Typography variant="body2">
                      Says
                      <ul>
                        <li>I like ordering food</li>
                        <li>Ordering food is good for the environment</li>
                      </ul>
                    </Typography>
                  }
                  square3={
                    <Typography variant="body2">
                      Says
                      <ul>
                        <li>I like ordering food</li>
                        <li>Ordering food is good for the environment</li>
                      </ul>
                    </Typography>
                  }
                  square4={
                    <Typography variant="body2">
                      Says
                      <ul>
                        <li>I like ordering food</li>
                        <li>Ordering food is good for the environment</li>
                      </ul>
                    </Typography>
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={5.5}>
              <Box>
                <EmpathyMap
                  title="Kendrick"
                  square1={
                    <Typography variant="body2">
                      Says
                      <ul>
                        <li>I like ordering food</li>
                        <li>Ordering food is good for the environment</li>
                      </ul>
                    </Typography>
                  }
                  square2={
                    <Typography variant="body2">
                      Says
                      <ul>
                        <li>I like ordering food</li>
                        <li>Ordering food is good for the environment</li>
                      </ul>
                    </Typography>
                  }
                  square3={
                    <Typography variant="body2">
                      Says
                      <ul>
                        <li>I like ordering food</li>
                        <li>Ordering food is good for the environment</li>
                      </ul>
                    </Typography>
                  }
                  square4={
                    <Typography variant="body2">
                      Says
                      <ul>
                        <li>I like ordering food</li>
                        <li>Ordering food is good for the environment</li>
                      </ul>
                    </Typography>
                  }
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </DarkGrey>
      <Box my={10}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            textAlign="center"
            fontWeight={600}
            mb={10}
          >
            Define
          </Typography>
          <Typography variant="body1" component="p" textAlign="center" mb={10}>
            This stage was very important to do right in order to understand
            what problems the future user might face, and how they could be
            avoided. I started by making some user journey maps and problem
            statements to define some challenges the users would run into.
          </Typography>
          <Typography variant="body2" component="p" my={4}>
            1. User journey map
          </Typography>
        </Container>
      </Box>
    </>
  );
}

const EmpathyMap = ({ title, square1, square2, square3, square4 }) => {
  return (
    <Grid container spacing={2}>
      <Grid
        item
        xs={12}
        sx={{
          background: "#FC0202",
          paddingTop: "0px !important",
          paddingLeft: "0px !important",
        }}
      >
        <Typography
          p={0.5}
          variant="body1"
          component="div"
          textAlign="center"
          fontWeight={600}
          sx={{ color: "#fff" }}
        >
          {title}
        </Typography>
      </Grid>
      <StyledGridSquare item xs={6} p={1}>
        {square1}
      </StyledGridSquare>
      <StyledGridSquare item xs={6} p={1}>
        {square2}
      </StyledGridSquare>
      <StyledGridSquare item xs={6} p={1}>
        {square3}
      </StyledGridSquare>
      <StyledGridSquare item xs={6} p={1}>
        {square4}
      </StyledGridSquare>
    </Grid>
  );
};

const DarkGrey = styled(Box)`
  background-color: #f4f5f6;
`;

const StyledGridSquare = styled(Grid)`
  min-height: 175px;
  background: white;
  border: 1px solid #422100;
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  #__next {
    position: relative;
    background: #F8F9FB;
    width: 100vw;
    height: 100vh;
    height: -moz-fit-content;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
