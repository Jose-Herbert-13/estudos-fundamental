import { NextResponse } from "next/server";
import { questions } from "@/data/questions";

type Subject = keyof typeof questions;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const subject = searchParams.get("subject") as Subject | null;
  const difficulty = searchParams.get("difficulty");

  if (!subject || !(subject in questions)) {
    return NextResponse.json(
      { error: "Matéria inválida" },
      { status: 400 }
    );
  }

  if (!difficulty) {
    return NextResponse.json(
      { error: "Dificuldade obrigatória" },
      { status: 400 }
    );
  }

  const subjectData = questions[subject];

  const allQuestions = Object.values(subjectData)
    .flat()
    .filter((q) => q.difficulty === difficulty);

  return NextResponse.json(allQuestions);
}
