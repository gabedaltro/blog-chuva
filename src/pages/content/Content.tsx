import React, { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { Question } from "types/question";
import { BoxApp } from "components/box/BoxApp";
import { AnswerList } from "./answer/AnswerList";
import { ContentProvider } from "./hooks/useContents";
import { BoxAppFull } from "components/box/BoxAppFull";
import { Box, Button, Typography } from "@mui/material";
import { Questions as questionsApp } from "json/questions";
import { QuestionList } from "pages/content/question/QuestionList";

export const Content: React.FC = () => {
  const [createTopic, setCreateTopic] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const toggleCreateTopic = () => {
    setCreateTopic(!createTopic);
  };

  useEffect(() => {
    setQuestions([questionsApp]);
  }, []);

  return (
    <ContentProvider
      value={{
        selectedQuestion,
        setSelectedQuestion,
      }}
    >
      <Box padding="30px 40px" display="grid" gap="30px">
        <BoxApp title="Resumo">
          et odio pellentesque diam volutpat commodo sed egestas egestas
          fringilla phasellus faucibus scelerisque eleifend donec pretium
          vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae
          elementum curabitur vitae nunc sed velit dignissim sodales ut eu sem
          integer vitae justo eget magna fermentum iaculis eu non diam phasellus
          vestibulum lorem sed risus ultricies tristique nulla aliquet enim
          tortor at auctor urna nunc id cursus metus aliquam eleifend mi in
          nulla posuere sollicitudin aliquam ultrices sagittis orci a
          scelerisque purus semper eget duis at tellus at urna condimentum
          mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl
          condimentum id venenatis a condimentum vitae sapien pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas sed tempus urna et pharetra pharetra massa massa
          ultricies mi quis hendrerit dolor magna eget est lorem ipsum dolor sit
          amet consectetur adipiscing elit pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas integer eget
          aliquet nibh praesent tristique magna sit amet purus gravida quis
          blandit turpis cursus in hac habitasse platea dictumst quisque
          sagittis purus sit amet volutpat consequat mauris nunc congue nisi
          vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra
          aliquet eget sit
        </BoxApp>

        <BoxAppFull
          title="Discussões"
          subtitle="Compartilhe suas ideias ou dúvidas com os autores!"
          image={
            <Box display="flex" gap="40px">
              <img src="/assets/icone1.png" alt="icone" />
              <img src="/assets/icone2.png" alt="icone" />
              <img src="/assets/icone3.png" alt="icone" />
            </Box>
          }
          intro="Sabia que o maior estímulo no desenvolvimento científico e cultural é a
        curiosidade? Deixe seus questionamentos ou sugestões para o autor!"
          createTopic={createTopic}
          setCreateTopic={setCreateTopic}
          ActionComponent={
            <Button
              color="warning"
              variant="contained"
              onClick={toggleCreateTopic}
            >
              <Add />
              <Typography textTransform="lowercase">criar tópico</Typography>
            </Button>
          }
        >
          <QuestionList questions={questions} />
          {selectedQuestion && <AnswerList answers={selectedQuestion.answer} />}
        </BoxAppFull>
      </Box>
    </ContentProvider>
  );
};
