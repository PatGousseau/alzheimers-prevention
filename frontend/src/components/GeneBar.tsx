import { Rating, Stack, Typography } from "@mui/material";
import { FC } from "react";

interface GeneBarProps {
  isToolTip: boolean;
}

export const GeneBar: FC<GeneBarProps> = ({ isToolTip }) => {
  const boxShadow = isToolTip ? 0 : 3;

  return (
    <Stack
      direction="row"
      sx={{ width: "100%", boxShadow, borderRadius: "8px", p: 2 }}
    >
      {!isToolTip && (
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
      {!isToolTip && (
        <Typography variant="body1" sx={{ flex: 1 }}>
          10%
        </Typography>
      )}
      <Rating sx={{ flex: 1 }} name="read-only" value={4} readOnly />
    </Stack>
  );
};
