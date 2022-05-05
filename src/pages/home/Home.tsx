import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Download, Star } from "@mui/icons-material";
import { BoxElement } from "components/box/BoxElement";
import { TextBox } from "components/box/TextBox";
import { TextBoxTable } from "components/box/TextBoxTable";

export const Home: React.FC = () => {
  const authors = [
    "Galileo Galilei",
    "Isaac Newton",
    "Cesar Lattes",
    "Stephen Hawking",
  ];

  const universities = [
    "Universidade Estadual de Campinas",
    "Universidade de São Paulo",
    "Instituto Nacional de Pesquisas Espaciais",
    "Universidade Federal do Rio de Janeiro",
  ];

  return (
    <Box
      padding="2px 40px"
      display="grid"
      gridTemplateColumns="repeat(1, 3fr 1fr)"
      gap="20px"
    >
      <Box>
        <Typography color="#ed7839" fontWeight="bold" fontSize="1.3rem">
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP
        </Typography>
      </Box>
      <Box display="grid" gap="10px">
        <Box display="flex" gap="10px">
          <Button color="warning" variant="contained">
            <Download /> Download
          </Button>
          <Button color="warning" variant="contained">
            <Star />
          </Button>
          <Button color="warning" variant="contained">
            <img src="/assets/doi.png" alt="doi" />
          </Button>
        </Box>
        <Typography color="#ed7839" fontWeight="bold" fontSize="0.8rem">
          COMO CITAR ESSE TRABALHO?
        </Typography>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <img src="/assets/video-apresentacao.png" alt="apresentation" />
      </Box>
      <Box maxHeight="100%">
        <BoxElement title="Detalhes">
          <TextBox title="Tipo de Apresentação" subtitle="Pôster" />
          <TextBox title="Eixo temático" subtitle="Alimentação e saúde (AS)" />
          <TextBox
            title="Palavras-chaves"
            subtitle="Alimentos funcionais, alimentação escolar."
          />
          <TextBoxTable
            title="Autores"
            authors={authors}
            universities={universities}
          />
        </BoxElement>
      </Box>
    </Box>
  );
};
