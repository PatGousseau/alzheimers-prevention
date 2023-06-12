import {
  Button,
  Stack,
  Tab,
  Tabs,
  Box,
  Typography,
} from "@mui/material";
import axios from "axios";
import { FC, useState } from "react";
import { RiskLevelCard } from "../components/RiskLevelCard";
import { FactorCard } from "../components/FactorCard";

export const Overview: FC = () => {
  return (
    <FactorCard />
  );
};
