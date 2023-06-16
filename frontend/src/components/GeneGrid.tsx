import { Stack, Typography } from "@mui/material";
import { GeneBar } from "../components/GeneBar";
import EvidenceToolTip from "../components/EvidenceToolTip";
import { useContext } from "react";
import { GeneContext, RiskFactor } from "../context/geneContext";

export const GeneGrid = (props: {
  header?: string;
  boxShadow: number;
  fullInfo: boolean; // var to determine if we show name and risk impact
  RiskFactorList: RiskFactor[];
}) => {
  return (
    <Stack>
      {props.header && (
        <>
          <Typography variant="h1" textAlign="center" sx={{ my: 4 }}>
            {props.header}
          </Typography>
        </>
      )}

      <Stack direction="row" sx={{ p: 2 }}>
        {props.fullInfo && (
          <Typography variant="h5" sx={{ flex: 1 }}>
            Name
          </Typography>
        )}
          <Typography variant="h5" sx={{ flex: 1 }}>
            Variant
          </Typography>
        <Typography variant="h5" sx={{ flex: 1 }}>
          Genotype
        </Typography>
        <Typography variant="h5" sx={{ flex: 1 }}>
          Implication
        </Typography>
        {props.fullInfo && (
          <Typography variant="h5" sx={{ flex: 1 }}>
            Risk Impact
          </Typography>
        )}

        <Stack direction="row" spacing={1} sx={{ flex: 1 }}>
          <Typography variant="h5">Evidence</Typography>
          <EvidenceToolTip />
        </Stack>
      </Stack>
      <Stack sx={{ justifyContent: "center" }}>
        {props.RiskFactorList.map((riskFactor) => (
          <GeneBar
            fullInfo={props.fullInfo}
            boxShadow={props.boxShadow}
            risk_factors={riskFactor}
          />
        ))}
      </Stack>
    </Stack>
  );
};
