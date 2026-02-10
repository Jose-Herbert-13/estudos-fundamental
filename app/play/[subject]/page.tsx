"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams } from "next/navigation";
import { QuestionCard } from "@/components/QuestionCard";

type Question = {
  id: number;
  subject: "portugues" | "matematica";
  statement: string;
  options: string[];
  correctAnswer: number;
};

const TOTAL_QUESTIONS = 10;

export default function PlayPage() {
  const params = useParams();
  const subject = params.subject as string;

  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [usedIds, setUsedIds] = useState<number[]>([]); // Guarda as perguntas já feitas
  const [finished, setFinished] = useState(false);

  // Estados de pontuação e progresso
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // Função para buscar a questão na sua API
  const fetchQuestion = useCallback(async (exclude: number[] = []) => {
    try {
      // Passamos o subject e os IDs que queremos excluir
      const res = await fetch(`/api/questions?subject=${subject}&exclude=${exclude.join(",")}`);
      
      if (!res.ok) {
        setFinished(true); // Se não houver mais questões, finaliza
        return;
      }

      const data: Question = await res.json();
      setQuestion(data);
      setSelectedOption(null);
      setShowAnswer(false);
    } catch (error) {
      console.error("Erro ao carregar questão:", error);
    }
  }, [subject]);

  // 🔥 SOLUÇÃO DO B.O.: Dispara a primeira questão assim que a página carrega
  useEffect(() => {
    if (subject) {
      fetchQuestion([]); 
    }
  }, [subject, fetchQuestion]);

  function handleSelectOption(index: number) {
    if (showAnswer || !question) return;

    setSelectedOption(index);
    setShowAnswer(true);

    if (index === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (currentQuestion >= TOTAL_QUESTIONS) {
      setFinished(true);
      return;
    }

    // Adiciona o ID da questão atual na lista de excluídas para a próxima chamada
    const nextUsedIds = [...usedIds, question!.id];
    setUsedIds(nextUsedIds);
    
    setCurrentQuestion((prev) => prev + 1);
    fetchQuestion(nextUsedIds);
  }

  // Enquanto a API não responde a primeira vez, ele mostra isso:
  if (!question && !finished) return (
    <main className="min-h-screen flex items-center justify-center bg-branco">
      <p className="text-azul font-bold animate-bounce">Carregando questões...</p>
    </main>
  );

  return (
    <main className="min-h-screen flex items-center justify-center bg-branco/80 px-4">
      <div className="w-full max-w-xl bg-branco rounded-2xl shadow-lg p-6 sm:p-8">
        {finished ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-preto">Fim do jogo 🎉</h1>
            <p className="text-lg mb-6 text-preto/70">Você acertou {score} de {TOTAL_QUESTIONS}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-azul text-branco p-4 rounded-xl w-full font-bold hover:opacity-90 transition"
            >
              Jogar novamente
            </button>
          </div>
        ) : (
          <>
            <div className="text-sm text-center mb-4 text-preto/50">
              Pergunta {currentQuestion} de {TOTAL_QUESTIONS} • Pontos: {score}
            </div>

            <QuestionCard
              question={question!}
              selectedOption={selectedOption}
              showAnswer={showAnswer}
              onSelect={handleSelectOption}
            />

            {showAnswer && (
              <button
                onClick={handleNext}
                className="mt-6 w-full bg-azul text-branco p-4 rounded-xl font-bold hover:opacity-90 transition"
              >
                Próxima pergunta
              </button>
            )}
          </>
        )}
      </div>
    </main>
  );
}