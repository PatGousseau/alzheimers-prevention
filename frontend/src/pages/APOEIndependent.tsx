import {  Stack } from "@mui/material";
import { FC, useContext } from "react";
import BackButton from "../components/BackButton";
import { GeneGrid } from "../components/GeneGrid";
import { GeneContext } from "../context/geneContext";

export const APOEIndependent: FC = () => {
  const { state } = useContext(GeneContext);
  return (
    <Stack sx={{ m: 4 }}>
        <BackButton />
        <GeneGrid header={"APOE Independent Genes"} boxShadow={3} fullInfo={true} RiskFactorList={state.risk_factors} prs_percentile={state.prs_percentile} />
    </Stack>
  );
};
