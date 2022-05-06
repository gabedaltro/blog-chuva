import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { Question } from "types/question";

export interface ContentContextValue {
  questions: Question[];
  selectedQuestion: Question | null;
  setSelectedQuestion(question: Question | null): void;
  successfullSend: boolean;
  setSuccessfullSend: Dispatch<SetStateAction<boolean>>;
}

const ContentContext = createContext<ContentContextValue>(
  {} as ContentContextValue
);
export const ContentProvider = ContentContext.Provider;
export const ContentConsumer = ContentContext.Consumer;

export function useContents(): ContentContextValue {
  const context = useContext(ContentContext);
  return context;
}
