import React from "react";
import { useApp } from "hooks/app";
import { Box } from "@mui/material";
import { Home } from "pages/home/Home";
import { makeStyles } from "@material-ui/core";
import { Content } from "pages/content/Content";
import { Navbar } from "components/navbar/Navbar";
import { Sidebar } from "components/sidebar/Sidebar";
import { NavFooter } from "components/footer/Footer";
import { NavbarApp } from "components/navbar/NavbarApp";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 4fr",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

const Index: React.FC = () => {
  const classes = useStyles();
  const app = useApp();

  return (
    <div className={classes.container}>
      {app.windowWidth > 800 ? <Sidebar /> : <NavbarApp />}
      <Box
        display="flex"
        flexDirection="column"
        gap="10px"
        marginTop={app.windowWidth < 1280 ? 5 : 0}
      >
        {app.windowWidth >= 1280 && <Navbar />}
        <Home />
        <Content />
        <NavFooter />
      </Box>
    </div>
  );
};

export default Index;
