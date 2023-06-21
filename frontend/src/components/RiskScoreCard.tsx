import { Stack, Typography } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FC, useContext } from "react";
import { GeneContext } from "../context/geneContext";
import { getColour, getHeaderAndText } from "../utils/utils";

export const RiskScoreCard: FC = () => {
  const { state } = useContext(GeneContext);
  const progressValue = state.overall_risk_percentile;
  const headerAndText = getHeaderAndText(progressValue);
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{ boxShadow: 3, p: 2, borderRadius: "16px" }}
    >
      <Stack sx={{ width: 356, pr: 2 }}>
        <div style={{ height: "100%" }}>
          <CircularProgressbar
            value={progressValue}
            text={`${progressValue}%`}
            styles={buildStyles({
              strokeLinecap: "butt",
              textColor: "#000000",
              pathColor: getColour(progressValue),
            })}
          />
        </div>
      </Stack>

      <Stack sx={{}} direction="column" justifyContent="center">
        <Typography variant="h3" sx={{ pb: 3, fontWeight: "bold" }}>
          {headerAndText.header}
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 600 }}>
          {headerAndText.text}
        </Typography>
      </Stack>
    </Stack>
  );
};
