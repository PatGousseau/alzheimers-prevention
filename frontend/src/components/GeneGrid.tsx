import { Stack, Typography } from "@mui/material";
import { GeneBar } from "../components/GeneBar";
import EvidenceToolTip from "../components/EvidenceToolTip";

export const GeneGrid = (props: {
  header?: string;
  isToolTip: boolean;
}) => {
  return (
    <Stack>
      {!props.isToolTip && (
        <>
          <Typography variant="h1" textAlign="center" sx={{ my: 4 }}>
            {props.header}
          </Typography>
        </>
      )}

      <Stack direction="row" sx={{ p: 2 }}>
        {!props.isToolTip && (
          <>
            <Typography variant="h5" sx={{ flex: 1 }}>
              Name
            </Typography>
            <Typography variant="h5" sx={{ flex: 1 }}>
              Risk impact
            </Typography>
          </>
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
        <Stack direction="row" spacing={1} sx={{ flex: 1 }}>
          <Typography variant="h5">Evidence</Typography>
          <EvidenceToolTip />
        </Stack>
      </Stack>
      <Stack direction="row" sx={{ justifyContent: "center" }}>
        <GeneBar isToolTip={props.isToolTip} />
      </Stack>
    </Stack>
  );
};
