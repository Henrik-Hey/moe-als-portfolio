import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { createGlobalStyle } from "styled-components";
import { Box, Container, Grid, Typography } from "@mui/material";
import Header from "../components/Header/Header";
import CustomTable from "../components/Table/Table";
import TextMessage from "../components/TextMessage/TextMessage";
import StickyNote from "../components/StickyNote/StickyNote";
import ItemCarousel from "../components/Carousel/Carousel";
import StyleGuide from "../components/StyleGuide/StyleGuide";
import styled from "styled-components";

export default function Pochui() {
  return (
    <>
      <GlobalStyles />
      <Header
        logoURL="/images/pochui/PochuiLogo.png"
        brand="Pochui"
        responsibilities="ux research & design"
        timeline="Jan – Feb 2022"
        theme="Lifestyle"
        color="#325BDE"
      />
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
                <Typography component="span" fontWeight={600} color="#1E88E5">
                  Pochui
                </Typography>{" "}
                is a social media platform that’s targeted towards
                skateboarders, social media influencers, and artists who are
                interested in growing their social following and online presence
                and engagement.
              </Typography>
              <Typography component="p">
                Pochui’s goal is to create a tight community for skateboard
                enthusiasts. It’s a place where you can grow your audience and
                business while making friends all across the world.
              </Typography>
            </Grid>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={5}>
              <Typography>
                <Typography component="span" fontWeight={600} color="#1E88E5">
                  Challenges:
                </Typography>
                <ul>
                  <li>
                    Create a unique brand for a new social media application.
                  </li>
                  <br />
                  <li>
                    Successfully create a friendly and easy-to-use user
                    interface that doesn’t overwhelm users.
                  </li>
                  <br />
                  <li>
                    Think of how to keep the application interesting and unique.
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
            Understanding users
          </Typography>
          <Typography variant="body1" component="p" textAlign="center" mb={10}>
            Much like my previous project - shiba, I had to ask myself a lot of
            questions to make sure this was heading in the right direction. I
            had to figure out how big this project was going to be, and how much
            time I wanted to give myself to get through every stage. That being
            said, I had to organize my time a lot better around this time to
            ensure that I’m able to deliver results I’m happy with in a shorter
            timeframe.
          </Typography>
          <SectionSubTitle component="p" my={4}>
            1. User Personas
          </SectionSubTitle>
          <Grid container>
            <Grid item xs={12} md={5.5}>
              <Box display="flex" mb={4}>
                <Box position="relative">
                  <Image
                    src="/images/pochui/heona.png"
                    alt="Picture of Heona Fulley"
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
                    <Typography
                      component="span"
                      fontWeight={600}
                      color="#1E88E5"
                    >
                      Name:
                    </Typography>{" "}
                    Heona Fulley
                    <br />
                    <Typography
                      component="span"
                      fontWeight={600}
                      color="#1E88E5"
                    >
                      Age:
                    </Typography>{" "}
                    20 years old <br />
                    <Typography
                      component="span"
                      fontWeight={600}
                      color="#1E88E5"
                    >
                      Occupation:
                    </Typography>{" "}
                    Student
                    <br />
                    <Typography
                      component="span"
                      fontWeight={600}
                      color="#1E88E5"
                    >
                      Goal:
                    </Typography>{" "}
                    To find a way to connect with other skateboarders online,
                    and to share clips, highlights, and fails.
                  </Typography>
                </Box>
              </Box>
              <Typography component="p">
                Heona is a 20 year-old university student currently majoring in
                computer science. She spends most of her time studying, but when
                she’s not drowning in homework, she goes out with friends and
                watches different skateboarding competitions and reels.
              </Typography>
            </Grid>
            <Grid item xs={12} md={1} />
            <Grid item xs={12} md={5.5}>
              <Box display="flex" mb={4}>
                <Box position="relative">
                  <Image
                    src="/images/pochui/justin.png"
                    alt="Picture of Justin Sang"
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
                  <Typography variant="body1">
                    <Typography
                      component="span"
                      fontWeight={600}
                      color="#1E88E5"
                    >
                      Name:
                    </Typography>{" "}
                    Justin Sang <br />
                    <Typography
                      component="span"
                      fontWeight={600}
                      color="#1E88E5"
                    >
                      Age:
                    </Typography>{" "}
                    26 years old <br />
                    <Typography
                      component="span"
                      fontWeight={600}
                      color="#1E88E5"
                    >
                      Occupation:
                    </Typography>{" "}
                    Videographer <br />
                    <Typography
                      component="span"
                      fontWeight={600}
                      color="#1E88E5"
                    >
                      Goal:
                    </Typography>{" "}
                    To find a way to create an online profile showcasing
                    different designs and maybe make money off it.
                  </Typography>
                </Box>
              </Box>
              <Typography component="p">
                Justin is a 26 year old male living in Toronto ontario as a film
                and video major. His primary occupation is videography, and he
                works for a small company making online content, in his free
                time - Justin creates skateboard art and skate montages of his
                friends to upload online.
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
                  title="Heona"
                  square1={
                    <Typography variant="body2">
                      <Typography variant="body1" fontWeight={700}>
                        Says
                      </Typography>
                      <ul>
                        <li>Skateboarding can be scary, but it’s fun</li>
                        <li>
                          It’s fun to go out with friends and skateboard places.
                        </li>
                      </ul>
                    </Typography>
                  }
                  square2={
                    <Typography variant="body2">
                      <Typography variant="body1" fontWeight={700}>
                        {" "}
                        Thinks
                      </Typography>
                      <ul>
                        <li>
                          Skateboarding is frustrating but rewarding after a
                          while
                        </li>
                        <li>Skateboarding can be scary sometimes</li>
                      </ul>
                    </Typography>
                  }
                  square3={
                    <Typography variant="body2">
                      <Typography variant="body1" fontWeight={700}>
                        {" "}
                        Does
                      </Typography>
                      <ul>
                        <li>Go out with friends to skate often</li>
                        <li>
                          Spend time at the skatepark to watch and skate w/
                          friends
                        </li>
                      </ul>
                    </Typography>
                  }
                  square4={
                    <Typography variant="body2">
                      <Typography variant="body1" fontWeight={700}>
                        Feels
                      </Typography>
                      <ul>
                        <li>Happy watching others skateboard</li>
                        <li>Frustrated trying to learn tricks</li>
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
                  title="Justin"
                  square1={
                    <Typography variant="body2">
                      <Typography variant="body1" fontWeight={700}>
                        Says
                      </Typography>
                      <ul>
                        <li>Skateboarding is a serious sport</li>
                        <li>I love filming my friends skateboarding</li>
                      </ul>
                    </Typography>
                  }
                  square2={
                    <Typography variant="body2">
                      <Typography variant="body1" fontWeight={700}>
                        {" "}
                        Thinks
                      </Typography>
                      <ul>
                        <li>Skateboarding is very competitive</li>
                        <li>
                          It’s always worth getting shots of those crazy tricks.{" "}
                        </li>
                      </ul>
                    </Typography>
                  }
                  square3={
                    <Typography variant="body2">
                      <Typography variant="body1" fontWeight={700}>
                        {" "}
                        Does
                      </Typography>
                      <ul>
                        <li>Skate and film at the park with friends </li>
                        <li>Sign up for film awards</li>
                      </ul>
                    </Typography>
                  }
                  square4={
                    <Typography variant="body2">
                      <Typography variant="body1" fontWeight={700}>
                        Feels
                      </Typography>
                      <ul>
                        <li>
                          Sad when he doesn’t get the footage he wants to get
                        </li>
                        <li>Overjoyed when he’s able to create art</li>
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
            headerColor="#1D1D1D"
            fontColor="#fff"
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
              <TextMessage background="#1E88E5" isRight>
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
            headerColor="#1D1D1D"
            fontColor="#fff"
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
          <SectionSubTitle component="p" my={4}>
            1. wireflow
          </SectionSubTitle>
        </Container>
        <DarkGrey py={4}>
          <Container maxWidth="md">
            <Image
              src="/images/shiba/wireflow.png"
              alt="Picture of the information architecture"
              layout="responsive"
              width="1164"
              height="709"
            />
          </Container>
        </DarkGrey>
        <Box my={4}>
          <Container maxWidth="md">
            <SectionSubTitle component="p" my={4}>
              2. User study prep - Writing out the content
            </SectionSubTitle>
            <SectionSubTitle component="p" my={4}>
              3. Post User study - Collecting data
            </SectionSubTitle>
            <Grid container columns={10}>
              <Grid item container columns={10} xs={10} sm={5} md={4}>
                <Grid
                  item
                  xs={10}
                  sx={{
                    background: "#FFF8A7",
                    mb: 2,
                    mx: 0.5,
                    height: "fit-content",
                  }}
                  textAlign="center"
                >
                  <Typography variant="body1" component="h2" fontWeight={600}>
                    Pain Points
                  </Typography>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFF8A7">
                    <StickyNoteText>
                      Account creation is missing a few information fields that
                      are needed
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFF8A7">
                    <StickyNoteText>
                      Welcome screen after the creation is uneeded
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFF8A7">
                    <StickyNoteText>
                      Overall app is missing a lot of accessibility options
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFF8A7">
                    <StickyNoteText>
                      Having a username for this type of app doesn’t make a lot
                      of sense, instead it should be a first and last name for
                      account creation - and then email for login
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFF8A7">
                    <StickyNoteText>
                      Consider adding sign-in partners as an accommodation
                      feature
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
              </Grid>
              <Grid item container columns={10} sx={10} sm={5} md={2}>
                <Grid
                  item
                  xs={10}
                  sx={{
                    background: "#FF8585",
                    mb: 2,
                    mx: 0.5,
                    height: "fit-content",
                  }}
                  textAlign="center"
                >
                  <Typography variant="body1" component="h2" fontWeight={600}>
                    Positive Feedback
                  </Typography>
                </Grid>
                <Grid item sx={{ height: "100%", width: "100%" }}>
                  <StickyNote background="#FF8585">
                    <StickyNoteText>
                      Interface is clean and there’s good whitespace usage
                    </StickyNoteText>
                  </StickyNote>
                  <StickyNote background="#FF8585">
                    <StickyNoteText>
                      Good use of photo elements to make the app less boring
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
              </Grid>
              <Grid item container columns={10} sx={10} sm={5} md={4}>
                <Grid
                  item
                  xs={10}
                  sx={{
                    background: "#FFC17C",
                    mb: 2,
                    mx: 0.5,
                    height: "fit-content",
                  }}
                  textAlign="center"
                >
                  <Typography variant="body1" component="h2" fontWeight={600}>
                    Consider changing / adding
                  </Typography>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFC17C">
                    <StickyNoteText>
                      Add a dropdown under the address book for easier access to
                      different locations
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFC17C">
                    <StickyNoteText>
                      Add a view all button for sections, ex; this week’s deals
                      would direct you to a seperate page with other deals.
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFC17C">
                    <StickyNoteText>
                      Look into accessibility options and see how you would go
                      on about adding a text size slider, or maybe have some way
                      of enabling accessibility options under settings
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFC17C">
                    <StickyNoteText>
                      Re-work the food customization system into something
                      cleaner
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
                <Grid item xs={10} sm={5}>
                  <StickyNote background="#FFC17C">
                    <StickyNoteText>
                      Change the structure of the registration and login forms
                      into something more user friendly
                    </StickyNoteText>
                  </StickyNote>
                </Grid>
              </Grid>
            </Grid>
            <SectionSubTitle component="p" my={4}>
              4. Post User study - Pattern Identification and Prioritized
              insights
            </SectionSubTitle>
            <Typography
              variant="body1"
              component="p"
              textAlign="center"
              mb={10}
            >
              After compiling all my research, insights, and notes from the user
              studies, I got to work and I started creating the revised hi-fi
              mockups and prototypes. This part took me the longest because I do
              tend to dwell on some designs until they’re as pixel perfect as
              possible, but I was happy with the overall results.
            </Typography>
            <Box mb={4}>
              <Image
                src="/images/shiba/shibapresentation.png"
                alt=""
                role="presentation"
                layout="responsive"
                width="1164"
                height="573"
              />
            </Box>
            <Box my={4}>
              <Image
                src="/images/shiba/shibaloginsignup.png"
                alt="Picture of the shibas login and signup screens"
                layout="responsive"
                width="1164"
                height="443"
              />
            </Box>
            <Box my={4}>
              <Image
                src="/images/shiba/shibaapp.png"
                alt="Picture of the shiba app"
                layout="responsive"
                width="1164"
                height="703"
              />
            </Box>
          </Container>
        </Box>
        <DarkGrey py={10}>
          <Container maxWidth="md">
            <Typography
              variant="h3"
              component="h1"
              textAlign="center"
              fontWeight={600}
              mb={10}
            >
              The final touches for pochui
            </Typography>
            <Typography
              variant="body1"
              component="p"
              textAlign="center"
              mb={10}
            >
              For pochui, I went for a minimalist approach. I used a fun
              illustration that the target market could relate to and I went
              with an overly simple color palette to see how well I could design
              being limited to two colors. Typography wise - Two typefaces,
              roboto and zona pro. Both look great, straightforward, bold enough
              to represent pochui :)
            </Typography>
            <StyleGuide
              logoURL="/images/pochui/PochuiLogo2.png"
              logoWidth={824}
              logoHeight={239}
              color="#325BDE"
              colors={["#325BDE", "#1D1D1D"]}
              fonts={[
                {
                  heading: "H1 - Zona pro",
                  size: "30 pt - Bold",
                  style: {
                    fontWeight: 900,
                    fontFamily: "Epilogue",
                  },
                },
                {
                  heading: "H2 - Zona pro",
                  size: "24 pt - Se Bold",
                  style: {
                    fontWeight: 600,
                    fontFamily: "Epilogue",
                  },
                },
                {
                  heading: "H3 - Roboto",
                  size: "14 pt - Regular",
                  style: {
                    fontWeight: 500,
                    fontFamily: "Epilogue",
                  },
                },
              ]}
            />
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
              Final notes
            </Typography>
            <Typography variant="body1" component="p" textAlign="center">
              Thank you for taking the time to look through this and I hope you
              enjoyed some of the content above. Working on pochui was a lot of
              fun, and I decided to experiment with Adobe XD, it was a bit
              harder to get used to compared to Figma. After a few weeks of hard
              work I was able to get a solid set of designs down. It may be
              nowhere near close to a full product launch, but hopefully I can
              come back to this project one day!
            </Typography>
          </Container>
        </Box>
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
          background: "#325BDE",
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
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 135%;
  /* identical to box height, or 30px */

  letter-spacing: 0.025em;

  color: #325bde;
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

const CarouselCard = styled(Box)`
  position: relative;
  background-color: #325bde;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex-direction: row;
    min-height: 200px;
  }
`;

const CarouselCardHeading = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 0px;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    flex: 1;
    max-width: 250px;
    margin: 0px;
  }
`;

const CarouselCardContent = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
