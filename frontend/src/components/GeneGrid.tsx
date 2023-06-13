import { Stack, Typography } from "@mui/material";
import { GeneBar } from "../components/GeneBar";
import EvidenceToolTip from "../components/EvidenceToolTip";

export const GeneGrid = (props: {
    header: string;
  }) => {
  return (
    <Stack >
        <Typography variant="h1" textAlign={"center"} sx={{ my: 4 }}>{props.header}</Typography>
      <Stack direction="row" sx={{ p: 2 }}>
        <Typography variant="h5" sx={{ flex: 1 }}>
          Name
        </Typography>
        <Typography variant="h5" sx={{ flex: 1 }}>
          Variant
        </Typography>
        <Typography variant="h5" sx={{ flex: 1 }}>
          Genotype
        </Typography>
        <Typography variant="h5" sx={{ flex: 1 }}>
          Implication
        </Typography>
        <Typography variant="h5" sx={{ flex: 1 }}>
          Risk impact
        </Typography>
        <Stack direction={'row'} spacing={1} sx={{ flex: 1 }}>
        <Typography variant="h5" >
          Evidence
        </Typography>
        <EvidenceToolTip />
        </Stack>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <GeneBar />
      </Stack>
    </Stack>
  );
};
