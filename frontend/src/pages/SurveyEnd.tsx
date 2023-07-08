import { Alert, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import axios from "axios";
import { FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GeneContext } from "../context/geneContext";

export const SurveyEnd: FC = () => {


  return (
    <Stack sx={{ m: 4 }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          Thank you!
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, width: 426, textAlign: "center" }}
        >
          You have completed the assessment. Sign up below to see your results.
        </Typography>
        <Button
              variant="contained"
              component="label"
              sx={{ width: "fit-content" }}
            >
              Sign up
              <input hidden multiple />
            </Button>
      </Stack>
    </Stack>
  );
};
