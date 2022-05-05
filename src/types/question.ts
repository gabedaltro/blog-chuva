import { Answer } from "./answer";

export interface Question {
  id: number;
  title: string;
  author: string;
  likes: number;
  content: string;
  answer: Answer[];
}
