import React from 'react';

interface CircleProps {
  percentage: number;
  size: number;
  colour: string;
}

export const Circle: React.FC<CircleProps> = ({ percentage, size, colour }) => {
  const radius = size / 2;
  const circumference = 2 * Math.PI * radius;

  const circleStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: colour,
    position: 'relative',
  };

  const textStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#FFFFFF'
  };

  return (
    <div style={circleStyle}>
      <div style={textStyle}>{`${percentage}%`}</div>
    </div>
  );
};
