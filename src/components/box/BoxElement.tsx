import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface BoxElementProps {
  children: ReactNode;
  title: string;
}
export const BoxElement: React.FC<BoxElementProps> = ({ children, title }) => {
  return (
    <Box border="1px solid #dddddd" borderRadius="10px">
      <Box>
        <Box
          borderTop="transparent"
          borderRadius="10px 10px 0px 0px"
          bgcolor="#fdf1eb"
          padding="10px"
        >
          <Typography variant="h6" fontWeight="bold" color="#3e3e3e">
            {title}
          </Typography>
        </Box>
        <Box padding="10px" textAlign="start">
          <Typography>{children}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
