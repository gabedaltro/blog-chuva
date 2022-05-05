import { createContext, useContext } from "react";
import { Question } from "types/question";

export interface ContentContextValue {
  selectedQuestion: Question | null;
  setSelectedQuestion(question: Question | null): void;
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
