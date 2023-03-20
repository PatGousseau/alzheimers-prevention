import {
  Button,
  Paper,
  Stack,
  Grid,
  styled,
  Tab,
  Tabs,
  Box,
} from "@mui/material";
import axios from "axios";
import { FC, useState } from "react";
import { ResultsProps, ResultsTable } from "../components/ResultsTable";

export const Home: FC = () => {
  const [selectedFile, setSelectedFile] = useState();
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
    const file = event.target.files[0];
    setSelectedFile(file);

    // send file to backend
    const formData = new FormData();

    formData.append("file", file);
    await axios
      .post(`http://127.0.0.1:80/api/analyze_genetics`, formData)
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
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabIndex: number
  ) => {
    setActiveTab(newTabIndex); // update the active tab index when the tab is changed
  };

  return (
    <Stack direction="column" paddingX={32}>
      <Box
        sx={{
          width: "100%",
          justifyContent: "flex-start",
        }}
      >
        <Tabs value={activeTab} onChange={handleTabChange} centered>
          <Tab label="APOE related" />
          <Tab label="APOE independent" />
        </Tabs>
      </Box>

      <Stack direction="row" paddingBottom={2}>
        <Button variant="contained" component="label">
          Upload raw 23AndMe data
          <input hidden multiple type="file" onChange={handleFileUpload} />
        </Button>
      </Stack>
      {activeTab === 0 ? (
        <ResultsTable risk_factors={geneData.data.apoe_risk_factors} risk_ratio={geneData.data.apoe_risk_ratio} risk_type={"Total risk from APOE-related genotypes"} />
      ) : (
        <ResultsTable risk_factors={geneData.data.risk_factors} risk_ratio={geneData.data.risk_ratio} risk_type={"Total risk from APOE-independent genotypes"}  />
      )}
    </Stack>
  );
};
