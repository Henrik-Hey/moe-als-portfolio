import React, { useState } from "react";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import ItemsCarousel from "react-items-carousel";
import { IconButton } from "@mui/material";
import styled from "styled-components";

const ItemCarousel = ({ children }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <ItemsCarousel
      requestToChangeActive={setActiveItemIndex}
      activeItemIndex={activeItemIndex}
      numberOfCards={1}
      infiniteLoop
      leftChevron={
        <NavButton sx={{ transform: "translateX(100%)" }}>
          <ArrowBackIosNew />
        </NavButton>
      }
      rightChevron={
        <NavButton sx={{ transform: "translateX(-100%)" }}>
          <ArrowForwardIos />
        </NavButton>
      }
      outsideChevron
      chevronWidth={40}
    >
      {children}
    </ItemsCarousel>
  );
};

const NavButton = styled(IconButton)`
  display: none;

  ${({ theme }) => theme.breakpoints.up("sm")} {
    display: inline-flex;
  }
`;

export default ItemCarousel;
