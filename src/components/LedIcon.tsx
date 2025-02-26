import React, { useState } from 'react';

interface LedIconProps {
  fill: string;
  size: string;
}

const LedIcon: React.FC<LedIconProps> = ({fill, size}) => {
  const [color, setColor] = useState(fill);
  const [ledState, setLedState] = useState(false);
  const [background, setBackground] = useState("#222");

  const handleHoverIn = () => {
    setColor("#555555");
  }

  const handleHoverOut = () => {
    ledState? setColor("black") : setColor(fill);
  }

  const handleClick = () => {
    if(ledState === true) { 
      setColor(fill);
      setBackground("#222");
      setLedState(false);
    }
    else { 
      setColor("#222");
      setBackground(fill);
      setLedState(true);
    }
  }

  return (
    <svg 
      fill={color} 
      height={size} 
      width={size} 
      onClick={handleClick}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
      version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 298 298" enableBackground="new 0 0 298 298">
      <rect width="100%" height="100%" fill={background}/>
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
        <g> <path d="M298,141h-34.116c-4.122-59.601-53.921-106.834-114.551-106.834S38.904,81.399,34.782,141H0v16h34.782 c4.122,59.601,53.921,106.834,114.551,106.834S259.762,216.601,263.884,157H298V141z M149.333,247.834 c-51.804,0-94.423-40.064-98.509-90.834H100v58.732l82-51.929V215h16v-58h49.842C243.756,207.77,201.137,247.834,149.333,247.834z M116,111.154l59.616,37.754L116,186.662V111.154z M198,141V83h-16v51.013l-82-51.931V141H50.824 c4.086-50.77,46.705-90.834,98.509-90.834S243.756,90.23,247.842,141H198z"></path></g>
      </g>
    </svg>
  );
}

export default LedIcon;