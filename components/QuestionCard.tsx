type Question = {
  id: number;
  subject: "portugues" | "matematica";
  statement: string;
  options: string[];
  correctAnswer: number;
};

type Props = {
  question: Question;
  selectedOption: number | null;
  showAnswer: boolean;
  onSelect: (index: number) => void;
};

export function QuestionCard({
  question,
  selectedOption,
  showAnswer,
  onSelect,
}: Props) {
  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold text-center mb-6">
        {question.statement}
      </h1>

      <div className="flex flex-col gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`
              w-full p-4 text-lg rounded-xl border-2 transition
              ${
                showAnswer
                  ? index === question.correctAnswer
                    ? "border-verde bg-verde/40"
                    : index === selectedOption
                    ? "border-vermelho bg-vermelho/40"
                    : "border-branco/80"
                  : "border-branco/80 hover:border-azul hover:bg-azul/10"
              }
            `}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
}
