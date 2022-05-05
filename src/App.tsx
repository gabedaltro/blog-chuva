import React from "react";
import { Sidebar } from "components/sidebar/Sidebar";
import { Home } from "pages/home/Home";
import { Box } from "@mui/material";
import { Navbar } from "components/navbar/Navbar";
import { Content } from "pages/content/Content";
import { NavFooter } from "components/footer/Footer";

const App: React.FC = () => {
  return (
    <Box display="grid" gridTemplateColumns="1fr 4fr">
      <Sidebar />
      <Box display="flex" flexDirection="column" gap="10px">
        <Navbar />
        <Home />
        <Content />
        <NavFooter />
      </Box>
    </Box>
  );
};

export default App;

