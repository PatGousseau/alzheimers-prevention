import {  Stack } from "@mui/material";
import { FC, useContext } from "react";
import BackButton from "../components/BackButton";
import { GeneGrid } from "../components/GeneGrid";
import { GeneContext } from "../context/geneContext";

export const PolygenicRiskScore: FC = () => {
  const { state } = useContext(GeneContext);
  return (
    <Stack sx={{ m: 4 }}>
        <BackButton />
        <GeneGrid header={"Polygenic Risk Score Genes"} boxShadow={3} fullInfo={true} RiskFactorList={state.risk_factors} prs_percentile={state.prs_percentile} />
    </Stack>
  );
};
