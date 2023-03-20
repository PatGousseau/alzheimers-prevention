import { Button, Paper, Grid, styled, Typography, Box } from "@mui/material";
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
    apoe_genotype: string;
    apoe_risk_factors: RiskFactor[];
    apoe_risk_ratio: number;
    risk_factors: RiskFactor[];
    risk_ratio: number;
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function getColor(ratio: number): string {
  if(ratio == 1) {
    return '#a9a9a9'
  } else if(ratio > 1) {
    return "#FF0000";
  } else {
    return "#32CD32";
  }
}

let color = '#a9a9a9';


export const ResultsTable = (props: {
  risk_factors: RiskFactor[];
  risk_ratio: number;
  risk_type: string;
}) => {
  if(props.risk_ratio > 1) {
    color = "#FF0000";
  } else if(props.risk_ratio < 1) {
    color = "#32CD32";
  }
  return (

<Grid container spacing={1} justifyContent="center">
  <Grid item key={0} xs={12}>
    <Grid container spacing={0} justifyContent="center">
      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="subtitle1">Variant</Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="subtitle1">Gene Name</Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="subtitle1">Genotype</Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="subtitle1">Significance</Typography>
      </Grid>
      <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="subtitle1">Risk Ratio</Typography>
      </Grid>
    </Grid>
  </Grid>
  {props.risk_factors.map((riskFactor) => (
    <Grid item key={riskFactor.variant} xs={12}>
      <Item>
        <Grid container spacing={0} justifyContent="center" alignItems="center" padding={0}>
          <Grid item xs={2}>
            <Typography variant="body2">{riskFactor.variant}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">{riskFactor.gene_name}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">{riskFactor.genotype}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">{riskFactor.significance}</Typography>
          </Grid>
          <Grid item xs={2}>
            {isNaN(riskFactor.risk_ratio) ? (
              <Typography variant="body2">
                {riskFactor.risk_ratio}
              </Typography>
            ) : 
            <Box
              sx={{
                width: "30%",
                margin: "0 auto",
                padding: "0px",
                backgroundColor: getColor(riskFactor.risk_ratio),
                borderRadius: "5px",
              }}
            >
              <Typography variant="body2">
                {(Math.round(riskFactor.risk_ratio * 100) / 100).toFixed(2)}
              </Typography>
            </Box>
          }
          </Grid>
        </Grid>
      </Item>
    </Grid>
  ))}
  <Grid item key={0} xs={12} paddingBottom={2}>
    <Item
      sx={{
        backgroundColor: "#2C2C2C",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="center"
        padding={0}
      >
        <Grid item xs={8}>
          <Typography variant="body2" style={{ color: "white" }}>{props.risk_type}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Box
              sx={{
                width: "30%",
                margin: "0 auto",
                padding: "0px",
                backgroundColor: props.risk_ratio > 1 ? "#FF0000" : "#32CD32",
                borderRadius: "5px",
              }}
          >
            <Typography variant="body2">
              {(Math.round(props.risk_ratio * 100) / 100).toFixed(2)}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Item>
  </Grid>
</Grid>

  );
};
