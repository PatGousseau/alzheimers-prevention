import { Alert, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import axios from "axios";
import { FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GeneContext } from "../context/geneContext";
import CircleFormation from "../components/CircleFormation";



export const SurveyResults: FC = () => {


  return (
    <Stack sx={{ m: 4 }}>
        <CircleFormation/>
    </Stack>
  );
};
