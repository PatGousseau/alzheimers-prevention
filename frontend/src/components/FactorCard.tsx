import { ButtonBase, Stack, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";
import { GeneContext } from "../context/geneContext";
import { getColour } from "../utils/utils";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface FactorCardProps {
  header: string;
  progressValue: number;
  progressText: string;
}

export const FactorCard: FC<FactorCardProps> = ({ header, progressValue, progressText }) => {
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
      {progressValue !== 0 && (
        <Stack sx={{ height: 120 }}>
          <CircularProgressbar
            value={progressValue}
            text={progressText}
            circleRatio={0.75}
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
      )}

      <Stack sx={{ width: "100%" }} direction="column" justifyContent="center">
        <Typography variant="body1">{header}</Typography>
        {progressValue !== 0 && (
          <Typography variant="subtitle1" sx={{ color: getColour(progressValue) }}>
            {progressValue >= 75
              ? "HIGH"
              : progressValue > 50 && progressValue < 75
              ? "MEDIUM"
              : "LOW"}
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};
