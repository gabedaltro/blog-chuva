import React from "react";
import { Box } from "@mui/material";
import { Question } from "types/question";
import { QuestionBox } from "components/topic/QuestionBox";
import { useContents } from "pages/content/hooks/useContents";

interface QuestionListProps {
  questions: Question[];
}
export const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
  const { selectedQuestion, setSelectedQuestion } = useContents();

  function handleClick(question: Question) {
    if (!selectedQuestion) setSelectedQuestion(question);
    else setSelectedQuestion(null);
  }

  return (
    <>
      {questions.map((question) => (
        <Box key={question.id} onClick={() => handleClick(question)}>
          <QuestionBox
            qtdAnswer={question.answer.length}
            qtdLike={question.likes}
            title={question.title}
            author={question.author}
          >
            {question.content}
          </QuestionBox>
        </Box>
      ))}
    </>
  );
};
