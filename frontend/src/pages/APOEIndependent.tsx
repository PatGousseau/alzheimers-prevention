import {  Stack } from "@mui/material";
import { FC } from "react";
import BackButton from "../components/BackButton";
import { GeneGrid } from "../components/GeneGrid";

export const APOEIndependent: FC = () => {
  return (
    <Stack sx={{ m: 4 }}>
        <BackButton />
        <GeneGrid header={"APOE Independent Genes"} boxShadow={3} fullInfo={true} />
    </Stack>
  );
};
