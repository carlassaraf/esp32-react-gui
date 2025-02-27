import React, { useState, useEffect } from 'react';
import Thermometer from 'react-thermometer-component';

import "./TemperaturePanel.css"
import apiServices from '../services/apiServices';

const TemperaturePanel: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [temperature, setTemperature] = useState(25);

  const hideLabel = () => {
    document.querySelector(".thermometer__percent-current")?.classList.add("hidden");
    setIsHovered(!isHovered);
  }

  const showLabel = () => {
    document.querySelector(".thermometer__percent-current")?.classList.remove("hidden");
    setIsHovered(!isHovered);
  }

  useEffect(() => {
    hideLabel();

    const interval = setInterval(async () => {
      const temp = await apiServices.getTemperature();
      setTemperature(Number(temp.temperature.toFixed(1)));
    }, 500);
    // Clean up to avoid background executions
    return () => clearInterval(interval);
  }, []);

  return <div className="panel" id="temperature-panel">
    <h2>Temperature</h2>
    <div id="thermometer-container" onMouseEnter={showLabel} onMouseLeave={hideLabel}>
      <Thermometer
        theme="light"
        value={temperature}
        max="100"
        steps="1"
        format="°C"
        size="normal"
        height="300"
      />
    </div>
  </div>
}

export default TemperaturePanel;