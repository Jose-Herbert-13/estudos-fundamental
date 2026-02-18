"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { questions } from "@/data/questions";
import { Question } from "@/types/question";
import { shuffleQuestion } from "@/utils/shuffleQuestion";

export default function GamePage() {
  const params = useParams();
  const router = useRouter();

  const subject = params.subject as string;
  const difficulty = params.difficulty as "facil" | "medio" | "dificil";

  function generateQuestions(): Question[] {
    const subjectQuestions =
      questions[subject as keyof typeof questions] ?? [];

    const difficultyQuestions = subjectQuestions.filter(
      (q) => q.difficulty === difficulty
    );

    const shuffled = [...difficultyQuestions];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, 10).map((q) => shuffleQuestion(q));
  }

  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>(() =>
    generateQuestions()
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);

  const totalQuestions = filteredQuestions.length;
  const progressPercentage =
    (currentIndex / totalQuestions) * 100;

  function handleSelect(index: number) {
    if (showAnswer) return;

    setSelectedOption(index);
    setShowAnswer(true);

    if (index === filteredQuestions[currentIndex].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    setSelectedOption(null);
    setShowAnswer(false);
    setCurrentIndex((prev) => prev + 1);
  }

  function handleRestart() {
    setFilteredQuestions(generateQuestions());
    setCurrentIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
  }

  function handleNextDifficulty() {
    if (difficulty === "facil") {
      router.push(`/play/${subject}/medio`);
    } else if (difficulty === "medio") {
      router.push(`/play/${subject}/dificil`);
    }
  }

  if (!filteredQuestions.length) {
    return <p className="text-center mt-10">Carregando...</p>;
  }

  if (currentIndex >= totalQuestions) {
    const percentage = (score / totalQuestions) * 100;
    const passed = percentage >= 70;

    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="bg-branco p-8 rounded-xl shadow-lg w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Fim do jogo</h1>

          <p className="text-lg mb-2">
            Pontuação: {score} / {totalQuestions}
          </p>

          <p className="mb-6 font-semibold">
            Aproveitamento: {percentage.toFixed(0)}%
          </p>

          {!passed && (
            <p className="text-vermelho mb-4 font-medium">
              Você precisa de pelo menos 70% para avançar.
            </p>
          )}

          <div className="flex flex-col gap-4">
            <button
              onClick={handleRestart}
              className="bg-azul text-branco py-3 rounded-lg hover:cursor-pointer hover:scale-105"
            >
              Jogar novamente
            </button>

            {passed && difficulty !== "dificil" && (
              <button
                onClick={handleNextDifficulty}
                className="bg-roxo text-branco py-3 rounded-lg hover:cursor-pointer hover:scale-105"
              >
                Próxima dificuldade
              </button>
            )}
          </div>
        </div>
      </main>
    );
  }

  const currentQuestion = filteredQuestions[currentIndex];

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-branco p-6 rounded-xl shadow-lg w-full max-w-xl">
        
        {/* Barra de progresso */}
        <div className="w-full bg-branco/90 h-3 rounded-full mb-6 overflow-hidden">
          <div
            className="bg-azul h-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <h2 className="text-lg font-bold mb-4">
          Pergunta {currentIndex + 1} de {totalQuestions}
        </h2>

        <p className="mb-6">{currentQuestion.statement}</p>

        <div className="flex flex-col gap-3">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`p-3 rounded-lg border hover:cursor-pointer hover:scale-105 ${
                showAnswer
                  ? index === currentQuestion.correctAnswer
                    ? "bg-verde text-branco"
                    : index === selectedOption
                    ? "bg-vermelho text-branco"
                    : "bg-branco/80"
                  : "bg-branco/80 hover:bg-branco/90"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        {showAnswer && (
          <button
            onClick={handleNext}
            className="mt-6 w-full bg-azul text-branco py-3 rounded-lg hover:cursor-pointer hover:scale-105"
          >
            Próxima questão
          </button>
        )}
      </div>
    </main>
  );
}
