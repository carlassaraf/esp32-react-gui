import React from "react";
import GPIOButton from "./GPIOButton";
import "./GPIOButtonPanel.css"

interface GPIOButtonPanelProps {
  names: Array<string>;
  pins: Array<number>;
}

const GPIOButtonPanel: React.FC<GPIOButtonPanelProps> = ({names, pins}) => {

  return <div className="panel" id="button-panel">
    <h2>Buttons</h2>
    {
      names.map((name, i) => {
        return <GPIOButton name={name} pin={pins[i]} key={`btn-${name}`}></GPIOButton>
      })
    }
  </div>
}

export default GPIOButtonPanel;