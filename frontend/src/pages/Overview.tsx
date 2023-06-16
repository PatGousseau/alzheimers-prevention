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
          <Box
            component={Link}
            to="/apoeInterdependent"
            sx={{
              width: "100%",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <FactorCard header="APOE Interdependent" />
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
            <FactorCard header="APOE Independent" />
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
            <FactorCard header="Dementia associated risk factor" />
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
