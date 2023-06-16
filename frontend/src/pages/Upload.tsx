import { Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { FC, useContext, useState } from "react";
import { ResultsProps, ResultsTable } from "../components/ResultsTable";
import { useNavigate } from 'react-router-dom';
import { GeneContext } from "../context/geneContext";

export const Upload: FC = () => {
    const { state, updateState } = useContext(GeneContext)
    const navigate = useNavigate()
  const [geneData, setGeneData] = useState<ResultsProps>({
    data: {
      apoe_genotype: "",
      apoe_risk_factors: [
        {
          gene_name: "",
          genotype: "",
          risk_ratio: 0,
          significance: "",
          variant: "",
        },
      ],
      apoe_risk_ratio: 0,
      risk_factors: [
        {
          gene_name: "",
          genotype: "",
          risk_ratio: 0,
          significance: "",
          variant: "",
        },
      ],
      risk_ratio: 0,
    },
  });

  const handleFileUpload = async (event: any) => {
    // await axios
    //   .post(`http://localhost:80/api/ping_api_as_post`) // http://127.0.0.1:80/api/analyze_genetics
    //   .then(async (response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    const file = event.target.files[0];

    // send file to backend
    const formData = new FormData();

    formData.append("file", file);
    navigate('/Overview')
    await axios
      .post(`http://localhost:80/api/analyze_genetics`, formData) // http://127.0.0.1:80/api/analyze_genetics
      .then(async (response) => {
        await setGeneData(response.data);
        console.log(response);
        setGeneData((prevState) => ({
          data: {
            apoe_genotype: response.data.apoe_genotype,
            apoe_risk_factors: response.data.apoe_risk_factors,
            apoe_risk_ratio: response.data.apoe_risk_ratio,
            risk_factors: response.data.risk_factors,
            risk_ratio: response.data.risk_ratio,
          },
        }));
        updateState({
            apoe_genotype: response.data.apoe_genotype,
            apoe_risk_factors: response.data.apoe_risk_factors,
            apoe_risk_ratio: response.data.apoe_risk_ratio,
            risk_factors: response.data.risk_factors,
            risk_ratio: response.data.risk_ratio,
          });
        
      })
      .catch((error) => {
        console.error(error);
      });
      console.log(geneData)
  };

  return (
    <Stack>
      <Typography variant="h3">Upload your data</Typography>
      <Typography variant="body1">
        Drag and drop your .txt or .csv data file from 23andMe or other
        providers like Ancestry DNA here.
      </Typography>
      <Button
        variant="contained"
        component="label"
        sx={{ width: "fit-content" }}
      >
        Browse
        <input hidden multiple type="file" onChange={handleFileUpload} />
      </Button>
    </Stack>
  );
};
