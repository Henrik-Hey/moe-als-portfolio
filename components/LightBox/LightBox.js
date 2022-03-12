import React from "react";
import { Dialog, Box } from "@mui/material";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const LightBox = ({ children }) => {
  const contentRef = React.useRef(null);
  const [dims, setDims] = React.useState({ width: 0, height: 0 });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (!contentRef.current) return;
    const { width, height } = contentRef.current.getBoundingClientRect();
    const aspectRatio = height / width;
    const maxWidth = window.innerWidth - 128;
    const renderedWidth = Math.min(width, maxWidth);
    const renderedHeight = renderedWidth * aspectRatio;
    setDims({ width: renderedWidth, height: renderedHeight });
  }, [contentRef, open, children]);

  return (
    <>
      <Box ref={contentRef} onClick={handleOpen}>
        {children}
      </Box>
      <Dialog maxWidth="xl" open={open} onClose={handleClose}>
        <TransformWrapper>
          <TransformComponent>
            <Box m={4} width={dims.width} height={dims.height}>
              {children}
            </Box>
          </TransformComponent>
        </TransformWrapper>
      </Dialog>
    </>
  );
};

export default LightBox;