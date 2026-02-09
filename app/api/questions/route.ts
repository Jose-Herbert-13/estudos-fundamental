import { NextResponse } from "next/server";

type Question = {
  id: number;
  subject: "portugues" | "matematica";
  statement: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    id: 1,
    subject: "portugues",
    statement: "Qual palavra está escrita corretamente?",
    options: ["Caza", "Casa", "Kasa", "Cassa"],
    correctAnswer: 1,
  },
  {
    id: 2,
    subject: "matematica",
    statement: "Quanto é 7 × 6?",
    options: ["36", "42", "48", "56"],
    correctAnswer: 1,
  },
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const subject = url.searchParams.get("subject");

  // 1. Validação
  if (!subject) {
    return NextResponse.json(
      { error: "Matéria não informada" },
      { status: 400 }
    );
  }

  // 2. Filtrar perguntas
  const filtered = questions.filter(
    (q) => q.subject === subject
  );

  // 3. Nenhuma encontrada
  if (filtered.length === 0) {
    return NextResponse.json(
      { error: "Nenhuma pergunta encontrada" },
      { status: 404 }
    );
  }

  // 4. Retornar uma pergunta aleatória
  const randomQuestion =
    filtered[Math.floor(Math.random() * filtered.length)];

  return NextResponse.json(randomQuestion);
}
