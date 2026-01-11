import OptionButton from "./OptionButton";

const categories = [
  "글로벌 패션",
  "VIP 서비스",
  "리빙",
  "패션잡화 · ACC",
  "기타 · 편의시설",
  "워치",
  "남성 럭셔리패션",
];

type StepInterestProps = {
  onSelect: (value: string) => void;
};

export default function StepInterest({ onSelect }: StepInterestProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-center">
        관심 있는 영역을 선택해주세요
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {categories.map(cat => (
          <OptionButton
            key={cat}
            label={cat}
            onClick={() => onSelect(cat)}
          />
        ))}
      </div>
    </div>
  );
}
