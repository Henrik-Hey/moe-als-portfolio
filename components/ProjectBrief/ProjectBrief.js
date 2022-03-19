import React from "react";
import Link from "next/link";
import { ButtonBase, Box } from "@mui/system";
import styled from "styled-components";

const ProjectBrief = ({
  brief,
  name,
  timeline,
  roles,
  projectURL,
  notStarted,
}) => {
  return (
    <ContentContainer>
      <Heading>Project Name: {name}</Heading>
      <br />
      <br />
      <br />
      <Heading>Project brief:</Heading> {brief}
      <br />
      <br />
      <br />
      <Heading>Project timeline: {timeline} </Heading>
      <br />
      <Heading>Roles: {roles}</Heading>
      <br />
      <br />
      <br />
      <StyledLink href={projectURL || ""} passHref $disabled={notStarted}>
        <LinkContent $disabled={notStarted} component={ButtonBase}>
          {notStarted ? "Coming soon" : "View project"}
        </LinkContent>
      </StyledLink>
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  font-family: "Epilogue", sans-serif;
  font-weight: 100;
  max-width: 400px;
`;

const Heading = styled.span`
  font-weight: 600;
  font-family: "Epilogue", sans-serif;
  color: #000;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  underline: none;
`;

const LinkContent = styled(Box)`
  display: flex;
  width: fit-content;
  align-items: center;
  background: ${({ $disabled }) => ($disabled ? "#A6A6A6" : "#1e88e5")};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "all")};
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
