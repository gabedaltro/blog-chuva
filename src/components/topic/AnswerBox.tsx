import React, { ReactNode, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useApp } from "hooks/app";

interface AnswerProps {
  author: string;
  children?: ReactNode;
  index: number;
}

export const AnswerBox: React.FC<AnswerProps> = ({
  author,
  children,
  index,
}) => {
  const app = useApp();
  const text = children;
  const [readMore, setReadMore] = useState(false);

  function toggleReadMore() {
    setReadMore(!readMore);
  }

  useEffect(() => {
    if (app.windowWidth <= 500) setReadMore(true);
    else setReadMore(false);
  }, [app.windowWidth]);
  return (
    <Box
      border="1px solid #cdcdcd99"
      sx={{ cursor: "pointer" }}
      padding="20px 20px"
      borderRadius="5px"
    >
      <Box display="grid" gap="5px">
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize="0.8rem" fontWeight="bold">
            {author}
          </Typography>
          <Typography fontWeight="bold" color="#ed7839">
            {index === 1 ? "Autor" : "Coautor"}
          </Typography>
        </Box>
        <Box>
          <Typography color="#666">
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
      </Box>
    </Box>
  );
};
