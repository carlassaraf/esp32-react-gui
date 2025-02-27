import React from 'react';
import { ToggleButton } from '@mui/material';
import LedIcon from './LedIcon';

import "../index.css"
import "./LedPanel.css"

import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";
import apiServices from '../services/apiServices';

interface LedPanelProps {
  colors: Array<string>;  // String array of colors
  size: string; // Size in any unit
}

const LedPanel: React.FC<LedPanelProps> = ({colors, size}) => {

  const [color, setColor] = useColor("#561ecb");

  const handleChange = async (newColor: any) => {
    setColor(newColor);
    const data = await apiServices.setRGB(parseInt(newColor.rgb.r), parseInt(newColor.rgb.g), parseInt(newColor.rgb.b));
  }

  return (
    <div className="panel ledpanel" id="led-panel">
      <h2>LED Control Panel</h2>
      <div className="vcontainer">
        <h3>Individual LEDs</h3>
        <div className="hcontainer">
        {/* A button for every color */}
        {
          colors.map(color => {
            return (
              <ToggleButton value={color} sx={{padding: "0.1rem", border: "1px solid white"}}>
                <LedIcon fill={color} size={size}></LedIcon>
              </ToggleButton>
            );
          })
        }
        </div>
      </div>
      <div className="vcontainer">
        <h3>RGB Color Picker</h3>
        <ColorPicker color={color} onChange={handleChange}/>
      </div>
    </div>
  );
}

export default LedPanel;