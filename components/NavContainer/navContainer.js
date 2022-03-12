import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { Twirl as Hamburger } from "hamburger-react";
import { useMediaQuery, useTheme, Container } from "@mui/material";

const NavContainer = ({ position = "absolute", color }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"), {
    noSsr: true,
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = open && !isDesktop ? "hidden" : "auto";
  }, [open, isDesktop]);

  return (
    <StyledContainer maxWidth="lg">
      <NavContent $position={position}>
        <LogoContainer>
          <Image
            priority
            src="/images/logo.svg"
            alt="Logo"
            width={80}
            height={80}
          />
        </LogoContainer>
        {isDesktop ? (
          <NavLinkContainer>
            <NavLink href="/" $color={color}>
              Home
            </NavLink>
            <ProjectsDropdown $color={color}>
              <span>Projects</span>
              <DropdownContent>
                <li>
                  <NavLink href="/shiba" $color={color}>
                    Shiba
                  </NavLink>
                </li>
                <li>
                  <NavLink href="/pochui" $color={color}>
                    Pochui
                  </NavLink>
                </li>
              </DropdownContent>
            </ProjectsDropdown>
            <NavLink
              target="_blank"
              rel="noreferrer"
              href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:62fd54a1-5871-3c47-9038-56fdb6539289"
              $color={color}
            >
              Resumé
            </NavLink>
            <NavLink href="/about" $color={color}>
              About
            </NavLink>
          </NavLinkContainer>
        ) : (
          <>
            <MobileNavLinkContainer $open={open}>
              <NavLink href="/" $color={color}>
                Home
              </NavLink>
              <NavLink href="/shiba" $color={color}>
                Shiba
              </NavLink>
              <NavLink href="/pochui" $color={color}>
                Pochui
              </NavLink>
              <NavLink
                target="_blank"
                rel="noreferrer"
                href="https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:62fd54a1-5871-3c47-9038-56fdb6539289"
                $color={color}
              >
                Resumé
              </NavLink>
              <NavLink href="/about" $color={color}>
                About
              </NavLink>
            </MobileNavLinkContainer>
            <NavLinkContainer>
              <Hamburger toggled={open} toggle={setOpen} color="#1E88E5" />
            </NavLinkContainer>
          </>
        )}
      </NavContent>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  position: relative;
`;

const NavContent = styled.div`
  position: ${(props) => props.$position};
  top: 0px;
  left: 0px;
  min-height: 130px;
  width: 100%;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.up("md")} {
    position: ${(props) => props.$position};
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  left: 25px;
  top: 25px;
  height: 80px;
  width: 80px;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.up("md")} {
    left: 0px;
  }
`;

const ShowDesktop = styled.div`
  display: none;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: block;
  }
`;

const ShowMobile = styled.div`
  display: block;

  ${({ theme }) => theme.breakpoints.up("md")} {
    display: none;
  }
`;

const NavLinkContainer = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  height: 80px;
  width: 60vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
`;

const MobileNavLinkContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  overflow: hidden;
  transition: all 0.75s ease-in-out;
  clip-path: ${({ $open }) =>
    $open
      ? "circle(150% at calc(100% - 50px) 62.5px)"
      : "circle(0% at calc(100% - 50px) 62.5px)"};
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
  color: ${({ theme, $color }) =>
    $color ? $color : theme.palette.primary.main};
  text-decoration: none;
  margin-top: 16px;
  margin-bottom: 16px;

  ${({ theme }) => theme.breakpoints.up("md")} {
    margin-top: 0px;
    margin-bottom: 0px;
  }
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
  color: ${({ theme, $color }) =>
    $color ? $color : theme.palette.primary.main};
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
