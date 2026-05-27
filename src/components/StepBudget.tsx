import OptionButton from "./OptionButton";

const budgets = [
  {
    label: "MID-LOW(~ 50만원)",
    value: "MID-LOW",
  },
  {
    label: "MID(50만원 ~ 150만원)",
    value: "MID",
  },
  {
    label: "MID-HIGH(150만원 ~ 300만원)",
    value: "MID-HIGH",
  },
  {
    label: "HIGH(300만원 이상)",
    value: "HIGH",
  },
  {
    label: "잘 모르겠어요",
    value: undefined,
  },
];

export default function StepBudget({
  onSelect,
}: {
  onSelect: (v: string | undefined) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">
        주로 어떤 가격대의 브랜드를 선호하세요?
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {budgets.map(({ label, value }) => (
          <OptionButton
            key={label}
            label={label}
            onClick={() => onSelect(value)}
          />
        ))}
      </div>
    </div>
  );
}