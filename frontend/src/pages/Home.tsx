import { Button, Paper, Stack, Grid, styled, Tab, Tabs, Box } from "@mui/material";
import axios from "axios";
import { FC, useState } from "react";
import { ResultsProps, ResultsTable } from "../components/ResultsTable";

export const Home: FC = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [geneData, setGeneData] = useState<ResultsProps>({
    data: {
      apoe4genotype: "",
      risk_factors: [{ gene_name: "", genotype: "", risk_ratio: 0, significance: "", variant: "" }],
      risk_increase: 0,
    },
  });

  const handleFileUpload = async (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // send file to backend
    const formData = new FormData();

    formData.append("file", file);
    await axios
      .post(`http://127.0.0.1:5000/api/analyze_genetics`, formData)
      .then(async (response) => {
        await setGeneData(response.data);
        console.log(response);
        setGeneData((prevState) => ({
          data: {
            apoe4genotype: response.data.apoe4genotype,
            risk_factors: response.data.risk_factors,
            risk_increase: response.data.risk_increase,
          },
        }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newTabIndex: number) => {
    setActiveTab(newTabIndex); // update the active tab index when the tab is changed
  };

  return (
    <Stack direction="column" paddingX={16}>
    <Box sx={{ width: '100%', bgcolor: 'background.paper', justifyContent: 'flex-start' }}>
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
      {activeTab === 0 && ( 
        <ResultsTable data={geneData.data}/>
      )}
    </Stack>
  );
};
