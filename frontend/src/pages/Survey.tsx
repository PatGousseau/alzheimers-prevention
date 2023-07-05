import { Alert, Button, CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import axios from "axios";
import { FC, useContext, useState } from "react";
import { Question } from "../components/Question";


export const Survey: FC = () => {
  

  return (
    <Stack sx={{ m: 4 }}>
      
      <Question header={"Dementia"} subheader={"Lifestyle assessement"} questionNum={1} question={"Do you have a parent who has ever been diagnosed with dementia?"} children={<Question header={"test"} subheader={""} questionNum={0} question={""} children={undefined}/>}/>
    </Stack>
  );
};
