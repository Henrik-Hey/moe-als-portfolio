import Image from "next/image";
import React from "react";
import GridSegment from "../components/Grid/GridSegment";
import ProjectBrief from "../components/ProjectBrief/ProjectBrief";
import styled from "styled-components";

const Apollo = () => {
  return (
    <GridSegment
      title="PREV SECTION - POCHUI"
      footer="NEXT SECTION - CONTACT"
      content={
        <>
          <ProjectBrief
            name="apollo"
            notStarted
            brief={
              <>
                Re-brand Apollo completely. Some design elements are there, but
                changes are needed to make the application look more modern,
                up-to-date, and user-friendly.
                <br />
                <br />
                Apollo allows users to teach and learn classes online at no
                cost. It’s a modern tool that can be used to learn new skills
                and hobbies every day.
              </>
            }
            timeline="Ongoing"
            roles="Ux researcher, Visual designer"
          />
        </>
      }
      image={
        <ImageContainer>
          <Image
            layout="fill"
            objectFit="cover"
            src={"/images/Apollo1.png"}
            alt="Image of Apollo app redesign"
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

export default Apollo;
