import React from "react";
import BuzzerControl from "./BuzzerControl";

import "./BuzzerPanel.css"

const BuzzerPanel: React.FC = () => {

    return <div className="panel" id="buzzer-panel">
      <h2>Buzzer</h2>
      <BuzzerControl></BuzzerControl>
    </div>

}

export default BuzzerPanel;