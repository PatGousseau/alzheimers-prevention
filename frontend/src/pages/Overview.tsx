import {
  Button,
  Stack,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { FC, useContext } from "react";
import { FactorCard } from "../components/FactorCard";
import {
  Link
} from 'react-router-dom';
import { GeneContext } from "../context/geneContext";
import { getApoeStyles } from "../utils/utils";
import { RiskScoreCard } from "../components/RiskScoreCard";


export const Overview: FC = () => {
  const { state } = useContext(GeneContext);
  const apoeFactorValue = getApoeStyles(state.apoe_genotype);
  return (
    <Stack sx={{ m: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} variant="h1">
            Your Genetic Risk Profile
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <RiskScoreCard title={"Risk of Alzheimer’s Disease"} subtitle={`Based on your genetics (APOE status and polygenic risk score), you fall in the following percentile of risk for your sex at birth (${state.gender})`} />
        </Grid>
        <Grid item xs={4}>
          {/* <RiskScoreCard title={"Risk of Subjective Cognitive Decline"} subtitle={"Lifetime risk of experiencing Subjective Cognitive Decline based on gender only"} /> */}
        </Grid>
        <Grid item xs={3}>
          {/* <RiskLevelCard /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} variant="h1">
            Key reports
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            component={Link}
            to="/apoe-status"
            sx={{
              width: "100%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <FactorCard header="APOE status" progressValue={apoeFactorValue.value} progressText={state.apoe_genotype} />
          </Box>
        </Grid>

        <Grid item xs={4}>
          <Box
            component={Link}
            to="/polygenic-risk-score"
            sx={{
              width: "100%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <FactorCard header="Polygenic risk score" progressValue={state.prs_percentile} progressText={`${state.prs_percentile}%`} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            component={Link}
            to="/other-genes"
            sx={{
              width: "100%",
              textDecoration: "none",
              color: "inherit",
              
            }}
          >
            <FactorCard header="Other relevant genes" progressValue={0} progressText={""} />
          </Box>
        </Grid>
      </Grid>
      {/* <Stack>
        <Button
          component={Link}
          to="/recommendation"
          variant="contained"
          color="primary"
          sx={{ width: 238, mt: 4, marginLeft: "auto" }}
        >
          View Recommendations
        </Button>
      </Stack> */}
    </Stack>
  );
};
