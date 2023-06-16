import { Stack } from "@mui/material";
import { FC, useContext } from "react";
import BackButton from "../components/BackButton";
import { GeneGrid } from "../components/GeneGrid";
import { GeneContext } from "../context/geneContext";

export const APOEInterdependent: FC = () => {
  const { state } = useContext(GeneContext);
  return (
    <Stack sx={{ m: 4 }}>
        <BackButton />
        <GeneGrid header={"APOE Interdependent Genes"} boxShadow={3} fullInfo={true} RiskFactorList={state.apoe_risk_factors} />
    </Stack>
  );
};
