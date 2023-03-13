import { Button, Stack } from "@mui/material"
import { FC, useState } from "react"
import { ResultsTable } from "../components/ResultsTable";

export const Home: FC = () => {

  const [selectedFile, setSelectedFile] = useState();

  const handleFileUpload = (event:any) => {
    const files = event.target.files;
    setSelectedFile(event.target.files);
    
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
        <ResultsTable/>
      </Stack>
        
    </Stack>
  
  )
}