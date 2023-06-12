import { Stack, Typography } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FC } from "react";

export const RiskScoreCard: FC = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ boxShadow: 3, p: 2 }}>
      <Stack sx={{ height: 250 }}>
        <CircularProgressbar
          value={60}
          text={`${60}%`}
          styles={buildStyles({
            textColor: "#000000",
          })}
        />
      </Stack>

      <Stack sx={{ width: "100%" }} direction="column" justifyContent="center">
        <Typography variant="h5" sx={{ pb: 3, fontWeight: "bold" }}>
          Somewhat greater than typical
        </Typography>
        <Typography variant="body1">
          Your risk is somewhat greater than typical. However, your genes are
          not your destiny, and choices you make can have a significant
          difference in your risk, particularly if you target your genetic
          susceptibilities.
        </Typography>
      </Stack>
    </Stack>
  );
};
