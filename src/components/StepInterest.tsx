import OptionButton from "./OptionButton";

const categories = [
  "의류",
  "가방",
  "신발",
  "악세사리(주얼리,모자,선글라스)",
  "시계"
];

export default function StepInterest({
  onSelect,
}: {
  onSelect: (v: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">관심 분야를 선택해주세요</h2>

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
