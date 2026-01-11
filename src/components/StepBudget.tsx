import OptionButton from "./OptionButton";

const budgets = ["High", "Middle", "Low"];

type StepBudgetProps = {
  onSelect: (value: string) => void;
};

export default function StepBudget({ onSelect }: StepBudgetProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center">
        예산을 선택해주세요
      </h2>

      {budgets.map(budget => (
        <OptionButton
          key={budget}
          label={budget}
          onClick={() => onSelect(budget)}
        />
      ))}
    </div>
  );
}
