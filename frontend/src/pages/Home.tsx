import { Button, Stack } from "@mui/material"
import axios from "axios";
import { FC, useState } from "react"
import { ResultsTable } from "../components/ResultsTable";

export const Home: FC = () => {

  const [selectedFile, setSelectedFile] = useState();

  const handleFileUpload = async (event:any) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Create a new FormData object
    const formData = new FormData();

    // Append the file to the form data
    formData.append('file', file);
    console.log("1")
    await axios.post(`http://127.0.0.1:5000/run`, formData)
    .then((response) => {
      // Handle the response here
      console.log("allo")
      console.log(response);
    })
    .catch((error) => {
      // Handle errors here
      console.error(error);
    });
    console.log("2")
  };

    // axios.get(`http://127.0.0.1:5000/run?filename=${files[0].name}`)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    

  

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