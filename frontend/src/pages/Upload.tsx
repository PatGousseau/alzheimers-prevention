import { Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GeneContext } from "../context/geneContext";

export const Upload: FC = () => {
  const { state, updateState } = useContext(GeneContext);
  const navigate = useNavigate();

  const handleFileUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    navigate("/overview");
    try {
      const response = await axios.post(
        `http://localhost:80/api/analyze_genetics`,
        formData
      );
      updateState({
        apoe_genotype: response.data.apoe_genotype,
        apoe_risk_factors: response.data.apoe_risk_factors,
        apoe_risk_ratio: response.data.apoe_risk_ratio,
        risk_factors: response.data.risk_factors,
        risk_ratio: response.data.risk_ratio,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <Stack sx={{ m: 4 }}>
      <Typography variant="h1">Genetic Analyzer</Typography>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Typography variant="h1" sx={{ mb: 2 }}>
          Upload your data
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, width: 426, textAlign: "center" }}
        >
          Drag and drop your .txt or .csv data file from 23andMe or other
          providers like Ancestry DNA here.
        </Typography>
        <Button
          variant="contained"
          component="label"
          sx={{ width: "fit-content" }}
        >
          Browse
          <input hidden multiple type="file" onChange={handleInputChange} />
        </Button>
      </Stack>
    </Stack>
  );
};
