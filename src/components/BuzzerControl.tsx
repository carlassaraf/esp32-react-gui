import React, { useState } from "react";
import { ToggleButton } from "@mui/material";
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import apiServices from "../services/apiServices";

export interface BuzzerControlProps {
  initialState: boolean;
}

// Simple toggle button using volume icons

const BuzzerControl: React.FC<BuzzerControlProps> = ({initialState}) => {
  const [buzzState, setBuzzState] = useState(initialState);

  const handleClick = async () => {
    setBuzzState(!buzzState);
    const data = await apiServices.setBuzzerState(!buzzState);
    if(data.status !== 200) { console.error("Failed to fetch"); }
  }

  return <ToggleButton value={!buzzState} onClick={handleClick}>
    {
      buzzState? <VolumeUpIcon sx={{fill: "white", fontSize: 40}}></VolumeUpIcon> : <VolumeOffIcon sx={{fill: "white", fontSize: 40}}></VolumeOffIcon>
    }
  </ToggleButton>
}

export default BuzzerControl;