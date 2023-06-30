import { Alert, Button, CircularProgress, Stack, Typography } from "@mui/material";
import axios from "axios";
import { FC, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GeneContext } from "../context/geneContext";

export const Upload: FC = () => {
  const { updateState } = useContext(GeneContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    if (file.type !== "text/plain" && file.type !== "text/csv") {
      setError("Invalid file format. Only .txt and .csv files are allowed.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setError(null);
      setIsLoading(true);
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
        prs_percentile: Math.round(response.data.prs_percentile),
        overall_risk_percentile: response.data.overall_risk_percentile,
        risk_percentile_with_intervention: response.data.risk_percentile_with_intervention,
      });
    } catch (error) {
      console.error(error);
      setError("An error occurred during file upload.");
    } finally {
      setIsLoading(false);
    }
    navigate("/overview");
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
        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          <Button
            variant="contained"
            component="label"
            sx={{ width: "fit-content" }}
            disabled={isLoading}
          >
            Browse
            <input hidden multiple type="file" onChange={handleInputChange} />
          </Button>
        )}
        {error && (
          <Alert severity="error" sx={{mt:4}}>{error}</Alert>
        )}
      </Stack>
    </Stack>
  );
};
