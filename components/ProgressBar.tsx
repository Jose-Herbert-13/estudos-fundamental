type Props = {
  current: number;
  total: number;
};

export default function ProgressBar({ current, total }: Props) {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full bg-branco/75 rounded-full h-3 mb-6">
      <div
        className="bg-azul h-3 rounded-full transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
