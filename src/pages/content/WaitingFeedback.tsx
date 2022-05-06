import React, { useMemo } from "react";
import { Send } from "@mui/icons-material";
import { Box, Icon, Typography } from "@mui/material";
import { useContents } from "./hooks/useContents";
import { FirstQuestionBox } from "components/topic/FirstQuestionBox";

export const WaitingFeedback: React.FC = () => {
  const { questions, successfullSend } = useContents();

  const question = useMemo(() => {
    return questions.find((question) => question.id === 1);
  }, [questions]);
  return (
    <>
      <Box position="relative">
        <FirstQuestionBox
          title={question?.title}
          author={question?.author}
          qtdAnswer={question?.answer.length}
          qtdLike={question?.likes}
        >
          {question?.content}
        </FirstQuestionBox>
      </Box>
      {successfullSend && (
        <Box
          bgcolor="rgba(245, 245, 245, 0.8)"
          justifyContent="center"
          position="relative"
          alignItems="center"
          textAlign="center"
          display="flex"
          height="31vh"
          top={-220}
          zIndex={1}
        >
          <Box>
            <Icon>
              <Send />
            </Icon>
            <Typography fontWeight="bold" fontSize="0.9rem">
              Aguardando feedback dos autores
            </Typography>
            <Typography
              textTransform="none"
              variant="overline"
              fontSize="0.8rem"
              color="#ffa575"
              sx={{ textDecoration: "underline" }}
            >
              Editar tópico
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
