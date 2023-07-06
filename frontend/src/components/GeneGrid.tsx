import { Stack, Typography } from "@mui/material";
import { GeneBar } from "../components/GeneBar";
import {EvidenceToolTip} from "../components/EvidenceToolTip";
import { RiskFactor } from "../context/geneContext";
import React from "react";

export const GeneGrid = (props: {
  header?: string;
  boxShadow: number;
  fullInfo: boolean; // var to determine if we show name and risk impact
  RiskFactorList: RiskFactor[];
  prs_percentile?:number;
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
        {/* {props.fullInfo && (
          <Typography variant="h5" sx={{ flex: 1 }}>
            Weight
          </Typography>
        )} */}

        <Stack direction="row" spacing={1} sx={{ flex: 1 }}>
          <Typography variant="h5">Evidence</Typography>
          <EvidenceToolTip
            text={
              <React.Fragment>
                <Typography variant="body1">
                  1 star: Genome Wide Significance (p) {"<"} 1
                </Typography>
                <Typography variant="body1">
                  2 stars: p {">"} 2.5 & p {"<"} 5
                </Typography>
                <Typography variant="body1">
                  3 stars: p {">"} 2.5 & p {"<"} 5
                </Typography>
                <Typography variant="body1">
                  4 stars: p {">"} 5 & p {"<"} 10
                </Typography>
                <Typography variant="body1">5 stars: p {">"} 10</Typography>
              </React.Fragment>
            }
          />
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
