import { Stack, Typography } from "@mui/material";
import LensIcon from "@mui/icons-material/Lens";
import { FC } from "react";

export const RiskLevel: FC<{
    color: string;
    header: string;
    percentage: string;
  }> = ({ color, header, percentage }) => {
  return (
    <Stack direction="row" spacing={2} sx={{pb:1.5}}>
      <Stack sx={{ width: 24 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <LensIcon sx={{ color: color }} />
        </div>
      </Stack>

      <Stack sx={{ width: "100%" }}>
        <Typography variant="h5">
          {header}
        </Typography>
        <Typography variant="body2">{percentage}</Typography>
      </Stack>
    </Stack>
  );
};
