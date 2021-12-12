import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { useDataContext } from "../DataProvider/DataProvider";

const NavContainer = () => {
  const {
    data: { currentSection, numSections },
  } = useDataContext();
  console.log(currentSection, numSections);
  return (
    <Nav>
      <LogoContainer>
        <Image src="/images/logo.svg" alt="Logo" width={80} height={80} />
      </LogoContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  height: 80px;
  width: 80px;
`;

const SectionContainer = styled.div`
  position: absolute;
`;

export default NavContainer;
