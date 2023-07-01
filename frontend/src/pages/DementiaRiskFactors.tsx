import { Grid, Stack, Typography } from "@mui/material";
import { FC, useContext } from "react";
import BackButton from "../components/BackButton";
import { DementiaAssociatedToolTip } from "../components/DementiaAssociatedToolTip";
import { GeneContext } from "../context/geneContext";


export const DementiaRiskFactors: FC = () => {
  const { state } = useContext(GeneContext);
  const numRelevantGenes = state.other_relevant_genes.length;
  const geneCategories = [
    { relevantGenes: numRelevantGenes, label: "Parkinson's disease" },
  ];

  

  return (
    <Stack sx={{ m: 4 }}>
      <BackButton />
      <Typography variant="h1" textAlign="center" sx={{ my: 4 }}>
        Other Relevant Genes
      </Typography>
      <Grid container spacing={2}>
        {geneCategories.map((card, index) => (
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
                <DementiaAssociatedToolTip RiskFactorList={state.other_relevant_genes}/>
              </Stack>
            </Stack>
            {/* Add other components/content to the stack */}
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
