import React from "react";
import styled from "styled-components";

const Section = ({ name, children }) => {
  return <StyledSection name={name}>{children}</StyledSection>;
};

const StyledSection = styled.section`
  min-height: 100vh;
  height: fit-content;
  scroll-snap-align: start;
`;

export default Section;
