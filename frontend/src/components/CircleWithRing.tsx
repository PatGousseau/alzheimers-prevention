import { Typography } from '@mui/material';
import React from 'react';

type Position = "absolute" | "relative" | "fixed" | "static" | "sticky";
type CircleType = "provisionalResult" | "survey" | "result"
interface CircleWithRingProps {
  header: string;
  letter: string;
  size:number
  top?: number;
  left?: number;
  color: string;
  position?: Position;
  circleType?: CircleType;
}

const CircleWithRing: React.FC<CircleWithRingProps> = ({
  header,
  letter,
size,
  top,
  left,
  color,
  position,
  circleType,
}) => {
  const circleStyle: React.CSSProperties = {
    position: position || undefined,
    width: size,
    height: size ,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: top,
    left: left,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Adjust the shadow properties as needed
  };

  let ringSize = 0.92; // Adjust the value to change the size of the ring relative to the circle
  let borderSize = size * (1 - ringSize - 0.05);
  if(circleType === "provisionalResult") {
    borderSize = 15;
    ringSize = 1;
  }
  
  const ringStyle = {
    width: size * ringSize,
    height: size * ringSize,
    borderRadius: "50%",
    border: `${borderSize}px solid ${color}`, // Adjust the border size as needed
    boxSizing: "border-box",
    backgroundColor: "transparent",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  } as const;

  return (
    <div style={circleStyle}>
      <div style={ringStyle}>
        <Typography variant='h4' sx={{textAlign:"center"}}>{header}</Typography>
        <Typography>{letter}</Typography>
      </div>
    </div>
  );
};

export default CircleWithRing;
