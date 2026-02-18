import { NextResponse } from "next/server";
import { questions } from "@/data/questions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const subject = searchParams.get("subject");
  const difficulty = searchParams.get("difficulty");

  if (!subject || !questions[subject]) {
    return NextResponse.json({ error: "Matéria inválida" }, { status: 400 });
  }

  let filtered = questions[subject];

  if (difficulty) {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }

  return NextResponse.json(filtered);
}
