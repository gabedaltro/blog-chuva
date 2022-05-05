import React from "react";
import { Box } from "@mui/material";
import { BoxMenu } from "./BoxMenu";

export const Menu: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column">
      <BoxMenu>Apresentação</BoxMenu>
      <BoxMenu>Comitês</BoxMenu>
      <BoxMenu>Autores</BoxMenu>
      <BoxMenu>Eixos temáticos</BoxMenu>
      <BoxMenu active={true}>Trabalhos</BoxMenu>
      <BoxMenu>Contato</BoxMenu>
    </Box>
  );
};
