import {
  Button,
  Stack,
  Box,
  Typography,
  Grid,
} from "@mui/material";
import { FC, useContext } from "react";
import { RiskLevelCard } from "../components/RiskLevelCard";
import { FactorCard } from "../components/FactorCard";
import { RiskScoreCard } from "../components/RiskScoreCard";
import {
  Link
} from 'react-router-dom';
import { GeneContext } from "../context/geneContext";
import { getApoeStyles } from "../utils/utils";
import { RiskScoreCard2 } from "../components/RiskScoreCard2";


export const Overview: FC = () => {
  const { state } = useContext(GeneContext);
  const apoeFactorValue = getApoeStyles(state.apoe_genotype);
  return (
    <Stack sx={{ m: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} variant="h1">
            Your Risk
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <RiskScoreCard2 title={"Risk of Alzheimer’s Disease"} subtitle={"Lifetime risk of Alzheimer’s Disease based on your genetics and gender alone"} />
        </Grid>
        <Grid item xs={4}>
          <RiskScoreCard2 title={"Risk of Subjective Cognitive Decline"} subtitle={"Lifetime risk of experiencing Subjective Cognitive Decline based on gender only"} />
        </Grid>
        <Grid item xs={3}>
          {/* <RiskLevelCard /> */}
        </Grid>
        <Grid item xs={12}>
          <Typography fontWeight={"bold"} variant="h1">
            Key contributing genes
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            component={Link}
            to="/apoeInterdependent"
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
            to="/apoeIndependent"
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
            to="/dementiaRiskFactors"
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
      <Stack>
        <Button
          component={Link}
          to="/recommendation"
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
