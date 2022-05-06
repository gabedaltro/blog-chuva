import React, { ReactNode, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";
import { useApp } from "hooks/app";

interface FirstQuestionBoxProps {
  title: string | undefined;
  author: string | undefined;
  children: ReactNode;
  qtdLike: number | undefined;
  qtdAnswer: number | undefined;
}

export const FirstQuestionBox: React.FC<FirstQuestionBoxProps> = ({
  title,
  author,
  children,
  qtdLike,
  qtdAnswer,
}) => {
  const app = useApp();
  const text = children;
  const [isReadMore, setIsReadMore] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  useEffect(() => {
    if (app.windowWidth <= 500) setIsReadMore(true);
    else setIsReadMore(false);
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
          <Typography color="#666">
            {isReadMore ? text?.toString().slice(0, 100) : children}
          </Typography>
          {app.windowWidth <= 500 && (
            <span onClick={toggleReadMore}>
              <Typography color="#ed7839">
                {isReadMore ? "ver mais..." : "ver menos"}
              </Typography>
            </span>
          )}
        </Box>

        <Box display="flex" gap="10px">
          <MoreVert cursor="pointer" color="warning" />
          <Favorite cursor="pointer" color="warning" />
          <Typography fontSize="0.8rem">
            {qtdAnswer !== 0
              ? qtdAnswer + " respostas"
              : qtdAnswer + " resposta"}
          </Typography>
          <Typography fontSize="0.8rem">
            {qtdLike !== 0 ? qtdLike + " likes" : qtdLike + " like"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
