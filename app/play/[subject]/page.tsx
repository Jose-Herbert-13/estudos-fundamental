"use client";

import { useParams, useRouter } from "next/navigation";
import { questions } from "@/data/questions";

export default function SelectTopicPage() {
  const params = useParams();
  const router = useRouter();

  const subject = params.subject as keyof typeof questions;
  const subjectData = questions[subject];

  if (!subjectData) {
    return <p className="text-center mt-10">Matéria não encontrada.</p>;
  }

  const topics = Object.keys(subjectData);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="bg-branco p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-6">Escolha o Assunto</h1>

        <div className="flex flex-col gap-4">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => router.push(`/play/${subject}/${topic}`)}
              className="bg-azul text-branco py-3 rounded-lg hover:cursor-pointer hover:scale-105"
            >
              {topic.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

