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
        header: "Somewhat > typical",
        percentage: "51 - 70%",
    },
    {
        color: "#FF7272",
        header: "> Typical",
        percentage: "71 - 90%",
    },
    {
        color: "#B7394F",
        header: ">> Typical",
        percentage: ">90%",
    },
  ];

  return (
    <Stack sx={{ boxShadow: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mt:1 }}>
          Risk levels
        </Typography>
        <Divider/>
        <Stack spacing={1}>
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
