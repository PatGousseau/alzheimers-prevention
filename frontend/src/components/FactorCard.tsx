import { ButtonBase, Stack, Typography } from "@mui/material";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FC } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";

export const FactorCard: FC<{
  header: string;
  progressValue: number;
}> = ({ header, progressValue }) => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        boxShadow: 3,
        p: 2,
        borderRadius: "16px",
        "&:hover": {
          backgroundColor: "#ececec",
        },
      }}
    >
      {/* <Stack sx={{ height: 120 }}>
        <HappyFace/>
      </Stack> */}
      <Stack sx={{ height: 120 }}>
        <CircularProgressbar
          value={progressValue}
          text={`${progressValue}%`}
          circleRatio={
            0.75
          } /* Make the circle only 0.75 of the full diameter */
          styles={{
            trail: {
              strokeLinecap: "butt",
              transform: "rotate(-135deg)",
              transformOrigin: "center center",
            },
            path: {
              strokeLinecap: "butt",
              transform: "rotate(-135deg)",
              transformOrigin: "center center",
              stroke:
                progressValue > 75
                  ? "#FF7272"
                  : progressValue > 50 && progressValue < 75
                  ? "#EBB502"
                  : "#4F7F72",
            },
            text: {
              fill: "black", // Set the text color to black
            },
          }}
        />
      </Stack>

      <Stack sx={{ width: "100%" }} direction="column" justifyContent="center">
        <Typography variant="body1">{header}</Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color:
              progressValue > 75
                ? "#FF7272"
                : progressValue > 50 && progressValue <= 75
                ? "#EBB502"
                : progressValue <= 50
                ? "#4F7F72"
                : "#000000", // default color if none of the conditions match
          }}
        >
          {progressValue > 75
            ? "HIGH"
            : progressValue > 50 && progressValue <= 75
            ? "MEDIUM"
            : progressValue <= 50
            ? "LOW"
            : "UNKNOWN"}{" "}
          {/* fallback text if none of the conditions match */}
        </Typography>
      </Stack>
    </Stack>
  );
};
