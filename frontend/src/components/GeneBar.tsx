import { Rating, Stack, Typography } from "@mui/material";
import { FC, useContext } from "react";
import { GeneContext, RiskFactor } from "../context/geneContext";

interface GeneBarProps {
  fullInfo: boolean;
  boxShadow: number;
  risk_factors: RiskFactor;
}

export const GeneBar: FC<GeneBarProps> = ({ fullInfo,boxShadow, risk_factors }) => {
  return (
    <Stack
      direction="row"
      sx={{ boxShadow: boxShadow, borderRadius: "8px", p: 2, mb: 2 }}
    >
      {fullInfo && (
        <Typography variant="body1" sx={{ flex: 1 }}>
          {risk_factors.gene_name}
        </Typography>
      )}
      <Typography variant="body1" sx={{ flex: 1 }}>
        {risk_factors.genotype}
      </Typography>
      <Typography variant="body1" sx={{ flex: 1 }}>
        {risk_factors.variant}
      </Typography>
      <Typography variant="body1" sx={{ flex: 1 }}>
        ...
      </Typography>
      {fullInfo && (
        <Typography variant="body1" sx={{ flex: 1 }}>
          {risk_factors.significance}
        </Typography>
      )}
      <Rating sx={{ flex: 1 }} name="read-only" value={4} readOnly />
    </Stack>
  );
};
