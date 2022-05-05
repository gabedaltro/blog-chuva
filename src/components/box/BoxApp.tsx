import React, { ReactNode, useState } from "react";
import { Box, Typography } from "@mui/material";
import "./BoxCss.css";

interface BoxAppProps {
  children: ReactNode;
  title: string;
}
export const BoxApp: React.FC<BoxAppProps> = ({ children, title }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="container read-or-hide" onClick={toggleReadMore}>
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
          <Box padding="10px" textAlign="justify">
            <Typography>
              {isReadMore ? text?.toString().slice(0, 250) : children}
            </Typography>
            <span>
              <Typography color="#ed7839">
                {isReadMore ? "ver mais..." : "ver menos"}
              </Typography>
            </span>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
