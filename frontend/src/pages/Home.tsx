import { Button, Stack } from "@mui/material";
import axios from "axios";
import { FC, useState } from "react";
import { ResultsProps, ResultsTable } from "../components/ResultsTable";

export const Home: FC = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [geneData, setGeneData] = useState<ResultsProps>({
    data: {
      apoe4genotype: "",
      risk_factors: [["", 0, ""]],
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
      .post(`http://127.0.0.1:5000/run`, formData)
      .then(async (response) => {
        await setGeneData(response.data);
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

  return (
    <Stack direction="column" padding={4}>
      <Stack direction="row" paddingBottom={2}>
        <Button variant="contained" component="label">
          Upload
          <input hidden multiple type="file" onChange={handleFileUpload} />
        </Button>
      </Stack>
      <Stack direction="row">
        {geneData && <ResultsTable data={geneData.data} />}
      </Stack>
    </Stack>
  );
};
