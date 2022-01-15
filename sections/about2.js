import Image from "next/image";
import React from "react";
import GridSegment from "../components/Grid/GridSegment";
import styled from "styled-components";

const About2Section = () => {
  return (
    <GridSegment
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
          <Link>Photography</Link>
          <br />
          <Link>Design</Link>
        </ContentContainer>
      }
      image={
        <ImageContainer>
          {new Array(12).fill(0).map((_, i) => (
            <ImageBox key={i}>
              <Image
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
`;

const Link = styled.a`
  font-family: "Epilogue", sans-serif;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
`;

export default About2Section;
