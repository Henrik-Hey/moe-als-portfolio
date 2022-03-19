import Image from "next/image";
import React from "react";
import GridSegment from "../components/Grid/GridSegment";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <GridSegment
      contentOrder={{ sm: 2, md: 2 }}
      imageOrder={{ sm: 1, md: 1 }}
      align="flex-start"
      content={
        <ContentContainer>
          Hey :) My name is Moe.{" "}
          <b>I’m a Visual UX Designer based in Canada.</b>
          <br />
          <br />
          Prior to my UX career, I was a <b>graphic designer</b> who specialized
          in <b>brand identity</b> and <b>web design</b>. I always enjoyed
          creating visual elements and being in that position allowed me to do
          work for different clients and businesses. I did everything design
          related, if it was a website, a poster, a brochure, or even a business
          card, I was always down to design it.
          <br />
          <br />
          After 3 years of freelance work, I realized that I wasn’t meeting the
          goals I set for myself as much as I would’ve liked, so I decided to
          shift focus to <b>Visual UX Design.</b>
          <br />
          <br />
          I’m currently still freelancing as a graphic designer, but I’m doing a
          handful of UX work for the startup I’m working with.
          <br />
          <br />
          You can check out some random design stuff I did just down below.
          Thank you for taking the time to read this friend!
        </ContentContainer>
      }
      image={
        <ImageContainer>
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src={"/images/thelegend.png"}
            alt="Portrait of moe als"
          />
        </ImageContainer>
      }
    />
  );
};

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  min-height: 500px;
`;

const ContentContainer = styled.div`
  font-family: "Epilogue", sans-serif;
  font-size: 0.95rem;
  max-width: 400px;
`;

export default AboutSection;
