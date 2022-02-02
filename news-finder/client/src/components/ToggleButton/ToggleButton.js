import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {useState} from 'react'

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = useState('') 
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="entertainment">
        Entertainment
      </ToggleButton>
      <ToggleButton value="technology">
        Technology
        </ToggleButton>
        <ToggleButton value="food">
        Food
        </ToggleButton>
        <ToggleButton value="politics">
        Politics
        </ToggleButton>
        <ToggleButton value="science">
        Science
        </ToggleButton>
        <ToggleButton value="sports">
        Sports
        </ToggleButton>
        <ToggleButton value="world">
        World
        </ToggleButton>
        <ToggleButton value="top">
        Top
        </ToggleButton>
        <ToggleButton value="health">
        Health
        </ToggleButton>
        <ToggleButton value="environment">
        Environment
        </ToggleButton>

    </ToggleButtonGroup>
  );
}