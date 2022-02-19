import Image from "next/image";
import React from "react";
import GridSegment from "../components/Grid/GridSegment";
import ProjectBrief from "../components/ProjectBrief/ProjectBrief";
import styled from "styled-components";

const Pochui = () => {
  return (
    <GridSegment
      title="PRO 2 - POCHUI"
      contentOrder={{ sm: 2, md: 2 }}
      imageOrder={{ sm: 1, md: 1 }}
      content={
        <>
          <ProjectBrief
            brief={
              <>
                Create a mobile / web application for skateboarders who are
                interested in creating a social platform where they can meet
                likeminded people and discuss similar topics.
                <br />
                <br />
                Users can choose if they’d like to revolve their account around
                art and selling products as a business, or they could take the
                more standard approach and grow to be a huge media star, either
                way - Pochui is a platform for everyone!
              </>
            }
            timeline="6 Weeks - V2 ongoing"
            roles="Ux researcher, Visual designer"
            projectURL="/pochui"
          />
        </>
      }
      image={
        <ImageContainer>
          <Image
            layout="fill"
            objectFit="cover"
            src={"/images/pochui/pochuiproject.png"}
            alt="Image of pochui app"
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

export default Pochui;
