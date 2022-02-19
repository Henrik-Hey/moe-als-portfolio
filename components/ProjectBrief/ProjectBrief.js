import React from "react";
import Link from "next/link";
import { ButtonBase, Box } from "@mui/system";
import styled from "styled-components";

const ProjectBrief = ({ brief, timeline, roles, projectURL }) => {
  return (
    <ContentContainer>
      <Heading>Project brief:</Heading> {brief}
      <br />
      <br />
      <br />
      <Heading>Project timeline:</Heading> {timeline} <br />
      <Heading>Roles:</Heading> {roles}
      {projectURL && (
        <>
          <br />
          <br />
          <br />
          <StyledLink href={projectURL} passHref>
            <LinkContent component={ButtonBase}>View project</LinkContent>
          </StyledLink>
        </>
      )}
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

const StyledLink = styled(Link)`
  text-decoration: none;
  underline: none;
`;

const LinkContent = styled(Box)`
  display: flex;
  width: fit-content;
  align-items: center;
  background: #1e88e5;
  border-radius: 11px;
  color: white;
  cursor: pointer;
  padding: 12px 52px;

  font-family: Epilogue;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 122%;
  /* or 20px */

  letter-spacing: 0.025em;
`;

export default ProjectBrief;
