import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { useMediaQuery } from "@mui/material";

const NavContainer = ({ position = "absolute" }) => {
  const isDesktop = useMediaQuery("(min-width:764px)", { noSsr: true });

  return (
    <NavContent $position={position}>
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
        </>
      )}
    </NavContent>
  );
};

const NavContent = styled.div`
  position: ${(props) => props.$position};
  top: 0px;
  left: 0px;
  width: 100vw;
  min-height: 130px;
  z-index: 1;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  height: 80px;
  width: 80px;
  z-index: 1;
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
  align-items: center;
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

export default NavContainer;
