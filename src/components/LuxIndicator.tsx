import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const LuxIndicator: React.FC = () => {

  return <Gauge
    value={75}
    startAngle={180}
    endAngle={360}
    innerRadius="60%"
    outerRadius="80%"
    sx={{
      [`& .${gaugeClasses.valueText}`]: {
        fontSize: 40,
        transform: "translateX(-15px)",
      },
    }}
  />
}

export default LuxIndicator;