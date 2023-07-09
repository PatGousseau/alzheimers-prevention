import { ButtonBase, Input, Stack, Typography } from "@mui/material";
import { FC, ReactNode, useContext } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";
import { GeneContext } from "../context/geneContext";
import { getColour } from "../utils/utils";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { EvidenceToolTip } from "./EvidenceToolTip";

interface QuestionProps {
  header: string;
  question: string;
  tooltipText: string;
  children: ReactNode;
  onAnswerSelection: () => void;
}



export const Question: FC<QuestionProps> = ({ header, question, tooltipText, children }) => {

  return (
    <Stack
      spacing={2}
      sx={{mt:4}}
    >
        <Typography fontWeight={"bold"} variant="h2" sx={{color:"#4F7F72"}}>{header}</Typography>
        <Stack direction={"row"} sx={{ pt:1}}>
          <Typography variant="h4" sx={{pr:1}} >{question}</Typography>
          <EvidenceToolTip black={true} text={<Typography>{tooltipText}</Typography>}></EvidenceToolTip>
        </Stack>
        {children}
    </Stack>
  );
};
