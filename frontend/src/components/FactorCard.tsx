import { ButtonBase, Stack, Typography } from "@mui/material";
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FC } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";

export const FactorCard: FC<{
  header: string;
}> = ({ header }) => {
  return (
    <Stack direction="row" spacing={2} sx={{ boxShadow: 3, p: 2, borderRadius:'16px','&:hover': {
      backgroundColor: '#ececec',
    },}}>
      <Stack sx={{ height: 120 }}>
        <HappyFace/>
      </Stack>

      <Stack sx={{ width: "100%" }} direction="column" justifyContent="center">
        <Typography variant="body1">{header}</Typography>
        <Typography variant="subtitle1" sx={{ color: "#4F7F72" }}>
          LOW
        </Typography>
      </Stack>
    </Stack>
  );
};
