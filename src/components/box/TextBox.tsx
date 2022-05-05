import { Box, Typography } from "@mui/material";
import React from "react";

interface TextBoxProps {
  title: string;
  subtitle: string;
}

export const TextBox: React.FC<TextBoxProps> = ({ title, subtitle }) => {
  return (
    <Box display="grid" fontSize="0.8rem" color="#666">
      {title + ": "}
      <Typography
        fontWeight="bold"
        marginLeft="3px"
        color="#666"
        fontSize="0.8rem"
      >
        {" " + subtitle}
      </Typography>
    </Box>
  );
};
