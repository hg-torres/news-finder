import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {useState} from 'react'

export default function BasicButtonGroup() {

const [disableEntertainment, setDisableEntertainment] = useState(false);
const [disableTechnology, setDisableTechnology] = useState(false);
const [disableFood, setDisableFood] = useState(false);
const [disablePolitics, setDisablePolitics] = useState(false);
const [disableScience, setDisableScience] = useState(false);
const [disableSports, setDisableSports] = useState(false);
const [disableWorld, setDisableWorld] = useState(false);
const [disableTop, setDisableTop] = useState(false);
const [disableHealth, setDisableHealth] = useState(false);
const [disableEnvironment, setDisableEnvironment] = useState(false);


  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      '& > *': {
        m: 1,
      },
    }}
  >
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button disabled={disableEntertainment} onClick={() => setDisableEntertainment(true)}>Entertainment</Button>
      <Button disabled={disableTechnology} onClick={() => setDisableTechnology(true)}>Technology</Button>
      <Button disabled={disableFood} onClick={() => setDisableFood(true)}>Food</Button>
      <Button disabled={disablePolitics} onClick={() => setDisablePolitics(true)}>Politics</Button>
      <Button disabled={disableScience} onClick={() => setDisableScience(true)}>Science</Button>
      <Button disabled={disableSports} onClick={() => setDisableSports(true)}>Sports</Button>
      <Button disabled={disableWorld} onClick={() => setDisableWorld(true)}>World</Button>
      <Button disabled={disableTop} onClick={() => setDisableTop(true)}>Top</Button>
      <Button disabled={disableHealth} onClick={() => setDisableHealth(true)}>Health</Button>
      <Button disabled={disableEnvironment} onClick={() => setDisableEnvironment(true)}>Environment</Button>
    </ButtonGroup>
    </Box>
  );
}