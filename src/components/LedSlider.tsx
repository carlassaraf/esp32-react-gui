import React, { useState } from 'react';
import { Box, Slider, Typography } from "@mui/material";
import { capitalize } from '../utils/stringUtils';

interface LedSliderProps {
  ledColor: string;
}

const LedSlider: React.FC<LedSliderProps> = ({ledColor}) => {
  const [currColor, setColor] = useState(0);

  const handleChange = (_: Event, newColor: number | number[]) => {
    setColor(newColor as number);
  }

  // Label + Slider
  return <Box>
    <Typography id="input-slider" gutterBottom>
      {`RGB ${capitalize(ledColor)} slider`}
    </Typography>
    <Slider
      defaultValue={0}
      value={currColor}
      onChange={handleChange}
      aria-label={`RGB ${capitalize(ledColor)} slider`}
      min={0}
      max={255}
      step={1}
      valueLabelDisplay="auto"
    >
    </Slider>
  </Box>
}

export default LedSlider;