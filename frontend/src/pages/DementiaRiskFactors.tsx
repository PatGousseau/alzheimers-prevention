import { Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import BackButton from "../components/BackButton";
import LaunchIcon from '@mui/icons-material/Launch';
import DementiaAssociatedToolTip from "../components/DementiaAssociatedToolTip";

export const DementiaRiskFactors: FC = () => {
  const riskFactors = [
    { relevantGenes: 4, label: "Hearing loss" },
    { relevantGenes: 4, label: "Vitamin D" },
    { relevantGenes: 4, label: "Choline" },
    { relevantGenes: 4, label: "Hearing loss" },
    { relevantGenes: 4, label: "Glucose metabolism" },
    { relevantGenes: 4, label: "Inflammation" },
  ];

  return (
    <Stack sx={{ m: 4 }}>
      <BackButton />
      <Typography variant="h1" textAlign="center" sx={{ my: 4 }}>
        Dementia-Associated Risk Factor Genes
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {riskFactors.map((card, index) => (
          <Grid item xs={4} key={card.relevantGenes}>
            <Stack
              direction="row"
              sx={{ boxShadow: 3, borderRadius: "8px", p: 2 }}
            >
              <Stack>
                <Typography variant="h5" sx={{pb:3}}>{card.label}</Typography>
                <Typography variant="body1">Relevant genes: {card.relevantGenes}</Typography>
              </Stack>

              <Stack sx={{marginLeft: "auto", alignItems: "center"}}>
                <DementiaAssociatedToolTip/>
              </Stack>
            </Stack>
            {/* Add other components/content to the stack */}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
