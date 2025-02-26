import React, { useState } from "react";
import { ToggleButton } from "@mui/material";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

// Simple toggle button using volume icons

const BuzzerControl: React.FC = () => {
  const [buzzState, setBuzzState] = useState(false);

  const handleClick = () => {
    setBuzzState(!buzzState);
  }

  return <ToggleButton value={!buzzState} onClick={handleClick}>
    {
      buzzState? <VolumeUpIcon sx={{fill: "white"}}></VolumeUpIcon> : <VolumeOffIcon sx={{fill: "white"}}></VolumeOffIcon>
    }
  </ToggleButton>
}

export default BuzzerControl;