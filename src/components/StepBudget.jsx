import OptionButton from "./OptionButton";

const budgets = [
  "High",
  "Middle",
  "Low"
];

export default function StepBudget({ onSelect }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        예산을 선택해주세요
      </h2>

      {budgets.map(b => (
        <OptionButton
          key={b}
          label={b}
          onClick={() => onSelect(b)}
        />
      ))}
    </div>
  );
}
