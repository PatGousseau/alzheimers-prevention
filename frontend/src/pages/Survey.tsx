import { Alert, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, LinearProgress, Radio, RadioGroup, Stack, Typography, linearProgressClasses, styled } from "@mui/material";
import axios from "axios";
import { FC, useContext, useState } from "react";
import { Question } from "../components/Question";
import { MultipleChoiceInput } from "../components/MultipleChoiceInput";
import BackButton from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import { LetterCircle } from "../components/LetterCircle";
import CircleFormation from "../components/CircleFormation";


export const Survey: FC = () => {


  return (
    <Stack sx={{ m: 4 }}>
              <BackButton />
      <Stack>
      <ProgressBar variant="determinate" value={50} />
      </Stack>
        <Stack direction={"row"}>

      <Question
        question={
          "Do you have a parent who has ever been diagnosed with dementia?"
        }
        children={<MultipleChoiceInput options={["yes", "no"]} />}
        tooltipText={
          "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated"
        }
      />
     
     <CircleFormation/>
     </Stack>
    </Stack>
  );
};
