import React from "react";
import { Fade } from "@mui/material";

const FadeIn = ({ children }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    if (!domRef.current) return console.log("uh oh");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => domRef.current && observer.unobserve(domRef.current);
  }, [domRef]);
  return (
    <Fade ref={domRef} in={isVisible} timeout={1000}>
      {children}
    </Fade>
  );
};

export default FadeIn;
