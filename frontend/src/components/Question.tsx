import { ButtonBase, Input, Stack, Typography } from "@mui/material";
import { FC, ReactNode, useContext } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";
import { GeneContext } from "../context/geneContext";
import { getColour } from "../utils/utils";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { EvidenceToolTip } from "./EvidenceToolTip";

interface QuestionProps {

  question: string;
  tooltipText: string;
  children: ReactNode;
}



export const Question: FC<QuestionProps> = ({ question, tooltipText, children }) => {

  return (
    <Stack
      spacing={2}
      sx={{mt:8}}
    >
        <Stack direction={"row"}>
        <Typography>{question}</Typography>
        <EvidenceToolTip text={<Typography>{tooltipText}</Typography>}></EvidenceToolTip>
        </Stack>
        {children}
    </Stack>
  );
};
