import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function SelectBox({ onSubmit, searchState, handleInputChange }) {


  return (
    <Stack spacing={3} sx={{ width: 500 }}>
      <Box
      component="form"
      onSubmit={onSubmit}
        sx={{
          width: 500,
          maxWidth: '100%',
        }}
      >
        <TextField onChange={handleInputChange} name="search" fullWidth label="search" id="keyword" />
      </Box>
    </Stack>
  );

}
