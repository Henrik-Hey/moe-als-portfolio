import React from "react";
import { Dialog, Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { styled } from "@mui/system";

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
        <CloseButton onClick={handleClose}>
          <Close fontSize="small" />
        </CloseButton>
      </Dialog>
    </>
  );
};

const CloseButton = styled(IconButton)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export default LightBox;
