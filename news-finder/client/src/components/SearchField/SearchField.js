import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from 'react'

const SearchField = ({searchText}) => {

const [text, setText] = useState('')

const handleSubmit = (e) => {
    e.preventDefault()

    searchText(text)
}

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
      <TextField onSubmit={handleSubmit} onChange={(e) => setText(e.target.value)} fullWidth label="keyword" id="keyword" />
      <button type="submit">Search</button>
    </Box>
  );
}

export default SearchField