import React from "react";
import { Menu as MenuApp } from "components/Menu/Menu";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    flexDirection: "column",
    textAlign: "center",
    minHeight: "100vh",
    display: "flex",
    height: "100%",
  },
}));

export const Sidebar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box
        justifyContent="center"
        alignItems="center"
        bgcolor="#f0813d"
        display="flex"
        height="10vh"
      >
        <Typography fontWeight="bold" variant="h4" color="white">
          SLACA 2019
        </Typography>
      </Box>
      <div>
        <img src="/assets/sidebar-logo.png" alt="sidebar logo" />
      </div>
      <div>
        <MenuApp />
      </div>
    </div>
  );
};
