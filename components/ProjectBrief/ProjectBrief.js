import React from "react";
import styled from "styled-components";

const ProjectBrief = ({ brief, timeline, roles }) => {
  return (
    <ContentContainer>
      <Heading>Project brief:</Heading> {brief}
      <br />
      <br />
      <Heading>Project timeline:</Heading> {timeline} <br />
      <Heading>Roles:</Heading> {roles}
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  font-family: "Epilogue", sans-serif;
`;

const Heading = styled.span`
  font-weight: 100;
  font-family: "Epilogue", sans-serif;
  color: ${({ theme }) => theme.palette.primary.main};
`;

export default ProjectBrief;
