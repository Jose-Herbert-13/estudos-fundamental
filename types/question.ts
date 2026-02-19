export type Difficulty = "facil" | "medio" | "dificil";

export interface Question {
  id: number;
  statement: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty;
}
