import { Rating, Stack, Typography } from "@mui/material";
import { FC } from "react";

export const GeneBar: FC = () => {
  return (
    <Stack
      direction="row"
      sx={{ width: "100%", boxShadow: 3, borderRadius: "8px", p: 2 }}
    >
      <Typography variant="body1" sx={{ flex: 1 }}>
        APOE4
      </Typography>
      <Typography variant="body1" sx={{ flex: 1 }}>
        rs429358
      </Typography>
      <Typography variant="body1" sx={{ flex: 1 }}>
        C,T
      </Typography>
      <Typography variant="body1" sx={{ flex: 1 }}>
        ...
      </Typography>
      <Typography variant="body1" sx={{ flex: 1 }}>
        10%
      </Typography>
      <Rating sx={{ flex: 1 }} name="read-only" value={4} readOnly />
    </Stack>
  );
};
