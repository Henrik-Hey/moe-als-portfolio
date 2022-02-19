import Image from "next/image";
import Link from "next/link";
import React from "react";
import GridSegment from "../components/Grid/GridSegment";
import ProjectBrief from "../components/ProjectBrief/ProjectBrief";
import styled from "styled-components";

const Shiba = () => {
  return (
    <GridSegment
      title="PRO 1 - SHIBA"
      contentOrder={{ sm: 2, md: 1 }}
      imageOrder={{ sm: 1, md: 2 }}
      content={
        <>
          <ProjectBrief
            brief={
              <>
                Create a mobile app for a new food delivery service, this
                service will provide access to Asian cuisine restaurants all
                around town, the target audience will be young adults who don’t
                have a lot of time to cook due to school or work
                responsibilities.
                <br />
                <br />
                “It can be hard deciding what to sometimes eat, we decided to
                narrow down the options and create a one-stop-shop for all your
                Asian cuisine needs! Save money, earn rewards, and much more
                with Shiba INU.”
              </>
            }
            timeline="4 weeks"
            roles="Ux researcher, Visual designer"
            projectURL="/shiba"
          />
        </>
      }
      image={
        <ImageContainer>
          <Image
            layout="fill"
            objectFit="cover"
            src={"/images/shiba/shibaproject.png"}
            alt="Image of shiba inu app"
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

export default Shiba;
