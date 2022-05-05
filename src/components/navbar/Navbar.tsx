import { ArrowDropDown, Language } from "@mui/icons-material";
import { Box, Icon, Typography } from "@mui/material";
import React from "react";

export const Navbar: React.FC = () => {
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      padding="2px 40px"
      bgcolor="#fdf1eb"
      display="flex"
    >
      <Box display="flex" flexDirection="column">
        <Typography variant="body2" color="inherit">
          Anais do Simpósio Latino Americano de Ciências de Alimentos
        </Typography>
        <Typography variant="h6" fontSize="1rem" color="inherit">
          Anais do 13º Simpósio Latino Americano de Ciências de Alimentos
        </Typography>
        <Typography variant="body2" color="inherit">
          ISSN: 1234-5678
        </Typography>
      </Box>
      <Box
        justifyContent="center"
        border="1px solid gray"
        alignItems="center"
        display="flex"
        padding="6px 20px"
      >
        <Icon>
          <Language />
        </Icon>
        <Typography marginLeft="5px" fontSize="0.8rem">
          PT, BR
        </Typography>
        <Icon>
          <ArrowDropDown />
        </Icon>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(1, 5fr 1fr)"
        gap="10px"
        alignItems="center"
      >
        <Box display="flex" flexDirection="column" alignItems="end">
          <Typography variant="subtitle2" fontSize="0.9rem">
            Bem vindo!
          </Typography>
          <Typography variant="subtitle2" fontSize="0.9rem">
            alguem12@galoascience.com
          </Typography>
        </Box>
        <Box sx={{ cursor: "pointer" }}>
          <img
            src="/assets/image.png"
            alt="perfil"
            style={{ border: "transparent", borderRadius: "200px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
