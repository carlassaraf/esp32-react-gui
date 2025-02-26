import * as React from 'react';
import { ToggleButton } from '@mui/material';
import LedIcon from './LedIcon';
import LedSlider from './LedSlider';

import "../index.css"
import "./LedPanel.css"

interface LedPanelProps {
  colors: Array<string>;  // String array of colors
  size: string; // Size in any unit
  sliders: Array<string>  // String array of colors
}

const LedPanel: React.FC<LedPanelProps> = ({colors, size, sliders}) => {

  return (
    <div className="panel ledpanel">
        <h2>LED Control Panel</h2>
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
      <div className="vcontainer">
      {
        sliders.map(color => {
          return (
            <LedSlider ledColor={color}></LedSlider>
          )
        })
      }
      </div>
    </div>
  );
}

export default LedPanel;