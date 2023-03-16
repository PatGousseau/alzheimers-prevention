import { Button, Paper, Grid, styled } from "@mui/material";
import axios from "axios";
import { FC, useState } from "react";

export interface ResultsProps {
  data: {
    apoe4genotype: string;
    risk_factors: [string, number, string][];
    risk_increase: number;
  };
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ResultsTable: FC<ResultsProps> = ({ data }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
    {data.risk_factors.map(([location, affectSize, genotype]) => (
      <Grid item key={location} xs={12}>
        <Item>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4}>
              {location}
            </Grid>
            <Grid item xs={4}>
              {affectSize}
            </Grid>
            <Grid item xs={4}>
              {genotype}
            </Grid>
          </Grid>
        </Item>
      </Grid>
    ))}
  </Grid>
  );
};
