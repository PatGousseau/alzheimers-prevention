import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { Question } from "../components/Question";
import { MultipleChoiceInput } from "../components/MultipleChoiceInput";
import BackButton from "../components/BackButton";
import { ProgressBar } from "../components/ProgressBar";
import CircleFormation from "../components/CircleFormation";

export const Survey = () => {
  const questionsData = [
    {
      question: "Do you have a parent who has ever been diagnosed with dementia?",
      options: ["yes", "no"],
      tooltipText:
        "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated.",
    },
    {
      question: "Do you have a parent who has ever been diagnosed with dementia? 2222",
      options: ["yes", "no"],
      tooltipText:
        "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated.",
    },
    {
      question: "Do you have a parent who has ever been diagnosed with dementia? 3333",
      options: ["yes", "no"],
      tooltipText:
        "The ability to perform moderate exercise such as running or biking at a sustained pace for several minutes at a time helps us understand your cardiovascular health, which determines how well your brain is oxygenated.",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerSelection = () => {
    // Logic for handling answer selection
    // You can store the selected answer, perform any necessary actions, etc.

    // Move to the next question
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Handle survey completion or next step
      // e.g., navigate to the next page, submit the answers, etc.
    }
  };

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <Stack sx={{ m: 4 }}>
      <BackButton />
      <Stack>
        <ProgressBar variant="determinate" value={(currentQuestionIndex/questionsData.length) * 100} />
      </Stack>
      <Stack direction="row">
        <Question
          question={currentQuestion.question}
          children={<MultipleChoiceInput options={currentQuestion.options} onClick={function (): void {
            handleAnswerSelection();
          } } />}
          tooltipText={currentQuestion.tooltipText}
          onAnswerSelection={handleAnswerSelection}
        />
        <CircleFormation />
      </Stack>
      <Stack direction={"row"} sx={{width:"137px"}}>
      {currentQuestionIndex > 0 && (
        
        <Button variant="contained" onClick={handleAnswerSelection}>
          Previous
        </Button>
        )}
      {currentQuestionIndex < questionsData.length - 1 && (
        
        <Button variant="contained" onClick={handleAnswerSelection}>
          Skip
        </Button>
        )}
        </Stack>
      
    </Stack>
  );
};
