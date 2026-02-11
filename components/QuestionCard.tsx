import type { Question } from "@/types/question";

type Props = {
  question: Question;
  onSelect: (index: number) => void;
  selectedOption: number | null;
  showAnswer: boolean;
};

export default function QuestionCard({
  question,
  onSelect,
  selectedOption,
  showAnswer,
}: Props) {
  return (
    <div className="flex flex-col gap-4">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          disabled={showAnswer}
          className={`w-full p-4 text-lg rounded-xl border-2 transition ${
            showAnswer
              ? index === question.correctAnswer
                ? "border-verde bg-verde/40"
                : index === selectedOption
                ? "border-vermelho bg-vermelho/40"
                : "border-branco/80"
              : "border-branco/80 hover:border-azul hover:bg-azul/10"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
