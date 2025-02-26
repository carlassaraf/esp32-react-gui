import * as React from 'react';
import { ToggleButton } from '@mui/material';
import LedIcon from './LedIcon';

import "../index.css"

interface LedPanelProps {
  colors: Array<string>;  // String array of colors
  size: string; // Size in any unit
}

const LedPanel: React.FC<LedPanelProps> = ({colors, size}) => {

  return (
    <div className="panel">
        <h2>LED Control Panel</h2>
        <div className="hcontainer">
        {/* A button for every color */}
        {
          colors.map(color => {
            return (
              <ToggleButton value={color} sx={{padding: "0.5rem", border: "1px solid white"}}>
                <LedIcon fill={color} size={size}></LedIcon>
              </ToggleButton>
            );
          })
        }
      </div>
    </div>
  );
}

export default LedPanel;