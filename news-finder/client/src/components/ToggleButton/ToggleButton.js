import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonsMultiple({onChange, category}) {


  return (
    <ToggleButtonGroup
      value={category}
      onChange={onChange}
      aria-label="text formatting"
    >
      <ToggleButton value="business">
        Business
      </ToggleButton>
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