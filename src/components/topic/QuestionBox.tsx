import React, { ReactNode, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";
import { useApp } from "hooks/app";

interface QuestionBoxProps {
  title: string;
  author: string;
  children: ReactNode | any;
  qtdLike: number;
  qtdAnswer: number;
}

export const QuestionBox: React.FC<QuestionBoxProps> = ({
  title,
  author,
  children,
  qtdLike,
  qtdAnswer,
}) => {
  const [readMore, setReadMore] = useState(false);
  const text = children;
  const app = useApp();

  function toggleReadMore() {
    setReadMore(!readMore);
  }

  useEffect(() => {
    if (app.windowWidth <= 500) setReadMore(true);
    else setReadMore(false);
  }, [app.windowWidth]);

  return (
    <Box
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      border="1px solid #cdcdcd99"
      sx={{ cursor: "pointer" }}
      padding="20px 20px"
      borderRadius="5px"
    >
      <Box display="grid" gap="5px">
        <Box>
          <Typography fontWeight="bold" color="#ed7839">
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography fontSize="0.8rem" fontWeight="bold">
            {author}
          </Typography>
        </Box>
        <Box>
          <Typography>
            {readMore ? text?.toString().slice(0, 100) + "..." : children}
          </Typography>
          {app.windowWidth <= 500 && (
            <span onClick={toggleReadMore}>
              <Typography color="#ed7839">
                {readMore ? "ver mais..." : "ver menos"}
              </Typography>
            </span>
          )}
        </Box>

        <Box display="flex" gap="10px">
          <MoreVert cursor="pointer" color="warning" />
          <Favorite cursor="pointer" color="warning" />
          <Typography fontSize="0.8rem">
            {qtdAnswer > 1 ? qtdAnswer + " respostas" : qtdAnswer + " resposta"}
          </Typography>
          <Typography fontSize="0.8rem">
            {qtdLike > 1 ? qtdLike + " likes" : qtdLike + " like"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
