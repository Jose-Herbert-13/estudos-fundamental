export type Difficulty = "facil" | "medio" | "dificil";

export type Question = {
  id: number;
  statement: string;
  options: string[];
  correctAnswer: number;
  difficulty: Difficulty;
};
