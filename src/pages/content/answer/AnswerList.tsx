import React from "react";
import { Box } from "@mui/material";
import { Answer } from "types/answer";
import { AnswerBox } from "components/topic/AnswerBox";

interface AnswerListProps {
  answers: Answer[];
}
export const AnswerList: React.FC<AnswerListProps> = ({ answers }) => {
  return (
    <>
      {answers.map((answer, index) => (
        <Box key={answer.id}>
          <AnswerBox author={answer.author} index={index + 1}>
            {answer.content}
          </AnswerBox>
        </Box>
      ))}
    </>
  );
};
