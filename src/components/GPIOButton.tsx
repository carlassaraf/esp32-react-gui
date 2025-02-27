import React from "react";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

interface GPIOButtonProps {
  name: string;
  pin: number;
}

const GPIOButton: React.FC<GPIOButtonProps> = ({name, pin}) => {
  // For later
  // const [state, changeState] = useState(false);
  const icons: Record<string, React.ElementType> = {
    izq: ArrowCircleLeftIcon,
    enter: ArrowCircleUpIcon,
    der: ArrowCircleRightIcon
  };

  const Icon = icons[name.toLowerCase()];

  return <div className="btn-container">
    {Icon && <Icon fontSize="large" />}
    <h5>{name}</h5>
    <h6>{`Pin ${pin}`}</h6>
  </div>
}

export default GPIOButton;