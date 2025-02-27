import React from "react";
import BuzzerControl from "./BuzzerControl"
import { BuzzerControlProps } from "./BuzzerControl";

import "./BuzzerPanel.css"

const BuzzerPanel: React.FC<BuzzerControlProps> = ({initialState}) => {

    return <div className="panel" id="buzzer-panel">
      <h2>Buzzer</h2>
      <BuzzerControl initialState={initialState}></BuzzerControl>
    </div>

}

export default BuzzerPanel;