import { ButtonBase, Input, Stack, Typography } from "@mui/material";
import { FC, ReactNode, useContext } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";
import { GeneContext } from "../context/geneContext";
import { getColour } from "../utils/utils";
import { CircularProgressbar, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { EvidenceToolTip } from "./EvidenceToolTip";

interface LetterCircleProps {
  style: React.CSSProperties;
}

export const LetterCircle: FC<LetterCircleProps> = ({  style}) => {

  return (
    <Stack  spacing={2} sx={style}>
      <CircularProgressbarWithChildren
        value={100}
        styles={{
          // Customize the root svg element
          root: {},
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transform: "rotate(0.25turn)",
            transformOrigin: "center center",
          },
          // Customize the text
          text: {
            // Text color
            fill: "#000000",
            // Text size
            fontSize: "16px",
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: "#3e98c7",
          },
        }}
      >
        <Typography>Memory</Typography>
        <Typography>A</Typography>
      </CircularProgressbarWithChildren>
    </Stack>
  );
};
