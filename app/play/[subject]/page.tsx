"use client";

import { useParams, useRouter } from "next/navigation";

export default function SelectDifficultyPage() {
  const params = useParams();
  const router = useRouter();

  const subject = params.subject as string;

  function handleSelect(difficulty: string) {
    router.push(`/play/${subject}/${difficulty}`);
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-branco p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">
          Escolha a dificuldade
        </h1>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSelect("facil")}
            className="bg-verde text-branco py-3 rounded-lg hover:cursor-pointer hover:scale-105"
          >
            Fácil
          </button>

          <button
            onClick={() => handleSelect("medio")}
            className="bg-amarelo text-branco py-3 rounded-lg hover:cursor-pointer hover:scale-105"
          >
            Médio
          </button>

          <button
            onClick={() => handleSelect("dificil")}
            className="bg-vermelho text-branco py-3 rounded-lg hover:cursor-pointer hover:scale-105"
          >
            Difícil
          </button>
        </div>
      </div>
    </main>
  );
}
