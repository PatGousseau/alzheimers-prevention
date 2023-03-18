import { Button, Paper, Grid, styled, Typography } from "@mui/material";
import axios from "axios";
import { FC, useState } from "react";

interface RiskFactor {
  gene_name: string;
  genotype: string;
  risk_ratio: number;
  significance: string;
  variant: string;
}

export interface ResultsProps {
  data: {
    apoe4genotype: string;
    risk_factors: RiskFactor[];
    risk_increase: number;
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ResultsTable: FC<ResultsProps> = ({ data }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {data.risk_factors.map((riskFactor) => (
        <Grid item key={riskFactor.variant} xs={12}>
          <Item>
            <Grid
              container
              spacing={0}
              justifyContent="center"
              alignItems="center"
              padding={0}
            >
              <Grid item xs={2}>
                <Typography>{riskFactor.variant}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{riskFactor.gene_name}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{riskFactor.genotype}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{riskFactor.significance}</Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography>{riskFactor.risk_ratio}</Typography>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      ))}
      <Grid item key={0} xs={12} paddingBottom={2}>
        <Item sx={{ backgroundColor: '#2C2C2C' }}>
          <Typography style={{color:"white"}}>Total risk from APOE-related genotypes</Typography>
        </Item>
      </Grid>
    </Grid>
  );
};
