import React from "react";
import styled from "styled-components";

const StickyNote = ({ children, background }) => {
  return (
    <StickyNoteContainer>
      <StyledSVG
        viewBox="0 28 233 223"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_259_6533)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M225 7H8V203L28 223L225 223V7Z"
            fill={background}
          />
          <path d="M8 203H28V223L8 203Z" fill="black" fillOpacity="0.2" />
        </g>
        <defs>
          <filter
            id="filter0_dd_259_6533"
            x="0"
            y="0"
            width="233"
            height="232"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="1" />
            <feGaussianBlur stdDeviation="4" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.11 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_259_6533"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="1.5" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_259_6533"
              result="effect2_dropShadow_259_6533"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_259_6533"
              result="shape"
            />
          </filter>
        </defs>
      </StyledSVG>
      <StickyNoteContent>{children}</StickyNoteContent>
    </StickyNoteContainer>
  );
};

const StickyNoteContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StickyNoteContent = styled.div`
  position: relative;
  padding: 24px;
  padding-top: 16px;
  max-width: 190px;

  @media (min-width: 768px) {
    padding: 16px;
  }
`;

const StyledSVG = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export default StickyNote;
