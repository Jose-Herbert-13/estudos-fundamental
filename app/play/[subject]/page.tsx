"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { Question } from "@/types/question";
import QuestionCard from "@/components/QuestionCard";

export default function PlayPage() {
  const params = useParams();
  const subject = params.subject as "portugues" | "matematica";

  const [question, setQuestion] = useState<Question | null>(null);
  const [error, setError] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  function handleSelectOption(index: number) {
    if (showAnswer) return;
    setSelectedOption(index);
    setShowAnswer(true);
  }

  function handleNextQuestion() {
    setSelectedOption(null);
    setShowAnswer(false);
    setQuestion(null);
  }

  useEffect(() => {
    if (!subject) return;

    async function fetchQuestion() {
      try {
        const res = await fetch(`/api/questions?subject=${subject}`);
        if (!res.ok) throw new Error();
        const data: Question = await res.json();
        setQuestion(data);
      } catch {
        setError("Erro ao carregar a pergunta.");
      }
    }

    fetchQuestion();
  }, [subject, question === null]);

  if (error) return <p className="text-center">{error}</p>;
  if (!question) return <p className="text-center">Carregando...</p>;

  return (
    <main className="min-h-screen flex items-center justify-center bg-branco/80 px-4">
      <div className="w-full max-w-xl bg-branco rounded-2xl shadow-lg p-6 sm:p-8">
        <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
          {question.statement}
        </h1>

        <QuestionCard
          question={question}
          onSelect={handleSelectOption}
          selectedOption={selectedOption}
          showAnswer={showAnswer}
        />

        {showAnswer && (
          <button
            onClick={handleNextQuestion}
            className="mt-6 w-full bg-azul text-branco p-4 rounded-xl text-lg hover:bg-azul/80 transition"
          >
            Próxima pergunta
          </button>
        )}
      </div>
    </main>
  );
}
