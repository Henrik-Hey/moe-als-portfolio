import { css, keyframes } from "@emotion/react";
import { styled } from "@mui/system";
import React, { useEffect, useState } from "react";

const ascendingTickTime = 75;
const decendingTickTime = 25;

const Typewriter = ({ contents }) => {
  const [content, setContent] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const [counterMap, setCounterMap] = useState({});

  useEffect(() => {
    const _temp = {
      cIndex: 0,
    };
    contents.forEach(
      (string) =>
        (_temp[string] = {
          contentLength: string.length + 20,
          ascend: true,
          index: 0,
        })
    );
    setCounterMap(_temp);
  }, [contents]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const word = contents[counterMap.cIndex];
        const mapValue = counterMap[word];
        if (mapValue.ascend) {
          mapValue.index++;
          setContent(word.substr(0, mapValue.index));
          if (mapValue.index > mapValue.contentLength) {
            mapValue.ascend = false;
            setIsAscending(false);
          }
        } else {
          mapValue.index--;
          setContent(word.substr(0, mapValue.index));
          if (mapValue.index === 0) {
            mapValue.ascend = true;
            counterMap.cIndex++;
            if (counterMap.cIndex === contents.length) counterMap.cIndex = 0;
            counterMap[contents[counterMap.cIndex]].index = 0;
            setIsAscending(true);
          }
        }
      },
      isAscending ? ascendingTickTime : decendingTickTime
    );
    return () => {
      clearInterval(interval);
    };
  }, [isAscending, contents, counterMap]);
  return <StyledSpan>{content}</StyledSpan>;
};

const blink = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const StyledSpan = styled("span")`
  &::after {
    content: "|";
    animation: ${blink} 3s infinite;
  }
`;

export default Typewriter;
