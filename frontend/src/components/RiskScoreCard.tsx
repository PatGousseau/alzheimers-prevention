import { Grid, Stack, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { GeneContext } from "../context/geneContext";
import { Circle } from "./Circle";
import {ReactComponent as Arrow} from "../assets/arrow.svg";

interface RiskScoreCardProps {
  title: string;
  subtitle: string;
}

export const RiskScoreCard: FC<RiskScoreCardProps> = ({ title, subtitle }) => {
  const { state } = useContext(GeneContext);
  const progressValue = state.overall_risk_percentile;

  return (
    <Stack spacing={2} sx={{ boxShadow: 3, p: 2, borderRadius: "16px", width: "440px" }}>
      <Stack sx={{ textAlign: "center" }} direction="column" justifyContent="center">
        <Typography variant="h4" sx={{ pb: 3, fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600, textAlign: "left", color: "#6D6D8D" }}>
          {subtitle}
        </Typography>
      </Stack>

      <Grid container spacing={0} sx={{ pb: 4 }}>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
            <Circle percentage={50} size={73} colour={"#A97A01"} />
            <Typography variant="body1" sx={{ pt: 2 }}>
              Your risk
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center", pb: 4 }}>
            <Arrow/>
          </Stack>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack sx={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
            <Circle percentage={12} size={73} colour={"#396D64"} />
            <Typography variant="body1" sx={{ pt: 2 }}>
              With intervention
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
