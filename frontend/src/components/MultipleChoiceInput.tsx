import { Button, ButtonBase, ButtonGroup, Radio, RadioGroup, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { FC, ReactNode, useContext, useState } from "react";
import { ReactComponent as HappyFace } from "../assets/happy_face.svg";
import { GeneContext } from "../context/geneContext";
import { getColour } from "../utils/utils";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface MultipleChoiceInputProps {
  options: string[];
  onClick: () => void;
}

export const MultipleChoiceInput: FC<MultipleChoiceInputProps> = ({ options, onClick  }) => {

    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      onClick();
      
    };

  return (
    <Stack spacing={2} direction="column">
      {options.map((option) => (
        <Button
          key={option}
          variant={selectedOption === option ? 'contained' : 'outlined'}
          onClick={() => handleOptionClick(option)}
          sx={{ width: '400px', textTransform: 'none' }}
        >
          {option}
        </Button>
      ))}
    </Stack>   
  );
};
