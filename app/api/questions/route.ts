import { NextResponse } from "next/server";

type Question = {
  id: number;
  subject: "portugues" | "matematica";
  statement: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  // ===== PORTUGUÊS =====
  {
    id: 1,
    subject: "portugues",
    statement: "Qual palavra está escrita corretamente?",
    options: ["Caza", "Casa", "Kasa", "Cassa"],
    correctAnswer: 1,
  },
  {
    id: 2,
    subject: "portugues",
    statement: "Qual é o plural de 'pão'?",
    options: ["Pãos", "Pães", "Pãoes", "Pãoses"],
    correctAnswer: 1,
  },
  {
    id: 3,
    subject: "portugues",
    statement: "Qual é um substantivo?",
    options: ["Correr", "Bonito", "Casa", "Rápido"],
    correctAnswer: 2,
  },
  {
    id: 4,
    subject: "portugues",
    statement: "Qual palavra indica uma ação?",
    options: ["Mesa", "Livro", "Correr", "Azul"],
    correctAnswer: 2,
  },
  {
    id: 5,
    subject: "portugues",
    statement: "Qual frase termina corretamente?",
    options: [
      "Eu gosto de brincar",
      "Eu gosto de brincar.",
      "Eu gosto de brincar,",
      "Eu gosto de brincar!",
    ],
    correctAnswer: 1,
  },
  {
    id: 6,
    subject: "portugues",
    statement: "Qual é um adjetivo?",
    options: ["Casa", "Bonito", "Correr", "Mesa"],
    correctAnswer: 1,
  },
  {
    id: 7,
    subject: "portugues",
    statement: "Qual palavra está no diminutivo?",
    options: ["Casa", "Casinha", "Casarão", "Casão"],
    correctAnswer: 1,
  },
  {
    id: 8,
    subject: "portugues",
    statement: "Qual é um verbo?",
    options: ["Bonito", "Mesa", "Cantar", "Azul"],
    correctAnswer: 2,
  },
  {
    id: 9,
    subject: "portugues",
    statement: "Qual frase está correta?",
    options: [
      "Nós vai ao parque",
      "Nós vamos ao parque",
      "Nós vou ao parque",
      "Nós indo ao parque",
    ],
    correctAnswer: 1,
  },
  {
    id: 10,
    subject: "portugues",
    statement: "Qual palavra é sinônimo de 'feliz'?",
    options: ["Triste", "Contente", "Bravo", "Cansado"],
    correctAnswer: 1,
  },

  // ===== MATEMÁTICA =====
  {
    id: 11,
    subject: "matematica",
    statement: "Quanto é 7 × 6?",
    options: ["36", "42", "48", "56"],
    correctAnswer: 1,
  },
  {
    id: 12,
    subject: "matematica",
    statement: "Quanto é 25 + 13?",
    options: ["28", "38", "48", "35"],
    correctAnswer: 1,
  },
  {
    id: 13,
    subject: "matematica",
    statement: "Quanto é 50 − 18?",
    options: ["32", "28", "38", "30"],
    correctAnswer: 0,
  },
  {
    id: 14,
    subject: "matematica",
    statement: "Quanto é 9 × 5?",
    options: ["35", "40", "45", "50"],
    correctAnswer: 2,
  },
  {
    id: 15,
    subject: "matematica",
    statement: "Quanto é 72 ÷ 8?",
    options: ["7", "8", "9", "6"],
    correctAnswer: 2,
  },
  {
    id: 16,
    subject: "matematica",
    statement: "Qual número é par?",
    options: ["7", "9", "11", "12"],
    correctAnswer: 3,
  },
  {
    id: 17,
    subject: "matematica",
    statement: "Qual é o dobro de 6?",
    options: ["10", "12", "14", "16"],
    correctAnswer: 1,
  },
  {
    id: 18,
    subject: "matematica",
    statement: "Quanto é 100 − 45?",
    options: ["65", "55", "45", "50"],
    correctAnswer: 1,
  },
  {
    id: 19,
    subject: "matematica",
    statement: "Quanto é 4 × 8?",
    options: ["24", "28", "32", "36"],
    correctAnswer: 2,
  },
  {
    id: 20,
    subject: "matematica",
    statement: "Qual número é maior?",
    options: ["34", "43", "39", "29"],
    correctAnswer: 1,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const subject = searchParams.get("subject");

  if (!subject) {
    return NextResponse.json(
      { error: "Matéria não informada" },
      { status: 400 }
    );
  }

  const filtered = questions.filter(
    (q) => q.subject === subject
  );

  if (filtered.length === 0) {
    return NextResponse.json(
      { error: "Nenhuma pergunta encontrada" },
      { status: 404 }
    );
  }

  const random =
    filtered[Math.floor(Math.random() * filtered.length)];

  return NextResponse.json(random);
}
