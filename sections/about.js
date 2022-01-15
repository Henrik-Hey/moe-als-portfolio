import Image from "next/image";
import React from "react";
import GridSegment from "../components/Grid/GridSegment";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <GridSegment
      content={
        <ContentContainer>
          Hey :) my name is Moe. I’m a Visual Designer based in Canada, I
          previously worked as a Graphic Designer, and photographer after
          graduating from Fanshawe college.
          <br />
          <br />
          Prior to switching to UX Visual Design, I was a graphic designer
          specializing in brand identity and web design. I always enjoyed
          creating visual elements and being a graphic designer allowed me to do
          work for different clients and businesses. My work included everything
          from logos and brand guides, to full on site re branding projects.
          <br />
          <br />
          After 2 years of designing logos, social media posts, promotional
          posters, and business stationary for clients, I decided to shift focus
          to UX Visual Design.
          <br />
          <br />
          I have 7 UX Google course certificates, from the basics of UX, to user
          Research and complex prototypes using Figma and Adobe XD.
          <br />
          <br />
          I’m currently working with two startups as a UX designer. During my
          free time, I read up on UX articles and work on improving my UX
          skills.
          <br />
          <br />
          Click on the arrow if you would like to see some — not to UX related —
          samples of my work in the past few years.
        </ContentContainer>
      }
      image={
        <ImageContainer>
          <Image
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
`;

const ContentContainer = styled.div`
  font-family: "Epilogue", sans-serif;
  font-size: 0.95rem;
`;

export default AboutSection;
