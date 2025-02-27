import React from 'react';
import { ToggleButton } from '@mui/material';
import LedIcon from './LedIcon';

import "../index.css"
import "./LedPanel.css"

import { ColorPicker, useColor } from "react-color-palette";
import apiServices from '../services/apiServices';

interface LedPanelProps {
  colors: Array<string>;  // String array of colors
  size: string; // Size in any unit
  initialStates: Array<boolean>;
  rgbInitial: any;
}

const LedPanel: React.FC<LedPanelProps> = ({colors, size, initialStates, rgbInitial}) => {

  const [color, setColor] = useColor(`rgb(${rgbInitial.r}, ${rgbInitial.g}, ${rgbInitial.b}, 1)`);

  const handleChange = async (newColor: any) => {
    setColor(newColor);
    await apiServices.setRGB(parseInt(newColor.rgb.r), parseInt(newColor.rgb.g), parseInt(newColor.rgb.b));
  }

  return (
    <div className="panel ledpanel" id="led-panel">
      <h2>LED Control Panel</h2>
      <div className="vcontainer">
        <h3>Individual LEDs</h3>
        <div className="hcontainer">
        {/* A button for every color */}
        {
          colors.map((color, i) => {
            return (
              <ToggleButton key={`led-${color}`} value={color} sx={{padding: "0.1rem", border: "1px solid white"}}>
                <LedIcon fill={color} size={size} initialState={initialStates[i]}></LedIcon>
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