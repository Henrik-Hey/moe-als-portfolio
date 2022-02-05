import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { createGlobalStyle } from "styled-components";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../components/Header/Header";
import CustomTable from "../components/Table/Table";
import TextMessage from "../components/TextMessage/TextMessage";
import StickyNote from "../components/StickyNote/StickyNote";
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
          <SectionSubTitle component="p" my={4}>
            1. User Personas
          </SectionSubTitle>
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
                    Name: Syra Rye <br />
                    Age: 31 years old <br />
                    Occupation: Marketing lead
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
          <SectionSubTitle component="p" my={4}>
            2. Empathy Maps
          </SectionSubTitle>
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
          <SectionSubTitle component="p" my={4}>
            1. User journey map
          </SectionSubTitle>
          <CustomTable
            headerColor="#FCAC53"
            data={{
              headings: [
                "Action",
                "Downloading and launching app",
                "Making an account",
                "Browsing for food and checking out",
                "Payment information and address",
                "Confirmation & Delivery wait time",
              ],
              rows: [
                [
                  <TableHeading key={-1}>Task List</TableHeading>,
                  <GreyText key={0}>
                    &gt; Search for app
                    <br /> &gt; Download the app on correct platform
                    <br /> &gt; Launch
                  </GreyText>,
                  <GreyText key={1}>
                    &gt; Sign in options
                    <br /> &gt; Confirm and create account
                    <br /> &gt; Confirm Email
                    <br /> &gt; Use application
                  </GreyText>,
                  <GreyText key={2}>
                    &gt; Browse restaurants
                    <br /> &gt; Choose restaurant and browse menu
                    <br /> &gt; Add items to cart
                    <br /> &gt; Check out
                  </GreyText>,
                  <GreyText key={3}>
                    &gt; Browse payment options
                    <br /> &gt; Select payment method
                    <br /> &gt; Check subscription option and perks
                    <br /> &gt; Pay and tip
                  </GreyText>,
                  <GreyText key={4}>
                    &gt; Recieve confirmation email <br /> &gt; Check tracking
                    map, wait for order <br /> &gt; Receive order and leave a
                    rating
                  </GreyText>,
                ],
                [
                  <TableHeading key={-1}>Feeling Adjective</TableHeading>,
                  <GreyText key={0}>
                    &gt; Looking forwards to trying out the food
                    <br /> &gt; Curious about experience
                  </GreyText>,
                  <GreyText key={1}>
                    &gt; Looking forwards to making an account
                    <br /> &gt; Unsure of what to come
                  </GreyText>,
                  <GreyText key={2}>
                    &gt; Frustrated at lack of category sorting options
                    <br /> &gt; Happy with overall interface and colors
                  </GreyText>,
                  <GreyText key={3}>
                    &gt; Frustrated because subscription option wasn’t offered
                    sooner
                    <br /> &gt; Anxious to place order due to lack of reviews
                  </GreyText>,
                  <GreyText key={4}>
                    &gt; Patiently waiting for food
                    <br /> &gt; Anxious due lack of updates
                    <br /> &gt; Excited to eat
                  </GreyText>,
                ],
                [
                  <TableHeading key={-1}>
                    Improvement opportunities
                  </TableHeading>,
                  <GreyText key={0}>
                    &gt; Offer a light version of the app
                    <br /> &gt; Make sure app is available for both android and
                    apple
                  </GreyText>,
                  <GreyText key={1}>
                    &gt; Option to continue as a guest should be available
                    <br /> &gt; Sign in partners could help w/ accessibility
                  </GreyText>,
                  <GreyText key={2}>
                    &gt; Buttons at the top of the screen that list categories
                    <br /> &gt; Make the food items visual w/ pictures and gifs
                  </GreyText>,
                  <GreyText key={3}>
                    &gt; Offer different kinds of payment options
                    <br /> &gt; Need to introduce a subscribe & save system
                    sooner
                    <br /> &gt; Add intractability from user to user. Ex;
                    ratings
                  </GreyText>,
                  <GreyText key={4}>
                    &gt; Option to enable push alerts should be available but
                    not mandatory
                    <br /> &gt; Option to leave a review
                  </GreyText>,
                ],
              ],
            }}
          />
          <SectionSubTitle component="p" my={4}>
            2. Problem statements
          </SectionSubTitle>
          <Grid container>
            <Grid item xs={12} md={7}>
              <TextMessage background="#000">
                <Typography variant="body2" sx={{ color: "white" }}>
                  Kendrick is a busy college student who needs a reliable food
                  delivery app, where he could save money the more he orders
                  because he doesn’t have time to cook often.
                </Typography>
              </TextMessage>
            </Grid>
            <Grid item xs={12} md={5} />
            <Grid item xs={12} md={5} />
            <Grid item xs={12} md={7}>
              <TextMessage background="#FC0202" isRight>
                <Typography variant="body2" sx={{ color: "white" }}>
                  Kendrick is a busy college student who needs a reliable food
                  delivery app, where he could save money the more he orders
                  because he doesn’t have time to cook often.
                </Typography>
              </TextMessage>
            </Grid>
          </Grid>
          <SectionSubTitle component="p" my={4}>
            3. Competitive audit
          </SectionSubTitle>
          <Typography variant="body1" component="p" textAlign="center" mb={10}>
            This stage was very important to do right in order to understand
            what problems the future user might face, and how they could be
            avoided. I started by making some user journey maps and problem
            statements to define some challenges the users would run into.
          </Typography>
          <CustomTable
            headerColor="#FCAC53"
            data={{
              headings: [
                "",
                "Doordash",
                "Ubereats",
                "Cori korean Restaurant",
                "Miku Japanese Grill",
              ],
              rows: [
                [
                  <TableHeading key={-1}>Subscription savings</TableHeading>,
                  "●",
                  "●",
                  "○",
                  "○",
                ],
                [
                  <TableHeading key={-1}>Delivery tracking</TableHeading>,
                  "●",
                  "●",
                  "○",
                  "●",
                ],
                [
                  <TableHeading key={-1}>Only One Cuisine</TableHeading>,
                  "○",
                  "○",
                  "●",
                  "●",
                ],
                [
                  <TableHeading key={-1}>Modern UI/UX</TableHeading>,
                  "●",
                  "●",
                  "○",
                  "○",
                ],
                [
                  <TableHeading key={-1}>Rewards</TableHeading>,
                  "●",
                  "●",
                  "●",
                  "○",
                ],
              ],
            }}
          />
        </Container>
      </Box>
      <DarkGrey pt={10}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            textAlign="center"
            fontWeight={600}
            mb={10}
          >
            Ideate
          </Typography>
          <Typography variant="body1" component="p" textAlign="center" mb={10}>
            After completing my previous research, I decided to look more into
            user problems and solutions by doing a few more exercises. I created
            a few ‘how might we’ statements, and I followed that up by creating
            the site’s information architecture.
          </Typography>
          <SectionSubTitle component="p" my={4}>
            1. How might we statements
          </SectionSubTitle>
          <Grid container columns={10}>
            <Grid item xs={5} md={2}>
              <StickyNote background="#FFF8A7">
                <StickyNoteText>
                  How might we make ordering food online more fun, and more
                  rewarding?
                </StickyNoteText>
              </StickyNote>
            </Grid>
            <Grid item xs={5} md={2}>
              <StickyNote background="#A7FFAB">
                <StickyNoteText>
                  How might we create a way to book food for dine-ins instead of
                  delivery?
                </StickyNoteText>
              </StickyNote>
            </Grid>
            <Grid item xs={5} md={2}>
              <StickyNote background="#A7FFEF">
                <StickyNoteText>
                  How might we make a drink delivery app where you can customize
                  drinks and orders?
                </StickyNoteText>
              </StickyNote>
            </Grid>
            <Grid item xs={5} md={2}>
              <StickyNote background="#A7DFFF">
                <StickyNoteText>
                  How might we make users come back consistently to collect
                  rewards and bonuses from ordering food / setting up dine-in
                  reservations?
                </StickyNoteText>
              </StickyNote>
            </Grid>
            <Grid item xs={5} md={2}>
              <StickyNote background="#BEA7FF">
                <StickyNoteText>
                  How might we create a one-stop-shop experience for new, and
                  old users?
                </StickyNoteText>
              </StickyNote>
            </Grid>
            <Grid item xs={5} md={2}>
              <StickyNote background="#FFD1A7">
                <StickyNoteText>
                  How might we make it less stressful for users ordering, and
                  customizing orders?
                </StickyNoteText>
              </StickyNote>
            </Grid>
            <Grid item xs={5} md={2}>
              <StickyNote background="#FDA7FF">
                <StickyNoteText>
                  How might we make it easier for users to order from anywhere,
                  anytime?
                </StickyNoteText>
              </StickyNote>
            </Grid>
            <Grid item xs={5} md={2}>
              <StickyNote background="#FFA7C7">
                <StickyNoteText>
                  How might we make the experience on the app more interactive?
                  Animations, videos?
                </StickyNoteText>
              </StickyNote>
            </Grid>
            <Grid item xs={5} md={2}>
              <StickyNote background="#FFA7A7">
                <StickyNoteText>
                  How might having multiple Japanese / Asian restaurants in the
                  app affect the user journey?
                </StickyNoteText>
              </StickyNote>
            </Grid>
          </Grid>
          <SectionSubTitle component="p" my={4}>
            2. Information architecture
          </SectionSubTitle>
          <Box my={10}>
            <Image
              src="/images/shiba/architecture.png"
              alt="Picture of the information architecture"
              layout="responsive"
              width="1164"
              height="339"
            />
          </Box>
          <Typography variant="body1" component="p" textAlign="center" mb={10}>
            Lastly, to wrap the ideate phase of the project - I decided it was
            time to start drawing things out on paper. This meant getting ready
            to create physical and digital wireframes. I also decided to start
            sketching out Shiba’s logo during this stage.
          </Typography>
          <SectionSubTitle component="p" my={4}>
            1. Physical wireframes
          </SectionSubTitle>
        </Container>
        <WhiteBackdrop my={10}>
          <Container maxWidth="md">
            <Image
              src="/images/shiba/paperwireframes.png"
              alt="Picture of the information architecture"
              layout="responsive"
              width="1164"
              height="888"
            />
          </Container>
        </WhiteBackdrop>
        <Container maxWidth="md">
          <SectionSubTitle component="p" my={4}>
            2. Digital wireframes
          </SectionSubTitle>
          <Box my={10}>
            <Image
              src="/images/shiba/digitalwireframes.png"
              alt="Picture of the information architecture"
              layout="responsive"
              width="1164"
              height="733"
            />
          </Box>
        </Container>
        <Container maxWidth="md">
          <SectionSubTitle component="p" my={4}>
            3. Shiba inital logo sketches
          </SectionSubTitle>
        </Container>
        <WhiteBackdrop my={10}>
          <Container maxWidth="md">
            <Image
              src="/images/shiba/paperlogo.png"
              alt="Picture of the information architecture"
              layout="responsive"
              width="1164"
              height="873"
            />
          </Container>
        </WhiteBackdrop>
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
            Prototype
          </Typography>
          <Typography variant="body1" component="p" textAlign="center">
            With all the user research completed, and the wireframes drawn out
            and mocked up, it was time to prototype a basic user journey for
            testing, doing this correctly allowed me to get a lot of valuable
            feedback on some design, and userflow errors that I made.
          </Typography>
          <br />
          <Typography variant="body1" component="p" textAlign="center" mb={10}>
            I started off by doing wireflow prototypes, and then I followed that
            up by doing some much needed preperation for my user studies and
            interviews.
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

const SectionSubTitle = styled(Typography)`
  font-family: Epilogue;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 135%;
  /* or 24px */

  letter-spacing: 0.025em;

  color: rgba(66, 33, 0, 0.75);
`;

const TableHeading = styled(Typography)`
  font-weight: 600;
  font-size: 12px;
`;

const GreyText = styled(Typography)`
  font-weight: 300;
  color: #232323;
  font-size: 12px;
`;

const StickyNoteText = styled(Typography)`
  font-weight: 300;
  font-size: 12px;
`;

const DarkGrey = styled(Box)`
  background-color: #f4f5f6;
`;

const WhiteBackdrop = styled(Box)`
  background-color: #fff;
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
