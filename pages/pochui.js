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
import Footer from "../components/Footer/Footer";
import FadeIn from "../components/FadeIn/FadeIn";
import styled from "styled-components";

import UserStudyPrep from "../data/pochui/UserStudyPrep";
import PostUserStudy from "../data/pochui/PostUserStudy";

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
          <SectionHeading
            variant="h3"
            component="h1"
            textAlign="center"
            fontWeight={600}
            mb={10}
          >
            Goals and Challenges
          </SectionHeading>
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
      <FadeIn>
        <DarkGrey py={10}>
          <Container maxWidth="md">
            <SectionHeading
              variant="h3"
              component="h2"
              textAlign="center"
              fontWeight={600}
              mb={10}
            >
              Understanding users
            </SectionHeading>
            <Typography
              variant="body1"
              component="p"
              textAlign="center"
              mb={10}
            >
              Much like my previous project - shiba, I had to ask myself a lot
              of questions to make sure this was heading in the right direction.
              I had to figure out how big this project was going to be, and how
              much time I wanted to give myself to get through every stage. That
              being said, I had to organize my time a lot better around this
              time to ensure that I’m able to deliver results I’m happy with in
              a shorter timeframe.
            </Typography>
            <SectionSubTitle component="p" my={4}>
              1. User Personas
            </SectionSubTitle>
            <Grid container>
              <Grid item xs={12} md={5.5}>
                <Box display="flex" mb={4}>
                  <Box position="relative">
                    <Image
                      priority
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
                  Heona is a 20 year-old university student currently majoring
                  in computer science. She spends most of her time studying, but
                  when she’s not drowning in homework, she goes out with friends
                  and watches different skateboarding competitions and reels.
                </Typography>
              </Grid>
              <Grid item xs={12} md={1} />
              <Grid item xs={12} md={5.5}>
                <Box display="flex" mb={4}>
                  <Box position="relative">
                    <Image
                      priority
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
                  Justin is a 26 year old male living in Toronto ontario as a
                  film and video major. His primary occupation is videography,
                  and he works for a small company making online content, in his
                  free time - Justin creates skateboard art and skate montages
                  of his friends to upload online.
                </Typography>
              </Grid>
            </Grid>
            <SectionSubTitle component="p" my={4}>
              2. Empathy Maps
            </SectionSubTitle>
            <Grid container>
              <Grid item xs={12} md={6}>
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
                            It’s fun to go out with friends and skateboard
                            places.
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
              <Grid item xs={12} md={6}>
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
                            It’s always worth getting shots of those crazy
                            tricks.{" "}
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
            <SectionSubTitle component="p" my={4}>
              3. User Journey map (Justin)
            </SectionSubTitle>
            <Typography variant="body1" component="p" mb={4}>
              There are two Journey maps created for this project. #1 is for
              Justin - His goal is to create and upload a skate deck artwork to
              later on make commission profits from selling it to his followers.
            </Typography>
            <CustomTable
              headerColor="#1D1D1D"
              fontColor="#fff"
              data={{
                headings: [
                  "Action",
                  "Look at local inspiration",
                  "Modify and fit the created art piece",
                  "Upload and publish the artwork",
                  "Receive orders and fulfill commissions",
                  "Send commissions to customers",
                ],
                rows: [
                  [
                    <TableHeading key={-1}>Task List</TableHeading>,
                    <GreyText key={0}>
                      &gt; Open up website
                      <br /> &gt; Look at the homepage features
                      <br />
                      &gt; Favorite, and add pieces to mood board
                    </GreyText>,
                    <GreyText key={1}>
                      &gt; Open up upload tool
                      <br />
                      &gt; Fit and resize artwork
                      <br /> &gt; Confirm sizes and fitting, move to next step
                    </GreyText>,
                    <GreyText key={2}>
                      &gt; Confirm artwork and set price
                      <br /> &gt; Upload and publish
                      <br />
                      &gt; Await orders and commissions
                    </GreyText>,
                    <GreyText key={3}>
                      &gt; Receive message stating customer order
                      <br /> &gt; Confirm order
                      <br /> &gt; Receive commission timeline and payment
                    </GreyText>,
                    <GreyText key={4}>
                      &gt; upload commission to customer
                      <br />
                      &gt; read customer comments
                    </GreyText>,
                  ],
                  [
                    <TableHeading key={-1}>Feeling Adjective</TableHeading>,
                    <GreyText key={0}>
                      &gt; Anxious
                      <br />
                      &gt; Excited
                      <br />
                      &gt; Hopeful
                    </GreyText>,
                    <GreyText key={1}>
                      &gt; Confused
                      <br />
                      &gt; Hopeful
                      <br />
                      &gt; Anxious
                    </GreyText>,
                    <GreyText key={2}>
                      &gt; Excited
                      <br />
                      &gt; Worried
                      <br />
                      &gt; Anxious
                    </GreyText>,
                    <GreyText key={3}>
                      &gt; Happy
                      <br />
                      &gt; Overjoyed
                      <br />
                      &gt; Excited
                    </GreyText>,
                    <GreyText key={4}>
                      &gt; Happy
                      <br />
                      &gt; Hopeful
                      <br />
                      &gt; Excited
                    </GreyText>,
                  ],
                  [
                    <TableHeading key={-1}>
                      Improvement opportunities
                    </TableHeading>,
                    <GreyText key={0}>
                      &gt; Make the initial home screen welcoming. it’s
                      important to prompt users to create an account before
                      viewing content.
                    </GreyText>,
                    <GreyText key={1}>
                      &gt; Maybe offer some sort of tutorial to explain the
                      interface if needed.
                    </GreyText>,
                    <GreyText key={2}>
                      &gt; Showcase price ranges to help artists decide
                      <br />
                      &gt; Also showcase all fees that the customer will see
                      once they order
                    </GreyText>,
                    <GreyText key={3}>
                      &gt; There should be a dashboard showing all orders.
                    </GreyText>,
                    <GreyText key={4}>
                      &gt; Commission info should be available in a separate
                      tab.
                    </GreyText>,
                  ],
                ],
              }}
            />
            <SectionSubTitle component="p" my={4}>
              3. User Journey map (Heona)
            </SectionSubTitle>
            <Typography variant="body1" component="p" mb={4}>
              There are two Journey maps created for this project, #2 is for
              Heona - Her goal is to create an influencer account to interact
              with friends, add collections, and make her first post.
            </Typography>
            <CustomTable
              headerColor="#1D1D1D"
              fontColor="#fff"
              data={{
                headings: [
                  "Action",
                  "First steps - Initial reading",
                  "Create an account",
                  "Exlpore the interface",
                  "Plan first post",
                ],
                rows: [
                  [
                    <TableHeading key={-1}>Task List</TableHeading>,
                    <GreyText key={0}>
                      &gt; Open up website
                      <br />
                      &gt; Scroll through elements and read about service
                      <br />
                      &gt; Go to the sign up page and begin
                    </GreyText>,
                    <GreyText key={1}>
                      &gt; Fill in personal information
                      <br />
                      &gt; Select membership type
                      <br />
                      &gt; Confirm account and start using it
                    </GreyText>,
                    <GreyText key={2}>
                      &gt; See all the features available to use
                      <br />
                      &gt; Explore dashboard and feature page
                      <br />
                      &gt; Search users and inspo
                    </GreyText>,
                    <GreyText key={3}>
                      &gt; like user posts, follow accounts and friends
                      <br />
                      &gt; Set moodboards and inspo collections
                      <br />
                      &gt; Upload content
                    </GreyText>,
                  ],
                  [
                    <TableHeading key={-1}>Feeling Adjective</TableHeading>,
                    <GreyText key={0}>
                      &gt; Anxious
                      <br />
                      &gt; Excited
                      <br />
                      &gt; Hopeful
                    </GreyText>,
                    <GreyText key={1}>
                      &gt; Confused
                      <br />
                      &gt; Hopeful
                      <br />
                      &gt; Anxious
                    </GreyText>,
                    <GreyText key={2}>
                      &gt; Excited
                      <br />
                      &gt; Worried
                      <br />
                      &gt; Anxious
                    </GreyText>,
                    <GreyText key={3}>
                      &gt; Happy
                      <br />
                      &gt; Overjoyed
                      <br />
                      &gt; Excited
                    </GreyText>,
                  ],
                  [
                    <TableHeading key={-1}>
                      Improvement opportunities
                    </TableHeading>,
                    <GreyText key={0}>
                      &gt; Make the initial home screen welcoming. it’s
                      important to prompt users to create an account before
                      viewing content{" "}
                    </GreyText>,
                    <GreyText key={1}>
                      &gt; Maybe offer some sort of tutorial to explain the
                      interface if needed.
                    </GreyText>,
                    <GreyText key={2}>
                      &gt; Showcase price ranges to help artists decide
                      <br />
                      &gt; Also showcase all fees that the customer will see
                      once they order
                    </GreyText>,
                    <GreyText key={3}>
                      &gt; There should be a dashboard showing all orders.
                    </GreyText>,
                  ],
                ],
              }}
            />
          </Container>
        </DarkGrey>
      </FadeIn>
      <FadeIn>
        <Box my={10}>
          <Container maxWidth="md">
            <SectionHeading
              variant="h3"
              component="h1"
              textAlign="center"
              fontWeight={600}
              mb={10}
            >
              Breaking down the problems we might face
            </SectionHeading>
            <Typography
              variant="body1"
              component="p"
              textAlign="center"
              mb={10}
            >
              Defining potential user problems is a very important step - I took
              my time applying the research from the previous stage to create
              scenarios and problem statements in hopes of being able to see
              things from the perspective of the user. This does not guarantee
              perfection, but it’s a step in the right direction to ensure user
              testing goes smoothly in the later stages.
            </Typography>
            <SectionSubTitle component="p" my={4}>
              1. Problem statements
            </SectionSubTitle>
            <Grid container>
              <Grid item xs={12} md={7}>
                <TextMessage background="#325BDE">
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Justin is a passionate artist who needs an application where
                    he can sell, upload, and share his board designs and videos
                    because, he wants to make a living off it.
                  </Typography>
                </TextMessage>
              </Grid>
              <Grid item xs={12} md={5} />
              <Grid item xs={12} md={7}>
                <TextMessage background="#325BDE">
                  <Typography variant="body2" sx={{ color: "white" }}>
                    Heona is a university student who needs a social platform to
                    meet like-minded skateboarding enthusiasts because she wants
                    to make more friends with similar hobbies.
                  </Typography>
                </TextMessage>
              </Grid>
              <Grid item xs={12} md={5} />
              <Grid item xs={12} md={9} />
              <Grid item xs={12} md={3}>
                <TextMessage background="#d7d8da" isRight>
                  <Typography
                    variant="body1"
                    sx={{ color: "#000" }}
                    textAlign="center"
                  >
                    ● ● ●
                  </Typography>
                </TextMessage>
              </Grid>
            </Grid>
            <SectionSubTitle component="p" my={4}>
              2. Competitive audit breakdown
            </SectionSubTitle>
            <Typography
              variant="body1"
              component="p"
              textAlign="center"
              mb={10}
            >
              Understanding who our competition is gives us a lot of insight on
              what we need to do, what we need to avoid, and it really sets the
              parameters for how deep this project will go. I took my time with
              this step because it was relatively difficult finding competition
              for this service provided. but after a few nights I had a complete
              competitive audit, and audit report, complete!
            </Typography>
            <CustomTable
              headerColor="#1D1D1D"
              fontColor="#fff"
              data={{
                headings: [
                  "",
                  "LOKE: Skateboards",
                  "Shreddit: Skateboarding",
                  "Braille",
                  "Pochui",
                ],
                rows: [
                  [
                    <TableHeading key={-1}>Membership benefits</TableHeading>,
                    "○",
                    "○",
                    "●",
                    "●",
                  ],
                  [
                    <TableHeading key={-1}>Unique account types</TableHeading>,
                    "○",
                    "○",
                    "○",
                    "●",
                  ],
                  [
                    <TableHeading key={-1}>Social community</TableHeading>,
                    "○",
                    "○",
                    "●",
                    "●",
                  ],
                  [
                    <TableHeading key={-1}>Modern UI/UX</TableHeading>,
                    "●",
                    "○",
                    "●",
                    "●",
                  ],
                  [
                    <TableHeading key={-1}>Marketing tools</TableHeading>,
                    "○",
                    "○",
                    "○",
                    "●",
                  ],
                ],
              }}
            />
          </Container>
        </Box>
      </FadeIn>
      <FadeIn>
        <DarkGrey pt={10}>
          <Container maxWidth="md">
            <SectionHeading
              variant="h3"
              component="h1"
              textAlign="center"
              fontWeight={600}
              mb={10}
            >
              Coming up with the gameplan
            </SectionHeading>
            <Typography
              variant="body1"
              component="p"
              textAlign="center"
              mb={10}
            >
              Game plans are important, and for this project I needed one to
              make sure that I’m designing and thinking of the right content for
              the upcoming user testing trials. I started with basic ‘how might
              we statments’questions, created a prioritization plan, and then
              moved on to the drawing board.
            </Typography>
            <SectionSubTitle component="p" my={4}>
              1. &apos;How might we&apos; statements
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
                <StickyNote background="#FFF8A7">
                  <StickyNoteText>
                    How might we create a way to book food for dine-ins instead
                    of delivery?
                  </StickyNoteText>
                </StickyNote>
              </Grid>
              <Grid item xs={5} md={2}>
                <StickyNote background="#FFF8A7">
                  <StickyNoteText>
                    How might we make a drink delivery app where you can
                    customize drinks and orders?
                  </StickyNoteText>
                </StickyNote>
              </Grid>
              <Grid item xs={5} md={2}>
                <StickyNote background="#FFF8A7">
                  <StickyNoteText>
                    How might we make users come back consistently to collect
                    rewards and bonuses from ordering food / setting up dine-in
                    reservations?
                  </StickyNoteText>
                </StickyNote>
              </Grid>
              <Grid item xs={5} md={2}>
                <StickyNote background="#FFF8A7">
                  <StickyNoteText>
                    How might we create a one-stop-shop experience for new, and
                    old users?
                  </StickyNoteText>
                </StickyNote>
              </Grid>
              <Grid item xs={5} md={2}>
                <StickyNote background="#FFF8A7">
                  <StickyNoteText>
                    How might we make it less stressful for users ordering, and
                    customizing orders?
                  </StickyNoteText>
                </StickyNote>
              </Grid>
              <Grid item xs={5} md={2}>
                <StickyNote background="#FFF8A7">
                  <StickyNoteText>
                    How might we make it easier for users to order from
                    anywhere, anytime?
                  </StickyNoteText>
                </StickyNote>
              </Grid>
              <Grid item xs={5} md={2}>
                <StickyNote background="#FFF8A7">
                  <StickyNoteText>
                    How might we make the experience on the app more
                    interactive? Animations, videos?
                  </StickyNoteText>
                </StickyNote>
              </Grid>
              <Grid item xs={5} md={2}>
                <StickyNote background="#FFF8A7">
                  <StickyNoteText>
                    How might having multiple Japanese / Asian restaurants in
                    the app affect the user journey?
                  </StickyNoteText>
                </StickyNote>
              </Grid>
            </Grid>
            <SectionSubTitle component="p" my={4}>
              2. Prioritization plan
            </SectionSubTitle>
            <Typography variant="body1" component="p" mb={10}>
              Plotting possible features onto a graph helped me plan out how to
              break my time down on what features. I was able to plan around the
              mvp for user testing, and if I were to return to this project, I
              would have a list of features to go through and design for future
              mockups and versions.
            </Typography>
            <Box my={10}>
              <Image
                priority
                src="/images/pochui/prioritizationplan.png"
                alt="Picture of the prioritization plan"
                layout="responsive"
                width="1164"
                height="569"
              />
            </Box>
          </Container>
          <WhiteBackdrop py={4}>
            <Container maxWidth="md">
              <SectionSubTitle component="p" my={4}>
                1. Physical wireframes
              </SectionSubTitle>
              <Box my={10}>
                <ItemCarousel>
                  <Image
                    priority
                    src="/images/pochui/paper1.png"
                    alt=""
                    layout="responsive"
                    width="1186"
                    height="958"
                  />
                  <Image
                    priority
                    src="/images/pochui/paper2.png"
                    alt=""
                    layout="responsive"
                    width="1181"
                    height="885"
                  />
                  <Image
                    priority
                    src="/images/pochui/paper3.png"
                    alt=""
                    layout="responsive"
                    width="1181"
                    height="885"
                  />
                </ItemCarousel>
              </Box>
            </Container>
          </WhiteBackdrop>
          <Container maxWidth="md">
            <SectionSubTitle component="p" mt={10}>
              3. Digital wireframes & wireflow concepts
            </SectionSubTitle>
            <Box my={10}>
              <ItemCarousel>
                <Image
                  priority
                  src="/images/pochui/wireframe1.png"
                  alt=""
                  layout="responsive"
                  width="1184"
                  height="1093"
                />
                <Image
                  priority
                  src="/images/pochui/wireframe2.png"
                  alt=""
                  layout="responsive"
                  width="1164"
                  height="1033"
                />
              </ItemCarousel>
            </Box>
          </Container>
        </DarkGrey>
      </FadeIn>
      <FadeIn>
        <Box my={10}>
          <Container maxWidth="md">
            <SectionHeading
              variant="h3"
              component="h1"
              textAlign="center"
              fontWeight={600}
              mb={10}
            >
              Doing the tests and making it pretty
            </SectionHeading>
            <Typography variant="body1" component="p" textAlign="center">
              Using the information from the previous stage, I was able to move
              into the user testing stage within a reasonable amount of time. I
              prepped my concepts, polished my wireflows, and started collecting
              data that would help me create a high-fidelity version of the
              product.
            </Typography>
            <SectionSubTitle component="p" my={4}>
              1. User study prep - planning the interviews
            </SectionSubTitle>
            <Box>
              <ItemCarousel>
                {UserStudyPrep.map((item, index) => (
                  <CarouselCard py={2} px={6} key={index}>
                    <CarouselCardHeading>
                      <Typography
                        variant="body1"
                        component="p"
                        color="#fff"
                        fontWeight={700}
                      >
                        {item.title}
                      </Typography>
                    </CarouselCardHeading>
                    <CarouselCardContent>
                      <Typography variant="body2" component="p">
                        {item.content}
                      </Typography>
                    </CarouselCardContent>
                  </CarouselCard>
                ))}
              </ItemCarousel>
            </Box>
          </Container>
          <Box my={4}>
            <Container maxWidth="md">
              <SectionSubTitle component="p" my={4}>
                2. Post User Study - Simplifying data
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
                        User information requested in the form needs a bit of
                        work.
                      </StickyNoteText>
                    </StickyNote>
                  </Grid>
                  <Grid item xs={10} sm={5}>
                    <StickyNote background="#FFF8A7">
                      <StickyNoteText>
                        The layout is a bit confusing, could use some polishing.
                      </StickyNoteText>
                    </StickyNote>
                  </Grid>
                  <Grid item xs={10} sm={5}>
                    <StickyNote background="#FFF8A7">
                      <StickyNoteText>
                        Some elements are unclear; considered working around
                        them a bit more to make it more accessible.
                      </StickyNoteText>
                    </StickyNote>
                  </Grid>
                  <Grid item xs={10} sm={5}>
                    <StickyNote background="#FFF8A7">
                      <StickyNoteText>
                        Missing information fields under the account creation
                        tab, could also use some more personalization work under
                        user profiles.
                      </StickyNoteText>
                    </StickyNote>
                  </Grid>
                </Grid>
                <Grid item container columns={10} sx={10} sm={5} md={2}>
                  <Grid
                    item
                    xs={10}
                    sx={{
                      background: "#A7CFFF",
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
                    <StickyNote background="#A7CFFF">
                      <StickyNoteText>
                        The concept is good; it’s interesting seeing an app like
                        this since there are no similar competitors.
                      </StickyNoteText>
                    </StickyNote>
                    <StickyNote background="#A7CFFF">
                      <StickyNoteText>
                        Having a landing page that describes the product is a
                        good way to make it more accessible and clear to
                        everyone.
                      </StickyNoteText>
                    </StickyNote>
                  </Grid>
                </Grid>
                <Grid item container columns={10} sx={10} sm={5} md={4}>
                  <Grid
                    item
                    xs={10}
                    sx={{
                      background: "#A7EFFF",
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
                    <StickyNote background="#A7EFFF">
                      <StickyNoteText>
                        Consider playing with the style of the page. Maybe a
                        dashboard approach with a side nav could be good?
                      </StickyNoteText>
                    </StickyNote>
                  </Grid>
                  <Grid item xs={10} sm={5}>
                    <StickyNote background="#A7EFFF">
                      <StickyNoteText>
                        A side navigation bar could make it easier to connect
                        the app and the website.
                      </StickyNoteText>
                    </StickyNote>
                  </Grid>
                  <Grid item xs={10} sm={5}>
                    <StickyNote background="#A7EFFF">
                      <StickyNoteText>
                        Footer is not needed in most parts, so you’ll probably
                        only have that on the main page.
                      </StickyNoteText>
                    </StickyNote>
                  </Grid>
                </Grid>
              </Grid>
              <SectionSubTitle component="p" my={4}>
                3. Post User Study - Insight identification
              </SectionSubTitle>
              <Box>
                <ItemCarousel>
                  {PostUserStudy.map((item, index) => (
                    <CarouselCard py={2} px={6} key={index}>
                      <CarouselCardHeading>
                        <Typography
                          variant="body1"
                          component="p"
                          color="#fff"
                          fontWeight={700}
                        >
                          {item.title}
                        </Typography>
                      </CarouselCardHeading>
                      <CarouselCardContent>
                        <Typography variant="body2" component="p">
                          {item.content}
                        </Typography>
                      </CarouselCardContent>
                    </CarouselCard>
                  ))}
                </ItemCarousel>
              </Box>
              <SectionSubTitle component="p" my={4}>
                3. Doing the visual work
              </SectionSubTitle>
              <Typography variant="body1" component="p">
                My favorite part has to be getting down to it and making things
                visual, having a background in design allowed me to make a lot
                of style choices that led this project to where it is right now
                - below you can see a sample of some mockups for web and phone,
                you can check out the full XD file{" "}
                <Typography
                  fontWeight={700}
                  color="325BDE"
                  component="a"
                  href="/"
                  sx={{ textDecoration: "none", underline: "none" }}
                >
                  right here.
                </Typography>
              </Typography>
              <Box my={4}>
                <Image
                  priority
                  src="/images/pochui/pochui1.png"
                  alt=""
                  role="presentation"
                  layout="responsive"
                  width="1164"
                  height="635"
                />
              </Box>
              <Box my={4}>
                <Image
                  priority
                  src="/images/pochui/pochui2.png"
                  alt=""
                  role="presentation"
                  layout="responsive"
                  width="1164"
                  height="1075"
                />
              </Box>
            </Container>
          </Box>
        </Box>
      </FadeIn>
      <FadeIn>
        <DarkGrey py={10}>
          <Container maxWidth="md">
            <SectionHeading
              variant="h3"
              component="h1"
              textAlign="center"
              fontWeight={600}
              mb={10}
            >
              The final touches for pochui
            </SectionHeading>
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
                    fontWeight: "bold",
                    fontFamily: "ZonaPro",
                  },
                },
                {
                  heading: "H2 - Zona pro",
                  size: "24 pt - Se Bold",
                  style: {
                    fontWeight: 600,
                    fontFamily: "ZonaPro",
                  },
                },
                {
                  heading: "H3 - Roboto",
                  size: "14 pt - Regular",
                  style: {
                    fontWeight: 500,
                    fontFamily: "Roboto",
                  },
                },
              ]}
            />
          </Container>
        </DarkGrey>
      </FadeIn>
      <FadeIn>
        <Box my={10}>
          <Container maxWidth="md">
            <SectionHeading
              variant="h3"
              component="h1"
              textAlign="center"
              fontWeight={600}
              mb={10}
            >
              Final notes
            </SectionHeading>
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
      </FadeIn>
      <Footer backgroundColor="#325BDE" />
    </>
  );
}

const EmpathyMap = ({ title, square1, square2, square3, square4 }) => {
  return (
    <Box m={2}>
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
    </Box>
  );
};

const SectionHeading = styled(Typography)`
  font-family: ZonaPro;
  font-weight: bold;
`;

const SectionSubTitle = styled(Typography)`
  font-family: ZonaPro;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 135%;
  /* identical to box height, or 30px */

  letter-spacing: 0.025em;

  color: #325bde;
`;

const TableHeading = styled(Typography)`
  font-weight: 600 !important;
  font-size: 12px !important;
`;

const GreyText = styled(Typography)`
  font-weight: 300 !important;
  color: #232323 !important;
  font-size: 12px !important;
`;

const StickyNoteText = styled(Typography)`
  font-weight: 300 !important;
  font-size: 12px !important;
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
    min-height: 180px;
  }
`;

const CarouselCardHeading = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 64px 0px;
  color: #fff;

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
  color: #fff;
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: ZonaPro;
    src: url("fonts/zona/ZonaPro-Regular.otf") format("opentype");
  }

  @font-face {
      font-family: ZonaPro;
      font-weight: bold;
      src: url("fonts/zona/ZonaPro-Bold.otf") format("opentype");
  }
`;
