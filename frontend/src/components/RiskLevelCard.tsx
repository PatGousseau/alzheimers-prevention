import { Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { RiskLevel } from "./RiskLevel";

export const RiskLevelCard: FC = () => {
  const riskLevels = [
    {
        color: "#4F7F72",
        header: "Below typical",
        percentage: "0 - 25%",
    },
    {
        color: "#7FB29F",
        header: "Typical",
        percentage: "26 - 45%",
    },
    {
        color: "#EBB502",
        header: "Somewhat greater than typical",
        percentage: "51 - 70%",
    },
    {
        color: "#FF7272",
        header: "Greater than typical",
        percentage: "71 - 90%",
    },
    {
        color: "#B7394F",
        header: "Much greater than Typical",
        percentage: ">90%",
    },
  ];

  return (
    <Stack sx={{ boxShadow: 3, borderRadius:'16px', pl:2,  height:"100%" }}>
        <Typography variant="h4" sx={{ mt:2 }}>
          Risk levels
        </Typography>
        <Divider />
        <Stack spacing={1} sx={{p:2}}>
      {riskLevels.map((riskLevel, index) => (
        <RiskLevel
          key={index}
          color={riskLevel.color}
          header={riskLevel.header}
          percentage={riskLevel.percentage}
        />
      ))}
      </Stack>
    </Stack>

  );
};
