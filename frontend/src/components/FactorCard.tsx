import { Stack, Typography } from "@mui/material";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FC } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";

export const FactorCard: FC = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ boxShadow: 3, p: 2 }}>
      <Stack sx={{ height: 120 }}>
        <HappyFace/>
      </Stack>

      <Stack sx={{ width: "100%" }} direction="column" justifyContent="center">
        <Typography variant="body1">APOE Interdependent</Typography>
        <Typography variant="body1" sx={{ color: "#EBB502" }}>
          MIDDLE
        </Typography>
      </Stack>
    </Stack>
  );
};
