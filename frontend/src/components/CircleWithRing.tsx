import { Typography } from '@mui/material';
import React from 'react';

interface CircleWithRingProps {
  header: string;
  letter: string;
  width: number;
  height: number;
  top: number;
  left: number;
}

const CircleWithRing: React.FC<CircleWithRingProps> = ({
  header,
  letter,
  width,
  height,
  top,
  left,
}) => {
  const circleStyle: React.CSSProperties = {
    position: "absolute",
    width: width,
    height: height,
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: top,
    left: left,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)", // Adjust the shadow properties as needed
  };

  const ringSize = 0.92; // Adjust the value to change the size of the ring relative to the circle

  const ringStyle = {
    width: width * ringSize,
    height: height * ringSize,
    borderRadius: "50%",
    border: `${width * (1 - ringSize - 0.05)}px solid #4F7F72`, // Adjust the border size as needed
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
        <Typography variant='body1' sx={{textAlign:"center"}}>{header}</Typography>
        <Typography>{letter}</Typography>
      </div>
    </div>
  );
};

export default CircleWithRing;
