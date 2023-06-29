import { Grid, Stack, Typography } from "@mui/material";
import { FC } from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BackButton from "../components/BackButton";

export const Recommendation: FC = () => {
  return (
    <Stack sx={{ m: 4 }}>
      <Stack sx={{ mb: 4 }}>
        <BackButton />
      </Stack>
      <Grid container spacing={20}>
        <Grid item xs={5} sx={{ paddingRight: 4 }}>
          <Stack>
            <Typography variant="h3" sx={{ pb: 4 }}>
              Potential implications
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            boxShadow={3}
            sx={{ p: 2, pr: 3, borderRadius: "8px" }}
          >
            <Typography>Limit your sodium intake</Typography>
            <ArrowForwardIosIcon sx={{ marginLeft: "auto" }} />
          </Stack>
        </Grid>
        <Grid item xs={7}>
          <Stack>
            <Stack>
              <Typography variant="h3" sx={{ pb: 4 }}>
                Example recommendations to consider
              </Typography>
              <Typography variant="body1">
                Given your genetic predisposition, it may be especially
                important to monitor your sodium intake. Excessive sodium can
                elevate blood pressure, particularly for your genotype,
                potentially increasing dementia risk. Consider following a
                low-sodium diet to safeguard your cognitive health, and consult
                a healthcare professional for personalized advice. Your genes
                aren't your destiny; small changes can make a big difference.
              </Typography>
              <Typography variant="h3" sx={{ pt: 4, pb: 2 }}>
                Relevant genes
              </Typography>
              {/* <GeneGrid boxShadow={3} fullInfo={false} /> */}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
