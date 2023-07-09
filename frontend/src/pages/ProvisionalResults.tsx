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
import { useLocation, useNavigate } from "react-router-dom";
import { getRingColour } from "../utils/utils";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export const ProvisionalResults: FC = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleReviewSection = () => {
    navigate(-1);
  };
  

  const handleNextClick = () => {
    navigate("/survey", {
      state: { startBatchIndex: location.state.currentBatchIndex + 1 },
    });
  };

  return (
    <Stack sx={{ m: 4 }}>
      <BackButton />
      <Stack
        direction="row"
        sx={{ mb: 8, mt: 2, alignItems: "flex-end", alignContent: "flex-end" }}
      >
        <Typography variant="h2" sx={{ mr: 1 }}>
          Provisional Result
        </Typography>
        <EvidenceToolTip
          black={true}
          text={
            "This rapid health assessment is meant to provide you with a high level sense of your health risk. To get a more accurate understanding of your health, you may also take our in-depth risk assessment, which takes in additional information like lab results and genetic tests."
          }
        />
      </Stack>

      <Grid container spacing={0} sx={{ pb: 0 }}>
        <Grid
          item
          xs={6.5}
          sx={{
            boxShadow: 3,
            borderRadius: "16px",
            marginRight: 4,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            sx={{ alignItems: "center", display: "flex", ml: 4, my: 8 }}
          >
            <Stack>
              <CircleWithRing
                header={"Vascular Health"}
                letter={location.state.letter}
                size={289}
                color={getRingColour(location.state.letter)}
                circleType="provisionalResult"
              />
            </Stack>
            <Typography variant="h1" sx={{ paddingX: 8 }}>
              What's good for the brain is good for the heart.
            </Typography>
          </Stack>
        </Grid>

        <Grid
          item
          xs={4.5}
          sx={{ boxShadow: 3, borderRadius: "8px", backgroundColor: "#4F7F72" }}
        >
          <Stack sx={{ justifyContent: "center", padding: 4 }}>
            <Stack direction="row" alignItems="center" pb={4}>
              <Lightbulb />
              <Typography
                fontWeight={"normal"}
                variant="h2"
                color="#FFFFFF"
                sx={{ ml: 4 }}
              >
                Did you know...
              </Typography>
            </Stack>

            <Typography variant="h3" color="#FFFFFF">
              Poor vascular health can reduce blood flow to the brain, break
              down the blood-brain barrier, and damage blood vessels in the
              brain, leading to increased risk for dementia.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Stack direction={"row"} sx={{ marginLeft: "auto", mt: 8 }}>
        <Button
          variant="outlined"
          sx={{ marginRight: "8px" }}
          startIcon={<ArrowBackIosNewIcon />}
          onClick={handleReviewSection}
        >
          Review Section
        </Button>
        <Button
          variant="contained"
          onClick={handleNextClick}
          endIcon={<ArrowForwardIosIcon />}
        >
          Continue
        </Button>
      </Stack>
    </Stack>
  );
};
