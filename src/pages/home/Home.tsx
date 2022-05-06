import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Download, Star } from "@mui/icons-material";
import { BoxElement } from "components/box/BoxElement";
import { TextBox } from "components/box/TextBox";
import { TextBoxTable } from "components/box/TextBoxTable";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    gridTemplateColumns: "repeat(1, 3fr 1fr)",
    padding: "2px 40px",
    display: "grid",
    gap: "20px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  button: {
    display: "flex",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 3fr 1fr 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
}));

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

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Box>
        <Typography color="#ed7839" fontWeight="bold" fontSize="1.3rem">
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP
        </Typography>
      </Box>
      <Box display="grid" gap="10px">
        <div className={classes.button}>
          <Button color="warning" variant="contained">
            <Download />
            <Typography textTransform="capitalize" variant="button">
              Download
            </Typography>
          </Button>
          <Button color="warning" variant="contained">
            <Star />
          </Button>
          <Button color="warning" variant="contained">
            <img src="/assets/doi.png" alt="doi" />
          </Button>
        </div>
        <Typography color="#ed7839" fontWeight="bold" fontSize="0.8rem">
          COMO CITAR ESSE TRABALHO?
        </Typography>
      </Box>
      <Box sx={{ cursor: "pointer" }}>
        <img
          src="/assets/video-apresentacao.png"
          width="100%"
          height="100%"
          alt="apresentation"
        />
      </Box>
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
    </div>
  );
};
