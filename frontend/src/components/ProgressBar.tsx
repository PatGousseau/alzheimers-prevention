import { ButtonBase, Input, LinearProgress, Stack, Typography, linearProgressClasses, styled } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";


export const ProgressBar = styled(LinearProgress)(({ theme }) => ({
    height: 24,
    borderRadius: 32,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#C4C8CA',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "primary",
    },
  }));

