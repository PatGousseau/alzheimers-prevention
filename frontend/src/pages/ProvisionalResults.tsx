import { Alert, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Grid, LinearProgress, Radio, RadioGroup, Stack, Typography, linearProgressClasses, styled } from "@mui/material";
import axios from "axios";
import { FC, useContext, useState } from "react";
import { Question } from "../components/Question";
import { MultipleChoiceInput } from "../components/MultipleChoiceInput";
import BackButton from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import { LetterCircle } from "../components/LetterCircle";
import CircleFormation from "../components/CircleFormation";
import { EvidenceToolTip } from "../components/EvidenceToolTip";
import { Circle } from "../components/Circle";
import CircleWithRing from "../components/CircleWithRing";
import {ReactComponent as Lightbulb} from "../assets/light-bulb.svg";


export const ProvisionalResults: FC = () => {


  return (
    <Stack sx={{ m: 4 }}>
      <BackButton />
      <Stack direction={"row"} sx={{mb:8}}>
        <Typography variant="h1">Provisional Result</Typography>
        <EvidenceToolTip
          text={
            "This rapid health assessment is meant to provide you with a high level sense of your health risk. To get a more accurate understanding of your health, you may also take our in-depth risk assessment, which takes in additional information like lab results and genetic tests."
          }
        />
      </Stack>

      <Grid container spacing={2} sx={{ pb: 4 }}>
        <Grid
          item
          xs={8}
          sx={{
            boxShadow: 3,
            borderRadius: "16px",
            height: "423px",
          }}
        >
          <Stack direction={"row"}>
            <CircleWithRing
              header={"Vascular Health"}
              letter={"B"}
              width={289}
              height={289}
            />
            <Typography variant="h1">
              What's good for the brain is good for the heart.
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ boxShadow: 3, borderRadius: "8px", backgroundColor: "#4F7F72" }}
        >
<Stack sx={{ justifyContent: "center", padding:2 }}>
  <Stack direction="row" alignItems="center" pb={4}>
    <Lightbulb />
    <Typography variant="h2" color="#FFFFFF">
      Did you know...
    </Typography>
  </Stack>

  <Typography variant="h3" color="#FFFFFF">
    Poor vascular health can reduce blood flow to the brain, break down the blood-brain barrier, and damage blood vessels in the brain, leading to increased risk for dementia.
  </Typography>
</Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
