import React from "react";
import Image from "next/image";
import styled from "styled-components";

import { useDataContext } from "../DataProvider/DataProvider";

const NavContainer = () => {
  const {
    data: { currentSection, numSections },
    scrollToSectionFromIndex,
  } = useDataContext();
  return (
    <>
      <LogoContainer>
        <Image src="/images/logo.svg" alt="Logo" width={80} height={80} />
      </LogoContainer>
      <NavLinkContainer>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">Projects</NavLink>
        <NavLink href="#">Resume</NavLink>
        <NavLink href="#">About</NavLink>
      </NavLinkContainer>
      <SideNav>
        {Array.from({ length: numSections }).map((_, i) => (
          <SideNavItem
            key={i}
            $active={i === currentSection}
            onClick={() => scrollToSectionFromIndex(i)}
          />
        ))}
      </SideNav>
    </>
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

const SideNav = styled.div`
  position: absolute;
  top: 0px;
  left: 50px;
  width: 8px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideNavItem = styled.button`
  width: 8px;
  height: 58px;
  border: none;
  border-radius: 8px;
  outline: none;
  background: ${({ theme }) => theme.colors.primary};
  opacity: ${({ $active }) => ($active ? 1 : 0.2)};
  margin-top: 4px;
  margin-bottom: 4px;
  cursor: pointer;
`;

const NavLinkContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  height: 80px;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

const NavLink = styled.a`
  font-family: "Epilogue", sans-serif;
  margin-left: 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

export default NavContainer;
