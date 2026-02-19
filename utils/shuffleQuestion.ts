import { Question } from "@/types/question";

export function shuffleQuestion(question: Question): Question {
  const options = [...question.options];
  const correctOption = options[question.correctAnswer];

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }

  return {
    ...question,
    options,
    correctAnswer: options.indexOf(correctOption),
  };
}
