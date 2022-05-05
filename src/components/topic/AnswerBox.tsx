import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

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
          <Typography color="#666">{children}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
