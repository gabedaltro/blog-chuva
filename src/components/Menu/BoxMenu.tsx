import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import { List } from "@mui/icons-material";

interface BoxMenuProps {
  children: ReactNode;
  active?: boolean;
}

export const BoxMenu: React.FC<BoxMenuProps> = ({ children, active }) => {
  return (
    <Box
      bgcolor={active ? "#fdf1eb" : "#ffffff"}
      borderBottom="1px solid #b5b5b5"
      padding="10px 20px"
      display="flex"
    >
      {active && <List />}
      <Typography
        sx={{ cursor: "pointer" }}
        marginLeft={active ? 2 : 0}
        variant="body2"
        color="inherit"
      >
        {children}
      </Typography>
    </Box>
  );
};
