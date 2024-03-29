import Image from "next/image";
import React from "react";
import GridSegment from "../components/Grid/GridSegment";
import styled from "styled-components";

const About2Section = () => {
  return (
    <GridSegment
      contentOrder={{ sm: 1, md: 2 }}
      imageOrder={{ sm: 2, md: 1 }}
      align="flex-start"
      content={
        <ContentContainer>
          These work samples include logos I did, and some fun illustrations I
          did on the side.
          <br />
          <br />
          You can find more stuff like this on my social media accounts down
          below!
          <br />
          <br />
          <Link href="https://www.instagram.com/moe.xls/" target="_blank">
            Photography
          </Link>
          <br />
          <Link href="https://www.instagram.com/design.moexls/" target="_blank">
            Design
          </Link>
        </ContentContainer>
      }
      image={
        <ImageContainer>
          {new Array(12).fill(0).map((_, i) => (
            <ImageBox key={i}>
              <Image
                priority
                layout="fill"
                objectFit="cover"
                src={`/images/about2/${i + 1}.png`}
                alt="Portrait of moe als"
              />
            </ImageBox>
          ))}
        </ImageContainer>
      }
    />
  );
};

const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 764px) {
    display: grid;
    grid-template-columns: auto auto auto;
  }
`;

const ImageBox = styled.div`
  height: 300px;
  display: flex;
  position: relative;
  background: red;
  width: 100%;
  @media (min-width: 764px) {
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  font-family: "Epilogue", sans-serif;
  font-size: 0.95rem;
  max-width: 400px;
`;

const Link = styled.a`
  font-family: "Epilogue", sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export default About2Section;
