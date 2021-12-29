import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import { useDataContext } from "../DataProvider/DataProvider";

const NavContainer = () => {
  const {
    data: { currentSection, numSections },
    scrollToSectionFromIndex,
  } = useDataContext();
  const isDesktop = useMediaQuery("(min-width:764px)", { noSsr: true });

  const canGoUp = currentSection > 0;
  const canGoDown = currentSection < numSections - 1;

  return (
    <>
      <LogoContainer>
        <Image src="/images/logo.svg" alt="Logo" width={80} height={80} />
      </LogoContainer>
      {isDesktop && (
        <>
          <NavLinkContainer>
            <NavLink href="/">Home</NavLink>
            {/* <NavLink href="#">Projects</NavLink> */}
            <ProjectsDropdown>
              <span>Projects</span>
              <DropdownContent>
                <li>
                  <NavLink href="#">Shiba</NavLink>
                </li>
                <li>
                  <NavLink href="#">Apollo</NavLink>
                </li>
                <li>
                  <NavLink href="#">GoSkate</NavLink>
                </li>
              </DropdownContent>
            </ProjectsDropdown>
            <NavLink href="#">Resume</NavLink>
            <NavLink href="/about">About</NavLink>
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
          <NavButtonsContainer>
            <NavButton
              $visible={canGoUp}
              onClick={() => scrollToSectionFromIndex(currentSection - 1)}
            >
              <ArrowUpwardIcon sx={{ fill: "white" }} />
            </NavButton>
            <NavButton
              $visible={canGoDown}
              onClick={() => scrollToSectionFromIndex(currentSection + 1)}
            >
              <ArrowDownwardIcon sx={{ fill: "white" }} />
            </NavButton>
          </NavButtonsContainer>
        </>
      )}
    </>
  );
};

const LogoContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  height: 80px;
  width: 80px;
  z-index: 1;
`;

const SideNav = styled.div`
  position: fixed;
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
  z-index: 10;
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

const DropdownContent = styled.ul`
  position: absolute;
  top: 0px;
  list-style-type: none;
  padding: 0;
  z-index: 1;
  height: auto;
  max-height: 0px;
  transition: all 0.3s;
  overflow: hidden;

  & > li {
    margin-top: 10px;

    & > ${NavLink} {
      margin-left: 0px;
      transition: all 0.3s;
    }

    &:hover > ${NavLink} {
      margin-left: 8px;
    }
  }
`;

const ProjectsDropdown = styled.div`
  position: relative;
  display: inline-block;
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

  &::after {
    content: "▼";
    margin-left: 4px;
  }

  &:hover,
  &:focus,
  &:focus-within {
    ${DropdownContent} {
      max-height: calc(3em * 3);
    }
  }
`;

const NavButtonsContainer = styled.div`
  position: fixed;
  bottom: 25px;
  right: 25px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const NavButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  display: block;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  transition: transform 0.3s;
  transform: scale(${({ $visible }) => ($visible ? 1 : 0)})});
`;

export default NavContainer;
