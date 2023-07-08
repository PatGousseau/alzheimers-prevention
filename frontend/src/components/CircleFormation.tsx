import React, { useContext } from 'react';
import { LetterCircle } from './LetterCircle';
import CircleWithRing from './CircleWithRing';
import { SurveyContext } from '../context/surveyContext';



const CircleFormation: React.FC = () => {
  const { state } = useContext(SurveyContext);

  const circleCount = 8;
  const containerSize = 400;
  const circleSize = 116;
  const radius = (containerSize - circleSize) / 2;
  const angle = (2 * Math.PI) / circleCount;

  return (
    <div
      style={{
        position: "relative",
        width: containerSize,
        height: containerSize,
        margin: "0 auto",
      }}
    >
      {state.map((interim_score, index) => {
        const circleX = containerSize / 2 + radius * Math.cos(index * angle);
        const circleY = containerSize / 2 + radius * Math.sin(index * angle);

        return (
          <>

            <CircleWithRing width={circleSize} height={circleSize} top={circleY} left={circleX} header={interim_score.header} letter={interim_score.letter} color={'#4F7F72'}  />
          </>
        );
      })}

        <CircleWithRing width={150} height={150} top={containerSize - containerSize / 2 - 17} left={containerSize - containerSize / 2 - 17} header={'Brain Health'} letter={''} color={'#4F7F72'}  />
    </div>
  );
};

export default CircleFormation;
