import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Stack, Typography } from '@mui/material';

const BackButton = () => {
  const handleBack = () => {
    // Handle the back button functionality
    // e.g., navigate to the previous page
    // using router or history API
  };

  return (
    <Stack direction="row" justifyContent="flex-start">
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
