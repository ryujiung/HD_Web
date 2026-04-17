import OptionButton from "./OptionButton";

const budgets = [
  "MID-LOW(~ 50만원)",
  "MID(50만원 ~ 150만원)",
  "MID-HIGH(150만원 ~ 300만원)",
  "HIGH(300만원 이상)",
  "잘 모르겠어요",
];

export default function StepBudget({
  onSelect,
}: {
  onSelect: (v: string | undefined) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">주로 어떤 가격대의 브랜드를 선호하세요?</h2>

      <div className="grid grid-cols-2 gap-4">
        {budgets.map(budget => (
          <OptionButton
            key={budget}
            label={budget}
            onClick={() =>
              onSelect(budget === "잘 모르겠어요" ? undefined : budget)
            }
          />
        ))}
      </div>
    </div>
  );
}
