"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Question = {
  id: number;
  subject: "portugues" | "matematica";
  statement: string;
  options: string[];
  correctAnswer: number;
};

export default function PlayPage() {
  const params = useParams();
  const subject = params.subject as string;

  // 🔍 TOPO DO COMPONENTE (AQUI)
  console.log("PARAMS:", params);
  console.log("SUBJECT:", subject);

  const [question, setQuestion] = useState<Question | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!subject) return;

    async function fetchQuestion() {
      try {
        const res = await fetch(
          `/api/questions?subject=${subject}`
        );

        if (!res.ok) {
          throw new Error("Erro na API");
        }

        const data: Question = await res.json();
        setQuestion(data);
      } catch {
        setError("Erro ao carregar a pergunta.");
      }
    }

    fetchQuestion();
  }, [subject]);

  if (error) return <p>{error}</p>;
  if (!question) return <p>Carregando...</p>;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8">     
            <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
                {question.statement}
            </h1>
            <div className="flex flex-col gap-4">
                {question.options.map((option, index) => (
                    <button
                    key={index}
                    className="w-full border-2 border-branco/80 rounded-xl p-4 text-lg text-center hover:border-azul hover:bg-azul/30 transition active:scale-95"
                    >
                    {option}
                    </button>
                ))}
            </div>
        </div>
    </main>
  );
}
