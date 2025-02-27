import React, { useState, useEffect } from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import apiServices from "../services/apiServices";

interface GPIOButtonProps {
  name: string;
  pin: number;
}

const GPIOButton: React.FC<GPIOButtonProps> = ({name, pin}) => {
  const [state, changeState] = useState<any>({});
  const icons: Record<string, React.ElementType> = {
    left: ArrowCircleLeftIcon,
    enter: ArrowCircleUpIcon,
    right: ArrowCircleRightIcon
  };

  useEffect(() => {

    const interval = setInterval(async () => {    
      const data = await apiServices.getButtons();
      changeState(data.buttons);
    }, 250);
    // Clean up to avoid background executions
    return () => clearInterval(interval);
  }, []);

  const Icon = icons[name.toLowerCase()];

  return <div className="btn-container">
    {Icon && <Icon fontSize="large" sx={{fill: state[name.toLowerCase()]? "white" : "green"}}/>}
    <h5>{name}</h5>
    <h6>{`Pin ${pin}`}</h6>
  </div>
}

export default GPIOButton;