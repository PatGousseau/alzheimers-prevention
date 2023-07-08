import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';



const BackButton = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Stack direction="row" justifyContent="flex-start" sx={{mb:2}}>
      <Button
        size="medium"
        startIcon={<ArrowBackIosNewIcon />}
        onClick={handleBack}
      >
        <Typography variant="h5">Back</Typography>
      </Button>
    </Stack>
  );
};

export default BackButton;
