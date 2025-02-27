import React from "react";
import LuxIndicator from "./LuxIndicator";
import "./LuxPanel.css"

const LuxPanel: React.FC = () => {

  return <div className="panel" id="lux-panel">
    <h2>Lux Indicator</h2>
    <LuxIndicator></LuxIndicator>
  </div>
}

export default LuxPanel;