import React from "react";
import { Box, Typography } from "@mui/material";

interface TextBoxTableProps {
  title: string;
  authors: string[];
  universities: string[];
}

export const TextBoxTable: React.FC<TextBoxTableProps> = ({
  title,
  authors,
  universities,
}) => {
  return (
    <Box display="grid" gap="30px" marginTop="10px">
      <Box>
        <Typography color="#666" fontSize="0.9rem" fontWeight="bold">
          {title + ": "}
        </Typography>
        {authors.map((author, index) => (
          <Typography key={index} color="#666" fontSize="0.9rem">
            {author}
          </Typography>
        ))}
      </Box>
      <Box>
        {universities.map((item, index) => (
          <Typography key={index} color="#666" fontSize="0.8rem">
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
