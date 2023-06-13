import {
  Button,
  Stack,
  Tab,
  Tabs,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import axios from "axios";
import { FC, useState } from "react";
import { RiskLevelCard } from "../components/RiskLevelCard";
import { FactorCard } from "../components/FactorCard";
import { RiskScoreCard } from "../components/RiskScoreCard";

export const Overview: FC = () => {
  return (
    <Stack sx={{ m: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} variant="h1">
            Your Genetic Risk
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <RiskScoreCard />
        </Grid>
        <Grid item xs={3}>
          <RiskLevelCard />
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} variant="h1">
            Key contributing factors
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <FactorCard header="APOE Interdependent" />
        </Grid>
        <Grid item xs={4}>
          <FactorCard header="APOE Independent" />
        </Grid>
        <Grid item xs={4}>
          <FactorCard header="Dementia associated risk factor" />
        </Grid>
      </Grid>
      <Stack>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 238, mt: 4, marginLeft: "auto" }}
        >
          View Recommendations
        </Button>
      </Stack>
    </Stack>
  );
};
