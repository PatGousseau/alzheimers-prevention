import React, { FC, useState } from "react";
import { Button, Stack } from "@mui/material";
import { Question } from "../components/Question";
import { MultipleChoiceInput } from "../components/MultipleChoiceInput";
import BackButton from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import CircleFormation from "../components/CircleFormation";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface SurveyProps {
  startQuestionIndex: number;
  startBatchIndex: number;
}

export const Survey: FC<SurveyProps> = ({startBatchIndex, startQuestionIndex}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const firstBatch = [
    {
      header: "Demographic",
      question: "What is your age? [birth year]?",
      options: ["<40", "40-54", "55-64","65-74", "75+"],
      tooltipText:
        "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated.",
    },
    {
      header: "Demographic",
      question: "What is your sex?",
      options: ["Male", "Female", "Prefer not to answer"],
      tooltipText:
        "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated.",
    },
    {
      header: "Demographic",
      question: "What is your race?",
      options: ["Biracial/Multiracial // East Asian // Indigenous // Middle Eastern/North African // South Asian // White","Black/African American // Hispanic/Latino","Other // Prefer not to say"],
      tooltipText:
        "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated.",
    },
  ];

  const secondBatch = [
    {
      header: "Metabolism",
      question: "2Do you have a parent who has ever been diagnosed with dementia?",
      options: ["yes", "no"],
      tooltipText:
        "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated.",
    },
    {
      header: "Metabolism",
      question: "2Do you have a parent who has ever been diagnosed with dementia? 2222",
      options: ["yes", "no"],
      tooltipText:
        "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated.",
    },
    {
      header: "Metabolism",
      question: "2Do you have a parent who has ever been diagnosed with dementia? 3333",
      options: ["yes", "no"],
      tooltipText:
        "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated.",
    },
  ];

  const allQuestions = [
    firstBatch,secondBatch
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentBatchIndex, setCurrentBatchIndex] = useState(location.state.startBatchIndex);

  const handleAnswerSelection = () => {
    // Logic for handling answer selection
    // You can store the selected answer, perform any necessary actions, etc.

    // Move to the next question
      if (currentQuestionIndex < allQuestions[currentBatchIndex].length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else if(currentBatchIndex < allQuestions.length - 1) {
        // next batch
        navigate('provisional-result',{state:{letter: 'A', currentBatchIndex: currentBatchIndex},  replace: true })
        setCurrentBatchIndex(currentBatchIndex + 1)
        setCurrentQuestionIndex(0);
      }  else {
        navigate('/survey-end', { replace: true });
      }


  };

  const handlePreviousButton = () => {
    // Logic for handling answer selection
    // You can store the selected answer, perform any necessary actions, etc.

    // Move to the next question
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = allQuestions[currentBatchIndex][currentQuestionIndex];
  const numQuestions = allQuestions.reduce((count, innerArray) => count + innerArray.length, 0);

  return (
    <Stack sx={{ m: 4 }}>
      <BackButton />
      <Stack sx={{pt:1}}>
        <ProgressBar variant="determinate" value={(currentQuestionIndex/numQuestions) * 100} />
      </Stack>
      <Stack direction="row">
        <Question
          question={currentQuestion.question}
          children={<MultipleChoiceInput options={currentQuestion.options} onClick={function (): void {
            handleAnswerSelection();
          } } />}
          tooltipText={currentQuestion.tooltipText}
          onAnswerSelection={handleAnswerSelection} header={currentQuestion.header}        />
        {/* <CircleFormation /> */}
      </Stack>
      <Stack direction={"row"} sx={{marginLeft: 'auto', mt:16}}>
      {currentQuestionIndex > 0 && (
        
        <Button variant="outlined" sx={{ marginRight: '8px'}} onClick={handlePreviousButton} startIcon={<ArrowBackIosNewIcon />}>
          Previous
        </Button>
        )}
      {currentQuestionIndex < allQuestions[currentBatchIndex].length && (
        
        <Button variant="contained" onClick={handleAnswerSelection} endIcon={<ArrowForwardIosIcon />}>
          Skip
        </Button>
        )}
        </Stack>
      
    </Stack>
  );
};
