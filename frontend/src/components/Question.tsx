import { ButtonBase, Input, Stack, Typography } from "@mui/material";
import { FC, ReactNode, useContext } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";
import { GeneContext } from "../context/geneContext";
import { getColour } from "../utils/utils";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface QuestionProps {
  header: string;
  subheader: string;
  questionNum: number;
  question: string;
  children: ReactNode;
}

export const Question: FC<QuestionProps> = ({ header, subheader, questionNum, question, children }) => {

  return (
    <Stack
      spacing={2}
    >
        <Typography>{header}</Typography>
        <Typography>{subheader}</Typography>
        <Typography>Question {questionNum}</Typography>
        <Typography>{question}</Typography>
        {children}
        <label >
        Text input: <input name="myInput" />
      </label>
  <Input>
  </Input>
    </Stack>
  );
};
