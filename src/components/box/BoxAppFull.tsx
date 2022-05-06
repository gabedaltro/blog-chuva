import React, {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
} from "react";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { FormatBold, FormatItalic } from "@mui/icons-material";
import { useContents } from "pages/content/hooks/useContents";

interface BoxAppFullProps {
  children: ReactNode;
  title: string;
  image: ReactNode;
  subtitle: string;
  intro: string;
  ActionComponent?: ReactElement;
  createTopic: boolean;
  setCreateTopic: Dispatch<SetStateAction<boolean>>;
}
export const BoxAppFull: React.FC<BoxAppFullProps> = ({
  children,
  title,
  image,
  subtitle,
  intro,
  ActionComponent,
  createTopic,
  setCreateTopic,
}) => {
  const { successfullSend, setSuccessfullSend } = useContents();

  function handleSubmit() {
    setSuccessfullSend(true);
  }

  return (
    <div className="container">
      <Box border="1px solid #dddddd" borderRadius="10px">
        <Box display="flex" flexDirection="column">
          <Box
            borderRadius="10px 10px 0px 0px"
            sx={{ cursor: "pointer" }}
            borderTop="transparent"
            bgcolor="#fdf1eb"
            padding="10px"
            onClick={() => {
              if (createTopic === true) setCreateTopic(!createTopic);
              else return;
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="#3e3e3e">
              {title}
            </Typography>
          </Box>
          {!createTopic ? (
            <Box
              flexDirection="column"
              alignItems="center"
              alignSelf="center"
              textAlign="center"
              display="flex"
              padding="10px"
              width="70%"
              gap="15px"
            >
              <Box>
                <Typography variant="body1" color="#ed7839">
                  {subtitle}
                </Typography>
              </Box>
              <Box>{image}</Box>
              <Box display="grid" gap="10px" alignItems="center">
                <Typography variant="body1" color="rgb(106 102 102)">
                  {intro}
                </Typography>
                <Divider>{ActionComponent}</Divider>
              </Box>
            </Box>
          ) : !successfullSend ? (
            <Box display="grid" padding="10px 30px" gap="10px">
              <Box display="flex" justifyContent="center">
                <Typography fontSize="0.9rem" color="#666">
                  Tem uma dúvida ou sugestão? Compartilhe seu feedback com os
                  autores!
                </Typography>
              </Box>
              <Box>
                <Box display="grid" gap="10px" component="form">
                  <TextField
                    placeholder="Defina um tópico sucinto para notificar os autores..."
                    label="Assunto"
                    color="warning"
                    fullWidth
                  />
                  <TextField
                    placeholder="Conteúdo"
                    label="Conteúdo"
                    color="warning"
                    fullWidth
                    multiline
                    rows={5}
                  />
                </Box>

                <Box justifyContent="space-between" display="flex">
                  <Box
                    alignItems="center"
                    bgcolor="#eaf1f2"
                    display="flex"
                    flex={1}
                  >
                    <FormatItalic />
                    <FormatBold />
                  </Box>
                  <Box>
                    <Button
                      onClick={handleSubmit}
                      color="warning"
                      variant="contained"
                    >
                      <Typography textTransform="capitalize">Enviar</Typography>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box
              display="grid"
              padding="10px 30px"
              gap="10px"
              textAlign="center"
            >
              <Box
                display="flex"
                justifyContent="center"
                flexDirection="column"
                gap="10px"
              >
                <Typography fontSize="1rem" fontWeight="bold" color="#ed7839">
                  Seu tópico foi enviado com sucesso! :D
                </Typography>
                <Typography fontSize="0.9rem" variant="caption" color="#666">
                  Agradecemos por sua contribuição, uma notificação será enviado
                  ao seu email assim que seu tópico for respondido!
                </Typography>
              </Box>
              <Box display="grid" gap="30px" alignItems="center" width="100%">
                <Typography
                  color="#ffa575"
                  textTransform="none"
                  variant="overline"
                  fontSize="0.8rem"
                  sx={{ textDecoration: "underline" }}
                >
                  Descubra outros trabalhos!
                </Typography>

                <Divider>
                  <Box onClick={() => setSuccessfullSend(false)}>
                    {ActionComponent}
                  </Box>
                </Divider>
              </Box>
            </Box>
          )}
        </Box>
        <Box padding="10px 30px">{children}</Box>
      </Box>
    </div>
  );
};
