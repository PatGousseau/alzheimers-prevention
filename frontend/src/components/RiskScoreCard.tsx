import { Stack, Typography } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FC, useContext } from "react";
import { GeneContext } from "../context/geneContext";

export const RiskScoreCard: FC = () => {
  const { state, updateState } = useContext(GeneContext);
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ boxShadow: 3, p: 2, borderRadius: "16px" }}
    >
      <Stack sx={{ width: 356, pr:2 }}>
        <div style={{ height: "100%" }}>
          <CircularProgressbar
            value={state.overall_risk_percentile}
            text={`${state.overall_risk_percentile}%`}
            styles={buildStyles({
              textColor: "#000000",
              pathColor: `#EBB502`,
            })}
          />
        </div>
      </Stack>

      <Stack sx={{}} direction="column" justifyContent="center">
        <Typography variant="h3" sx={{ pb: 3, fontWeight: "bold" }}>
          Somewhat greater than typical
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600 }}>
          Your risk is somewhat greater than typical. However, your genes are
          not your destiny, and choices you make can have a significant
          difference in your risk, particularly if you target your genetic
          susceptibilities.
        </Typography>
      </Stack>
    </Stack>
  );
};
