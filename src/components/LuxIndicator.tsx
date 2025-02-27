import React, { useState, useEffect } from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import apiServices from '../services/apiServices';

const LuxIndicator: React.FC = () => {
  const [lux, setLux] = useState(0);

  useEffect(() => {

    const interval = setInterval(async () => {
      const data = await apiServices.getLux();
      setLux(Number(data.lux.toFixed(0)));
    }, 250);
    // Clean up to avoid background executions
    return () => clearInterval(interval);
  }, []);

  return <Gauge
    value={lux}
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