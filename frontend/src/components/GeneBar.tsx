import { Rating, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface GeneBarProps {
  fullInfo: boolean;
  boxShadow: number;
}

export const GeneBar: FC<GeneBarProps> = ({ fullInfo,boxShadow }) => {
  // const boxShadow = isToolTip ? 0 : 3;

  return (
    <Stack
      direction="row"
      sx={{ width: "100%", boxShadow: boxShadow, borderRadius: "8px", p: 2 }}
    >
      {fullInfo && (
        <Typography variant="body1" sx={{ flex: 1 }}>
          APOE4
        </Typography>
      )}
      <Typography variant="body1" sx={{ flex: 1 }}>
        rs429358
      </Typography>
      <Typography variant="body1" sx={{ flex: 1 }}>
        C,T
      </Typography>
      <Typography variant="body1" sx={{ flex: 1 }}>
        ...
      </Typography>
      {fullInfo && (
        <Typography variant="body1" sx={{ flex: 1 }}>
          10%
        </Typography>
      )}
      <Rating sx={{ flex: 1 }} name="read-only" value={4} readOnly />
    </Stack>
  );
};
