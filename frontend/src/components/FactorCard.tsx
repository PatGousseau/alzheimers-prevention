import { ButtonBase, Stack, Typography } from "@mui/material";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FC, useContext } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";
import { GeneContext } from "../context/geneContext";
import { getColour } from "../utils/utils";


// TODO: pull out color choosing function 
export const FactorCard: FC<{
  header: string;
  progressValue: number;
  progressText: string;
}> = ({ header, progressValue,progressText }) => {
  const { state } = useContext(GeneContext);

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
      <Stack sx={{ height: 120 }}>
        <CircularProgressbar
          value={progressValue}
          text={progressText}
          circleRatio={
            0.75
          }
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
              stroke: getColour(progressValue),
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
            color: getColour(progressValue),
          }}
        >
          {progressValue >= 75 || progressValue === 0
            ? "HIGH"
            : progressValue > 50 && progressValue < 75
            ? "MEDIUM"
            : progressValue <= 50
            ? "LOW"
            : "UNKNOWN"}{" "}
        </Typography>
      </Stack>
    </Stack>
  );
};
